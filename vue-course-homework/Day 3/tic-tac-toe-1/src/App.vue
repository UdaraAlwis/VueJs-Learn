<script setup>
import { ref } from "vue";

const gridItems = ref(Array(9).fill(null));
const currentPlayer = ref("x");
const winnerFound = ref(false);

const possibleMatches = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(index) {
  if (!gridItems.value[index]) {
    gridItems.value[index] = currentPlayer.value;

    const getCurrentUserIndexes = gridItems.value
      .map((value, index) => (value === currentPlayer.value ? index : null))
      .filter((index) => index !== null);
    console.log(getCurrentUserIndexes);

    for (let x = 0; x < possibleMatches.length; x++) {
      const possibleMatchNumbers = possibleMatches[x];

      const indexToCheck1 = possibleMatchNumbers[0];
      const indexToCheck2 = possibleMatchNumbers[1];
      const indexToCheck3 = possibleMatchNumbers[2];

      if (
        getCurrentUserIndexes.includes(indexToCheck1) &&
        getCurrentUserIndexes.includes(indexToCheck2) &&
        getCurrentUserIndexes.includes(indexToCheck3)
      ) {
        console.log("WINNER FOUND!");
        winnerFound.value = true;
        break;
      }
    }

    currentPlayer.value = currentPlayer.value === "x" ? "o" : "x";
  }
}
</script>

<template>
  <h1 v-if="winnerFound" class="winner-text">WINNER FOUND!</h1>
  <div v-else class="grid">
    <div v-for="(cell, index) in gridItems" :key="index" class="cell" @click="handleClick(index)">
      {{ cell }}
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 300px;
  margin: 0 auto;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  cursor: pointer;
}

.winner-text {
  font-size: 2em;
  margin: 20px;
  text-align: center;
  justify-content: center;
  display: flex;
}
</style>
