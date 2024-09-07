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
<template>
  <div class="chat-box-show bg-light-subtle rounded-3 overflow-scroll">
    <div
      v-for="(msg, index) in messages"
      :key="index"
      :class="msg.side == 'left' ? 'text-start' : 'text-end'"
      class="chat-box-show overflow-scroll"
    >
      <div class="user-info">
        <small class="text-body-secondary fw-light">{{ msg.name }}</small>
      </div>
      <div class="">
        <p class="text-wrap rounded-3 p-2" :style="{ backgroundColor: msg.color }">
          {{ msg.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-box-show {
  max-height: 40rem;
}
</style>
