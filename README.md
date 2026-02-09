🌍 GeoIP Explorer

GeoIP Explorer is a web application that allows users to search any IP address and visualize its location on an interactive map.
It uses the IP Geolocation API by IPify to fetch location, ISP, and timezone details, and LeafletJS to render the map dynamically.

🚀 Features

- 🔍 IP Address Lookup – Fetches city, region, country, ISP, and timezone information in real-time.
- 🗺️ Interactive Maps – Displays IP locations with LeafletJS markers and popups.
- ⚡ Responsive UI – Mobile-friendly design with a clean and modern interface.
- 🔄 Real-Time Updates – Map re-renders smoothly when a new IP address is searched.

🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- API: IPify Geolocation API
- Mapping: LeafletJS
- UI Design: Custom responsive CSS

📂 Project Structure

GeoIP-Explorer/
│── index.html      # Main HTML file  
│── style.css       # Styling (responsive UI + layout)  
│── script.js       # Logic for API requests + LeafletJS map  
│── README.md       # Project documentation  

⚙️ Setup & Installation

1. Clone the repository:

git clone https://github.com/shrikathota/GeoIP-Explorer.git
cd geoip-explorer

2. Open index.html in your browser.

3. Replace the placeholder API key in script.js with your own from IPify
  const api_key = "YOUR_API_KEY";

🎯 Usage
- Enter any IP address in the search bar.
- The app fetches data (location, ISP, timezone) and displays it.
- An interactive LeafletJS map highlights the location with a marker.

Developed by Shrika Thota
<br>
Check out the deployed version : https://geo-ip-explorer.netlify.app/
