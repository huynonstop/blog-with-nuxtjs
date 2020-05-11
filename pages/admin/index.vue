<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')"
                >Create post</AppButton
            >
            <AppButton @click="onLogout">Logout</AppButton>
        </section>
        <section class="existing-posts">
            <h1>Existing posts</h1>
            <Posts :isAdmin="true" :posts="loadedPosts"></Posts>
        </section>
    </div>
</template>

<script>
export default {
    layout: "admin",
    middleware: ["checkAuth", "auth"],
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch('logout')
            this.$router.replace('/admin/auth')
        }
    }
};
</script>

<style scoped>
.admin-page {
    padding: 20px;
}

.new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.existing-posts h1 {
    text-align: center;
}
</style>
