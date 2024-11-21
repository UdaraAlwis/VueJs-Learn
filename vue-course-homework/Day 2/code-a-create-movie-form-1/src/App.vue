<script setup>
import { ref, reactive } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { items } from "./movies.json";

const movies = ref(items);
const isAddMovieVisible = ref(false);
const newMovieToAdd = reactive({
  name: null,
  description: null,
  image: null,
  rating: null,
  genres: null,
  inTheaters: null,
});

const errors = reactive({
  name: false,
  description: false,
  image: false,
  genres: false,
});

const genreItems = ref(["Drama", "Crime", "Action", "Comedy"]);

function updateRating(movieIndex, rating) {
  movies[movieIndex].rating = rating;
}

function showAddMovie() {
  isAddMovieVisible.value = true;
}

function hideAddMovie() {
  isAddMovieVisible.value = false;
  cleanUpState();
  cleanUpErrors();
}

function submitMovie() {
  cleanUpErrors();
  if (validate()) {
    movies.value.push(newMovieToAdd);
    hideAddMovie();
  }
}

function validate() {
  if (!newMovieToAdd.name) {
    errors.name = true;
    return false;
  }

  if (!newMovieToAdd.description) {
    errors.description = true;
    return false;
  }

  if (!newMovieToAdd.image) {
    errors.image = true;
    return false;
  }

  if (!newMovieToAdd.genres) {
    errors.genres = true;
    return false;
  }

  return true;
}

function cleanUpState() {
  newMovieToAdd.name = null;
  newMovieToAdd.description = null;
  newMovieToAdd.image = null;
  newMovieToAdd.genres = null;
  newMovieToAdd.inTheaters = null;
}

function cleanUpErrors() {
  errors.name = false;
  errors.description = false;
  errors.image = false;
  errors.genres = false;
}
</script>

<template>
  <div class="app">
    <div v-if="isAddMovieVisible" class="modal-wrapper">
      <form v-on:submit.prevent="submitMovie()">
        <div class="movie-form-input-wrapper">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="newMovieToAdd.name"
          />
          <label v-if="errors.name" style="color: red"
            >Movie Name is required!</label
          >
        </div>
        <div class="movie-form-input-wrapper">
          <label>Description: </label>
          <input
            type="text"
            name="description"
            id="description"
            v-model="newMovieToAdd.description"
          />
          <label v-if="errors.description" style="color: red"
            >Movie Description is required!</label
          >
        </div>
        <div class="movie-form-input-wrapper">
          <label>Image: </label>
          <input
            type="text"
            name="image"
            id="image"
            v-model="newMovieToAdd.image"
          />
          <label v-if="errors.image" style="color: red"
            >Movie Image is required!</label
          >
        </div>

        <div class="movie-form-input-wrapper">
          <label>Genres: </label>
          <select
            v-model="newMovieToAdd.genres"
            name="genres"
            id="genres"
            class="movie-form-input"
            multiple
          >
            <option v-for="genre in genreItems" :key="genre">
              {{ genre }}
            </option>
          </select>
          <label v-if="errors.genres" style="color: red"
            >Movie Genres are required!</label
          >
        </div>

        <div class="movie-form-input-wrapper">
          <label>In Theaters: </label>
          <input
            type="checkbox"
            id="inTheaters"
            name="inTheaters"
            class="movie-form-checkbox-label"
            v-model="newMovieToAdd.inTheaters"
          />
        </div>

        <div class="movie-form-actions-wrapper">
          <button type="button" class="button" v-on:click="hideAddMovie()">
            Cancel
          </button>
          <button type="submit" class="button-primary">Submit</button>
        </div>
      </form>
    </div>

    <div class="movie-actions-list-wrapper">
      <div class="flex-spacer"></div>
      <div class="movie-actions-list-actions">
        <button
          class="movie-actions-list-action-button"
          :class="{
            'button-primary': !isAddMovieVisible,
            'button-disabled': isAddMovieVisible,
          }"
          v-on:click="showAddMovie()"
          :disabled="isAddMovieVisible"
        >
          Add Movie
        </button>
      </div>
    </div>

    <div class="movie-list">
      <div
        class="movie-item"
        v-for="(movie, movieIndex) in movies"
        :key="movie.id"
      >
        <div class="movie-item-image-wrapper">
          <div class="movie-item-star-wrapper">
            <StarIcon
              class="movie-item-star-rating-icon"
              :class="[movie.rating ? 'text-yellow-500' : 'text-gray-500']"
            />
            <div class="movie-item-star-content-wrapper">
              <span
                v-if="movie.rating"
                class="movie-item-star-content-rating-rated"
              >
                {{ movie.rating }}
              </span>
              <span v-else class="movie-item-star-content-rating-not-rated">
                -
              </span>
            </div>
          </div>
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
            <span class="movie-item-rating-text">
              Rating: ({{ movie.rating }}/5)
            </span>

            <div class="movie-item-star-icon-wrapper">
              <button
                v-for="star in 5"
                :key="star"
                class="movie-item-star-icon-button"
                :class="[
                  star <= movie.rating ? 'text-yellow-500' : 'text-gray-500',
                ]"
                :disabled="star === movie.rating"
                @click="updateRating(movieIndex, star)"
              >
                <StarIcon class="movie-item-star-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
