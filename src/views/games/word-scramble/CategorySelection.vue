<template>
  <div class="category-selection">
    <h2>Select Category</h2>
    <div class="category-grid">
      <button
        v-for="categoryName in sortedCategoryNames"
        :key="categoryName"
        @click="handleCategorySelection(categoryName)"
      >
        {{ categoryName.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["categories"]),
    sortedCategoryNames() {
      return Object.keys(this.categories).sort();
    },
  },
  methods: {
    ...mapActions(["selectCategory"]),
    handleCategorySelection(categoryName) {
      this.selectCategory(categoryName);
      this.$router.push({ name: "GameBoard" });
    },
  },
};
</script>

<style scoped>
.category-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
</style>
