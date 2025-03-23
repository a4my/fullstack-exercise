fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => console.error('Error fetching data:', error));
