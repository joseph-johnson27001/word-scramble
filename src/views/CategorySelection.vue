<template>
  <div class="category-selection">
    <h2>Select Category</h2>
    <button
      v-for="(category, key) in categories"
      :key="key"
      @click="handleCategorySelection(key)"
    >
      {{ key.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    ...mapActions(["selectCategory"]),
    handleCategorySelection(category) {
      this.selectCategory(category);
      this.$router.push({ name: "GameBoard" });
    },
  },
};
</script>

<style scoped></style>
