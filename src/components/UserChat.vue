<template>
  <div class="user-chat">
    <div class="user-left" v-if="userLeftLocal">
      <img :src="userLeftLocal.picture.large" :alt="userLeftLocal.login.username" />
      <h3>{{ userLeftLocal.login.username }}</h3>
      <textarea v-model="userLeftLocal.newmessage" rows="3"></textarea>
      <button @click="sendMessage(userLeftLocal, userLeftLocal.newmessage)">Send</button>
    </div>

    <div class="user-right" v-if="userRightLocal">
      <img :src="userRightLocal.picture.large" :alt="userRightLocal.login.username" />
      <h3>{{ userRightLocal.login.username }}</h3>
      <textarea v-model="userRightLocal.newmessage" rows="3"></textarea>
      <button @click="sendMessage(userRightLocal, userRightLocal.newmessage)">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserChat',
  props: {
    userLeft: Object,
    userRight: Object
  },
  computed: {
    userLeftLocal() {
      return this.userLeft ? { ...this.userLeft } : null
    },
    userRightLocal() {
      return this.userRight ? { ...this.userRight } : null
    }
  },
  methods: {
    sendMessage(user, text) {
      if (text.trim()) {
        this.$emit('send-message', {
          text: text.trim(),
          user
        })
        user.newmessage = '' // Modificar solo la copia local
      }
    }
  }
}
</script>

<style scoped></style>
