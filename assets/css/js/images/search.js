document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const products = document.querySelectorAll(".product-card");

    function filterProducts() {

        const searchValue = searchInput.value.toLowerCase().trim();
        const categoryValue = categoryFilter.value.toLowerCase();

        products.forEach(product => {

            const title = product.querySelector("h3").innerText.toLowerCase();
            const category = product.dataset.category.toLowerCase();

            const matchSearch = title.includes(searchValue);

            const matchCategory =
                categoryValue === "all" ||
                category === categoryValue;

            if (matchSearch && matchCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    }

    searchInput.addEventListener("keyup", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);

});