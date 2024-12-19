// Update date display format
window.onload = function () {
    // Initial update
    updateDateTime();
    // Update every second
    setInterval(updateDateTime, 1000);
};

function updateDateTime() {
    const date = new Date();
    
    // Format date
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const fullDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    // Format time
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const time = date.toLocaleTimeString('en-US', timeOptions);
    
    // Update daytime period
    const hours = date.getHours();
    const daytime = hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
    
    // Combine all elements
    document.getElementById('current-info').innerHTML = 
        `${dayOfWeek} ${fullDate}<br>${time} - <span id="daytime">${daytime}</span>`;
}

// Update interests display
// const interests = document.querySelector('.interests');
// interests.textContent = 'Holograms, AI, Web3, Food, Badminton, Writing, Reading';
