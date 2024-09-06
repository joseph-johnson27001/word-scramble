import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategorySelection from "../views/CategorySelection.vue";
import GameBoard from "../components/GameBoard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "CategorySelection",
    component: CategorySelection,
  },
  {
    path: "/game-board",
    name: "GameBoard",
    component: GameBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
