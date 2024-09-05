<template>
  <div class="modal">
    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$emit("start");
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
