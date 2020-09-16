<template>
  <div class="layout">
    <div class="close" @click="closeThisProject">x</div>
    <div class="titleContainer">
      <div style="text-align: start;">{{project.title}}</div>
      <div style="text-align: start;">{{project.description}}</div>
    </div>
    <div class="imgContainer">
      <img :src="`../img/${project.project}`" alt />
    </div>
    <div>{{getDate()}}</div>
  </div>
</template>

<script>
// import apiCalls from "../apiCalls.js";

export default {
  data() {
    return {};
  },
  props: {
    id: String,
    project: Object,
  },
  methods: {
    getDate() {
      if (this.id !== "") {
        let arr = this.project.date.split(" ");
        arr = arr.slice(0, 4);
        arr = arr.join(" ");
        return arr;
      }
    },
    closeThisProject() {
      this.$emit("closeProject");
      this.$destroy();
    },
  },
};
</script>

<style scoped>
.close {
  color: var(--mainText);
  opacity: 1;
  margin-top: 5rem;
  margin-right: 6rem;
}

.close:hover {
  cursor: pointer;
}
.layout {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
}

.titleContainer {
  flex-direction: column;
  display: flex;

  width: 34vw;
  margin: auto;
  margin-top: 10rem;
  flex-wrap: wrap;
}

.imgContainer img {
  height: 70vh;
  width: 70vw;
  margin: auto;
}
</style>>
