<template>
    <div>
        <nuxt />
        <div class="home-icon">
            <nuxt-link to="/"></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin',
}
</script>

<style>
html {
    font-family: "Open Sans", sans-serif;
}
body {
    margin: 0;
}
.home-icon {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
.home-icon a {
    background: url("~assets/images/home-icon.png");
    border: 2px solid black;
    border-radius: 50%;
    display: block;
    background-position: center;
    background-size: 85% 85%;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    box-shadow: 0 12px 28px rgb(134, 133, 133);
}
</style>
