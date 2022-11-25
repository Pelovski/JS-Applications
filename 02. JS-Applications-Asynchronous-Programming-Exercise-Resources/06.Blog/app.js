async function attachEvents() {
    let idPostElement = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');
    let postTitleElement = document.getElementById('post-title');
    let postbodyElement = document.getElementById('post-body');
    let postComentElement = document.getElementById('post-comments');

    let postUrl = 'http://localhost:3030/jsonstore/blog/posts';
   
    let postRes = await fetch(postUrl);
    let postDate = await postRes.json();

    let comentUrl = `http://localhost:3030/jsonstore/blog/comments`;

    let comentRes = await fetch(comentUrl);
    let comentData = await comentRes.json();

    for (const [key, value] of Object.entries(postDate)) {

        
        let option = document.createElement('option');
        option.setAttribute('value', key);
        console.log(key);
         option.textContent = value.title;
        idPostElement.appendChild(option);
      }

      viewBtn.addEventListener('click', async () => {

        postComentElement.innerHTML = '';
        let selectedOption = idPostElement.options[idPostElement.selectedIndex].text;
        let optionValue = idPostElement.options[idPostElement.selectedIndex].value;
        let optionContent = postDate[optionValue].body;

        for (const value of Object.values(comentData)) {
           
         if(value.postId == optionValue){

            let li = document.createElement('li');
            li.setAttribute('id', value.id);
            li.textContent = value.text;
            postComentElement.appendChild(li);
         }
        }

        postTitleElement.textContent = selectedOption;
        postbodyElement.textContent = optionContent;
      });
}

attachEvents();