import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../api/utils.js';
import * as carsService from '../api/cars.js'


const createTemplate = (onSubmit) => html`

<section id="create-listing">
    <div class="container">
        <form @submit="${onSubmit}" id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;


export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event){

    console.log(data);
   if(Object.values(data).some(f => f =='')){
        return alert('All fields are required!');
    }
   
    await carsService.create({
        brand: data.brand,
        model: data.model,
        description: data.description,
        year: data.year,
        imageUrl: data.imageUrl,
        price: data.price
    });

    console.log(data);

    event.target.reset();
    ctx.page.redirect('/carListing');
}



