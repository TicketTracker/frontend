const axios = require('axios')
const requester = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
});
export default {
  getAllTicketsByProject(projectId) {
    return requester.get(`/tickets?project=${projectId}`)
  }
}
