<template>
  <div class="projects">
    <div class="container">
    <h3>All projects:</h3>
      <div class="list-group">
        <a v-for="p in projects" :key="p._id" href="#" class="list-group-item list-group-item-action">
          <div>
            <h4>{{p.name}}</h4>
            <p>{{p.description}}</p>
          </div>
        </a>
      </div>
    </div>
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
    projSer
      .getAllProjects()
      .then(data => (this.projects = data.data))
      .catch(err => {
        throw err;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  margin-top: 1.5em;
}
</style>
