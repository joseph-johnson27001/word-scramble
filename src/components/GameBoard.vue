<template>
  <div>
    <h2>Game Board</h2>
    <div class="letters-container">
      <div
        v-for="letter in scrambledLetters"
        :key="letter"
        @click="selectLetter(letter)"
      >
        <LetterButton :letter="letter" />
      </div>
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
.letters-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.letters-container div {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>
