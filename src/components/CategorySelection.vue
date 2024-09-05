<template>
  <div>
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
button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
