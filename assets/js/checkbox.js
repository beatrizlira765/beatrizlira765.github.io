// Get the checkboxes
const hobbiesCheckbox = document.getElementById('hobbies');
const bucketListCheckbox = document.getElementById('bucket-list');

const categoryInput = document.getElementById('hobbies-category');
const result = document.getElementById('result');

hobbiesCheckbox.addEventListener('change', () => {
    if (hobbiesCheckbox.checked) {
        bucketListCheckbox.checked = false;
    }

    categoryInput.style.display = hobbiesCheckbox.checked ? "block" : "none";

    categoryInput.value = "";
    result.textContent = "";
});

bucketListCheckbox.addEventListener('change', () => {
    if (bucketListCheckbox.checked) {
        hobbiesCheckbox.checked = false;
    }

    categoryInput.style.display = hobbiesCheckbox.checked ? "block" : "none";

    categoryInput.value = "";
    result.textContent = "";
});