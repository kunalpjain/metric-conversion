/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('metric-input-el')
const errorEl = document.getElementById('error-el')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')
let input = null

convertBtn.addEventListener('click', function () {
  renderConversion()
})

inputEl.addEventListener('keyup', function () {
  event.preventDefault()
  if (event.keyCode === 13) {
    renderConversion()
  }
})

function renderConversion () {
  if (inputEl.value) {
    input = Number(inputEl.value)
    inputEl.value = ''
    if (Number.isNaN(input)) {
      errorEl.textContent = 'Please enter a valid number!'
      lengthEl.textContent = ''
      volumeEl.textContent = ''
      massEl.textContent = ''
    } else {
      errorEl.textContent = ''
      lengthEl.textContent = `${input} meters = ${(input * 3.281).toFixed(
        3
      )} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`
      volumeEl.textContent = `${input} liters = ${(input * 0.264).toFixed(
        3
      )} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters`
      massEl.textContent = `${input} kilogram = ${(input * 2.204).toFixed(
        3
      )} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilogram`
    }
  }
}
