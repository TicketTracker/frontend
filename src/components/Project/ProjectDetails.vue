<template>
  <div class="project-details container">
    <h1>{{project.name}}</h1>
    <h4>{{project.description}}</h4>
  </div>
</template>

<script>
import ProjectService from "../../services/projects";
export default {
  name: "ProjectDetails",
  data() {
    return {
      id: "",
      project: {}
    };
  },
  beforeMount() {
    const projSer = new ProjectService();
    projSer
      .getOneProject(this.$route.params.id)
      .then(data => (this.project = data.data))
      .catch(err => {
        throw err;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-details {
  margin-top: 3rem;
}
</style>