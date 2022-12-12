import { render, html } from '../../node_modules/lit-html/lit-html.js';


const navTempalte = (user) => html`
    <nav>
                <a class="active" href="/">Home</a>
                <a href="/carListing">All Listings</a>
                <a href="#">By Year</a>

                <!-- Guest users -->
                ${user 
                ? html`<div id="profile">
                    <a>Welcome ${user.username}</a>
                    <a href="/myListing">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>`
                : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}         
            </nav>
`;

const header = document.querySelector('.my-header');
const siteContentElement = document.getElementById('site-content');


function ctxRender(content) {
    render(content, siteContentElement);
}

export function addRender(ctx, next) {
    render(navTempalte(ctx.user), header);
    ctx.render = ctxRender;

    next();
}