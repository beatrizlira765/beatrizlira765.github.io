const btn = document.getElementById('search-button');
btn.addEventListener('click', search);

function search() {
    const hobbyElement = document.getElementById('result');
    const category = document.getElementById('hobbies-category');
    const categoryValue = category.value;
    hobbyElement.textContent = 'Loading...';

  if (hobbiesCheckbox.checked) {
    fetch(`https://api.api-ninjas.com/v1/hobbies?category=${categoryValue}`, {
        headers: { 'X-Api-Key':'19q3yOoIgoBecY78iDugkeY3vLHAlksIEMBBdJ57' }
    })
    .then(response => response.json())
    .then(data => {
    if (data.hobby) {
        hobbyElement.textContent = data.hobby;
    } else {
        hobbyElement.textContent = 'No hobby found!';
    }})
    .catch(error => {
        console.error('Error fetching hobby:', error);
        hobbyElement.textContent = 'Failed to fetch hobby.';
    });
  }
  if (bucketListCheckbox.checked) {
    fetch(`https://api.api-ninjas.com/v1/bucketlist`, {
        headers: { 'X-Api-Key':'19q3yOoIgoBecY78iDugkeY3vLHAlksIEMBBdJ57' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.item) {
            hobbyElement.textContent = data.item;
        } else {
            hobbyElement.textContent = 'No bucket list item found!';
        }
    })
    .catch(error => {
        console.error('Error fetching bucket list item:', error);
        hobbyElement.textContent = 'Failed to fetch bucket list item.';
    });
  }
  
}
