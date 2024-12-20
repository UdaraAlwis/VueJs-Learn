<script setup>
import { ref, computed } from 'vue';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mercury",
  },
  // Add more questions as needed
];

const currentQuestionIndex = ref(0);
const selectedAnswer = ref();
const isAnswerCorrect = ref();
const canGoNext = ref(false);

const isAnswerGiven = computed(() => {
  return selectedAnswer.value != null;
});

const currentQuestion = computed(() => {
  return questions[currentQuestionIndex.value];
},);

function checkAnswer() {
  return selectedAnswer.value === currentQuestion.value.answer;
};

function onSubmit() {
  isAnswerCorrect.value = checkAnswer();
  if (isAnswerCorrect.value) {
    canGoNext.value = true;
  }
}

function goNext() {
  selectedAnswer.value = null;
  isAnswerCorrect.value = null;
  canGoNext.value = false;

  console.log(currentQuestionIndex.value);
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    currentQuestionIndex.value = 0;
  }
}

</script>
<template>
  <div class="quiz">
    <form v-on:submit.prevent="selectedAnswer != null ? onSubmit() : null">
      <h2>{{ currentQuestion.question }}</h2>
      <ul style="margin-bottom: 20px;margin-top: 20px;">
        <li v-for="(questionAnswer, index) in currentQuestion.options" :key="index">
          <input type="radio" :id="index" :value="questionAnswer" v-model="selectedAnswer" />
          <label>{{ questionAnswer }}</label>
        </li>
      </ul>

      <div v-if="isAnswerGiven && isAnswerCorrect != null && isAnswerCorrect" class="results-correct">
        <label>Correct!</label>
      </div>
      <div v-else-if="isAnswerGiven && isAnswerCorrect != null && !isAnswerCorrect" class="results-wrong">
        <label>Wrong!</label>
      </div>

      <div class="button-row">
        <button type="submit" class="submit-button">Submit</button>
        <button type="next" v-if="canGoNext" v-on:click="goNext" class="submit-button">Next</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.quiz {
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.results-wrong {
  margin-bottom: 20px;
  border: 2px solid white;
  padding: 10px;
}

.results-wrong label {
  color: red;
  font-weight: bold;
}

.results-correct {
  margin-bottom: 20px;
  border: 2px solid white;
  padding: 10px;
}

.results-correct label {
  color: green;
  font-weight: bold;
}

.button-row {
  display: flex;
  gap: 10px;
}

.submit-button {
  font-size: 18px;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
