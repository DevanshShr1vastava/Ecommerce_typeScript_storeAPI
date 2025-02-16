var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { productContainer, categorySelectDropdown, editProductModal, showProductModal, updateProductForm, showProductModalImage, showProductModalTitle, showProductModalDescription, showProductModalPrice, showProductModalRating, showProductModalCategory, showAlert } from './domElements.js';
export const createProductCards = () => {
    productContainer.innerHTML = ``;
    let row;
    const productData = JSON.parse(localStorage.getItem('productData') || "");
    row = document.createElement('div');
    row.className = 'row row-cols-1 row-cols-md-3 g-4 mb-4';
    productContainer.appendChild(row);
    for (let i = 0; i < productData.length; i++) {
        const columnCard = document.createElement('div');
        columnCard.className = 'col';
        columnCard.innerHTML = `            
            <div class="card h-100">
                <img src="${productData[i].image}" class="card-img-top img-thumbnail img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${productData[i].title}  </h5>
                    <p class="card-text card-text-truncate">${productData[i].description} </p>
                    <button class='btn btn-warning'>Show Details</button>
                </div>
                <div class="card-footer text-center">
                    <div class="row">
                        <div class="col align-self-start">
                        <small class="text-body-secondary">Rating : ${productData[i].rating.rate}</small> 
                            <small class="text-body-secondary">Price : $${productData[i].price}</small>
                        </div>
                        <div class="col align-self-end">
                            <button data-bs-toggle="modal" data-bs-target="#edit-modal" class = "btn btn-secondary btn-sm">✏️Edit</button>
                            <button class = "btn btn-danger btn-sm">🗑️Delete</button>

                        </div>
                    </div>
                </div>
            </div>           
        `;
        row.appendChild(columnCard);
    }
};
export const showProductDetails = (prodData) => {
    showProductModalImage.src = prodData[0].image;
    showProductModalTitle.textContent = prodData[0].title;
    showProductModalDescription.textContent = prodData[0].description;
    showProductModalPrice.textContent = `Price : ${prodData[0].price}`;
    showProductModalRating.textContent = `Rating : ${prodData[0].rating.rate}`;
    showProductModalCategory.textContent = `Category : ${prodData[0].category}`;
    showProductModal.show();
};
export const updateProductCards = (prodData) => {
    localStorage.setItem('updateProductId', `${prodData[0].id}`);
    const elements = updateProductForm.elements;
    elements.updateProdTitle.value = prodData[0].title;
    elements.updateProdPrice.value = `${prodData[0].price}`;
    elements.updateProdRating.value = prodData[0].rating.rate;
    elements.updateProdCategory.value = prodData[0].category;
    elements.updateProdImage.value = prodData[0].image;
    elements.updateProdDescription.value = prodData[0].description;
    editProductModal.show();
};
export const getProductsAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://fakestoreapi.com/products');
        const allProductData = yield response.json();
        localStorage.setItem('productData', JSON.stringify(allProductData));
        console.log(JSON.parse(localStorage.getItem('productData') || ""));
        console.log('all cards added to product page');
        createProductCards();
    }
    catch (err) {
        console.error(err);
    }
});
export const getProductsLimit = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        const limitProductData = yield response.json();
        localStorage.setItem('productData', JSON.stringify(limitProductData));
        console.log('adding cards to product page');
        createProductCards();
    }
    catch (err) {
        console.error(err);
    }
});
export const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://fakestoreapi.com/products/categories');
        const categoryData = yield response.json();
        const addDataList = document.querySelector('#addList');
        const updateDataList = document.querySelector('#updateList');
        categoryData.forEach((category) => {
            const dropDownCategoryElement = document.createElement('li');
            const addListOptionElement = document.createElement('option');
            const updateListOptionElement = document.createElement('option');
            addListOptionElement.value = `${category}`;
            addListOptionElement.textContent = `${category}`;
            updateListOptionElement.value = `${category}`;
            updateListOptionElement.textContent = `${category}`;
            addDataList.appendChild(addListOptionElement);
            updateDataList.appendChild(updateListOptionElement);
            dropDownCategoryElement.innerHTML = `<a class="dropdown-item" href="#">${category}</a>`;
            categorySelectDropdown.appendChild(dropDownCategoryElement);
        });
    }
    catch (err) {
        console.error(err);
    }
});
export const getProductByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://fakestoreapi.com/products/category/${category}`);
        const categoryProductData = yield response.json();
        localStorage.setItem('productData', JSON.stringify(categoryProductData));
        console.log('switching cards to product page based on category : ', category);
        createProductCards();
    }
    catch (err) {
        console.error(err);
    }
});
export const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    showAlert.append(wrapper);
};
export const addNewProduct = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(postData)
        });
        const data = yield response.json();
        const status = response.status;
        const allProductData = JSON.parse(localStorage.getItem('productData') || "");
        allProductData.unshift(postData);
        localStorage.setItem('productData', JSON.stringify(allProductData));
        createProductCards();
        appendAlert(`Product Added successfully with status : ${status}`, 'success');
        document.getElementById('add-product-form').reset();
        console.log(postData);
    }
    catch (err) {
        console.error(err);
    }
});
export const updateProduct = (updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://fakestoreapi.com/products/${localStorage.getItem('updateProductId')}`, {
            method: "PATCH",
            body: JSON.stringify(updatedData)
        });
        const data = yield response.json();
        const status = response.status;
        const allProductData = JSON.parse(localStorage.getItem('productData') || "");
        const updateProductId = Number(localStorage.getItem('updateProductId'));
        const updateProductIndex = allProductData.findIndex((el) => Number(el.id) === updateProductId);
        allProductData.splice(updateProductIndex, 1, updatedData);
        localStorage.removeItem('updateProductId');
        localStorage.setItem('productData', JSON.stringify(allProductData));
        createProductCards();
        appendAlert(`Product Updated successfully with status : ${status}`, 'warning');
        console.log(data.message);
    }
    catch (err) {
        console.error(err);
    }
});
export const deleteProduct = (productToDelete) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://fakestoreapi.com/products/${Number(productToDelete[0].id)}`, {
            method: "DELETE",
            body: JSON.stringify(productToDelete)
        });
        const data = yield response.json();
        const status = response.status;
        const allProductData = JSON.parse(localStorage.getItem('productData') || "");
        const productToDeleteIndex = allProductData.indexOf(allProductData.find((el) => Number(el.id) === Number(productToDelete[0].id)));
        allProductData.splice(productToDeleteIndex, 1);
        localStorage.setItem('productData', JSON.stringify(allProductData));
        appendAlert(`Product Removed Successfully with status : ${status}`, 'danger');
        createProductCards();
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
});
