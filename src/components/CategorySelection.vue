<template>
  <div class="category-selection">
    <h2>Select Category</h2>
    <button
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Football", "Countries", "Cities", "Animals"],
    };
  },
  methods: {
    selectCategory(category) {
      this.$emit("category-selected", category);
    },
  },
};
</script>

<style scoped>
.category-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 100%;
}
</style>
