import axios from 'axios'

class UserService {
  constructor() {
    this.users = [] // array con los datos de los usuarios solicitados
  }

  // Método para solicitar datos desde la API
  async fetchUsers() {
    try {
      const url = 'https://randomuser.me/api/?results=2' // Trae dos usuarios de forma aleatoria
      const { data } = await axios.get(url)
      this.users = data.results
      return this.users
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  }
}

export default UserService
