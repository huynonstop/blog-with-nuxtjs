<template>
    <div class="posts-page">
        <section class="posts">
            <Posts :posts="loadedPosts"></Posts>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
    // fetch(context) {
    //     return new 
    //         Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resolve({
    //                     loadedPosts: [
    //                         {
    //                             id: "1",
    //                             title: "1 Post",
    //                             previewText: "1 preview text",
    //                             thumbnail:
    //                                 "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                         },
    //                         {
    //                             id: "2",
    //                             title: "2 Post",
    //                             previewText: "2 preview text",
    //                             thumbnail:
    //                                 "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                         },
    //                         {
    //                             id: "3",
    //                             title: "3 Post",
    //                             previewText: "3 preview text",
    //                             thumbnail:
    //                                 "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                         }
    //                     ]
    //                 });
    //             }, 1000);
    //             // reject(new Error())
    //         })
    //         .then(data => {
    //             context.store.dispatch('setPosts', {posts: data.loadedPosts})
    //         })
    //         .catch(error => context.error(error));
    // },
};
</script>


<style scoped>
</style>