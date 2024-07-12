document.addEventListener('DOMContentLoaded', function() {
    fetch('https://counterfucntion.azurewebsites.net/api/VisitorCounter?code=<your_function_key>')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitor-count').innerText = `Visitor count: ${data.visitorCount}`;
        })
        .catch(error => console.error('Error fetching visitor count:', error));
});
