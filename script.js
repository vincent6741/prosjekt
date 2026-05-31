







/*---------------------------- SOLSYSTEMET----------------------------------- */
const solenEl = document.querySelector('.sun-card')
const merkurEl = document.querySelector('#btn-merkur')
const venusEl = document.querySelector('#btn-venus')
const jordenEl = document.querySelector('#btn-jorden')
const marsEl = document.querySelector('#btn-mars')
const jupiterEl = document.querySelector('#btn-jupiter')
const saturnEl = document.querySelector('#btn-saturn')
const uranusEl = document.querySelector('#btn-uranus')
const neptunEl = document.querySelector('#btn-neptun')

const panels = document.querySelectorAll('.fact-panel')
const cards = document.querySelectorAll('.planet-card')

function visPanel(kortEl, panelId) {
  const panelEl = document.querySelector('#' + panelId)
  const erAktiv = panelEl.classList.contains('active')

  panels.forEach(panel => panel.classList.remove('active'))
  cards.forEach(card => card.classList.remove('active'))

  if (!erAktiv) {
    panelEl.classList.add('active')
    kortEl.classList.add('active')
  }
}

solenEl.addEventListener('click', function () {
  visPanel(solenEl, 'solen')
})
merkurEl.addEventListener('click', function () {
  visPanel(merkurEl, 'merkur')
})
venusEl.addEventListener('click', function () {
  visPanel(venusEl, 'venus')
})
jordenEl.addEventListener('click', function () {
  visPanel(jordenEl, 'jorden')
})
marsEl.addEventListener('click', function () {
  visPanel(marsEl, 'mars')
})
jupiterEl.addEventListener('click', function () {
  visPanel(jupiterEl, 'jupiter')
})
saturnEl.addEventListener('click', function () {
  visPanel(saturnEl, 'saturn')
})
uranusEl.addEventListener('click', function () {
  visPanel(uranusEl, 'uranus')
})
neptunEl.addEventListener('click', function () {
  visPanel(neptunEl, 'neptun')
})

/* ----------------------------------------SOLSYSTEMET SLUTT------------------------------ */