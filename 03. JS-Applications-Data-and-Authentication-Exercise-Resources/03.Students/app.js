async function solve() {
    const tableElement = document.querySelector('#results tbody');
    const submitBtn = document.getElementById('submit');
    let url = 'http://localhost:3030/jsonstore/collections/students';

    const response = await fetch(url);
    const data = await response.json();
     
    tableElement.innerHTML = '';
    Object.values(data).forEach(x => {

        createElements(x.firstName, x.lastName, x.facultyNumber, x.grade, tableElement);

    })


    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
       
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let facultyNumber = document.getElementById('facultyNumber');
        let grade = document.getElementById('grade');

        if (firstName.value != '' && lastName.value != '' && facultyNumber.value != '' && grade.value != '') {

            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'aplication/json' },
                body: JSON.stringify({ firstName: firstName.value, lastName: lastName.value, facultyNumber: facultyNumber.value, grade: grade.value })
            })

            createElements(firstName.value, lastName.value, facultyNumber.value, grade.value, tableElement);

        }  
            firstName.value = '';
            lastName.value = '';
            facultyNumber.value = '';
            grade.value = '';

    });

    function createElements(firstName, lastName, facultyNumber, grade, appender) {

        let trElement = document.createElement('tr');
        let firstNameTd = document.createElement('td');
        let lastNameTd = document.createElement('td');
        let facultyNumberTd = document.createElement('td');
        let gradeTd = document.createElement('td');

        firstNameTd.textContent = firstName;
        lastNameTd.textContent = lastName;
        facultyNumberTd.textContent = facultyNumber;
        gradeTd.textContent = grade;


        trElement.appendChild(firstNameTd);
        trElement.appendChild(lastNameTd);
        trElement.appendChild(facultyNumberTd);
        trElement.appendChild(gradeTd);

        appender.appendChild(trElement);

        return trElement;
    }

}

solve()