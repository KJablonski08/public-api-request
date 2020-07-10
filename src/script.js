
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

   let gallery = document.getElementById('gallery')
   
   for (i=0; i < data.length; i++) {

      const card = document.createElement('div');
      gallery.appendChild(card);
      card.className = 'card';
      card.setAttribute('id', `${i}`)
      card.onclick = getClickCallback(i, data[i])

      let html =
            `<div class="card-img-container">
               <img class="card-img" src="${data[i].picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
               <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last}</h3>
               <p class="card-text">${data[i].email}</p>
               <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
            </div>`
      
      card.innerHTML = html
   }
}

function getClickCallback(i, obj) {
   return function() {

      console.log(obj)
      let modal = document.getElementById('modal')

      modal.style.display = ''

      let date = new Date(obj.dob.date)
      let month = date.getMonth()
      let day = date.getDate()
      let year = date.getYear()
      console.log(month, day, year)

      let html = `
      <div class="modal-container">
         <div class="modal">
         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
               <img class="modal-img" src="${obj.picture.large}" alt="profile picture">
               <h3 id="name" class="modal-name cap">${obj.name.first} ${obj.name.last}</h3>
               <p class="modal-text">${obj.email}</p>
               <p class="modal-text cap">${obj.location.city}</p>
               <hr>
               <p class="modal-text">${obj.phone}</p>
               <p class="modal-text">${obj.location.street.number} ${obj.location.street.name}, ${obj.location.city}, ${obj.location.state} ${obj.location.postcode}</p>
               <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
            </div>
         </div>

         <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
         </div>
      </div>`

      modal.innerHTML = html

      const close = document.getElementById('modal-close-btn');
         close.addEventListener('click', () => {
            modal.style.display = 'none';
      });

   };
 }
 

getEmployee();
