document.addEventListener('DOMContentLoaded', function() {
    updateDayCounter();
    setInterval(updateLiveCounter, 1000);
});

function updateDayCounter() {
    const specificDate = new Date('2024-03-08T00:00:00'); // Ensure this date starts at midnight
    const today = new Date();
    const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Set current time to midnight for accurate day comparison

    const diffInTime = todayAtMidnight.getTime() - specificDate.getTime();
    const daysSinceSpecificDate = Math.floor(diffInTime / (1000 * 3600 * 24));
    document.getElementById('dayCounter').innerText = `${daysSinceSpecificDate} days since 3/8/24`;
}


function updateLiveCounter() {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = nextDay - now;
    
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('liveCounter').innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(n) {
    return n < 10 ? '0' + n : n;
}
