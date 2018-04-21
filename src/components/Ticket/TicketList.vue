<template>
  <div class="projects">
    <div class="container">
      <div class="list-group">
        <h3>All Tickets</h3>
      </div>
    </div>
  </div>
</template>

<script>
import TicketService from "../../services/tickets";
export default {
  name: "TicketList",
  data() {
    return {
      tickets: []
    };
  },
  beforeMount() {
    TicketService.getAllTicketsByProject(this.$route.params.id)
      .then(data => (this.tickets = data.results))
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
