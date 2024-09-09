<template>
  <div>
    <!-- <h2>Word Scramble</h2> -->
    <CategorySelection />
    <!-- Show the game board after selecting a category -->
    <WordScrambleGameBoard v-if="selectedCategory" />
  </div>
</template>

<script>
import CategorySelection from "@/views/games/word-scramble/CategorySelection.vue";
import WordScrambleGameBoard from "@/views/games/word-scramble/WordScrambleGameBoard.vue";

export default {
  components: {
    CategorySelection,
    WordScrambleGameBoard,
  },
  computed: {
    // Assuming we have the selectedCategory available in Vuex state
    selectedCategory() {
      return this.$store.state.selectedCategory;
    },
  },
};
</script>

<style scoped>
/* Add styles for Word Scramble here */
</style>
