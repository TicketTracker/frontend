<template>
  <div class="add-projects container">
      <h4>Enter your project information here</h4>
      <form>
          <div class="control">
            <label for="name">Project name</label>
            <input type="text" class="form-control" name="" id="name">
          </div>
        <div class="control">
            <label for="description">Description</label>
            <textarea name="descrption" id="description" cols="30" rows="10" class="form-control"></textarea>
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
export default {
  name: "AddProject",
  data() {
    return {
      name: "",
      description: ""
    };
  },
  methods: {
    createProject: function(event) {},
    goBack: function(event) {}
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
