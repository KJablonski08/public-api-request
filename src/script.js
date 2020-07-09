
// document.addEventListener('DOMContentLoaded', () => {
//    employees = new Employees();
// })

let employees = [];
let employeesContainer = document.getElementById('gallery')

function getEmployees() {
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
   const html = 
      `<div class="card">
      <div class="card-img-container">
         <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
      </div>
      <div class="card-info-container">
         <h3 id="name" class="card-name cap">first last</h3>
         <p class="card-text">email</p>
         <p class="card-text cap">city, state</p>
      </div>
      </div>`
   employeesContainer.innerHTML = html
}

getEmployees();