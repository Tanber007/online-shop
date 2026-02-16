const trendingProduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayTrendingProduct(data));
}

const displayTrendingProduct = (products) => {
    // 1. get the container and empty
    const trendingCard = document.getElementById("trending-card");
    trendingCard.innerHTML = "";

    //2. get into even lessons
    products.slice(0, 3).forEach(product => {


        //         {
        //     "id": 1,
        //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        //     "price": 109.95,
        //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        //     "category": "men's clothing",
        //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        //     "rating": {
        //       "rate": 3.9,
        //       "count": 120
        //     }
        //   },

        //3 create element
        const cardDiv = document.createElement("div");
        cardDiv.className = "p-4 rounded-xl shadow-sm";
        cardDiv.innerHTML = `
                <div class="bg-gray-200 rounded-lg p-5 flex justify-center">
                    <img src="${product.image}" class="h-40 object-contain">
                </div>

                <div class="mt-4">
                    <p class ="text-sm text-blue-500 mb-1">
                        ${product.category}    
                    </p>
                    <h2 class="font-semibold text-gray-800 mb-2">
                        ${product.title}
                    </h3>
                    <div class="flex items-center justify-between mb-4">
                    <span class="font-bold text-lg">$${product.price}</span>
                    <span class="text-sm text-yellow-500">
                        <i class="fa-solid fa-star"></i> ${product.rating.rate}
                    </span>
                </div>

                <div class="flex gap-3">
                    <button class="flex-1 border rounded-md py-2 text-sm">
                        Details
                    </button>
                    <button class="flex-1 bg-blue-700 text-white rounded-md py-2 text-sm hover:bg-blue-800">
                        Add
                    </button>
                </div>
            </div>
        `

        // 4 append cardDiv in trendingCard
        trendingCard.append(cardDiv);
    });
}

trendingProduct();