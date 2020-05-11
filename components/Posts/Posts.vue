<template>
    <ul class="posts-list">
        <post-preview
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :isAdmin="isAdmin"
            :title="post.title"
            :previewText="post.previewText"
            :thumbnail="post.thumbnail"
        ></post-preview>
    </ul>
</template>


<script>
import PostPreview from "~/components/Posts/PostPreview";

export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        posts: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>

.posts-list {
    position: relative;
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;    
    list-style: none;
    margin: 0;
    width: 100%;
}
</style>