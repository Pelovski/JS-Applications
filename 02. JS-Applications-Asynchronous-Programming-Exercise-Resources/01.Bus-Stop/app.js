async function getInfo() {
    let stopNameElement = document.getElementById('stopName');
    let busesElements = document.getElementById('buses');
    let busId = document.getElementById('stopId').value;

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    try {
        let res = await fetch(url);
        const data = await res.json();
        let buses = data.buses;

        stopNameElement.textContent = data.name;

        Object.entries(buses).map(([key, val] = entry) => {
            let busesLiElement = document.createElement("li");
            busesLiElement.textContent = `Bus ${key} arrives in ${val} minutes`;
            busesElements.appendChild(busesLiElement);
        });

    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}