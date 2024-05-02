const containerDom = document.querySelector("#container")
console.log(containerDom)



const addCompanyName = (companyName) => {
    const h1 = document.createElement("h1")
    h1.innerText = companyName
    console.log(h1)
    containerDom.appendChild(h1)
}



const fetchApi = () => {
    fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/instruments-musique-monde.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.entreprise.temoignages
            console.log(data.entreprise.temoignages)
            data.entreprise.temoignages.forEach(element => {
                    console.log(element);
                    console.log(element.prenom)
            });


        })
}

fetchApi()
// Sample data (you can replace it with actual data fetched from an API)
const instruments = [
    { name: "Guitar", price: 500, image: "leutrim-fetahu-USOqMHpBl5Q-unsplash.jpg" },
    { name: "Piano", price: 1500, image: "johannes-plenio-RWytwNueNng-unsplash.jpg" },
    { name: "Drums", price: 800, image: "asba-drums-pjYJZhhIB98-unsplash.jpg" },
    { name: "batterie", price: 2000, image: "josh-sorenson-MjIMc6uhwrE-unsplash.jpg" },

];

// Function to display products on the page
function displayProducts() {
    const productsContainer = document.querySelector('.products');

    instruments.forEach(instrument => {
        const productHTML = `
            <div class="product">
                <img src="${instrument.image}" alt="${instrument.name}">
                <h3>${instrument.name}</h3>
                <p>Price: $${instrument.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productsContainer.innerHTML += productHTML;
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;