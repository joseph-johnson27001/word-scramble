<template>
  <h1>Choose A Game:</h1>
  <div class="modal">
    <button @click="startGame">Word Scramble</button>
    <button @click="startGame">Quiz</button>
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
  flex-direction: column;
}

button {
  width: 100%;
}
</style>
