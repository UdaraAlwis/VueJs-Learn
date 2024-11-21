<script setup>
import { items } from "./movies.json";
import { reactive } from "vue";
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";

const movies = reactive(items);
</script>

<template>
  <div>
    <ul>
      <li
        v-for="movie in movies"
        :key="movie.id"
        style="width: 220px;
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          background-color: #333;
          border-radius: 5px;">
        <img :src="movie.image" :alt="movie.name" width="200" height="300" />
        <h2 style="color: white">{{ movie.name }}</h2>
        <p style="color: white">{{ movie.description }}</p>
        <p style="color: white">Rating: {{ movie.rating }}</p>
        <div style="color: white">
          Genres:
          <span v-for="(genre, index) in movie.genres" :key="index">
            {{ genre }}<span v-if="index !== movie.genres.length - 1">, </span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
