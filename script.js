const search_form = document.querySelector('.header_form');
search_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.querySelector('#search').value;
  if (value) {
    search_Ip_Address(value);
  }
});
async function search_Ip_Address(ip_address) {
  const api_key = 'MY_API_KEY';
  const request = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip_address}`,
  );
  const response = await request.json();
  const { location, ip, isp } = response;
  update_ui(ip, location.city, location.timezone, isp);
  if (map !== undefined && map !== null) {
    map.remove();
  }
  create_map(location.lat, location.lng, location.country, location.region);
}
function update_ui(ip_address, location, timezone, isp) {
  const address = document.querySelector('.address');
  const city = document.querySelector('.location');
  const utc = document.querySelector('.utc');
  const isprovider = document.querySelector('.isp');
  address.textContent = ip_address;
  city.textContent = location;
  utc.textContent = 'UTC' + timezone;
  isprovider.textContent = isp;
}
let map;
function create_map(lat, lng, country, region) { 
  map = L.map('map').setView([lat, lng], 14); 
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`${region}, ${country}`)
    .openPopup();
}

const defaultIp = '197.210.78.172';
search_Ip_Address(defaultIp);
