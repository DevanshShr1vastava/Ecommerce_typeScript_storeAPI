import {
    productContainer,
    categorySelectDropdown,
    showAllProducts,
    addProductLink,
    addProductModal,
    editProductModal,
    addProductButton,
    changeThemeButton,
    limitCardsDropdown,
    updateProdButton,
    updateProductForm,
} from './domElements.js'
import {
    updateProductCards,
    getProductsAll,
    getProductsLimit,
    getProductByCategory,
    addNewProduct,
    updateProduct,
    deleteProduct,
    showProductDetails,
    IProductData,
    FormElements
} from './apis.js';


categorySelectDropdown.addEventListener('click',(e : Event)=>{
    const target = e.target as HTMLElement;
    if(target.classList.contains('dropdown-item')){

        const categorySelected = target.closest('.dropdown-item')?.textContent!;
        console.log(categorySelected);
        getProductByCategory(categorySelected);

    }
})

productContainer.addEventListener('click',(e:Event)=>{
    const target = e.target as HTMLElement;
    const selectedProduct = target.closest('.card');
    const retrieveData = JSON.parse(localStorage.getItem('productData')!).filter((el:IProductData)=>el.image === (selectedProduct?.childNodes[1] as HTMLImageElement).src);

    if(target.classList.contains('btn-secondary')){
        updateProductCards(retrieveData);
    }
    if(target.classList.contains('btn-danger')){
        deleteProduct(retrieveData);
    }
    if(target.classList.contains('btn-warning')){
        showProductDetails(retrieveData);
    }
})



updateProdButton.addEventListener('click',()=>{
    const elements = updateProductForm.elements as FormElements;
    const updatedProduct:IProductData = {
        id : Number(localStorage.getItem('updateProductId')),
        title :elements.updateProdTitle.value ,
        price : Number(elements.updateProdPrice.value) ,
        description : elements.updateProdDescription.value  ,
        image : elements.updateProdImage.value ,
        category : elements.updateProdCategory.value,
        rating : {
            rate : elements.updateProdRating.value
        }
    }
    updateProduct(updatedProduct);

    editProductModal.hide();
});

addProductButton.addEventListener('click',()=>{
    const prod_data : IProductData = {
        title: (document.querySelector('#prod-title') as HTMLInputElement).value,
        id: Number(JSON.parse(localStorage.getItem('productData') || "").length)+1,
        description : (document.querySelector('#prod-description') as HTMLInputElement).value,
        image : (document.querySelector('#prod-image') as HTMLInputElement).value,
        category : (document.querySelector('#prod-category') as HTMLInputElement).value,
        price : Number((document.querySelector('#prod-price') as HTMLInputElement).value),
        rating : {
            rate : (document.querySelector('#prod-rating') as HTMLInputElement).value,
        }
    }

    addNewProduct(prod_data);
    addProductModal.hide();

});

showAllProducts.addEventListener('click',()=>{
    getProductsAll();
});

addProductLink.addEventListener('click',()=>{
    addProductModal.show();
});

changeThemeButton.addEventListener('click',(e:Event)=>{
    e.preventDefault();
    const pageElement = document.querySelector('html') as HTMLHtmlElement;
    pageElement.getAttribute('data-bs-theme') === 'dark' ? pageElement.setAttribute('data-bs-theme','light') : pageElement.setAttribute('data-bs-theme','dark'); 
});

limitCardsDropdown.addEventListener('click',(e:Event)=>{
    e.preventDefault();
    const selectedLimit = (e.target as HTMLElement).closest('a') as HTMLAnchorElement;
    const limit = Number(selectedLimit.textContent);
    if((e.target as HTMLElement).classList.contains('dropdown-item')){
        getProductsLimit(limit);
    }
});

