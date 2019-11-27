import { Vehicle } from './vehicle.js';

let vehicles = [];

function saveVehicle() {
    let newVehicle = new Vehicle(
        document.getElementById("year").nodeValue,
        document.getElementById("make").nodeValue,
        document.getElementById("model").nodeValue,
        document.getElementById("vin").nodeValue,
        document.getElementById("color").nodeValue,
    );

    vehicles.push(newVehicle);

    saveVehiclesToLocalStorage();

    showVehicles();

    document.querySelector('input[type="reset"]').click();
}

function loadVehicles() {
    let vehicle1 = new Vehicle('2002', 'Ford', 'Expedition', '123456', 'Blue');
    let vehicle2 = new Vehicle('2001', 'Ford', 'Explorer', '123456', 'Red');
    let vehicle3 = new Vehicle('2004', 'Chevy', 'MonteCarlo', '123456', 'White');

    vehicles.push(vehicle1);
    vehicles.push(vehicle2);
    vehicles.push(vehicle3);
    
    saveVehiclesToLocalStorage();

}

function saveVehiclesToLocalStorage() {
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

function showVehicles() {
    let table = document.querySelector('tbody');
    while(table.rows.length > 0) {
        table.deleteRow(0);
    }

    if(localStorage.getItem("vehicles")){
        vehicles = JSON.parse(localStorage.getItem("vehicles"));

    }else {
        loadVehicles();
    }

    vehicles.forEach(vehicle => {
        let tr = document.createElement ('tr');
        let tdYear = documnet.createElement('td');
        let tdMake = docment.createElement('td');
        let tdModel = document.createElement('td');
        let tdVin = document.createElement('td');
        let tdColor = document.createElement('td');
        let tdEdit = document.createElement('td');
        let tdDelete = document.createElement('td');

        tdYear.innerText = vehicle.year;
        tdMake.innerText = vehicle.make;
        tdModel.innerText = vehicle.model;
        tdVin.innerText = vehicle.vin;
        tdColor.innerText = vehicle.color;
        tdEdit.innerHTML = '<a href="#">Edit</a>';
        tdEdit.addEventListener('click', editVehicle);
        tdDelete.innerHTML = '<a href="#">Delete</a>';
        tdDelete.addEventListener('click', deleteVehicle);

        tr.appendChild(tdYear);
        tr.appendChild(tdMake);
        tr.appendChild(tdModel);
        tr.appendChild(tdVin);
        tr.appendChild(tdColor);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);

        document.querySelector ('#vehicleList tbody').appendChild(tr);
    });
}
function editVehicle(){
    alert('Edit');

}
function deleteVehicle(){
    alert("Delete");
}
document.querySelector('input[type="button"]').addEventListener('click', saveVehicle);

showVehicles();

