<template>
  <div class="hello">
  </div>
</template>

<script>
import ProjectService from "../../services/projects";
export default {
  name: "Project",
  data() {},
  beforeMount() {
    const projSer = new ProjectService();
    projSer.getAllProjects();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
