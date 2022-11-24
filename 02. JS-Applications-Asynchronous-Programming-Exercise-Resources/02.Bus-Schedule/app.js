function solve() {

    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let spanElement = document.querySelector('#info span');

    let stop = {
        next: 'depot'
    }
  
    async function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res =  await fetch(url);
        stop = await res.json();

        spanElement.textContent = `Next stop ${stop.name}`;
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        spanElement.textContent = `Arrived at ${stop.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();