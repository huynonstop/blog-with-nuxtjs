import Vuex from 'vuex'
import Cookie from 'js-cookie'
const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            tokenId: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, tokenId) {
                state.tokenId = tokenId
            },
            clearToken(state) {
                state.tokenId = null
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('/posts.json')
                    .then((data) => {
                        const posts = []
                        for (const key in data) {
                            posts.push({ ...data[key], id: key })
                        }
                        vuexContext.commit('setPosts', posts)
                    })
                    .catch(error => console.log(error))
            },
            setPosts({ commit }, payload) {
                commit('setPosts', payload.posts)
            },
            addPost({ commit, state }, payload) {
                const newPost = {
                    ...payload.data,
                    createdDate: new Date(),
                    updatedDate: new Date()
                }
                return this.$axios
                    .$post(`/posts.json?auth=${state.tokenId}`, newPost)
                    .then(data => {
                        commit('addPost', { ...newPost, id: data.name })
                    })
                    .catch(error => console.log(error));
            },
            editPost({ commit, state }, payload) {
                const editedPost = {
                    ...payload.data,
                    updatedDate: new Date()
                }
                return this.$axios
                    .$put(
                        `/posts/${editedPost.id}.json?auth=${state.tokenId}`, editedPost
                    )
                    .then(res => {
                        commit('editPost', editedPost)
                    })
                    .catch(error => console.log(error));
            },
            authUser({ commit }, payload) {
                let authURL = `https://identitytoolkit.googleapis.com/v1/accounts:${
                    payload.isLogin ? "signInWithPassword" : "signUp"
                    }?key=${process.env.fbAPIKey}`;
                return this.$axios
                    .$post(authURL, {
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                    .then(data => {
                        const expiresIn = new Date().getTime() + +data.expiresIn * 1000
                        localStorage.setItem("tokenId", data.idToken)
                        localStorage.setItem("expiresIn", expiresIn)
                        Cookie.set("tokenId", data.idToken)
                        Cookie.set("expiresIn", expiresIn)
                        commit('setToken', data.idToken)
                        return this.$axios.$post(`${process.env.HOST_URL || "http://localhost:3000"}/api/track-data`,{data: "Authenticated!"})
                    })
                    .catch(error => console.log(error));
            },
            setLogoutTimer({ dispatch }, duration) {
                setTimeout(() => {
                    dispatch('logout')
                }, duration)
            },
            logout({ commit }) {
                commit('clearToken')
                Cookie.remove("tokenId")
                Cookie.remove("expiresIn")
                localStorage.removeItem("tokenId")
                localStorage.removeItem("expiresIn")
            },
            initAuth({ commit, dispatch }, req) {
                let tokenId
                let expiresIn
                if (req) {
                    if (!req.headers.cookie) return
                    const cookies = req.headers.cookie.split(';')
                    const tokenIdCookie = cookies.find(c => c.trim().startsWith("tokenId="))
                    if (!tokenIdCookie) return
                    tokenId = tokenIdCookie.split('=')[1]
                    expiresIn = cookies.find(c => c.trim().startsWith("expiresIn=")).split('=')[1]
                } else {
                    tokenId = localStorage.getItem('tokenId')
                    expiresIn = localStorage.getItem('expiresIn')
                }
                if (tokenId && expiresIn) {
                    if (new Date().getTime() > +expiresIn || !tokenId) {
                        dispatch('logout')
                    }
                    commit('setToken', tokenId)
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuth(state) {
                return state.tokenId != null
            }
        }
    })
}
export default createStore