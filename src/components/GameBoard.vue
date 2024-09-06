<template>
  <div>
    <h2>Game Board</h2>
    <div v-if="wordList.length">
      <h3>Category: {{ selectedCategory }}</h3>
      <div class="letters-container">
        <div
          v-for="letter in scrambledLetters"
          :key="letter"
          @click="selectLetter(letter)"
        >
          <LetterButton :letter="letter" />
        </div>
      </div>
    </div>
    <p v-else>No words available for this category</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LetterButton from "./LetterButton.vue";

export default {
  components: {
    LetterButton,
  },
  computed: {
    ...mapState(["selectedCategory", "wordList"]),
    scrambledLetters() {
      if (this.wordList.length) {
        return this.wordList[0].split("").sort(() => 0.5 - Math.random());
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
  gap: 5px;
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
