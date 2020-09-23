<template>
  <div>
    <div class="landing"></div>
    <div class="grid-container">
      <div class="artistPhoto">
        <img src="../assets/photo.svg" alt />
      </div>
      <div class="header alignLeft">
        <div class="widthFitContent">
          <h1 style="font-weight: bold; letter-spacing: 1px;">About Me</h1>
        </div>
      </div>
      <div class="artistName widthFitContent alignLeft">
        <div class="name">
          <span class="firstName">Alexandros</span>
          <span class="lastName">Efthymiou</span>
        </div>
        <div class="description">
          Graphic Designer
          <span>-</span>
          Concept Artist
        </div>
      </div>
      <div class="text alignLeft">
        I am a Graphic Designer and a Concept Artist.
        <br />I am young and passionate about designing, full of
        <br />creativity and will on making the world a better place.
        <br />My Goal is to leave my mark on the Desing field by
        <br />showing my graphic skills with the pencil and the mouse.
      </div>
      <div class="download alignLeft">
        <div class="btn-container widthFitContent">
          <btn class="btn custom-btn" data-icon="download" @click="downloadCV"></btn>
        </div>
        <div
          class="widthFitContent"
          style="display:flex; background-color: var(--LightColor); margin-left: .5em"
        >
          <div class="btn-description">Download Resume</div>
        </div>
      </div>
    </div>

    <input v-if="isAdmin" class type="file" id="cvInput" accept="application/pdf" />
    <button v-if="isAdmin" class="btn btn-success" @click="uploadNewCv">upload cv</button>
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
@font-face {
  font-family: "Gilroy-Bold";
  src: local("GilroyBold"),
    url(../assets/fonts/Gilroy-ExtraBold.otf) format("truetype");
}

.grid-container {
  position: absolute;
  width: 100vw;
  top: 0;
  font-family: "Gilroy-Bold";
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px 1px;
  margin-top: 20vh;
  grid-template-areas:
    "artistPhoto header"
    "artistPhoto description"
    ". text"
    ". download";
}
.artistPhoto {
  grid-area: artistPhoto;
  display: flex;
}

.artistPhoto img {
  width: calc(var(--fontSizeL) * 5);
  margin-left: auto;
}

.header {
  grid-area: header;
  padding: 1em 0;
  letter-spacing: 1px;
}
.header div {
  background-color: var(--RedColor);
  padding: 0.5em 1em;
}

.artistName {
  grid-area: description;
  background-color: var(--LightColor);
  height: fit-content;
  height: -moz-fit-content;
  padding: 0.5em 1em;
}

.firstName {
  margin-right: 0.5em;
}
.firstName,
.lastName {
  font-weight: bold;
  color: var(--DarkColor);
  font-size: calc(var(--fontSizeM));
}

.description {
  color: var(--DarkColor);
  font-family: "Gilroy";
}

.text {
  grid-area: text;
  padding-left: 0.5em;
}
.download {
  grid-area: download;
  padding: 0.5em;
  display: flex;
  height: fit-content;
  height: -moz-fit-content;
}

.btn-container {
  background-color: var(--RedColor);
}

.custom-btn {
  color: var(--DarkColor);
}

.btn-description {
  margin: auto;
  height: fit-content;
  height: -moz-fit-content;
  padding: 0.5em 1em;
  text-transform: uppercase;
  color: var(--DarkColor);
}

.alignLeft {
  text-align: start;
}
</style>