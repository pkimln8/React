import axios from 'axios';

const KEY = 'AIzaSyBg9-rs1gdIxQWNtrxh66WesoLZb3hoSQc';

export default axios.create({
  baseURL: 'GET https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    type: 'video',
    key: KEY,
  }
});
