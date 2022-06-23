import json from '../json/motorists.json' assert {type: 'json'};

json.forEach(elem => {
    const newTable = document.createElement('tr');  
    newTable.innerHTML = `<td> ${elem.person.firstname} ${elem.person.lastname} </td`;
    newTable.innerHTML += `<td> ${elem.car.manufacturer} </td>`; 
    newTable.innerHTML += `<td> ${elem.car.model}</td>`; 
    newTable.innerHTML += `<td> ${elem.car.year} </td>`; 
    document.getElementById('tableBody').append(newTable);  
})
