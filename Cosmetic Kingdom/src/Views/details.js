import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as cosmeticsService from '../Api/cosmetics.js'


const detailsTemplate = (cosmetic, user, onDelete, onClick) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${cosmetic.imageUrl}" alt="example1" />
        <p id="details-title">${cosmetic.name}</p>
        <p id="details-category">
            Category: <span id="categories">${cosmetic.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${cosmetic.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${cosmetic.description}</span>
            </div>
        </div>

        ${cosmetic.isOwner 
        ? html `<div id="action-buttons">
            <a href="/edit/${cosmetic._id}" id="edit-btn">Edit</a>
            <a @click="${onDelete}" href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` 
         : nothing}

        ${user && !cosmetic.isOwner 
            ? html`<div id="action-buttons"> 
                <a @click="${onClick}" href="javascript:void(0)" id="buy-btn">Buy</a>
                </div>`
            : nothing}
    </div>
</section>

`;

export async function detailsPage(ctx) {
    const cosmeticId = ctx.params.id;
    const cosmetic = await cosmeticsService.getById(cosmeticId);
    const user = ctx.user;

    if(user){
        cosmetic.isOwner = ctx.user._id == cosmetic._ownerId;
    }

    ctx.render(detailsTemplate(cosmetic, user, onDelete, onClick));

    async function onDelete(){

        const choice = confirm(`Do you really want to delete ${cosmetic.name}?`);
        if(choice){
            await cosmeticsService.deleteById(cosmeticId);
            ctx.page.redirect('/products');
        }
    }
}

function onClick(event){
    event.currentTarget.style.display = 'none';
}
