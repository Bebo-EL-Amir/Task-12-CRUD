// const phones = [
//   { name: "iphone x", price: 700, qty: 3 },
//   { name: "iphone 12", price: 800, qty: 12 },
//   { name: "iphone 13", price: 800, qty: 10 },
// ];

import Swal from 'sweetalert2'
let phones = JSON.parse(localStorage.getItem('phones'));

let obj = { name: "iphone x", price: 700, qty: 3 };
let objHson = JSON.stringify(obj);



localStorage.setItem('phones', JSON.stringify(phones));






// console.log(JSON.parse(objHson));
let phoneName = document.querySelector("#phoneName");
let phonePrice = document.querySelector("#phonePrice");
let phoneQty = document.querySelector("#phoneQty");

let modal = document.querySelector(".myModal");
let table = document.querySelector("table tbody");

const showPhones = () => {
  table.innerHTML = "";
  phones.forEach((el, index) => {
    table.innerHTML += `

     <tr>
         <td>${index + 1}</td> 
         <td>${el.name}</td>
         <td>${el.price}$</td>
         <td>${el.qty}</td>
         
         <td>
         <button onclick="removePhone(${index})" class="btn btn-danger">Delete</button>
         <button  class="btn btn-warning">Edit</bworning

         </td>
        </tr>
    `;
  });
};

const openModel = () => {
  modal.classList.replace("d-none", "d-flex");
};

const closeModel = () => {
  modal.classList.replace("d-flex", "d-none");
};

showPhones();

const addNewPhone = (event) => {
  event.preventDefault();

  let phoneObj = {
    name: phoneName.value,
    price: +phonePrice.value,
    qty: +phoneQty.value,
  };
  phones.push(phoneObj);
  showPhones();
  closeModel();

  Swal.fire({
    title: "Done!",
    //   text: "You clicked the button!",
    icon: "success",
  });
};

const removePhone = (index) => {
  let remove = confirm("Are you Sure you want to Delete?");
  if (remove) {
    phones.splice(index, 1);
    showPhones();

      Swal.fire({
    title: "Deleted !",
    //   text: "You clicked the button!",
    icon: "success",
  });
  }
};

const window1=()=>{
  Swal.fire({
      title: "Hello!",
      //   text: "You clicked the button!",
      icon: "success",
    });


}
const window2=()=>{
  
  Swal.fire({
      title: "Hello!",
      //   text: "You clicked the button!",
      icon: "success",
    });

}
