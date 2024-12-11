<script setup>
import MovieItem from "@/MovieItem.vue";
import MovieForm from "@/MovieForm.vue";
import { computed, ref } from "vue";

const movies = ref([
  {
    id: 1,
    name: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
    rating: null,
    genres: ["Crime", "Drama"],
    inTheaters: false,
  },
  {
    id: 2,
    name: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg",
    rating: null,
    genres: ["Drama"],
    inTheaters: false,
  },
  {
    id: 3,
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    rating: null,
    genres: ["Action", "Crime", "Drama"],
    inTheaters: false,
  },
]);

function updateRating(id, rating) {
  movies.value = movies.value.map((movie) => {
    if (movie.id === id) {
      movie.rating = rating;
    }
    return movie;
  });
}

function removeMovie(id) {
  movies.value = movies.value.filter((movie) => movie.id !== id);
}

const selectedMovie = ref({
  id: null,
  name: null,
  description: null,
  image: null,
  inTheaters: false,
  genres: [],
});

function editMovie(id) {
  const movie = movies.value.find((movie) => movie.id === id);
  selectedMovie.value.id = movie.id;
  selectedMovie.value.name = movie.name;
  selectedMovie.value.description = movie.description;
  selectedMovie.value.image = movie.image;
  selectedMovie.value.inTheaters = movie.inTheaters;
  selectedMovie.value.genres = movie.genres;

  showForm();
}

function addOrUpdateMovie(movie) {
  console.log(movie);

  if (movie.id) {
    updateMovie(movie);
  } else {
    addMovie(movie);
  }

  hideForm();
}

function addMovie(newMovie) {
  movies.value.push(newMovie); // why no work?
}

function updateMovie(movie) {
  movies.value = movies.value.map((m) => {
    if (m.id === movie.id) {
      movie.rating = m.rating;
      return movie;
    }
    return m;
  });
}

const showMovieForm = ref(false);
function hideForm() {
  // reset selectedMovie
  selectedMovie.value = {
    id: null,
    name: null,
    description: null,
    image: null,
    inTheaters: false,
    genres: [],
  };
  showMovieForm.value = false;
}
function showForm() {
  showMovieForm.value = true;
}

const averageRating = computed(() => {
  const avg = movies.value
    .map((movie) => parseInt(movie.rating || 0))
    .reduce((a, b) => a + b, 0);

  return Number(avg / movies.value.length).toFixed(1);
});

const totalMovies = computed(() => {
  return movies.value.length;
});

function removeRatings() {
  movies.value = movies.value.map((movie) => {
    movie.rating = null;
    return movie;
  });
}
</script>

<template>
  <div class="app">
    <MovieForm
      v-if="showMovieForm"
      :modelValue="selectedMovie"
      @cancel="hideForm()"
      @update:modelValue="(movie) => addOrUpdateMovie(movie)"
    ></MovieForm>
    <div class="movie-actions-list-wrapper">
      <div class="movie-actions-list-info">
        <span>Total Movies: {{ totalMovies }}</span>
        <span> / </span>
        <span>Average Rating: {{ averageRating }}</span>
      </div>
      <div class="flex-spacer"></div>
      <div class="movie-actions-list-actions">
        <button
          class="self-end movie-actions-list-action-button button-primary justify-self-end"
          @click="removeRatings"
        >
          Remove Ratings
        </button>
        <button
          class="movie-actions-list-action-button"
          :class="{
            'button-primary': !showMovieForm,
            'button-disabled': showMovieForm,
          }"
          @click="showForm"
          :disabled="showMovieForm"
        >
          Add Movie
        </button>
      </div>
    </div>
    <div class="movie-list">
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @edit="editMovie"
        @remove="removeMovie"
        @update:rating="updateRating"
      />
    </div>
  </div>
</template>
