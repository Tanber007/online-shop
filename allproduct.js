// load categories button sec - 1 
const categories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data))
}

// all data
const trendingProduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayCategoriesData(data));
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


// load categories card sec - 2 
const loadCategoriesData = (category) => {

    const url = `https://fakestoreapi.com/products/category/${category}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoriesData(data));
}

// load categories card sec - 2 
const displayCategoriesData = (product) => {

    // 1. get the container and empt
    const cardContiner = document.getElementById("product-continer");
    cardContiner.innerHTML = "";

    //2. get into even lessons
    product.forEach(product => {
        //3. create Element
        const card = document.createElement("div");
        card.innerHTML = `
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
            <button onclick="showModal(${product.id})" class="flex-1 border rounded-md py-2 text-sm">
                Details
            </button>
            <button class="flex-1 bg-blue-700 text-white rounded-md py-2 text-sm hover:bg-blue-800">
                Add
            </button>
        </div>
    </div>
</div>
 `
        // 4. append
        cardContiner.append(card);
    });
}


// load categories button sec - 1 
const displayCategories = (products) => {
    // 1. get the container and empt
    const categoriesProduct = document.getElementById("categories-product");
    categoriesProduct.innerHTML = "";

    // creat All Product btn
    const allBtnDiv = document.createElement("div");
    allBtnDiv.innerHTML = `
    <button onclick="trendingProduct(); setActiveButton(this)" 
    class="category-btn active-btn px-5 py-2 border border-blue-700 bg-blue-700 text-white rounded-full transition duration-300">
        All
    </button>
    `;
    categoriesProduct.append(allBtnDiv);


    //2. get into even lessons
    products.forEach(product => {
        console.log(product);
        //3. create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button onclick="loadCategoriesData('${product}'); setActiveButton(this)" 
            class="category-btn px-5 py-2 border border-gray-400 rounded-full text-gray-700 hover:border-black hover:text-black transition duration-300">
                ${product}
            </button>
        `
        // 4. append
        categoriesProduct.append(btnDiv);
    })


}

//  Activ the btn
const setActiveButton = (clickedBtn) => {

    const allButtons = document.querySelectorAll(".category-btn");

    allButtons.forEach(btn => {
        btn.classList.remove("bg-blue-700", "text-white", "border-blue-700");
        btn.classList.add("border-gray-400", "text-gray-700");
    });

    clickedBtn.classList.remove("border-gray-400", "text-gray-700");
    clickedBtn.classList.add("bg-blue-700", "text-white", "border-blue-700");
};

categories();
trendingProduct();