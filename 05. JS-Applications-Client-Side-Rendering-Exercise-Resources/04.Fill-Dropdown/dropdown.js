import { html, render } from '../node_modules/lit-html/lit-html.js';

const  baseUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';
const itemInputText = document.getElementById('itemText');
const optinalElement = document.getElementById('menu');

document.querySelectorAll('input')[1].addEventListener('click', addItem);


const itemsTemplate = (items) => html `
    ${items.map(item => html `
        <option value=${item._id}>${item.text}</option>
    `)};
`;

takeItems();
async function takeItems(){
    const res = await fetch(baseUrl);
    const items = Object.values( await res.json() );

    console.log(items.map(x => x));
    render(itemsTemplate(items),optinalElement);
}

async function addItem(e) { 
    e.preventDefault();

   if(itemInputText.value !== ''){
    const res = await fetch(baseUrl, {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "text": itemInputText.value })
    });
    itemInputText.value = '';
    takeItems();
   }
    
}