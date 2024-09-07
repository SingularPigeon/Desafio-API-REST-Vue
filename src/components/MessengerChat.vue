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
      userLeft: null,
      userRight: null,
      messages: []
    }
  },
  methods: {
    async getUsers() {
      try {
        const url = 'https://randomuser.me/api/?results=2'
        const { data } = await axios.get(url)

        if (data.results.length === 2) {
          this.userLeft = { ...data.results[0], newmessage: '' }
          this.userRight = { ...data.results[1], newmessage: '' }
        } else {
          console.error('Error fetching users: Expected 2 users')
        }
      } catch (error) {
        console.error(error)
      }
    },
    handleSendMessage(message) {
      this.messages.push(message)
    }
  },
  created() {
    this.getUsers()
  }
}
</script>

<template>
  <div class="messenger-box">
    <UserChat :userLeft="userLeft" @send-message="handleSendMessage" />
    <ChatBoxShow :messages="messages" />
    <UserChat :userRight="userRight" @send-message="handleSendMessage" />
  </div>
</template>

<style scoped>
.messenger-box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
