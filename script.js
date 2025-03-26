// Countdown code
// Set the date we're counting down to
var countDownDate = new Date("Apr 26, 2025 00:00:00").getTime()

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let secs = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result

  document.getElementById("Days").textContent = days
  document.getElementById("Hours").textContent = hours
  document.getElementById("Mins").textContent = mins
  document.getElementById("Secs").textContent = secs
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById("demo").innerHTML = "EXPIRED"
  }
}, 1000)
// // toggle for showing which day for flow of events

// function showDay(day) {
//   document.querySelectorAll(".event-table").forEach((table, index) => {
//     if (index + 1 === day) {
//       table.classList.add("active")
//     } else {
//       table.classList.remove("active")
//     }
//   })

//   // Update button styling
//   document.querySelectorAll(".toggle-btn").forEach((btn, index) => {
//     btn.classList.toggle("active", index + 1 === day)
//   })
// }

// // Show Day 1 by default
// document.addEventListener("DOMContentLoaded", function () {
//   showDay(1)
// })

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
document.getElementById("intro-video").playbackRate = 2.5
