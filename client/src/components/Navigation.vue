<template>
  <nav>
    <div class="toggler" @click="toggle">
      <span style="margin: auto" data-icon="burger-menu"></span>
    </div>
    <div class="pageIndicator">{{ currentPage }}</div>

    <div id="NavPageOuterContainer" :class="{ isExpanded: expanded }">
      <div id="NavPageContainer">
        <router-link
          id="logoContainer"
          class="navDestination"
          data-icon="logo"
          to="/"
        ></router-link>
        <router-link class="navDestination" to="/portofolio"
          >Portofolio</router-link
        >
        <router-link class="navDestination" to="/about">About</router-link>
        <router-link class="navDestination" to="/contact">Contact</router-link>
        <router-link class="navDestination" v-if="isAdmin" to="/addProject"
          >Add Project</router-link
        >
      </div>
      <social></social>
      <div
        class="btn btn-danger"
        v-if="isAdmin"
        @click="logMeOut"
        style="margin: auto 0"
      >
        Logout
      </div>
    </div>
  </nav>
</template>

<script>
import social from "./Social.vue";
import apiCalls from "../apiCalls.js";

export default {
  data() {
    return {};
  },
  props: { isAdmin: Boolean, expanded: Boolean, currentPage: String },
  methods: {
    logMeOut() {
      apiCalls.logout().then((res) => {
        if (res.data.status === "success") {
          this.$emit("adminLogout");
        }
      });
    },
    toggle() {
      this.$emit("toggleMenu");
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

.active {
  color: var(--LightColor);
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

.toggler {
  display: none;
}

#NavPageOuterContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.pageIndicator {
  display: none;
}

@media screen and (max-width: 1250px) {
  .toggler {
    display: flex;
    /* margin-left: 10vw; */
  }
  .pageIndicator {
    display: block;
    text-transform: capitalize;
    font-weight: bold;
    margin: auto 25% auto 0;
    font-family: "Gilroy-Bold";
    font-size: var(--fontSizeML);
  }
  #NavPageOuterContainer {
    display: none;
    height: 90vh;
    background-color: var(--DarkColor);
    top: 10vh;
    position: absolute;
  }
  #NavPageOuterContainer,
  #NavPageContainer {
    flex-direction: column;
    width: 100vw;
  }
  #NavPageContainer {
    display: flex;
    height: 70vh;
  }
  .isExpanded {
    display: flex !important;
  }
}

@media (max-width: 768px) {
}
</style>
