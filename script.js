const FaktaEl = document.querySelector(".text")
const btnEl = document.querySelector(".fakta")

btnEl.addEventListener("click", function(){
    FaktaEl.classList.toggle("active")
    btnEl.textContent = FaktaEl.classList.contains("active") ? "Les mindre" : "Les mer"})