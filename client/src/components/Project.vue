<template>
  <div>
    <div class="close" @click="closeThisProject">x</div>
    <div class="layout"></div>
    <div class="imgContainer center">
      <div class="titleContainer">
        <div class="title" style="text-align: start;">{{project.title}}</div>
        <div class="description" style="text-align: start;">{{project.description}}</div>
      </div>
      <img :src="`../img/${project.project}`" alt />
      <!-- <img src="../assets/SPIDERMAN.svg" alt /> -->

      <div class="date">{{getDate()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    id: String,
    project: Object,
  },
  mounted() {
    document.body.classList.add("lockScroll");
  },
  beforeDestroy() {
    document.body.classList.remove("lockScroll");
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
  margin-top: 2vh;
  margin-left: 87vw;
  z-index: 5;
  position: fixed;
  top: 0;
  float: right;
}

.close:hover {
  cursor: pointer;
}
.layout {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.titleContainer {
  margin: auto;
}

.title {
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
}

.description {
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.imgContainer {
  width: 70vw;
  margin: auto;
  border-radius: 5px;
  color: var(--MainText);
  padding: 2em;
  height: 96vh;
  position: fixed;
  z-index: 6;
}

.imgContainer img {
  height: 70vh;
}

.date {
  text-align: end;
  margin-top: 1rem;
  font-style: italic;
}
</style>>
