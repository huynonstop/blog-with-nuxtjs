<template>
    <div class="admin-post-page">
        <section class="update-post-from">
            <AdminPostForm
                :post="loadedPost"
                @submit="onSubmitted"
            ></AdminPostForm>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";
export default {
    components: {
        AdminPostForm
    },
    middleware: ['checkAuth','auth'],
    asyncData(context) {
        return axios
            .get(
                `${process.env.baseUrl}/posts/${context.params.postId}.json`
            )
            .then(({ data }) => {
                return {
                    loadedPost: { ...data, id: context.params.postId }
                };
            })
            .catch(error => context.error());
    },
    methods: {
        onSubmitted(data) {
            this.$store.dispatch("editPost", { data }).then(() => {
                this.$router.replace("/admin");
            });
        }
    },
    layout: "admin"
};
</script>