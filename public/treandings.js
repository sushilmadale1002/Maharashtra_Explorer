// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});

// Places data
const places = [
    {
        name: "Mahabaleshwar",
        image: "img/mahabaleshwar.jpeg",
        description: "Mahabaleshwar is a scenic hill station located in the Western Ghats of Maharashtra. Known for its lush green landscapes, strawberry farms, and panoramic viewpoints like Arthur's Seat and Wilson Point, it attracts nature lovers and tourists year-round. The cool climate, historic temples, and boat rides in Venna Lake add to its charm.",
        latitude: 17.9307,
        longitude: 73.6477,   
        rating: 4.7
    },
    {
        name: "Matheran",
        image: "img/Matheran.avif",
        description: "Matheran is a peaceful hill station near Mumbai, famous for its toy train, pollution-free environment, and cool weather. It offers stunning views from points like Panorama Point and Echo Point, perfect for a relaxing summer picnic.",
        latitude: 18.9856,
        longitude: 73.2716,
        rating: 4.6
    },
    {
        name: "Lonavala and Khandala",
        image: "img/Lonavala and Khandala.avif",
        description: "Lonavala and Khandala are twin hill stations nestled in the Sahyadri ranges, offering misty hills, waterfalls, and scenic landscapes. Attractions include Bhushi Dam, Rajmachi Point, and Tiger's Leap — ideal for summer getaways.",
        latitude: 18.7481,
        longitude: 73.4072,
        rating: 4.5
    },
    {
        name: "Panchgani",
        image: "img/Panchgani.avif",
        description: "Panchgani, located close to Mahabaleshwar, is a beautiful hill station known for Table Land, strawberry farms, and colonial-era charm. It provides a refreshing escape with pleasant temperatures in summer.",
        latitude: 17.9237,
        longitude: 73.8008,
        rating: 4.6
    },
    {
        name: "Bhandardara",
        image: "img/Bhandardara.jpg",
        description: "Bhandardara is a tranquil village on the banks of the Pravara River. It's famous for Arthur Lake, Randha Falls, and Mount Kalsubai — Maharashtra's highest peak. Ideal for picnics, camping, and nature walks.",
        latitude: 19.5246,
        longitude: 73.7715,
        rating: 4.7
    },
    {
        name: "Amboli Ghat",
        image: "img/Amboli Ghat.jpg",
        description: "Amboli is a hill station in the Sindhudurg district known for its dense forests, waterfalls, and misty viewpoints. With cool temperatures even in summer, it's a lesser-known gem for a peaceful picnic.",
        latitude: 15.9635,
        longitude: 74.0007,
        rating: 4.5
    },
    {
        name: "Toranmal",
        image: "img/Toranmal.jpg",
        description: "Toranmal is a peaceful hill station located in the Satpura range of Nandurbar district. Known for cool weather, waterfalls, and lakes like Yashavant Lake, it's perfect for a serene summer escape.",
        latitude: 21.8654,
        longitude: 74.4692,
        rating: 4.4
    },
    {
        name: "Chikhaldara",
        image: "img/Chikhaldara.jpg",
        description: "Chikhaldara is the only coffee-growing area in Maharashtra and a summer hill station in Amravati district. Surrounded by wildlife and viewpoints, it's ideal for adventure and nature lovers.",
        latitude: 21.4167,
        longitude: 77.3333,
        rating: 4.5
    },
    {
        name: "Alibaug",
        image: "img/Alibaug.jpg",
        description: "Alibaug is a coastal town known for its clean beaches, historic forts, and relaxed vibe. Just a few hours from Mumbai, it's perfect for beachside picnics, watersports, and sunsets.",
        latitude: 18.6414,
        longitude: 72.8722,
        rating: 4.4
    },
    {
        name: "Harihareshwar",
        image: "img/Harihareshwar Beach & Temple.jpg",
        description: "Harihareshwar is a serene beach town in the Konkan region, also known as 'Dakshin Kashi' due to its ancient Shiva temple. It offers a peaceful coastal retreat with beautiful shoreline and spiritual calm.",
        latitude: 17.9981,
        longitude: 73.0004,
        rating: 4.3
    },
    {
        name: "Diveagar",
        image: "img/Diveagar Beach.jpg",
        description: "Diveagar is a quiet beach village in Raigad district. Known for its unspoiled beach, coconut groves, and local seafood, it's an ideal weekend picnic destination away from the crowd.",
        latitude: 18.1759,
        longitude: 73.0276,
        rating: 4.3
    },
    {
        name: "Kashid Beach",
        image: "img/Kashid Beach.jpg",
        description: "Kashid Beach is a scenic, clean beach located between Alibaug and Murud. With white sand, blue waters, and adventure activities like banana rides and parasailing, it's perfect for a fun summer picnic.",
        latitude: 18.4367,
        longitude: 72.8752,
        rating: 4.4
    }
];

// Display places
const placesContainer = document.getElementById('places-container');

places.forEach(place => {
    const placeCard = document.createElement('div');
    placeCard.className = 'place-card';
    
    placeCard.innerHTML = `
        <div class="card-image">
            <img src="${place.image}" alt="${place.name}">
            <div class="card-rating">
                <i class="fas fa-star"></i> ${place.rating}
            </div>
        </div>
        <div class="card-content">
            <h3>${place.name}</h3>
            <div class="card-location">
                <i class="fas fa-map-marker-alt"></i> Maharashtra, India
            </div>
            <p>${place.description}</p>
            <a href="explore.html" class="card-btn">Explore More</a>
        </div>
    `;
    
    placesContainer.appendChild(placeCard);
});


// Initialize map
function initMap() {
// Initialize the map centered on Maharashtra
const map = L.map('trending-map').setView([18.5204, 73.8567], 7); // Maharashtra coordinates and zoom level

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom icon for markers
const customIcon = L.icon({
iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
iconSize: [32, 32],
iconAnchor: [16, 32],
popupAnchor: [0, -32]
});

// Add markers for each place
places.forEach(place => {
const marker = L.marker([place.latitude, place.longitude], { icon: customIcon })
    .addTo(map)
    .bindPopup(`
        <div style="width: 200px;">
            <h3 style="margin: 5px 0; color: #006b5b;">${place.name}</h3>
            <p style="margin: 5px 0; font-size: 12px;">${place.description.substring(0, 100)}...</p>
            <a href="#" onclick="focusOnPlace('${place.name}')" style="color: #006b5b; font-size: 12px;">View Details</a>
        </div>
    `);
});

// Fit map to show all markers
if (places.length > 0) {
const group = new L.featureGroup(places.map(place => 
    L.marker([place.latitude, place.longitude])
));
map.fitBounds(group.getBounds().pad(0.2));
}
} // <-- This was missing

// Helper function to focus on a specific place when clicked from map popup
function focusOnPlace(placeName) {
const placeElement = Array.from(document.querySelectorAll('.place-card h3'))
.find(el => el.textContent === placeName)
.closest('.place-card');

if (placeElement) {
placeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
placeElement.style.animation = 'highlight 1.5s';
setTimeout(() => {
    placeElement.style.animation = '';
}, 1500);
}
}

// Load map when page loads
window.onload = initMap;