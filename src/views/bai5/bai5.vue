<template>
  <div class="countdown-container">
    <h1>Đồng hồ đếm ngược</h1>

    <div class="input-container">
      <div class="input-group">
        <label>Phút:</label>
        <input v-model.number="inputMinutes" type="number" min="0" placeholder="Nhập phút" />
      </div>
      <div class="input-group">
        <label>Giây:</label>
        <input v-model.number="inputSeconds" type="number" min="0" max="59" placeholder="Nhập giây" />
      </div>
    </div>

    <button class="start-button" @click="startCountdown">Bắt đầu đếm ngược</button>

    <div v-if="remainingTime > 0" class="time-display">
      Thời gian còn lại: {{ formatTime(remainingTime) }}
    </div>
    <div v-else-if="countdownEnded" class="time-display">
      Hết thời gian!
    </div>

  </div>
</template>

<script setup lang="ts">
import JSConfetti from 'js-confetti'
import { ref, watch, onBeforeUnmount } from 'vue'

const inputMinutes = ref<number>(0)
const inputSeconds = ref<number>(0)
const remainingTime = ref<number>(0)
const countdownEnded = ref<boolean>(false)
let interval: number | null = null
const jsConfetti = new JSConfetti()

const startCountdown = () => {
  const totalSeconds = inputMinutes.value * 60 + inputSeconds.value

  if (totalSeconds > 0) {
    remainingTime.value = totalSeconds
    countdownEnded.value = false

    if (interval) {
      jsConfetti.addConfetti()
      clearInterval(interval)
    }

    interval = setInterval(() => {
      if (remainingTime.value > 0) {
        remainingTime.value--
      } else {
        endCountdown()
      }
    }, 1000)
  }
}

const endCountdown = () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
  countdownEnded.value = true
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  })
}


const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

watch(remainingTime, (value) => {
  if (value <= 0 && interval) {
    endCountdown()
  }
})

onBeforeUnmount(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.countdown-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(circle at center, #2a2a72, #009ffd);
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 30px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.input-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 8px;
}

input {
  width: 80px;
  padding: 8px;
  font-size: 1.1rem;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 8px;
  background: transparent;
  color: #fff;
  outline: none;
  transition: box-shadow 0.3s ease;
}

input:focus {
  box-shadow: 0 0 10px #fff;
}

.start-button {
  margin-top: 10px;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #009ffd;
  background: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.start-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.start-button:active {
  transform: scale(1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.time-display {
  font-size: 2.5rem;
  color: #fff;
  margin-top: 20px;
  text-shadow: 0 0 10px #ff8e8e, 0 0 20px #ff6b6b;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
