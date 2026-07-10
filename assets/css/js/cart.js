let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

function loadCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `
            <h2 style="text-align:center;">
                Your Cart is Empty
            </h2>
        `;

        totalPrice.innerHTML = "Total : ₹0";
        return;
    }

    cart.forEach((product,index)=>{

        total += product.price;

        cartItems.innerHTML += `

        <div class="product-details" style="margin-bottom:30px;">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h2>${product.name}</h2>

                <h3>₹${product.price.toLocaleString("en-IN")}</h3>

                <button class="cart-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML =
    "Total : ₹" + total.toLocaleString("en-IN");

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();

}

loadCart();