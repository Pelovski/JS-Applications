import { html } from '../../node_modules/lit-html/lit-html.js';
import * as gamesService from '../api/games.js'

const catalogTemplate = (catalogGames) => html`
<section id="catalog-page">
    <h1>All Games</h1>

    ${catalogGames.length > 0  
    ? catalogGames.map(previewCatalogTemplate)
    : html`<h3 class="no-articles">No articles yet</h3>`}

</section>
`;

const previewCatalogTemplate = (game) => html `
    <div class="allGames">
        <div class="allGames-info">
            <img src="${game.imageUrl}">
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>
`;

export async function catalogPage(ctx) {
    const catalogGames = await gamesService.getAll();
    ctx.render(catalogTemplate(catalogGames));
}