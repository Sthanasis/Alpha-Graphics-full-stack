<template>
  <div style="height: 100vh">
    <div>
      <div>
        <button class="center btn btn-warning" @click="downloadCV" style="top: 70%">download cv</button>
        <input
          v-if="isAdmin"
          class="center"
          type="file"
          id="cvInput"
          accept="application/pdf"
          style="top: 40%"
        />
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
  mounted() {
    document.getElementById("app").classList.add("bgCover");
    document.getElementById("logoContainer").classList.add("visible");
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
    uploadNewCv() {
      const data = new FormData();
      data.append("cv", document.getElementById("cvInput").files[0]);
      apiCalls.postCV(data).then((res) => {
        console.log(res.status);
      });
    },
  },
};
</script>

<style scoped>
</style>