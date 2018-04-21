<template>
  <div class="projects">
    <div class="container">
      <router-link :to="'/add-project'" class="btn btn-info" id="add-project" role="button">Add Project</router-link>
      <div class="header">
        <h3>All projects:</h3>
      </div>
      <div class="list-group">
        <router-link v-for="p in projects" :key="p._id" :to="'/project/'+p._id+'/tickets'" class="list-group-item list-group-item-action">
          <div>
            <h4>{{p.name}}</h4>
            <p>{{p.description}}</p>
          </div>
        </router-link>
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
    ProjectService.getAllProjects()
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
.header > h3 {
  margin-bottom: 1em;
}
#add-project {
  float: right;
}
</style>
