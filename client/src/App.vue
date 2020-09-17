<template>
  <div id="app">
    <navBar :isAdmin="isAdmin" @adminLogout="adminLogout"></navBar>
    <router-view
      :isAdmin="isAdmin"
      :design="design"
      @graphicDesign="graphicDesign"
      @conceptArt="conceptArt"
    ></router-view>
  </div>
</template>

<script>
import navBar from "./components/Navigation.vue";

export default {
  name: "App",
  data() {
    return {
      isAdmin: false,
      design: true,
    };
  },
  methods: {
    adminLogout() {
      this.isAdmin = false;
      this.$router.push("/");
    },
    graphicDesign() {
      this.design = true;
    },
    conceptArt() {
      this.design = false;
    },
  },
  watch: {
    $route(to, from) {
      if (
        from.fullPath === "/login" &&
        to.fullPath === "/" &&
        localStorage.getItem("token")
      )
        this.isAdmin = true;
    },
  },
  components: {
    navBar,
  },
};
</script>

<style>
@import "../public/custom/css/icons.css";
@import "../public/custom/css/vars.css";
@import "../public/custom/css/main.css";

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url(./assets/fonts/Gilroy-Light.otf) format("truetype");
}
</style>
