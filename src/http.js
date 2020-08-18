import axios from 'axios';

const API_URL = 'http://localhost:5000'

export const api = { 
  get(url, params) {
    return axios.get(`${API_URL}/${url}`, params)
    .then(response => response.data)
    .catch(errors => Promise.reject(errors))
  },

  post(url, data) {
    return axios.post(`${API_URL}/${url}`, data)
    .then(response => response.data)
    .catch(errors => Promise.reject(errors))
  },

  delete(url) {
    return axios.delete(`${API_URL}/${url}`)
    .then(response => response.data)
    .catch(errors => Promise.reject(errors))
  }
}