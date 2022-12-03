import { homePage } from "./home.js";
import { loginPage, updateNav } from "./login.js"
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { detailsPage } from "./details.js";
import { editPage } from "./edit.js";

const routers = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logoutPage,
    '/register': registerPage,
    '/create': createPage
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {

    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routers[url.pathname];

        if (typeof view == 'function') {

            view();
        }
    }
}


function logoutPage() {
    localStorage.removeItem('user');
    updateNav();
}

// Start App in catalog view
updateNav();
homePage()