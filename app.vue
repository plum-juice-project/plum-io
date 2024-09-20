<script>
import NavBar from '~/components/Navbar.vue'
import Footer from './components/Footer.vue';
import Divider from './components/Divider.vue';
export default {
  head() {
    return {
      title: 'My Nuxt.js Site',
      meta: [
        { hid: 'description', name: 'description', content: 'My awesome Nuxt.js project' }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
    Divider
  }
}
</script>

<template>
  <div class="home-container1">
    <NavBar />
    <NuxtPage />
    <Divider color="white" />
    <Footer />
  </div>
</template>

<style>
.home-container1 {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #27272D;

  overflow-x: hidden;
}
</style>