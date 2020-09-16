<template>
  <div>
    <logo></logo>
    <h1>Latest Projects!</h1>
    <div v-if="error === ''">
      <div
        class="project"
        v-for="project in projects"
        v-bind:key="project._id"
        :style="`background-image: url(../img/${project.project};`"
      >
        <div class="viewProject">
          <span>{{ project.title }}</span>
          <button class="btn btn-primary">View Project</button>
        </div>
      </div>
    </div>
    <div v-else>
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
import logo from "./Logo.vue";
import ApiCalls from "../apiCalls";

export default {
  data() {
    return {
      projects: [],
      error: "",
    };
  },
  props: { isAdmin: Boolean },
  mounted() {},
  async created() {
    this.getData();
    document.getElementById("app").classList.remove("bgCover");
  },
  components: {
    logo,
  },
  methods: {
    async createProject() {
      await ApiCalls.insertProject(this.text);
      this.projects = await ApiCalls.getProjects();
    },
    async delete(id) {
      await ApiCalls.deleteProject(id);
      this.projects = await ApiCalls.getProjects();
    },
    async getData() {
      try {
        const response = await ApiCalls.getProjects();
        for (let i = 0; i <= 2; i++) {
          this.projects.push(response.data.projects[i]);
        }
      } catch (err) {
        this.error = err.message;
      }
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
  min-height: 64vh;
  margin-top: 10rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 25vw;
}

.project:nth-of-type(2) {
  background-position-x: 50vw;
}
</style>
