<script setup>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { items } from "./movies.json";
const movies = ref(items);

const setMovieRating = (movie, newRating) => {
  console.log(
    "Updating movie " + movie.name + " with new rating: " + newRating,
  );
  var movieIndexToUpdate = movies.value.findIndex((m) => m.id === movie.id);
  movies.value[movieIndexToUpdate].rating = newRating;
};
</script>

<template>
  <div class="app">
    <div class="movie-list">
      <div class="movie-item" v-for="movie in movies" :key="movie.id">
        <div class="movie-item-image-wrapper">
          <img :src="movie.image" class="movie-item-image" alt="" />
        </div>

        <div class="movie-item-content-wrapper">
          <div class="movie-item-title-wrapper">
            <h3 class="movie-item-title">{{ movie.name }}</h3>
            <div class="movie-item-genres-wrapper">
              <span
                v-for="genre in movie.genres"
                :key="`${movie.id}-${genre}`"
                class="movie-item-genre-tag"
                >{{ genre }}</span
              >
            </div>
          </div>
          <div class="movie-item-description-wrapper">
            <p class="movie-item-description">{{ movie.description }}</p>
          </div>

          <div class="movie-item-rating-wrapper">
            <StarIcon
              v-for="star in 5"
              :key="`star-${star}`"
              :style="star <= movie.rating ? 'color:gold' : 'color:gray'"
              :disabled="star === movie.rating"
              class="movie-item-star-icon"
              v-on:click="
                star !== movie.rating ? setMovieRating(movie, star) : () => {}
              "
            ></StarIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
