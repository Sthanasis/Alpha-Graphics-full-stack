<template>
  <div style="height: 100vh">
    <div class="projectContainer"></div>
    <div class="projectButtonContainer">
      <button
        class="btn btn-primary"
        :class="{ selected: design }"
        @click="viewGraphicDesign($event)"
      >
        Graphic Design
      </button>
      <button
        class="btn btn-primary"
        :class="{ selected: !design }"
        @click="viewConceptArt($event)"
      >
        Concept Art
      </button>
    </div>
    <div class="projectInnerContainer">
      <div
        class="outerProject"
        v-for="project in projects"
        v-bind:key="project._id"
      >
        <div class="project widthFitContent" :id="project._id">
          <img :src="`../img/${project.project}`" alt style="width: 20rem" />
          <!-- <img src="../assets/SPIDERMAN.svg" alt="" style="width: 20rem" /> -->
          <div class="details">
            <span>{{ project.title }}</span>
            <button
              class="btn btn-primary"
              @click="getProjectFromDB(project._id)"
            >
              View Project
            </button>
            <button
              class="btn btn-danger deleteProject"
              @click="deleteProject(project._id)"
              v-if="isAdmin"
            >
              Delete Project
            </button>
          </div>
        </div>
      </div>
    </div>
    <project
      v-if="id !== ''"
      :id="id"
      :project="project"
      @closeProject="closeProject"
    ></project>
  </div>
</template>

<script>
import apiCalls from "../apiCalls.js";
import project from "../components/Project.vue";
export default {
  data() {
    return {
      projects: [],
      project: {},
      id: "",
    };
  },
  props: {
    isAdmin: Boolean,
    design: Boolean,
  },
  mounted() {
    if (this.design) {
      this.getGraphicDesign();
    } else {
      this.getConceptArt();
    }
    document.getElementById("app").classList.add("bgCover");
    this.$emit("toggleMenuOff");
    this.$emit("setCurrentPage");
  },
  methods: {
    viewGraphicDesign(event) {
      this.$emit("graphicDesign");
      this.getGraphicDesign();
      document.querySelector(".selected").classList.remove("selected");
      event.target.classList.add("selected");
    },
    viewConceptArt(event) {
      this.$emit("conceptArt");
      this.getConceptArt();
      document.querySelector(".selected").classList.remove("selected");
      event.target.classList.add("selected");
    },
    async getConceptArt() {
      try {
        const response = await apiCalls.getConceptArtProjects();
        this.projects = response.data.data.projects.reverse();
        console.log(response);
      } catch (err) {
        this.error = err.message;
      }
    },
    async getGraphicDesign() {
      try {
        const response = await apiCalls.getGraphicDesignProjects();
        this.projects = response.data.data.projects.reverse();
      } catch (err) {
        this.error = err.message;
      }
    },
    async getProjectFromDB(id) {
      try {
        const response = await apiCalls.getProject(id);
        if (response.data.status === "success") {
          this.id = id;
          this.project = response.data.data.project;
        }
      } catch (err) {
        console.log(err);
      }
    },
    deleteProject(id) {
      apiCalls.deleteProject(id);
      this.$router.push("/");
    },
    closeProject() {
      this.id = "";
    },
  },
  components: {
    project,
  },
  computed: {},
};
</script>

<style scoped>
.projectContainer {
  height: 100vh;
  background-color: var(--DarkColor);
  opacity: 0.5;
}

.outerProject {
  height: 20rem;
  margin: auto;
  width: 20rem;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em 1em;
  top: 30vh;
  height: 70vh;
  width: 99vw;
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
  height: 20rem;
  position: relative;
  top: 0;
  width: 20rem;
  left: -20rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5em;
  opacity: 0;
  transition: 0.2s;
}

.project {
  display: flex;
}

.deleteProject {
  margin: auto;
  border-radius: 2em;
  margin-bottom: 1em;
}

@media (max-width: 1250px) {
  .projectInnerContainer {
    grid-template-columns: 1fr 1fr;
    margin-top: 5vh;
  }
}

@media (max-width: 768px) {
  .projectInnerContainer {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 2vh;
  }
  .outerProject {
    margin: 1em auto;
  }
}

@media (max-width: 400px) {
  .projectButtonContainer button {
    margin: 0 0.5em;
  }
}
</style>