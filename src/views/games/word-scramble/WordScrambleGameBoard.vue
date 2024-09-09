<template>
  <div>
    <!-- <h2>Word Scramble Game Board</h2> -->
    <p>Unscramble the letters to form a word!</p>

    <div v-if="scrambledLetters.length">
      <div class="letters-container">
        <button
          v-for="(letter, index) in scrambledLetters"
          :key="index"
          @click="selectLetter(letter)"
          class="letter"
        >
          {{ letter }}
        </button>
      </div>
    </div>

    <p v-else>No word available to scramble.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WordScrambleGameBoard",
  computed: {
    ...mapState(["selectedCategory", "wordList"]),
    scrambledLetters() {
      // Randomly select a word and scramble its letters
      if (this.wordList.length) {
        const word =
          this.wordList[
            Math.floor(Math.random() * this.wordList.length)
          ].toUpperCase();
        return word.split("").sort(() => 0.5 - Math.random());
      }
      return [];
    },
  },
  methods: {
    selectLetter(letter) {
      console.log("Selected letter:", letter);
    },
  },
};
</script>

<style scoped>
.letters-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
