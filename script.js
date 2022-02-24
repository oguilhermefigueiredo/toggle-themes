const toggleBtn = document.querySelector(".toggle-btn")
const themesContainer = document.querySelector(".themes-container")

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  const currentRotation = parseInt(getComputedStyle(themesContainer).getPropertyValue("--rotation"))
  themesContainer.style.setProperty("--rotation", currentRotation + 180)
})

console.log("It's running...")
