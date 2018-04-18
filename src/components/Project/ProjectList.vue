<template>
  <div class="hello">
      <ul>
          <li v-for="p in projects" :key="p._id">{{p._id}}</li>
      </ul>
  </div>
</template>

<script>
import ProjectService from "../../services/projects";
export default {
  name: "ProjectList",
  data() {
    return {
      projects: []
    };
  },
  beforeMount() {
    const projSer = new ProjectService();
    this.projects = projSer.getAllProjects();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
