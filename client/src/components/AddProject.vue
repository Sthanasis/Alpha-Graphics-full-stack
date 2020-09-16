<template>
  <div>
    <div class="btn btn-success" @click="showForm = !showForm">
      <span v-if="!showForm">Add Project</span>
      <span v-if="showForm">Hide Form</span>
    </div>
    <div class="form-container" v-if="showForm">
      <div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Project Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            v-model="title"
          />
        </div>
        <div class="form-group">
          <label for="fileInput">Project image in jpeg</label>
          <input type="file" accept="image/*" class="form-control-file" id="fileInput" name="photo" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Project Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Description"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="postProject">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import apiCalls from "../apiCalls.js";
export default {
  data() {
    return {
      showForm: false,
      title: "",
      description: "",
    };
  },
  methods: {
    postProject() {
      const data = new FormData();
      data.append("title", this.title);
      data.append("description", this.description);
      data.append("photo", document.getElementById("fileInput").files[0]);

      console.log(data);
      //document.getElementById("exampleFormControlFile1");
      apiCalls.insertProject(data).then((res) => {
        if (res.data.status === "success") {
          this.title = "";
          this.description = "";
          document.getElementById("fileInput").value = "";
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 50%;
  background: var(--MediumColor);
  padding: 1em;
  box-shadow: 3px 6px 5px rgba(0, 0, 0, 0.8);
  margin: 2em auto;
}
</style>