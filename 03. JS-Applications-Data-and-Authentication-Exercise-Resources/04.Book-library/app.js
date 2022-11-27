async function solve() {
        const tableElement = document.querySelector('table tbody');
        const loadBooksBtn = document.getElementById('loadBooks');
        const submitBtn = document.getElementById('submit');

        const url = 'http://localhost:3030/jsonstore/collections/books';
    
        const response = await fetch(url);
        const data = await response.json();
    
        loadBooksBtn.addEventListener('click', loadAllBooks);
    
        submitBtn.addEventListener('click', createBook);


        async function createBook(e){

            e.preventDefault();

            const titleInputElement = document.getElementsByName('title')[0];
            const authorInputElement = document.getElementsByName('author')[0];

            if(titleInputElement.value != '' && authorInputElement.value != ''){

                let response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'aplication/json' },
                    body: JSON.stringify({ author: authorInputElement.value, title: titleInputElement.value })
                })
            }
            
            createElement(titleInputElement.value, authorInputElement.value,tableElement);

            titleInputElement.value = '';
            authorInputElement = '';
        }
    
        function loadAllBooks() {

            tableElement.innerHTML = '';
            Object.values(data).forEach(x => {

            createElement(x.title, x.author, tableElement);
            })
            
        }

        function createElement(title, author, appender){

                const trElement = document.createElement('tr');
                const tdTitle = document.createElement('td');
                const tdAuthor = document.createElement('td');
                const tdButtons = document.createElement('td');
                const editBtn = document.createElement('button');
                const deleteBtn = document.createElement('button');
    
                tdTitle.textContent = title;
                tdAuthor.textContent = author;
                editBtn.textContent = 'Edit';
                deleteBtn.textContent = 'Delete';
                
                tdButtons.appendChild(editBtn);
                tdButtons.appendChild(deleteBtn);
    
    
                trElement.appendChild(tdTitle);
                trElement.appendChild(tdAuthor);
                trElement.appendChild(tdButtons);
    
                appender.appendChild(trElement);

                editBtn.addEventListener('click', (e) =>{
                    console.log(e.currentTarget.parentNode.parentNode);
                })

                return trElement;
        }
  }
  solve();