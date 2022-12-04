import {html, render} from '../node_modules/lit-html/lit-html.js'

const inputElement = document.getElementById('towns');
const rootElement = document.querySelector('#root');

const listTemplate = (data) => html `
    <ul>
    ${data.map(town => html `<li>${town}</li>`)}
    </ul>
`;

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

function getTowns(e){
    e.preventDefault();
  
    if(inputElement.value !== ''){
        const towns = inputElement.value.split(', ');
        render(listTemplate(towns), rootElement);
        inputElement.value = '';
    }
}