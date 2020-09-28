<template>
  <div id="socialContainer">
    <a
      class="social"
      href="https://www.behance.net/alexandefthymi"
      data-icon="behance"
      style="margin: auto 0.5rem"
    >
    </a>
    <a
      class="social"
      data-icon="instagram"
      href="https://www.instagram.com/alphagraphics98/"
    ></a>
    <a
      class="social"
      data-icon="facebook"
      href="https://www.facebook.com/Alpha-Graphics-Alexandros-Efthymiou-100160851856558/"
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
  justify-content: center;
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
