<script setup>
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/vue/24/solid";
import { onMounted, onBeforeUnmount, useTemplateRef } from "vue";

defineProps({
  modelValue: {
    type: Number,
  },
  count: {
    type: Number,
  }
});

const ratingDiv = useTemplateRef('ratingDiv');

defineEmits(['update:modelValue']);

onMounted(() => {
  window.addEventListener("keypress", handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keypress", handleKeyPress);
});

function handleKeyPress (event) {
  console.log(event);
  // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  if (event.key === "ArrowRight") {
    if(modalValue.value > count.value){
      modalValue.value = modalValue.value + 1;
    }
  } else if(event.key === "ArrowLeft"){
    if(modelValue.value > 0){
      modelValue.value = modelValue.value - 1;
    }
  } else if(event.key === "ArrowUp"){
    if(count.value > modelValue.value){
      modelValue.value = modelValue.value + 1;
    }    
  } else if(event.key === "ArrowDown"){
    if(modelValue.value > 0){
      modelValue.value = modelValue.value - 1;
    }
  }
}

</script>
<template>
  <div autofocus tabindex="0" data-test="rating-wrapper" ref="ratingDiv">
    <button v-for="starIndex in count" :key="starIndex" tabindex="-1" data-test="rating-button"
      v-on:click="$emit('update:modelValue', starIndex)">
      <StarIconSolid v-if="starIndex <= modelValue" data-test="solid-star" class="solid-star" />
      <StarIconSolid v-else data-test="outline-star" class="outline-star" />
    </button>
  </div>
</template>
