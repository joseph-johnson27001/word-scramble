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
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #ff5722;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #ff784e;
  transform: scale(1.05);
}

button:focus {
  outline: none;
}
</style>
