// src/services/UserService.js
import axios from 'axios'

export default {
  async fetchUsers() {
    try {
      const url = 'https://randomuser.me/api/?results=2'
      const { data } = await axios.get(url)
      return data.results
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
