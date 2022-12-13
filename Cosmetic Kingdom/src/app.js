import page from '../node_modules/page/page.mjs';

import { AddSession } from './Middlewares/session.js';
import { addRender } from './Middlewares/render.js';

import { logout } from './Api/user.js';

import { homePage } from './Views/home.js';
//import { catalogPage } from './views/catalog.js';
import { loginPage } from './Views/login.js';
import { registerPage } from './Views/register.js';
import { createPage } from './Views/create.js';
import { detailsPage } from './Views/details.js';
import { editPage } from './Views/edit.js';
import { productsPage } from './Views/products.js';


page(AddSession);
page(addRender);

page('/', homePage);
page('/products', productsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/logout', onLogout)


page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/products');
}