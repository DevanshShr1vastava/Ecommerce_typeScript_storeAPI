import { productContainer, categorySelectDropdown, showAllProducts, addProductLink, addProductModal, editProductModal, addProductButton, changeThemeButton, limitCardsDropdown, updateProdButton, updateProductForm, } from './domElements.js';
import { updateProductCards, getProductsAll, getProductsLimit, getProductByCategory, addNewProduct, updateProduct, deleteProduct, showProductDetails } from './apis.js';
categorySelectDropdown.addEventListener('click', (e) => {
    var _a;
    const target = e.target;
    if (target.classList.contains('dropdown-item')) {
        const categorySelected = (_a = target.closest('.dropdown-item')) === null || _a === void 0 ? void 0 : _a.textContent;
        console.log(categorySelected);
        getProductByCategory(categorySelected);
    }
});
productContainer.addEventListener('click', (e) => {
    const target = e.target;
    const selectedProduct = target.closest('.card');
    const retrieveData = JSON.parse(localStorage.getItem('productData')).filter((el) => el.image === (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.childNodes[1]).src);
    if (target.classList.contains('btn-secondary')) {
        updateProductCards(retrieveData);
    }
    if (target.classList.contains('btn-danger')) {
        deleteProduct(retrieveData);
    }
    if (target.classList.contains('btn-warning')) {
        showProductDetails(retrieveData);
    }
});
updateProdButton.addEventListener('click', () => {
    const elements = updateProductForm.elements;
    const updatedProduct = {
        id: Number(localStorage.getItem('updateProductId')),
        title: elements.updateProdTitle.value,
        price: Number(elements.updateProdPrice.value),
        description: elements.updateProdDescription.value,
        image: elements.updateProdImage.value,
        category: elements.updateProdCategory.value,
        rating: {
            rate: elements.updateProdRating.value
        }
    };
    updateProduct(updatedProduct);
    editProductModal.hide();
});
addProductButton.addEventListener('click', () => {
    const prod_data = {
        title: document.querySelector('#prod-title').value,
        id: Number(JSON.parse(localStorage.getItem('productData') || "").length) + 1,
        description: document.querySelector('#prod-description').value,
        image: document.querySelector('#prod-image').value,
        category: document.querySelector('#prod-category').value,
        price: Number(document.querySelector('#prod-price').value),
        rating: {
            rate: document.querySelector('#prod-rating').value,
        }
    };
    addNewProduct(prod_data);
    addProductModal.hide();
});
showAllProducts.addEventListener('click', () => {
    getProductsAll();
});
addProductLink.addEventListener('click', () => {
    addProductModal.show();
});
changeThemeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const pageElement = document.querySelector('html');
    pageElement.getAttribute('data-bs-theme') === 'dark' ? pageElement.setAttribute('data-bs-theme', 'light') : pageElement.setAttribute('data-bs-theme', 'dark');
});
limitCardsDropdown.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLimit = e.target.closest('a');
    const limit = Number(selectedLimit.textContent);
    if (e.target.classList.contains('dropdown-item')) {
        getProductsLimit(limit);
    }
});
