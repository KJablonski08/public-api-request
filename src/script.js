
// document.addEventListener('DOMContentLoaded', () => {
//    employees = new Employees();
// })

let employees = [];
let employeesContainer = document.getElementById('gallery')

function getEmployee() {
   baseUrl = 'https://randomuser.me/api/'

   fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
         renderEmployee(data.results);
       })
       .catch((error) => {
         console.error('Error:', error);
       });

}
   
function renderEmployee(data) {
   console.log(data)
   const html = 
      `<div class="card">
      <div class="card-img-container">
         <img class="card-img" src="${data[0].picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
         <h3 id="name" class="card-name cap">${data[0].name.first} ${data[0].name.last}</h3>
         <p class="card-text">${data[0].email}</p>
         <p class="card-text cap">${data[0].location.city}, ${data[0].location.state}</p>
      </div>
      </div>`
   employeesContainer.innerHTML = html
}

getEmployee();