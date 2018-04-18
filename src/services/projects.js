const axios = require('axios')
const requester = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
export default class ProjectService {
    getAllProjects() {
        requester.get('/projects').then((data) => {
            return data
        }).catch((err) => {
            throw err
        })
    }
}