import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // 👈 change this if you're deploying later
});

export default instance;
