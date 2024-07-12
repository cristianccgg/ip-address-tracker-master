const resultsDiv = document.getElementById("results");
const ipInput = document.getElementById("input");
const apiKey = "at_ppenhHg2j1EkGVhRZzMFHhA19urE0";
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateIp();
});

var map = L.map("map").setView([51.505, -0.09], 19);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

async function fetchData(ipAddress = "") {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    );
    const json = await response.json();

    const ip = json.ip;
    const location = `${json.location.region}, ${json.location.country}`;
    const timezone = json.location.timezone;
    const isp = json.isp;
    const lat = json.location.lat;
    const lng = json.location.lng;

    if (ipInput.value) {
      resultsDiv.innerHTML = `<div class="flex flex-col items-center sm:items-start">
        <h2 class="text-xs">IP Address</h2>
        <h2 class="text-center font-semibold">${ip}</h2>
      </div>
      <div class="flex flex-col items-center sm:items-start">
        <h2 class="text-xs">Location</h2>
        <h2 class="text-center font-semibold">${location}</h2>
      </div>
      <div class="flex flex-col items-center sm:items-start">
        <h2 class="text-xs">Timezone</h2>
        <h2 class="text-center font-semibold">UTC${timezone}</h2>
      </div>
      <div class="flex flex-col items-center sm:items-start">
        <h2 class="text-xs">ISP</h2>
        <h2 class="text-center font-semibold">${isp}</h2>
      </div>`;

      map.setView([lat, lng], 15);
      L.marker([lat, lng]).addTo(map);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function updateIp() {
  const ipAddress = ipInput.value;
  fetchData(ipAddress);
}

fetchData();
