<template>
  <nav>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="expanded = !expanded"
    >
      <span data-icon="burger-menu"></span>
    </button>
    <div id="NavPageContainer" :class="{isExpanded: expanded}">
      <router-link
        id="logoContainer"
        class="navDestination"
        data-icon="logo"
        to="/"
        @click="toggleMenuOff"
      ></router-link>
      <router-link class="navDestination" to="/portofolio" @click="toggleMenuOff">Portofolio</router-link>
      <router-link class="navDestination" to="/about" @click="toggleMenuOff">About</router-link>
      <router-link class="navDestination" to="/contact" @click="toggleMenuOff">Contact</router-link>
      <router-link
        class="navDestination"
        v-if="isAdmin"
        to="/addProject"
        @click="toggleMenuOff"
      >Add Project</router-link>
    </div>

    <social></social>
    <div class="btn btn-danger" v-if="isAdmin" @click="logMeOut" style="margin: auto 0;">Logout</div>
  </nav>
</template>

<script>
import social from "./Social.vue";
import apiCalls from "../apiCalls.js";

export default {
  data() {
    return {
      expanded: false,
    };
  },
  props: { isAdmin: Boolean },
  methods: {
    logMeOut() {
      apiCalls.logout().then((res) => {
        if (res.data.status === "success") {
          this.$emit("adminLogout");
        }
      });
    },
    toggleMenuOff() {
      this.expanded = false;
    },
  },
  name: "Navigation",
  components: {
    social,
  },
};
</script>

<style scoped>
.navbar-toggler {
  display: none;
}

nav {
  display: flex;
  justify-content: space-around;
  height: 10vh;
  position: fixed;
  width: 100vw;
  z-index: 1;
}

nav .navDestination {
  height: fit-content;
  height: -moz-fit-content;
  margin: auto 1em;
}

#NavPageContainer {
  display: flex;
}

#logoContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  opacity: 0;
}

.navDestination {
  cursor: pointer;
  font-weight: bold;
}

.navDestination:hover {
  color: var(--LightColor);
  text-decoration: none;
}

.transparent {
  background-color: transparent;
  transition: 0.5s;
}

.colored {
  background-color: var(--DarkColor);
  transition: 0.5s;
}

@media screen and (max-width: 992px) {
  .navbar-toggler {
    display: block;
  }

  #NavPageContainer {
    display: none;
    flex-direction: column;
    height: 90vh;
    background-color: var(--DarkColor);
    width: 100vw;
    position: absolute;
    top: 10vh;
  }

  .isExpanded {
    display: flex !important;
  }
}
</style>
