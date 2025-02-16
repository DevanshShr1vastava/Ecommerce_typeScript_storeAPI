#### fakeStoreAPI E commerce converted to typescript application 

- Added interface for better type safety whilst fetching and storing data
- had to assign types for all dom elements accordingly (HTMLElement, HTMLInputElement, HTMLFormElement)
- FormHandling using HTMLFormElement and creating a formElements interface extending HTMLFormControlsCollection to select and work with the input fields within the form
- modularized better, kept ts files within the src folder and the compiled js files within the dist folders configured using tsconfig.json so that whenever we use the command npx tsc, it picks up the files from the src folder and stores the compiled js files in the dist folder
- datalist added to select category instead of a textbox for adding or updating products, categories are taken from the fakestoreapi and appended on the element.

### Demonstrations
#### UI Demo
![UIDemo-ezgif com-crop](https://github.com/user-attachments/assets/5dcc0ea9-fd87-4aab-bdbd-6018a1042f4e)

#### Limit display products demo
![limits-ezgif com-crop](https://github.com/user-attachments/assets/9d5d4fcf-24b4-4033-b7b9-8d41290255fe)

#### Adding new products
![addingProduct-ezgif com-crop](https://github.com/user-attachments/assets/053bb9dc-8637-4345-9725-2acaab33c54c)

#### deleting and deleting added products
![deletingandaddingproduct-ezgif com-crop](https://github.com/user-attachments/assets/fcacea86-9f37-434d-b027-fcacc5634cd0)

#### Display products by category demo
![categoryDemo-ezgif com-crop](https://github.com/user-attachments/assets/c6896cc2-752b-43fe-ba17-4e77f03f135a)

#### Opening product descriptions and editing products

![showingproductandediting-ezgif com-crop](https://github.com/user-attachments/assets/1d4b12ea-e758-4a38-adc6-15c290c1fe92)
