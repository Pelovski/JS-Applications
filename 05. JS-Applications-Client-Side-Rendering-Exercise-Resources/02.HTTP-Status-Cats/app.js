import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'
import { cats } from './catSeeder.js';

const section = document.getElementById('allCats');

section.addEventListener('click', toggle);

const cardTemplate = (cats) => html`
    <ul>
        ${cats.map(cat => html`<li>
            <img src="images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
                <div class="status" style=${styleMap(cat.info ? {display: 'block'} : {display: 'none'})} id="${cat.id}">
                    <h4>${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`)}
    </ul>
`;

    cats.forEach(c => c.info = false);

    update();

function update(){
    const result = cardTemplate(cats);
    render(result, section)
}
function toggle(e){
    const catId = e.target.parentNode.children[1].id;
    const cat = cats.find(c => c.id == catId);
    console.log(catId);
    cat.info = !cat.info;
    update();
}
