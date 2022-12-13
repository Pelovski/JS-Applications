import page from '../node_modules/page/page.mjs';

import { AddSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';

import { logout } from './api/user.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { productsPage } from './views/products.js';


page(AddSession);
page(addRender);

page('/', homePage);
page('/products', productsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout);


page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/products');
}