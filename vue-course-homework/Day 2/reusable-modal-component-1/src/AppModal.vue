<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
// Start your component logic here
</script>

<template>
  <!--  Start your component template here -->
  <div class="modal-body">
    <div class="modal-header">
      <slot name="header"></slot>
      <button @click="closeModal">
        <XMarkIcon />
      </button>
    </div>
    <slot></slot>
  </div>
</template>
