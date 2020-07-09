
// document.addEventListener('DOMContentLoaded', () => {
//    employees = new Employees();
// })

function getEmployees() {
   baseUrl = 'https://randomuser.me/api/'

   fetch(baseUrl)
      .then(res => res.json())
      .then(data => console.log(data));
}

getEmployees();