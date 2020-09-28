<template>
  <div>
    <div class="landing"></div>
    <div class="container widthFitContent">
      <div style="text-align: start; font-weight: bold; letter-spacing: 1px">
        Contact Me
      </div>
      <div class="contact-phone">
        <div data-icon="phone"></div>
        <div class="fitcenter">+30 6976 732659</div>
      </div>
      <div class="contact-email">
        <div data-icon="email"></div>
        <div class="fitcenter">alexandros.efthymiou7@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$emit("toggleMenuOff");
    this.$emit("setCurrentPage");
    document.getElementById("app").classList.add("bgCover");
    document.getElementById("logoContainer").classList.add("visible");
  },
};
</script>

<style scoped>
.container {
  padding: 1rem 2rem;
  font-size: var(--fontSizeSM);
  border-radius: 0.5em;
  box-shadow: 9px 9px 19px 12px rgba(0, 0, 0, 0.7);
  background-color: var(--DarkColor);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.contact-phone,
.contact-email {
  display: flex;
}

[data-icon="phone"]:before {
  content: "\00A1";
  font-size: 3rem;
}

.fitcenter {
  height: fit-content;
  height: -moz-fit-content;
  margin: auto 1rem auto 2rem;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .container {
    font-size: var(--fontSizeSM);
    padding: 0.5rem 1rem;
  }
}
</style>
