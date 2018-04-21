const axios = require('axios')
const requester = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});
export default {
  getAllProjects() {
    return requester.get('/projects')
  },
  getOneProject(id) {
    return requester.get(`/projects/${id}`)
  },
  createProject(payload) {
    return requester.post('/projects', payload)
  }
}
