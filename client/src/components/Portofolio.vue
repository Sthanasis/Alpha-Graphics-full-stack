<template>
  <div style="height: 100vh;">
    <div class="projectContainer"></div>
    <div class="projectButtonContainer">
      <button class="btn btn-primary">Graphic Design</button>
      <button class="btn btn-primary">Concept Art</button>
    </div>
    <div class="projectInnerContainer">
      <div class="outerProject" v-for="project in projects" v-bind:key="project._id">
        <div class="project">
          <img :src="`../img/${project.project}`" alt style="width:15rem" />
          <div class="details">
            <span>{{project.title}}</span>
            <button class="btn btn-primary">View Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiCalls from "../apiCalls.js";

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.getProjects();
    document.getElementById("app").classList.add("bgCover");
  },
  methods: {
    async getProjects() {
      try {
        const response = await apiCalls.getProjects();
        this.projects = response.data.projects;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
.projectContainer {
  height: 100vh;
  background-color: var(--DarkColor);
  opacity: 0.5;
}

.outerProject {
  height: 15rem;
  margin: auto;
  width: 15rem;
  overflow: hidden;
  border-radius: 0.5em;
}

.projectButtonContainer {
  position: absolute;
  top: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.projectButtonContainer button {
  margin: auto 1rem;
}

.projectInnerContainer {
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  top: 30vh;
  height: 70vh;
  width: 100vw;
  flex-wrap: wrap;
}

img {
  border-radius: 0.5em;
  box-shadow: 9px 9px 19px 12px rgba(0, 0, 0, 0.7);
}

img:hover {
  cursor: pointer;
}

.details:hover {
  opacity: 1;
  cursor: pointer;
}

.details span {
  margin: auto;
  font-weight: bold;
}

.details {
  display: grid;
  grid-template-rows: 2fr 2fr;
  height: 15rem;
  position: relative;
  top: 0;
  width: 15rem;
  left: -15rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5em;
  opacity: 0;
  transition: 0.2s;
}

.project {
  width: fit-content;
  width: -moz-fit-content;
  display: flex;
}
</style>