<script>
import axios from 'axios'
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
      const url = 'https://randomuser.me/api/?results=2'
      const { data } = await axios.get(url)

      this.userLeft = { ...data.results[0], side: 'left' }
      this.userRight = { ...data.results[1], side: 'right' }
    } catch (error) {
      console.error(error)
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
  <div class="chat-app-container container">
    <h1>Messenger Chat</h1>
    <div class="row">
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
