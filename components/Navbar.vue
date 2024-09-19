<template>
  <header class="home-header10">
    <header data-thq="thq-navbar" class="home-navbar">
      <span class="home-logo1">Plum Juice</span>
      <div data-thq="thq-navbar-nav" data-role="Nav" class="home-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="home-nav1">
          <router-link to="/" class="nav-link" active-class="nav-link-is-active">Home</router-link>
          <router-link to='/team' class="nav-link unavaible">Team</router-link>
          <router-link to="/blog" class="nav-link" active-class="nav-link-is-active">Blog</router-link>
          <router-link to="/about" class="nav-link" active-class="nav-link-is-active">About</router-link>
        </nav>
      </div>
    </header>
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
  position: relative;
  max-width: 1440px;
  align-items: center;
  padding-top: var(--dl-space-space-threeunits);
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.home-header10 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media(max-width: 479px) {
  .home-navbar {
    padding: var(--dl-space-space-unit);
  }

  .home-mobile-menu {
    padding: 16px;
  }
}

@media(max-width: 767px) {
  .home-navbar {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
}

@media(max-width: 991px) {
  .home-desktop-menu {
    display: none;
  }

  .home-button6 {
    display: flex;
    padding: var(--dl-space-space-unit);
    flex-direction: row;
  }
}

.home-logo1 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
}

.home-button1 {
  color: rgb(255, 255, 255);
}

.home-button2 {
  color: rgb(255, 255, 255);
}

.home-button3 {
  color: rgb(255, 255, 255);
}

.home-button4 {
  color: rgb(255, 255, 255);
}

.home-button5 {
  color: rgb(255, 255, 255);
}

.home-btn-group {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.home-socials1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.home-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}

.home-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 32px;
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.5s;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}

.home-nav2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}

.home-logo2 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
}

.home-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-nav3 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.home-text10 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-text11 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-text12 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-text13 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-text14 {
  margin-bottom: var(--dl-space-space-unit);
}

.home-container3 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}

.home-login {
  margin-right: var(--dl-space-space-twounits);
}

.home-icon-group {
  display: flex;
}

.home-icon14 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon16 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}

.home-icon18 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}


.home-desktop-menu {
  display: flex;
}

.home-nav1 {
  gap: var(--dl-space-space-twounits);
  flex: 0 0 auto;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
}
</style>
