<template>
  <header data-thq="navbar" class="home-navbar">
    <!-- <span class="home-logo1">Plum Juice</span> -->
    <img src="assets/text-plum-light.png" alt="logo" class="text-logo1" />
    <nav data-thq="navbar-nav-links" data-role="Nav" class="home-nav1">
      <router-link to="/" class="nav-link" active-class="nav-link-is-active">Home</router-link>
      <router-link to='/team' class="nav-link unavaible">Team</router-link>
      <router-link to="/blog" class="nav-link" active-class="nav-link-is-active">Blog</router-link>
      <router-link to="/about" class="nav-link" active-class="nav-link-is-active">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.home-navbar {
  width: 100%;
  display: flex;
  max-width: 1440px;

  flex-wrap: wrap;
  position: relative;
  align-items: center;
  padding-top: var(--space-threeunits);
  padding-left: var(--space-fiveunits);
  padding-right: var(--space-fiveunits);
  padding-bottom: var(--space-threeunits);

  justify-content: space-between;
}

.home-header10 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home-nav1 {
  gap: var(--space-twounits);
  flex: 0 0 auto;
  color: #ffffff;
  display: grid;
  grid-auto-flow: column;

}

@media(max-width: 479px) {
  .home-navbar {
    padding: var(--space-unit);
    align-items: center;
    justify-content: center;
  }

  .text-logo1 {
    margin: auto;
    scale: 0.7;
  }

  .home-nav1 {
    scale: 0.7;
  }

}

@media(max-width: 767px) {
  .home-navbar {
    padding-left: var(--space-twounits);
    padding-right: var(--space-twounits);
  }

  .text-logo1 {
    margin: auto;
    scale: 0.7;
  }

  .home-nav1 {
    scale: 0.7;
  }

}

@media(max-width: 991px) {
  .home-navbar {
    padding-left: var(--space-threeunits);
    padding-right: var(--space-threeunits);
  }

}
</style>
