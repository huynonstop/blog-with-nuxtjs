<template>
    <div class="admin-new-post-page">
        <section class="new-post-from">
            <AdminPostForm @submit="onSubmitted"></AdminPostForm>
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
    methods: {
        onSubmitted(data) {
            this.$store.dispatch("addPost", { data }).then(() => {
                this.$router.replace("/admin");
            });
        }
    },
    layout: "admin"
};
</script>
