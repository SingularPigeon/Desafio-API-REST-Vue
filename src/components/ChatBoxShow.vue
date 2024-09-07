<template>
  <div class="chat-box-show">
    <div v-for="(msg, index) in messages" :key="index" class="message">
      <div class="user-info">
        <strong>{{ msg.name }}</strong>
      </div>
      <p class="message-text" :style="{ backgroundColor: msg.color }">{{ msg.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBoxShow',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
