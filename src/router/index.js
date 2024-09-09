import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizMaster from "@/views/games/quiz-master/QuizMaster.vue";
import WordScramble from "@/views/games/word-scramble/WordScramble.vue";
import CrosswordCraze from "@/views/games/crossword-craze/CrosswordCraze.vue";
import AnagramAttack from "@/views/games/anagram-attack/AnagramAttack.vue";
import RiddleRun from "@/views/games/riddle-run/RiddleRun.vue";
import WordLadder from "@/views/games/word-ladder/WordLadder.vue";
import LetterLink from "@/views/games/letter-link/LetterLink.vue";
import PuzzlePop from "@/views/games/puzzle-pop/PuzzlePop.vue";
import PhraseFinder from "@/views/games/phrase-finder/PhraseFinder.vue";
import WordScrambleGameBoard from "@/views/games/word-scramble/WordScrambleGameBoard.vue";
import CategorySelection from "@/views/games/word-scramble/CategorySelection.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/quiz-master", name: "quiz-master", component: QuizMaster },
  { path: "/word-scramble", name: "word-scramble", component: WordScramble },
  {
    path: "/crossword-craze",
    name: "crossword-craze",
    component: CrosswordCraze,
  },
  { path: "/anagram-attack", name: "anagram-attack", component: AnagramAttack },
  { path: "/riddle-run", name: "riddle-run", component: RiddleRun },
  { path: "/word-ladder", name: "word-ladder", component: WordLadder },
  { path: "/letter-link", name: "letter-link", component: LetterLink },
  { path: "/puzzle-pop", name: "puzzle-pop", component: PuzzlePop },
  { path: "/phrase-finder", name: "phrase-finder", component: PhraseFinder },
  {
    path: "/word-scramble/category-selection",
    name: "category-selection",
    component: CategorySelection,
  },
  {
    path: "/word-scramble/game-board",
    name: "word-scramble-game-board",
    component: WordScrambleGameBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
