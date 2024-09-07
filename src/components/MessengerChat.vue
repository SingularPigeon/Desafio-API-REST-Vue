<script>
import UserService from '@/services/UserService'
import UserChat from '@/components/UserChat.vue'
import ChatBoxShow from '@/components/ChatBoxShow.vue'

export default {
  name: 'MessengerChat',
  components: {
    UserChat,
    ChatBoxShow
  },
  data() {
    return {
      userLeft: {},
      userRight: {},
      messages: [],
      userLeftColor: '#adf6ec', // Color para el usuario izquierdo
      userRightColor: '#d6f6ad' // Color para el usuario derecho
    }
  },
  async created() {
    try {
      const users = await UserService.fetchUsers()

      this.userLeft = { ...users[0], side: 'left' }
      this.userRight = { ...users[1], side: 'right' }
    } catch (error) {
      console.error('Error en la captura de usuarios:', error)
    }
  },
  methods: {
    ShowSendMessage({ message, color, name, side }) {
      this.messages.push({ message, color, name, side })
    }
  }
}
</script>
<template>
  <div class="container pb-5">
    <h1 class="fw-bold text-center my-5 pt-5">Messenger Chat</h1>
    <div class="row align-items-start">
      <UserChat
        v-if="Object.keys(userLeft).length > 0"
        :user="userLeft"
        :messageColor="userLeftColor"
        @enviar-mensaje="ShowSendMessage"
        class="col-4"
      />
      <ChatBoxShow class="col-4" :messages="messages" />
      <UserChat
        v-if="Object.keys(userRight).length > 0"
        :user="userRight"
        :messageColor="userRightColor"
        @enviar-mensaje="ShowSendMessage"
        class="col-4"
      />
    </div>
  </div>
</template>

<style scoped></style>
