<template>
  <header data-thq="navbar" class="home-navbar">
    <!-- <span class="home-logo1">Plum Juice</span> -->
    <RouterLink to="/" class="home-logo1">
      <NuxtImg src="/text-plum-light.png" alt="logo" class="text-logo1" />
    </RouterLink>
    <nav data-thq="navbar-nav-links" data-role="Nav" class="home-nav1">
      <div class="nav-links-container">
        <NuxtLink to="/" class="nav-link" active-class="nav-link-is-active"
          >Home</NuxtLink
        >
        <NuxtLink to="/hackathon" class="nav-link" active-class="nav-link-is-active"
          >Hackathon</NuxtLink
        >
        <NuxtLink to="/team" class="nav-link" active-class="nav-link-is-active"
          >Team</NuxtLink
        >
        <NuxtLink to="/competitive-team" class="nav-link" active-class="nav-link-is-active"
          >Competitive Team</NuxtLink
        >
        <NuxtLink to="/blog" class="nav-link" active-class="nav-link-is-active"
          >Blog</NuxtLink
        >
        <NuxtLink to="/contacts" class="nav-link" active-class="nav-link-is-active"
          >Contacts</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.home-navbar {
  width: 100%;
  display: flex;
  max-width: 1440px;
  /* align-items: center;  */
  margin: var(--space-threeunits) 0 0 0;
  justify-content: space-between;
}

.home-logo1 {
  width: 6em;
  height: 6em;
}

.text-logo1 {
  height: 100%;
}

.home-nav1 {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-twounits);
  justify-content: center;
}

@media (max-width: 479px) {
  .home-navbar {
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

@media (max-width: 767px) {
  .home-navbar {
    flex-wrap: wrap;
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

@media (max-width: 991px) {
  .home-navbar {
    padding-left: var(--space-threeunits);
    padding-right: var(--space-threeunits);
  }
}
</style>
