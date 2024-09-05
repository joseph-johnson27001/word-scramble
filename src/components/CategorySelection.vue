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
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff; /* White text color */
  background-color: #ff5722; /* Match the button color from GameModal.vue */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Match the shadow from GameModal.vue */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Match transition effects */
}

button:hover {
  background-color: #ff784e; /* Match the hover color from GameModal.vue */
  transform: scale(1.05); /* Match the hover scale effect */
}
</style>
