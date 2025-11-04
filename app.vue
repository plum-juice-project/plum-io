<script>
import NavBar from '~/components/Navbar.vue'
import Footer from './components/Footer.vue';
import Divider from './components/Divider.vue';
export default {
  head() {
    return {
      title: 'Plum Juice',
      meta: [
        { hid: 'description', name: 'Plum Juice', content: "It's not just a raspberry pi cluster" }
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
}

img {
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

a {
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

::selection {
  background: var(--green-selection);
}
</style>
