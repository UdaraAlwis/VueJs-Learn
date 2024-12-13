<script setup>
import CountdownHeader from "@/components/CountdownHeader.vue";
import CountdownSegment from "@/components/CountdownSegment.vue";
import { onMounted, onUnmounted, ref } from "vue";

const daysUntil = ref(0);
const hoursUntil = ref(0);
const minutesUntil = ref(0);
const secondsUntil = ref(0);

let interval;
onMounted(() => {
  interval = setInterval(() => {
    const timeNow = new Date();

    const endOfYear = new Date(timeNow.getFullYear(), 11, 31, 23, 59, 59, 999);
    const timeDiff = endOfYear - timeNow;

    daysUntil.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    hoursUntil.value = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    minutesUntil.value = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60),
    );
    secondsUntil.value = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <div class="app-wrapper">
    <div class="countdown-box">
      <CountdownHeader />
      <main class="flex justify-center">
        <CountdownSegment data-test="days" label="days" :number="daysUntil" />
        <CountdownSegment
          data-test="hours"
          label="hours"
          :number="hoursUntil"
        />
        <CountdownSegment
          data-test="minutes"
          label="minutes"
          :number="minutesUntil"
        />
        <CountdownSegment
          data-test="seconds"
          label="seconds"
          :number="secondsUntil"
        />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  @apply flex items-center justify-center w-full h-full p-10;
}
.countdown-box {
  @apply shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px];
}
body {
  @apply bg-gray-100;
}
</style>
