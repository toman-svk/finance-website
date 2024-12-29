import { drawChart } from './chart.js';

let pages = {}; //Store the content


function loadContent() {
    fetch("content.json")
    .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load content.");
        }
        return response.json();
      })
      .then((data) => {
        pages = data.pages; // Store the content in the pages variable
        const initialPage = window.location.hash.substring(1) || "home";
        loadPage(initialPage); // Load the initial page
      })
      .catch((error) => console.error("Error loading content:", error));
}


// Function to load a specific page
function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page] || `<h1>Page Not Found</h1>`;

  // Check if the page is 'home' and ensure the chart container exists
  if (page === "home") {
    // Add the chart container dynamically
    const chartContainer = document.createElement("div");
    chartContainer.id = "chart_div";
    chartContainer.style.width = "100%";
    chartContainer.style.height = "500px";

    content.appendChild(chartContainer); // Append to the DOM

    // Now, call drawChart()
    google.charts.setOnLoadCallback(drawChart);
  }

}

  
// Set up event listeners for navigation
document.getElementById("navbar").addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    if (page) {
        loadPage(page);
        history.pushState({ page }, "", `#${page}`);
    }
});
  
  // Handle back/forward navigation
window.addEventListener("popstate", (e) => {
    const page = e.state?.page || "home";
    loadPage(page);
});
  
// Load content from JSON on page load
loadContent();