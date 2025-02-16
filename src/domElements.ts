declare var bootstrap:any; 

export const productContainer = document.querySelector('#product-container') as HTMLElement;
export const categorySelectDropdown = document.querySelector('#category-select-dropdown-list') as HTMLElement;
export const showAllProducts = document.querySelector('#all-product-link') as HTMLElement;

export const showProductModalImage = document.querySelector('#show-product-image') as HTMLImageElement;
export const showProductModalTitle = document.querySelector('#show-product-title') as HTMLElement
export const showProductModalDescription = document.querySelector('#show-product-description') as HTMLElement
export const showProductModalPrice = document.querySelector('#show-product-price') as HTMLElement
export const showProductModalRating = document.querySelector('#show-product-rating') as HTMLElement
export const showProductModalCategory = document.querySelector('#show-product-category') as HTMLElement

export const addProductLink = document.querySelector('#add-product-link') as HTMLElement;
export const addProductModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
export const editProductModal = new bootstrap.Modal(document.getElementById('edit-modal'));
export const showProductModal = new bootstrap.Modal(document.getElementById('product-show-modal-container'));
export const showAlert = document.getElementById('liveAlertPlaceholder') as HTMLElement;

export const addProductModalBody = document.querySelector('.modal-body') as HTMLElement;
export const addProductButton = document.querySelector('#addProductButton') as HTMLElement;

export const updateProdButton = document.querySelector('#update-prod-item-button') as HTMLElement;

export const updateProductForm = document.querySelector('#update-product-form') as HTMLFormElement;

export const limitCardsDropdown = document.querySelector('#limit-card-dropdown') as HTMLElement;
export const changeThemeButton = document.querySelector('#changeTheme') as HTMLElement;
