// Get progress bar element
const progressBar = document.getElementById("progress-bar");

// Create inner bar to show progress
const progressBarInner = document.createElement("div");
progressBarInner.id = "progress-bar-inner";
progressBar.appendChild(progressBarInner);

// Function to update progress bar
function updateProgressBar() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBarInner.style.width = scrollPercent + "%";
}

// Listen for scroll events
window.addEventListener("scroll", updateProgressBar);
