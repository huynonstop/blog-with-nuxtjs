<template>
    <nuxt-link :to="postLink" class="post-preview">
        <article>
            <div
                class="post-thumbnail"
                :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
            ></div>
            <div class="post-content">
                <h1>{{ title }}</h1>
                <p>{{ previewText }}</p>
            </div>
        </article>
    </nuxt-link>
</template>
<script>
export default {
    name: "PostPreview",
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean
        }
    },
    computed: {
        postLink() {
            return (this.isAdmin ? "/admin/" : "/posts/") + this.id;
        }
    }
};
</script>

<style scoped>
.post-preview {
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 2px rgb(0, 0, 0);
    background-color: white;
    width: 90%;
}

a {
    text-decoration: none;
    color: black;
}

@media (min-width: 850px) {
    .post-preview {
        width: 400px;
        margin: 10px;
    }
}

.post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding: 10px;
    text-align: center;
}

a:hover .post-content,
a:active .post-content {
    border-radius: 0 0 10px 10px;
    background-color: #ccc;
}
</style>