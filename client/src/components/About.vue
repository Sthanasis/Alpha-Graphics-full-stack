<template>
  <div style="height: 100vh">
    <div>
      <div>
        <button v-if="isAdmin" class="center btn btn-success" @click="uploadNewCv">upload cv</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isAdmin: Boolean,
  },
};
</script>

<style scoped>
</style>