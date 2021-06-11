import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZizNukdyxFbJ2kbZ4Pifvr0U_7lU9hM4SfKEttyRbJo',
  },
});