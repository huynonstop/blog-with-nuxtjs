<template>
    <div class="home-page">
        <section class="intro">
            <h1>
                Get the lastest news!
            </h1>
        </section>
        <section class="featured-posts">
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
    // asyncData(context, callback) {
    //     setTimeout(() => {
    //         callback(null, {
    //             loadedPosts: [
    //                 {
    //                     id: "1",
    //                     title: "1 Post",
    //                     previewText: "1 preview text",
    //                     thumbnail:
    //                         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                 },
    //                 {
    //                     id: "2",
    //                     title: "2 Post",
    //                     previewText: "2 preview text",
    //                     thumbnail:
    //                         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                 },
    //                 {
    //                     id: "3",
    //                     title: "3 Post",
    //                     previewText: "3 preview text",
    //                     thumbnail:
    //                         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //                 }
    //             ]
    //         });
    //     }, 1000);
    // }
    // data() {
    //     return {
    //         loadedPosts: [
    //             {
    //                 id: "1",
    //                 title: "1 Post",
    //                 previewText: "1 preview text",
    //                 thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //             },
    //             {
    //                 id: "2",
    //                 title: "2 Post",
    //                 previewText: "2 preview text",
    //                 thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //             },
    //             {
    //                 id: "3",
    //                 title: "3 Post",
    //                 previewText: "3 preview text",
    //                 thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    //             }
    //         ]
    //     };
    // }
};
</script>

<style scoped>
.intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        url("~assets/images/main-page-background.jpg");
}

.intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
}

@media (min-width: 768px) {
    .intro h1 {
        font-size: 2rem;
    }
}

.featured-posts {
    position: relative;
    z-index: 100;
    top: -40px;
    background: white;
    border-radius: 15px 15px 0 0;
}
</style>
