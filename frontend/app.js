document.getElementById('create-feature-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    const response = await fetch('http://localhost:5000/api/features', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, category, userId: 'user123' }),
    });

    console.log(features); // Log the fetched features
    features.forEach(feature => displayFeature(feature));
});

async function fetchFeatures() {
    const response = await fetch('http://localhost:5000/api/features');
    const features = await response.json();

    features.forEach(feature => displayFeature(feature));
}

function displayFeature(feature) {
    const featureList = document.getElementById('feature-list');
    const featureDiv = document.createElement('div');
    featureDiv.innerHTML = `
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
        <p>Category: ${feature.category}</p>
    `;
    featureList.appendChild(featureDiv);
}

// Initial fetch to display features
fetchFeatures();
