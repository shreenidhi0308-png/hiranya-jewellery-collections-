const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = window.products.find(p => p && p.id === productId);
const productDetails = document.getElementById("productDetails");

if (product) {

    productDetails.innerHTML = `

        <div class="product-image">

            <img src="${product.image}" alt="${product.name}">

        </div>

        <div class="product-info">

            <h2>${product.name}</h2>

            <h3 class="product-price">
                ₹${product.price.toLocaleString("en-IN")}
            </h3>

            <p class="product-category">
                <strong>Category:</strong> ${product.category}
            </p>

            <p class="product-description">
                This exquisite jewellery piece is crafted with premium quality materials and elegant workmanship.
                Perfect for weddings, festive occasions and gifting your loved ones.
            </p>

            <div class="product-buttons">

                <button class="btn-cart" onclick="addToCart()">
                    Add to Cart
                </button>

                <button class="btn-buy" onclick="buyNow()">
                    Buy Now
                </button>

            </div>

        </div>

    `;

} else {

    productDetails.innerHTML = "<h2>Product not found</h2>";

}

function addToCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to Cart!");

}

function buyNow(){

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "checkout.html";

}