<template>
  <div class="landingLogo">
    <!-- <div data-icon="border" class="border leftBorder"></div> -->
    <!-- <div class="backgroundBox"></div> -->
    <div data-icon="landing" class="center" id="mainLogo">
      <div id="footerLogo">Graphics</div>
    </div>
    <div id="nameLogo" class="artistName center">
      <div class="name">
        <span class="firstName">Alexandros</span>
        <br />
        <span class="lastName">Efthymiou</span>
      </div>
      <div class="description">
        Graphics Designer
        <span>-</span>
        <span>
          Concept Artist
          <span data-icon="phone"></span>
        </span>
      </div>
    </div>
    <!-- <div data-icon="border" class="border rightBorder"></div> -->
  </div>
</template>

<script>
export default {
  methods: {
    fadeIn(el) {
      setTimeout(() => {
        el.classList.add("fade-in");
        document.getElementById("logoContainer").style.opacity = 1;
      }, 2000);
    },
    fadeOut(el) {
      setTimeout(() => {
        el.classList.add("fade-out");
      }, 2000);
    },
  },
  mounted() {
    document.getElementById("mainLogo").classList.add("centerDelayed");
    this.fadeIn(document.getElementById("nameLogo"));
    this.fadeIn(document.getElementById("logoContainer"));
    this.fadeOut(document.getElementById("mainLogo"));
    document.getElementById("logoContainer").style.opacity = 0;
    //document.getElementById("logoContainer").classList.remove("visible");
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Gilroy-Bold";
  src: local("GilroyBold"),
    url(../assets/fonts/Gilroy-ExtraBold.otf) format("truetype");
}

#nameLogo {
  opacity: 0;
}

#mainLogo {
  font-family: "Gilroy";
}

.border {
  height: fit-content;
  height: -moz-fit-content;
  margin-top: 5rem;
  z-index: 2;
  visibility: hidden;
}

.rightBorder {
  padding-left: 10rem;
}

.leftBorder {
  padding-right: 10rem;
}

.name {
  font-size: 7rem;
}

.firstName {
  background-color: var(--RedColor);
  margin-right: 15rem;
}

.lastName {
  background-color: var(--LightColor);
  margin-left: 5rem;
}

.firstName,
.lastName {
  padding: 0 0.2em;
  color: var(--DarkColor);
}

.description {
  color: var(--DarkColor);
  font-size: 1.2rem;
  background-color: var(--MainText);
  width: fit-content;
  width: -moz-fit-content;
  padding: 0.5rem;
  float: right;
}

.artistName {
  letter-spacing: 5px;
}

#footerLogo {
  text-transform: capitalize;
  font-size: 3rem;
  color: var(--LightColor);
  position: absolute;
  letter-spacing: 0.4rem;
  margin-top: -8rem;
  margin-left: 15rem;
}
</style>
