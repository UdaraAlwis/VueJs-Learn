<script setup>
import { StarIcon as StarIconOutline } from "@heroicons/vue/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/vue/24/solid";
import { onMounted, onBeforeUnmount, useTemplateRef } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
  }
});

const emit = defineEmits(['update:modelValue']);

onMounted(() => {
  console.log('modelValue.value', props.modelValue);
  window.addEventListener("keydown", handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyPress);
});

function handleKeyPress (event) {
  // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  if (event.key === "ArrowRight") {
    if(props.modelValue < props.count){
      emit('update:modelValue', props.modelValue + 1);
    }
  } else if(event.key === "ArrowLeft"){
    if(props.modelValue > 0){
      emit('update:modelValue', props.modelValue - 1);
    }
  } else if(event.key === "ArrowUp"){
    if(props.count > props.modelValue.value){
      emit('update:modelValue', props.modelValue + 1);
    }    
  } else if(event.key === "ArrowDown"){
    if(props.modelValue > 0){
      emit('update:modelValue', props.modelValue - 1);
    }
  }
}

</script>
<template>
  <div autofocus tabindex="0" data-test="rating-wrapper">
    <button v-for="starIndex in count" :key="starIndex" tabindex="-1" data-test="rating-button"
      v-on:click="$emit('update:modelValue', starIndex)">
      <StarIconSolid v-if="starIndex <= modelValue" data-test="solid-star" class="solid-star" />
      <StarIconSolid v-else data-test="outline-star" class="outline-star" />
    </button>
  </div>
</template>
