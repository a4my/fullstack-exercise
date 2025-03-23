// Fetch data message from server on page load.
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/test')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').textContent = data.message;
    })
    .catch(error => console.error('Error fetching data:', error));  
});

// Fetch CSS from server when clicking on button
document.getElementById('load-css').addEventListener('click', () => {
    fetch('http://localhost:3000/api/style')
    .then(response => response.json())
    .then(data => {
      document.getElementById('title').style.color = data.color;
      document.getElementById('message').style.color = data.color;
    })
    .catch(error => console.error('Error fetching data:', error));
});
