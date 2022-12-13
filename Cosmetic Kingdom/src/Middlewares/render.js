import { render, html } from '../../node_modules/lit-html/lit-html.js';


const navTemplate = (user) => html`<!-- Navigation -->
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
<nav>
    <div>
        <a href="/products">Products</a>
    </div>

    ${user 
    ? html `<div class="user">
        <a href="/create">Add Product</a>
        <a href="/logout">Logout</a>
    </div>`
    
    : html `<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}
    
</nav>`;

const header = document.querySelector('.header');
const root = document.getElementById('main-content');

function ctxRender(content) {
    render(content, root);
}

export function addRender(ctx, next) {
    render(navTemplate(ctx.user), header);
     ctx.render = ctxRender;
    
     next();
}