<template>
  <div id="app">
    <div class="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Issues</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from "./components/Project/ProjectList.vue";

export default {
  name: "App",
  components: {
    ProjectList
  }
};
</script>

<style>
.navigation {
  width: 90%;
  margin: auto;
}
</style>
