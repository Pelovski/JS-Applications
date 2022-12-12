import page from '../node_modules/page/page.mjs';

import { addRender } from './middlewares/render.js';
import { AddSession } from './middlewares/session.js';

import { logout } from './api/user.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { carListingPage } from './views/carListing.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { myListingPage } from './views/myListing.js';
import { editPage } from './views/edit.js';


page(AddSession);
page(addRender);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/carListing', carListingPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myListing', myListingPage);
page('/logout', onLogout);



page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/');
}