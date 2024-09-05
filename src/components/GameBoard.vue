<template>
  <div>
    <h2>Game Board</h2>
    <div
      v-for="letter in scrambledLetters"
      :key="letter"
      @click="selectLetter(letter)"
    >
      <LetterButton :letter="letter" />
    </div>
    <!-- Add more game logic here -->
  </div>
</template>

<script>
import LetterButton from "./LetterButton.vue";

export default {
  components: {
    LetterButton,
  },
  data() {
    return {
      scrambledLetters: ["L", "A", "B", "A", "N", "I", "A"],
    };
  },
  methods: {
    selectLetter(letter) {
      // Handle letter selection
      console.log("Selected letter:", letter);
    },
  },
};
</script>

<style scoped>
/* Add styles for the game board */
</style>
