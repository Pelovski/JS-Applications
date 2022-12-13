import { html } from '../../node_modules/lit-html/lit-html.js';
import * as cosmeticsService from '../Api/cosmetics.js'

const productsTemplate = (dashboardProducts) => html`
<h2>Products</h2>
<section id="dashboard">
        
    ${dashboardProducts.length > 0 
    ? dashboardProducts.map(previewCosmeticsTemplate)
    : html `<h2>No products yet.</h2>`}
    
</section>`;

const previewCosmeticsTemplate = (cosmetic) => html `
    <div class="product">
        <img src="${cosmetic.imageUrl}" alt="example1" />
        <p class="title">
           ${cosmetic.name}
        </p>
        <p><strong>Price:</strong><span class="price">${cosmetic.price}</span>$</p>
        <a class="details-btn" href="/details/${cosmetic._id}">Details</a>
    </div>
`;

export async function productsPage(ctx) {
    const dashboardProducts = await cosmeticsService.getProducts();

    ctx.render(productsTemplate(dashboardProducts));
}
