<template>
  <div class="category-selection">
    <h2>Select Category</h2>
    <button
      v-for="categoryName in sortedCategoryNames"
      :key="categoryName"
      @click="handleCategorySelection(categoryName)"
    >
      {{ categoryName.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["categories"]),
    sortedCategoryNames() {
      // Sort the category keys alphabetically and use them as stable identifiers
      return Object.keys(this.categories).sort();
    },
  },
  methods: {
    ...mapActions(["selectCategory"]),
    handleCategorySelection(categoryName) {
      this.selectCategory(categoryName);
      // Redirect to the game board with selected category
      this.$router.push({ name: "word-scramble-game-board" });
    },
  },
};
</script>

<style scoped></style>
