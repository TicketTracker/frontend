// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'


//components
import ProjectList from "./components/Project/ProjectList"
import ProjectDetails from "./components/Project/ProjectDetails"
import AddProject from "./components/Project/AddProject"
import TicketList from "./components/Ticket/TicketList"
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{
    path: '/',
    component: ProjectList
  },
  {
    path: '/project/:id',
    component: ProjectDetails
  },
  {
    path: '/add-project',
    component: AddProject
  },
  {
    path: '/project/:id/tickets',
    component: TicketList

  }
]
const router = new VueRouter({
  routes: routes,
  mode: "history"
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `<div id="app">
  <div style="width: 90%; margin: auto;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Projects</a>
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
  <router-view></router-view>
</div>`
}).$mount('#app')
