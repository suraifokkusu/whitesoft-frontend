import json from "../json/motorists.json" assert { type: "json" };

$("#moreInfo").hide();

json.forEach((elem) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td> ${elem.person.firstname} ${elem.person.lastname} </td>
     <td> ${elem.car.manufacturer} </td> 
     <td> ${elem.car.model}</td>
     <td> ${elem.car.year} </td>`;
  $('#tableBody').append(newRow);
});

$('#tableBody').click(event => {
  const row = event.target.closest("tr");
  const rowIndex = $(row).index();
  const idPerson = json[rowIndex].id;
  const moreInfo = json.find(elem => elem.id == idPerson);

  $("#person").text(`${moreInfo.person.firstname} ${moreInfo.person.lastname}`);
  $("#manufacturer").text(moreInfo.car.manufacturer);
  $("#model").text(moreInfo.car.model);
  $("#year").text(moreInfo.car.year);
  $("#type").text(moreInfo.car.type);
  $("#color").css("background-color", moreInfo.car.color);
  $("#isConvertible").prop("checked", moreInfo.car.isConvertible);
  $("#vin").text(moreInfo.car.vin);

  $("#moreInfo").show();
});
