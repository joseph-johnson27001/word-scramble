<template>
  <div>
    <h1>Choose A Game:</h1>
    <div class="modal">
      <div v-for="(game, route) in games" :key="route" class="game-button">
        <button @click="goToGame(route)">
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
      games: {
        "quiz-master": "Quiz Master",
        "word-scramble": "Word Scramble",
        "crossword-craze": "Crossword Craze",
        "anagram-attack": "Anagram Attack",
        "riddle-run": "Riddle Run",
        "word-ladder": "Word Ladder",
        "letter-link": "Letter Link",
        "puzzle-pop": "Puzzle Pop",
        "phrase-finder": "Phrase Finder",
      },
    };
  },
  methods: {
    goToGame(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped>
.modal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
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
}
</style>
