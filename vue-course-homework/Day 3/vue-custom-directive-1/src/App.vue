<script setup>
// Start here your app logic
const vForzed = {
  mounted(el) {
    el.focus();
  }
};

</script>
<template>
  <div class="page">
    <!-- Make this directive work! -->
    <input type="text" v-forzed />
  </div>
</template>
