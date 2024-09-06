import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCategory: null,
    wordList: [],
    categories: {
      countries: ["Albania", "France", "Spain", "Germany", "Italy"],
      cities: ["London", "Bangkok", "Singapore", "New York", "Tokyo"],
      animals: ["Lion", "Tiger", "Elephant", "Kangaroo", "Giraffe"],
    },
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category;
      state.wordList = state.categories[category];
    },
  },
  actions: {
    selectCategory({ commit }, category) {
      commit("SET_CATEGORY", category);
    },
  },
  getters: {
    getSelectedCategory(state) {
      return state.selectedCategory;
    },
    getWordList(state) {
      return state.wordList;
    },
  },
});
