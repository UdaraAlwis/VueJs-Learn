<script setup>
import { ref } from "vue";
import RatingInput from "./components/RatingInput.vue";

const rating = ref(0);

function updateRating(newRating) {
  rating.value = newRating;
}
</script>

<template>
  <h1>Rating Input Feature Challenge</h1>
  <RatingInput v-bind:modelValue="rating" @update:modelValue="(newRating) => updateRating(newRating)" :count="10" />
  <p>You Selected Rating: {{ rating || "NA" }}</p>
</template>
