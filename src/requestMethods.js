import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/';
let TOKEN = '';

// Retrieve the access token from local storage
const localStorageData = JSON.parse(localStorage.getItem('persist:root'));
const user = localStorageData ? JSON.parse(localStorageData.user) : null;
TOKEN = user && user.currentUser ? user.currentUser.accessToken : '';
console.log(user);
console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
