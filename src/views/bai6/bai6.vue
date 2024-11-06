<template>
  <div class="converter-container">
    <h2>Currency Converter</h2>

    <label for="amount" class="label">Amount</label>
    <div class="input-wrapper">
      <i class="fas fa-money-bill-wave icon"></i>
      <input
        type="number"
        id="amount"
        v-model="data.amount"
        placeholder="Enter amount"
        class="input-field"
      />
    </div>

    <label for="from" class="label">From Currency</label>
    <div class="dropdown-wrapper">
      <i class="fas fa-arrow-alt-circle-down icon"></i>
      <select id="from" v-model="data.from" class="dropdown">
        <option disabled value="">From Currency</option>
        <option v-for="(name, code) in currencies" :key="code" :value="code">
          {{ code }} - {{ name }}
        </option>
      </select>
    </div>

    <label for="to" class="label">To Currency</label>
    <div class="dropdown-wrapper">
      <i class="fas fa-arrow-alt-circle-up icon"></i>
      <select id="to" v-model="data.to" class="dropdown">
        <option disabled value="">To Currency</option>
        <option v-for="(name, code) in currencies" :key="code" :value="code">
          {{ code }} - {{ name }}
        </option>
      </select>
    </div>

    <button @click="convertCurrency" class="convert-button">Convert</button>

    <div v-if="conversionResult" class="result">
      <p>Conversion Result: {{ conversionResult }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'

const data = reactive({
  amount: 0,
  from: '',
  to: '',
})

const currencies = reactive<Record<string, string>>({})
const conversionResult = ref<number | null>(null)

const fetchCurrencies = async () => {
  try {
    const response = await axios.get('https://api.fastforex.io/currencies', {
      params: { api_key: 'f3b158c30b-7bfb55723e-smgydr' }
    })
    Object.assign(currencies, response.data.currencies)
  } catch (error) {
    console.error('Error fetching currencies:', error)
    alert('Failed to fetch currency list.')
  }
}

const convertCurrency = async () => {
  if (!data.amount || !data.from || !data.to) {
    alert('Please fill in all fields')
    return
  }
  try {
    const response = await axios.get('https://api.fastforex.io/convert', {
      params: {
        from: data.from,
        to: data.to,
        amount: data.amount,
        api_key: 'f3b158c30b-7bfb55723e-smgydr'
      }
    })
    conversionResult.value = response.data.result[data.to]
  } catch (error) {
    console.error('Error fetching conversion data:', error)
    alert('Failed to fetch conversion data.')
  }
}

onMounted(fetchCurrencies)
</script>

<style scoped>
.converter-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 12px;
  background: linear-gradient(to bottom right, #f0f4f8, #e8f1ff);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #333;
}

.label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.input-wrapper,
.dropdown-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
}

.input-field {
  width: 100%;
  padding: 12px 12px 12px 40px;
  margin-bottom: 15px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
}

.dropdown {
  flex: 1;
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: inset 0   1px 4px rgba(0, 0, 0, 0.05);
  appearance: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.dropdown:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
}

.convert-button {
  width: 100%;
  padding: 12px;
  font-size: 1em;
  font-weight: bold;
  color: #ffffff;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(74, 144, 226, 0.2);
  transition: background-color 0.3s;
}

.convert-button:hover {
  background-color: #357abd;
}

.convert-button:active {
  transform: scale(0.97);
}

.result {
  margin-top: 20px;
  font-size: 1.1em;
  color: #333;
  font-weight: 500;
}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
