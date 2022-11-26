async function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const phonebookElement = document.getElementById('phonebook');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');
    let createBtn = document.getElementById('btnCreate');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    

    loadBtn.addEventListener('click', onClickLoad);
    createBtn.addEventListener('click', onClickCreate);

    async function onClickCreate() {
        let text = `${personElement.value}: ${phoneElement.value}`;

        const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type':'aplication/json'},
            body: JSON.stringify({person: person.value, phone: phone.value})
        });
        loadBtn.click();
        person.value = '';
        phone.value = '';
    }

    async function onClickDelete(e) {
        let key = e.target.parentNode.getAttribute('id');

        let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${key}`;
        e.target.parentNode.remove();

        const response = await fetch(deleteUrl, {
            method: 'DELETE'
        });
    }

    function createElement(type, text, appender, _id) {
        const result = document.createElement(type);
        result.textContent = text;
        result.setAttribute('id', _id);

        appender.appendChild(result);

        return result;
    }

    async function onClickLoad() {
        phonebookElement.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();



        Object.values(data).forEach(x => {
            const { person, phone, _id } = x;

            const li = createElement('li', `${person}: ${phone}`, phonebookElement, _id);

            const deleteBtn = createElement('button', 'Delete', li);
            deleteBtn.setAttribute('id', 'btnDelete');

            deleteBtn.addEventListener('click', onClickDelete);

        });

    }
}

attachEvents();