const trendingProduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayTrendingProduct(data));
}

// Show showModal data
const showModal = (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayShowModal(data))
}

// display module 
const displayShowModal = (details) => {
    console.log(details);
    const modalContiner = document.getElementById("modal-continer");
    modalContiner.innerHTML = `
            <h2>ID: ${details.id}</h2>
            <p>${details.description}</p>
            <h2>Count: ${details.rating.count}</h2>
    `;
    document.getElementById("my_modal_5").showModal();
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
        <div class="bg-white rounded-xl shadow-md p-5 flex flex-col h-full">
    <div class="bg-gray-200 rounded-lg p-5 flex justify-center">
        <img src="${product.image}" class="h-40 object-contain">
    </div>
    <div class="mt-4 flex flex-col flex-grow">
        <p class="text-sm text-blue-500 mb-1">
            ${product.category}
        </p>
        <h2 class="font-semibold text-gray-800 mb-2 line-clamp-2">
            ${product.title}
        </h2>
        <div class="flex items-center justify-between mb-4">
            <span class="font-bold text-lg">$${product.price}</span>
            <span class="text-sm text-yellow-500">
                <i class="fa-solid fa-star"></i> ${product.rating.rate}
            </span>
        </div>
        <div class="flex gap-3 mt-auto">
            <button onclick="showModal(${product.id})"  class="flex-1 border rounded-md py-2 text-sm">
                Details
            </button>
            <button class="flex-1 bg-blue-700 text-white rounded-md py-2 text-sm hover:bg-blue-800">
                Add
            </button>
        </div>
    </div>
</div>
        `

        // 4 append cardDiv in trendingCard
        trendingCard.append(cardDiv);
    });
}

trendingProduct();