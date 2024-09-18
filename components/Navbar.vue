<template>
  <header class="home-header10">
    <header data-thq="thq-navbar" class="home-navbar">
      <span class="home-logo1">Plum Juice</span>
      <div data-thq="thq-navbar-nav" data-role="Nav" class="home-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="home-nav1">
          <router-link to="/" class="nav-link" active-class="nav-link-is-active">Home</router-link>
          <router-link class="nav-link unavaible">Team</router-link>
          <router-link to="/blog" class="nav-link" active-class="nav-link-is-active">Blog</router-link>
          <router-link to="/about" class="nav-link" active-class="nav-link-is-active">About</router-link>
        </nav>
      </div>
      <div data-thq="thq-navbar-btn-group" class="home-btn-group">
        <div class="home-socials1">
          <button class="social button">
            <!-- <img alt="image" src="/Icons/twitter.svg" class="home-image10" /> -->
          </button>
          <button class="social button">
            <!-- <img alt="image" src="/Icons/discord.svg" class="home-image11" /> -->
          </button>
        </div>
      </div>
      <div data-thq="thq-burger-menu" class="home-burger-menu">
        <button class="button home-button6">
          <svg viewBox="0 0 1024 1024" class="home-icon10">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z">
            </path>
          </svg>
        </button>
      </div>
      <div data-thq="thq-mobile-menu" class="home-mobile-menu">
        <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="home-nav2">
          <div class="home-container2">
            <span class="home-logo2">Character</span>
            <div data-thq="thq-close-menu" class="home-menu-close">
              <svg viewBox="0 0 1024 1024" class="home-icon12">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                </path>
              </svg>
            </div>
          </div>
          <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" class="home-nav3">
            <span class="home-text10">About</span>
            <span class="home-text11">Features</span>
            <span class="home-text13">Team</span>
            <span class="home-text14">Blog</span>
          </nav>
          <div class="home-container3">
            <button class="home-login button">Login</button>
            <button class="button">Register</button>
          </div>
        </div>
        <div class="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" class="home-icon14">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
            </path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" class="home-icon16">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
            </path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" class="home-icon18">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
            </path>
          </svg>
        </div>
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
