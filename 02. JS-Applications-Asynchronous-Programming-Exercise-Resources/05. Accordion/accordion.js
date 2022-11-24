async function solution() {
    let sectionElement = document.getElementById('main');

  

    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    let res = await fetch(url);
    let data = await res.json();

    for (const element of data) {



        let spanElement = document.createElement('span');
        let buttonElement = document.createElement('button');
        let divContainerElement = document.createElement('div');
        let divHeadElement = document.createElement('div');
        let divExtraElement = document.createElement('div');
        let paragraphElement = document.createElement('p');


        divContainerElement.setAttribute('class', 'accordion');
        divHeadElement.setAttribute('class', 'head');
        divExtraElement.setAttribute('class', 'extra');
        buttonElement.setAttribute('class', 'button');
        buttonElement.setAttribute('id', element._id);

        divHeadElement.appendChild(spanElement);
        divHeadElement.appendChild(buttonElement);
        divExtraElement.appendChild(paragraphElement);

       spanElement.textContent = element.title;
       buttonElement.textContent = 'More';

      

       buttonElement.addEventListener('click', toggle);
    

       divContainerElement.appendChild(divHeadElement);
       divContainerElement.appendChild(divExtraElement);
       sectionElement.appendChild(divContainerElement);
    
    }


    async function toggle(ev){

        let id = ev.target.id;
        let button = ev.target;
        const contentUrl =`http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(contentUrl);
        const contentData = await response.json();

        console.log(contentData);

        let p = ev.target.parentNode.parentNode.children[1].children[0];
        let divExtra = ev.target.parentNode.parentNode.children[1];

        p.textContent = contentData.content;

        if( button.textContent == 'More'){

            divExtra.style.display = 'block';
            button.textContent = 'Less';
        }else{
            divExtra.style.display = 'none';
            button.textContent = 'More';
        }
       

        console.log(divExtra);
        
    }
    
}

solution()