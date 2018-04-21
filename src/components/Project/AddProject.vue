<template>
  <div class="add-projects container">
    <loading :active.sync="isLoading"></loading>
      <h4>Enter your project information here</h4>
      <form>
          <div class="control">
            <label for="name">Project name</label>
            <input type="text" class="form-control" name="" id="name" v-model="name">
          </div>
        <div class="control">
            <label for="description">Description</label>
            <textarea name="descrption" id="description" cols="30" rows="10" class="form-control" v-model="description"></textarea>
        </div>
      </form>
              <div class="row">
            <div class="col"><button class="form-control btn btn-danger" v-on:click="goBack">Cancel</button></div>
            <div class="col"><button class="form-control btn btn-success" v-on:click="createProject">Add</button></div>
        </div>
  </div>
</template>

<script>
import ProjectService from "../../services/projects";
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.min.css";
export default {
  name: "AddProject",
  components: {
    Loading
  },
  data() {
    return {
      name: "",
      description: "",
      isLoading: false
    };
  },
  methods: {
    createProject: function(event) {
      event.preventDefault();
      event.stopPropagation();
      let newProj = {};
      newProj.name = this.name;
      newProj.description = this.description;
      this.isLoading = true;
      ProjectService.createProject(newProj)
        .then(data => {
          this.isLoading = false;
          this.$router.push("/");
        })
        .catch(err => {
          this.isLoading = false;
        });
    },
    goBack: function(event) {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin-top: 3%;
  margin-bottom: 5%;
}
label {
  font-weight: bold;
}
.control {
  margin-bottom: 3rem;
}
</style>
