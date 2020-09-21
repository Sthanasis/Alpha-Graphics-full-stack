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
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="NavPageContainer">
      <router-link id="logoContainer" class="navDestination" data-icon="logo" to="/"></router-link>
      <router-link class="navDestination" to="/portofolio">Portofolio</router-link>
      <router-link class="navDestination" to="/about">About</router-link>
      <router-link class="navDestination" to="/contact">Contact</router-link>
      <router-link class="navDestination" v-if="isAdmin" to="/addProject">Add Project</router-link>
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
    return {};
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
  height: 5rem;
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
  }
}
</style>
