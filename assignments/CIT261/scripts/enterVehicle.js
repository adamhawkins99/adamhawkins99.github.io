class Vehicle {
    constructor(
        year,
        make,
        model,
        vin,
        color,
    ) {
      this.year = year;
      this.make = make;
      this.model = model;
      this.vin = vin;
      this.color = color;
  }
}
let vehicles = [];

function saveVehicle() {
    let newVehicle = new Vehicle(
        document.getElementById("year").value,
        document.getElementById("make").value,
        document.getElementById("model").value,
        document.getElementById("vin").value,
        document.getElementById("color").value,
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

    if(localStorage.getItem("vehicles")) {
        vehicles = JSON.parse(localStorage.getItem("vehicles"));

    }else {
        loadVehicles();
    }

    vehicles.forEach(vehicle => {
        let tr = document.createElement ('tr');
        let tdYear = document.createElement('td');
        let tdMake = document.createElement('td');
        let tdModel = document.createElement('td');
        let tdVin = document.createElement('td');
        let tdColor = document.createElement('td');
        let tdDelete = document.createElement('td');

        tdYear.innerText = vehicle.year;
        tdMake.innerText = vehicle.make;
        tdModel.innerText = vehicle.model;
        tdVin.innerText = vehicle.vin;
        tdColor.innerText = vehicle.color;
        tdDelete.innerHTML = '<a href="#">Delete</a>';
        tdDelete.addEventListener('click', deleteVehicle);

        tr.appendChild(tdYear);
        tr.appendChild(tdMake);
        tr.appendChild(tdModel);
        tr.appendChild(tdVin);
        tr.appendChild(tdColor);
        tr.appendChild(tdDelete);

        document.querySelector ('#vehicleList tbody').appendChild(tr);
    });
}


function deleteVehicle(){
    alert("WARNING! This will delete all current vehicles in the list.");
    localStorage.removeItem("vehicles")
    document.location.reload(true)
    

}
document.querySelector('input[type="button"]').addEventListener('click', saveVehicle);

showVehicles();

