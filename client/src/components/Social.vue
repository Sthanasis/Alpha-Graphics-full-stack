<template>
  <div id="socialContainer">
    <div class="social" data-icon="facebook"></div>
    <a
      class="social"
      data-icon="instagram"
      href="https://www.instagram.com/alphagraphics98/"
    ></a>
    <a
      class="social"
      href="https://www.linkedin.com/in/alexandros-efthymiou-b936651b2/"
      data-icon="linkedin"
    >
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#socialContainer {
  display: flex;
}

.social {
  cursor: pointer;
  margin: auto 1rem;
  text-decoration: none;
}

.social:hover {
  color: var(--LightColor);
}
</style>
