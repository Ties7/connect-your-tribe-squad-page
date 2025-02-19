const button = document.querySelector("button")
const kaartje = document.querySelector(".kaartje")

button.addEventListener('click', spin)

function spin() {
  kaartje.classList.toggle('hover')
}