import { createStore } from "vuex";

export default createStore({
  state: {
    selectedCategory: null,
    wordList: [],
    categories: {
      countries: ["Albania", "France", "Spain", "Germany", "Italy"],
      cities: ["London", "Bangkok", "Singapore", "New York", "Tokyo"],
      animals: ["Lion", "Tiger", "Elephant", "Kangaroo", "Giraffe"],
      fruits: ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango"],
      sports: [
        "Soccer",
        "Basketball",
        "Tennis",
        "Cricket",
        "Hockey",
        "Baseball",
      ],
      cars: ["Toyota", "Honda", "Ford", "BMW", "Audi", "Mercedes"],
      movies: [
        "Inception",
        "Titanic",
        "Avatar",
        "The Godfather",
        "Jaws",
        "Gladiator",
      ],
      books: [
        "1984",
        "To Kill a Mockingbird",
        "Moby Dick",
        "The Hobbit",
        "Harry Potter",
        "The Great Gatsby",
      ],
      colors: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"],
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
