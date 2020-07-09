
// document.addEventListener('DOMContentLoaded', () => {
//    employees = new Employees();
// })

let employees = [];
let employeesContainer = document.getElementById('gallery')

function getEmployee() {
   baseUrl = 'https://randomuser.me/api/?results=12'

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
   let render = ''
      data.forEach(employee => {
         let img = employee.picture.large
         let firstName = employee.name.first
         let lastName = employee.name.last
         let email = employee.email
         let city = employee.location.city
         let state = employee.location.state

         render += 
         `<div class="card">
            <div class="card-img-container">
               <img class="card-img" src="${img}" alt="profile picture">
            </div>
            <div class="card-info-container">
               <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
               <p class="card-text">${email}</p>
               <p class="card-text cap">${data[0].location.city}, ${data[0].location.state}</p>
            </div>
         </div>`
      })

   console.log(render)
   employeesContainer.innerHTML = render
}

getEmployee();