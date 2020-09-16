<template>
  <div id="socialContainer">
    <div class="social" data-icon="facebook"></div>
    <a
      class="social"
      data-icon="instagram"
      href="https://www.instagram.com/alphagraphics98/"
    ></a>
    <div class="social" data-icon="linkedin"></div>
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
