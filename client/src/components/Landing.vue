<template>
  <div class="landing-container">
    <logo></logo>
    <h1>Latest Projects!</h1>
    <div v-if="error === ''" style="padding-bottom: 5vh">
      <div
        class="project"
        v-for="project in projects"
        v-bind:key="project._id"
        :id="`${project._id}`"
        :style="`background-image: url(../img/${project.project});`"
      >
        <div class="viewProject widthFitContent">
          <span>{{ project.title }}</span>
          <button
            class="btn btn-primary"
            @click="getProjectFromDB(project._id)"
          >
            View Project
          </button>
          <button
            v-if="isAdmin"
            class="btn btn-danger"
            @click="deleteProject(project._id)"
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <span>{{ error }}</span>
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
import logo from "./Logo.vue";
import project from "./Project.vue";
import apiCalls from "../apiCalls";

export default {
  data() {
    return {
      projects: [],
      project: {},
      error: "",
      id: "",
    };
  },
  props: { isAdmin: Boolean },
  mounted() {
    this.$emit("toggleMenuOff");
    this.$emit("setCurrentPage");
  },
  async created() {
    this.getData();
    document.getElementById("app").classList.remove("bgCover");
  },
  components: {
    logo,
    project,
  },
  methods: {
    async createProject() {
      await apiCalls.insertProject(this.text);
      this.projects = await apiCalls.getProjects();
    },
    async delete(id) {
      await apiCalls.deleteProject(id);
      this.projects = await apiCalls.getProjects();
    },
    async getData() {
      try {
        const response = await apiCalls.getProjects();
        if (response.results >= 3) {
          this.projects = response.data.projects.slice(-3).reverse();
        } else {
          this.projects = response.data.projects.reverse();
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
      this.getData();
    },
    closeProject() {
      this.id = "";
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: Gilroy-bold;
}

.project {
  background-position-x: 20vw;
  min-height: 60vh;
  margin-top: 9rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 30vw;
  background-position-y: 30vh;
}

.project:nth-of-type(2) {
  background-position-x: 50vw;
}

@media (max-width: 1250px) {
  .project {
    background-position-x: 0 !important;
    background-position-y: 20vh;
    background-size: 100vw;
  }
  .landing-container {
    padding-bottom: 10vh;
  }

  h1 {
    font-size: var(--fontSizeML);
  }
}
</style>
