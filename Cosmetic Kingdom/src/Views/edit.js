import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../Api/utils.js';
import * as comseticsService from '../Api/cosmetics.js'


const editTemplate = (cosmetic, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit="${onSubmit}" class="edit-form">
            <input type="text" name="name" id="name" .value=${cosmetic.name} placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" .value=${cosmetic.imageUrl} placeholder="Product Image" />
            <input type="text" name="category" id="product-category" .value=${cosmetic.category} placeholder="Category" />
            <textarea id="product-description" name="description" .value=${cosmetic.description} placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" .value=${cosmetic.price} placeholder="Price" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const cosmeticId = ctx.params.id;
    const cosmetic = await comseticsService.getById(cosmeticId);

    ctx.render(editTemplate(cosmetic, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event){
    const cosmeticId = ctx.params.id;

    if(Object.values(data).some(f => f =='')){
         return alert('All fields are required!');
     }

     await comseticsService.update(cosmeticId,{
        name: data.name,
        imageUrl: data.imageUrl, 
        category: data.category, 
        description: data.description, 
        price: data.price
      
     });
     event.target.reset();
     ctx.page.redirect('/details/' + cosmeticId);
 }