 <template>
  <header>
    <nav class="navigation">
      <div class="navigation__logo">
        <!-- //********************************************************************************//
				///////////////////////////******* CHANGE LOGO ********////////////////////////
				//********************************************************************************// !-->
        <img src="../assets/logo-navs.png" alt="" />
      </div>
      <div class="navigation__links">
        <ul v-show="!mobile">
          <!-- //********************************************************************************//
				///////////////////////////******* ADD DESKTOP LINKS ********////////////////////////
				//********************************************************************************// !-->
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }">About</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Home' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>

      <div
        class="navigation__hamburger"
        @click="toggleMobileNav"
        v-show="mobile"
      >
        <!-- //********************************************************************************//
				///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
				//********************************************************************************// !-->
        <svg class="line" width="75" height="75" viewBox="0 0 100 100">
          <path
            class="line line1"
            :class="{ active: mobileNav }"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            class="line line2"
            :class="{ active: mobileNav }"
            d="M 20,50 H 80"
          />
          <path
            class="line line3"
            :class="{ active: mobileNav }"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
    </nav>
    <div>
      <ul
        class="mobile__links"
        :class="{ active: mobileNav }"
        v-show="mobileNav"
      >
        <!-- //********************************************************************************//
				///////////////////////////******* ADD MOBILE LINKS ********////////////////////////
				//********************************************************************************// !-->
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template> 

export default {
  name: 'Navigation5',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize)
    this.checkScreenSize()
  },toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreenSize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 800) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },
  },
}
