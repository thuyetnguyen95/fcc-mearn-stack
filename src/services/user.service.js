import { api } from '../http'

export default {
  add: (user = {}) => {
    return api.post('users/add', user)
      .then(response => response)
      .catch(error => Promise.reject(error))
  },
  
  get: () => {
    return api.get('users')
      .then(response => response)
      .catch(error => Promise.reject(error))
  }
}