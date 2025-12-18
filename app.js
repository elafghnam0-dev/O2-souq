const productsContainer = document.getElementById("products");
const brandFilter = document.getElementById("brandFilter");

function displayProducts(list) {
    productsContainer.innerHTML = "";
    list.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.brand}</p>
                <p>${product.price} جنيه</p>
                <button>اطلب الآن</button>
            </div>
        `;
    });
}

brandFilter.addEventListener("change", () => {
    const value = brandFilter.value;
    if (value === "all") {
        displayProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.brand === value);
        displayProducts(filtered);
    }
});

displayProducts(productsData);
