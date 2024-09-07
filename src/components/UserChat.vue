<script>
export default {
  name: 'UserChat',
  props: {
    user: Object,
    messageColor: String // Recibe el color del mensaje
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleSendMessage() {
      if (this.message.trim()) {
        this.$emit('enviar-mensaje', {
          message: this.message.trim(),
          color: this.messageColor, // Envía el color del mensaje
          name: this.user.login.username,
          side: this.user.side // Esta propiedad debe estar en la data de MessengerChat
        })
        this.message = '' // Clear message input after sending
      }
    }
  }
}
</script>
<template>
  <div class="user-chat">
    <div class="chat-box text-center">
      <img :src="user.picture.large" class="img-fluid rounded-circle" :alt="user.login.username" />
      <h5 class="my-3 bg-info-subtle p-2 rounded-4 fw-bold">
        {{ user.name.first }} {{ user.name.last }}
      </h5>
      <textarea class="form-control textarea-height" v-model="message"></textarea>
      <button class="btn btn-success" @click="handleSendMessage">Send</button>
    </div>
  </div>
</template>

<style scoped>
.textarea-height {
  height: 200px;
}
</style>
