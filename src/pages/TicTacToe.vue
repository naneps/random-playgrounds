<script setup>
import { ref, computed } from "vue";
const player = ref("X");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);
const CalculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
const winner = computed(() => CalculateWinner(board.value.flat()));
const MakeMove = (x, y) => {
  if (winner.value) return;
  if (board.value[x][y] !== "") return;
  board.value[x][y] = player.value;
  player.value = player.value === "X" ? "O" : "X";
};
const ResetGame = () => {
  player.value = "X";
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};
// const player1 = ref(0)
</script>
<template>
  <main class="pt-8 text-center min-h-screen dark:bg-base-100">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>  
    <h3 class="text-xl mb-4">Player {{ player }}'s turn</h3>
    <div class="flex flex-col items-center mb-8 justify-center gap-2">
      <div v-for="(row, x) in board" :key="x" class="flex gap-2">
        <div
          :class="`border border-secondary rounded-lg  w-28 h-28 hover:bg-primary transition-all ease-linear cursor-pointer material-icons-outlined text-6xl flex justify-center items-center ${
            cell === 'X' ? 'text-red-500' : cell === 'O' ? 'text-blue-500' : ''
          }`"
          v-for="(cell, y) in row"
          :key="y"
          @click="MakeMove(x, y)"
        >
          {{ cell === "X" ? "close" : cell === "O" ? "circle" : "" }}
        </div>
      </div>
    </div>
    <h2 v-if="winner" class="text-6xl font-bold mb-8">
      Player '{{ winner }}' wins!
    </h2>
    <button
      @click="ResetGame()"
      class="
       btn btn-primary px-14
      "
    >
      Reset
    </button>
  </main>
</template>