let streak = Number(localStorage.getItem("streak")) || 0;

document.getElementById("streak").textContent = streak;

function changeStreak(amount) {
  streak = Math.max(0, streak + amount);
  document.getElementById("streak").textContent = streak;
  localStorage.setItem("streak", streak);
}
