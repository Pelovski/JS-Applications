import * as api from './api/users.js';
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { initialize } from './router.js';


const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate
};

const router = initialize(links);


router.goTo('/');

