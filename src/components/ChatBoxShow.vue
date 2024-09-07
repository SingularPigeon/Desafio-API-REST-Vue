<template>
  <div class="chat-box">
    <div v-for="(message, index) in messages" :key="index" class="message">
      <div class="user-info">
        <img :src="message.user.picture.thumbnail" :alt="message.user.login.username" />
        <strong>{{ message.user.login.username }}</strong>
      </div>
      <p class="message-text">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
