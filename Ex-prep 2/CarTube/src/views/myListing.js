import { html } from '../../node_modules/lit-html/lit-html.js';


const myListingTemplate = () => html`

<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        <!-- Display all records -->
        {${previewTemplate}}

        <!-- Display if there are no records -->
        <p class="no-cars"> You haven't listed any cars yet.</p>
    </div>
</section>`;

const previewTemplate = (car) => html `
    <div class="listing">
                    <div class="preview">
                        <img src="${car.imageUrl}">
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
    `;


export function myListingPage(ctx) {

    ctx.render(myListingTemplate());
}





// <section id="my-listings">
//             <h1>My car listings</h1>
//             <div class="listings">

//                 <!-- Display all records -->
//                 <div class="listing">
//                     <div class="preview">
//                         <img src="/images/audia3.jpg">
//                     </div>
//                     <h2>Audi A3</h2>
//                     <div class="info">
//                         <div class="data-info">
//                             <h3>Year: 2018</h3>
//                             <h3>Price: 25000 $</h3>
//                         </div>
//                         <div class="data-buttons">
//                             <a href="#" class="button-carDetails">Details</a>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Display if there are no records -->
//                 <p class="no-cars"> You haven't listed any cars yet.</p>
//             </div>
//         </section>