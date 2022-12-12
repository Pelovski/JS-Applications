import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as carsService from '../api/cars.js'

const detailsTemplate = (car, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${car.isOwner
        ? html`<div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click="${onDelete}" href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
        : nothing}
    </div>
</section>
`;


export async function detailsPage(ctx) {
    const carId = ctx.params.id;
    const car = await carsService.getById(carId);

    if(ctx.user){
        car.isOwner = ctx.user._id == car._ownerId;
        
    }


    ctx.render(detailsTemplate(car, onDelete));

    async function onDelete(){

        const choice = confirm(`Are you sure you want to delete ${car.brand} ${car.model}?`);
        if(choice){
            await carsService.deleteById(carId);
            ctx.page.redirect('/carListing');
        }
    }
}
