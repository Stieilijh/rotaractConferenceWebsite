function updateCountdown() {
  const eventDate = new Date("April 26, 2025 00:00:00").getTime()
  const now = new Date().getTime()
  const timeLeft = eventDate - now

  if (timeLeft <= 0) {
    document.querySelector(".countdown").innerHTML = "<h3>Event Started!</h3>"
    return
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  document.getElementById("days").innerText = days.toString().padStart(2, "0")
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0")
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0")
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0")
}

setInterval(updateCountdown, 1000)
updateCountdown()

// toggle Menu bar for phones and tablets

function toggleMenu() {
  let menu = document.getElementById("nav-menu")
  menu.classList.toggle("active")

  // Ensure hamburger icon stays visible
  let hamburger = document.querySelector(".hamburger")
  if (menu.classList.contains("active")) {
    hamburger.style.position = "fixed" // Keep it in place
  } else {
    hamburger.style.position = "absolute" // Reset position
  }
}

// toggle for showing which day for flow of events

function showDay(day) {
  document.querySelectorAll(".event-table").forEach((table, index) => {
    if (index + 1 === day) {
      table.classList.add("active")
    } else {
      table.classList.remove("active")
    }
  })

  // Update button styling
  document.querySelectorAll(".toggle-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === day)
  })
}

// Show Day 1 by default
document.addEventListener("DOMContentLoaded", function () {
  showDay(1)
})

//animation
document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("intro-video")
  let overlay = document.getElementById("video-overlay")
  let blurOverlay = document.getElementById("blur-overlay")

  // Check if the browser supports video
  let canPlay = video.canPlayType("video/mp4")

  if (canPlay === "") {
    // If browser doesn’t support video, remove everything
    overlay.style.display = "none"
    blurOverlay.style.display = "none"
  } else {
    // If browser supports video, wait for it to finish
    video.onended = function () {
      blurOverlay.style.opacity = "0" // Fade out blur
      overlay.style.opacity = "0" // Fade out video

      setTimeout(() => {
        overlay.style.display = "none"
        blurOverlay.style.display = "none"
      }, 500)
    }
  }
})
