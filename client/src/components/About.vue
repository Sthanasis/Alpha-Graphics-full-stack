<template>
  <div style="height: 100vh">
    <div>
      <div>
        <button class="center btn btn-warning" @click="downloadCV">download cv</button>
        <button v-if="isAdmin" class="center btn btn-success" @click="uploadNewCv">upload cv</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiCalls from "../apiCalls";
export default {
  data() {
    return {};
  },
  props: {
    isAdmin: Boolean,
  },
  methods: {
    downloadCV() {
      apiCalls
        .getCV()
        .then((response) => {
          console.log(response);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Alpha-Graphics-CV.pdf");
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>