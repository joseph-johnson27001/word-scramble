<template>
  <div>
    <!-- <h1>Choose A Game:</h1> -->
    <div class="modal">
      <div v-for="(game, index) in games" :key="index" class="game-button">
        <button @click="startGame(game)">
          <span class="icon">🎮</span>
          <!-- Placeholder icon -->
          <span class="game-name">{{ game }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        "Word Scramble",
        "Quiz Master",
        "Crossword Craze",
        "Anagram Attack",
        "Riddle Run",
        "Word Ladder",
        "Letter Link",
        "Puzzle Pop",
        "Phrase Finder",
      ],
    };
  },
  methods: {
    startGame(game) {
      // Updated logic for starting specific games can be added here
      console.log("Starting game:", game);
      this.$emit("start", game);
    },
  },
};
</script>

<style scoped>
.modal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
}

.game-button {
  width: 150px;
  height: 150px;
}

button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

.icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.game-name {
  font-size: 16px;
}
</style>
