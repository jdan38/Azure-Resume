// script.js
fetch('https://your-azure-function-url')
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').textContent = `Visitors: ${data.count}`;
    })
    .catch(error => console.error('Error fetching visitor count:', error));

