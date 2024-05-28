document.getElementById('inuButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://incheon/web')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('webData', JSON.stringify(data));
            displayData();
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData() {
    const data = JSON.parse(localStorage.getItem('webData'));
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (data && Array.isArray(data)) {
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `Class: ${item.class}`;
            outputDiv.appendChild(itemDiv);
        });
    } else {
        outputDiv.textContent = 'No data available';
    }
}
