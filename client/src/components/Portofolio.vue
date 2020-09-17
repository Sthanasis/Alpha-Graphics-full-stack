<template>
  <div style="height: 100vh;">
    <div class="projectContainer"></div>
    <div class="projectButtonContainer">
      <button class="btn btn-primary" @click="changeProjectCategory">Graphic Design</button>
      <button class="btn btn-primary" @click="changeProjectCategory">Concept Art</button>
    </div>
    <div class="projectInnerContainer">
      <div class="outerProject" v-for="project in projects" v-bind:key="project._id">
        <div class="project" :id="project._id">
          <img :src="`../img/${project.project}`" alt style="width:15rem" />
          <div class="details">
            <span>{{project.title}}</span>
            <button class="btn btn-primary" @click="getProjectFromDB(project._id)">View Project</button>
            <button
              class="btn btn-danger deleteProject"
              @click="deleteProject(project._id)"
              v-if="isAdmin"
            >Delete Project</button>
          </div>
        </div>
      </div>
    </div>
    <project v-if="id!==''" :id="id" :project="project" @closeProject="closeProject"></project>
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
    this.getProjects();
    document.getElementById("app").classList.add("bgCover");
  },
  methods: {
    changeProjectCategory() {
      this.$emit("changeDesign");
      this.getProjects();
    },
    async getProjects() {
      try {
        const response = await apiCalls.getProjects();
        if (this.design) {
          this.projects = response.data.projects.filter((project) => {
            return project.type === "Graphic Design ";
          });
        } else {
          this.projects = response.data.projects.filter((project) => {
            return project.type === "Concept Art";
          });
        }
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

.deleteProject {
  margin: auto;
  border-radius: 2em;
  margin-bottom: 1em;
}
</style>