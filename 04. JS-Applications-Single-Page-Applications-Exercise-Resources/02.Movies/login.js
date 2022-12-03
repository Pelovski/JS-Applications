import { homePage } from "./home.js";
import { showView } from "./util.js";

const section = document.querySelector('#form-login');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function loginPage(){
    showView(section);
}

async function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);

    updateNav();
    homePage();  
}

async function login(email, password){
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application-json'
            },
            body: JSON.stringify({email, password})
        });

        if(!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const user = await res.json();
        localStorage.setItem('user', JSON.stringify(user));
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

 export function updateNav(){

    const user = JSON.parse(localStorage.getItem('user'));
    const msgContainer =  document.getElementById('welcome-msg');
    if(user){
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        msgContainer.textContent = `Welcome ${user.email}`;
    }else{
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
        msgContainer.textContent = '';
    }
}