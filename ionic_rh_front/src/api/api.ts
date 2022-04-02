import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost/'
});

export { api }
