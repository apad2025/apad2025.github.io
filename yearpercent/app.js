// app.js
window.onload = function() {
    let now = new Date();
    let startOfYear = new Date(now.getFullYear(), 0, 1);
    let endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    let daysInYear = (endOfYear - startOfYear) / (1000 * 60 * 60 * 24);
    let daysPassed = (now - startOfYear) / (1000 * 60 * 60 * 24);
    
    let percentage = ((daysPassed / daysInYear) * 100).toFixed(2);
  
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    document.getElementById('percentage').textContent = `${percentage}% of the year has passed`;
  
    // Initialize theme
    const toggle = document.getElementById('toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      toggle.checked = currentTheme === 'dark';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      toggle.checked = true;
    }
  
    // Listen for toggle switch
    toggle.addEventListener('change', function() {
      document.body.classList.toggle('dark');
      const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });
  }
  