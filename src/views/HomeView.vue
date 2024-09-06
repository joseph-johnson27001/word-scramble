<template>
  <div>
    <GameModal v-if="!gameStarted" @start="startGame" />
    <CategorySelection
      v-if="gameStarted && !categorySelected"
      @category-selected="selectCategory"
    />
    <router-view v-if="categorySelected" />
  </div>
</template>

<script>
import GameModal from "../components/GameModal.vue";
import CategorySelection from "./CategorySelection.vue";

export default {
  components: {
    GameModal,
    CategorySelection,
  },
  data() {
    return {
      gameStarted: false,
      categorySelected: false,
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
    },
    selectCategory(category) {
      this.categorySelected = true;
      this.$router.push({ path: "/game", query: { category } });
    },
  },
};
</script>

<style scoped>
/* Add styles for the home view */
</style>
