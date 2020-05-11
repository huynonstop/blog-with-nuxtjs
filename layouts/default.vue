<template>
  <div>
    <VueHeader @sidenavToggle="displaySidenav = !displaySidenav"></VueHeader>
    <SideNav :show="displaySidenav" @close="displaySidenav = false"></SideNav>
    <nuxt />
  </div>
</template>
<script>
import VueHeader from '@/components/Navigation/VueHeader'
import SideNav from '@/components/Navigation/SideNav'
export default {
  name: 'Default',
  data() {
    return {
      displaySidenav: false
    }
  },
  components: {
    VueHeader,
    SideNav
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
