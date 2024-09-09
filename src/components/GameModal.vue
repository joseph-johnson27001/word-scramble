<template>
  <div>
    <h1>Choose A Game:</h1>
    <div class="modal">
      <div v-for="(game, index) in games" :key="index" class="game-button">
        <button @click="startGame(game)">{{ game }}</button>
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
      // NEEDS TO BE UPDATED TO LOAD SPECIFIC GAME
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
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 20px;
}

.game-button {
  width: 100px;
}
</style>
