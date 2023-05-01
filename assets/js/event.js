// const api_event = 'https://644dfece4e86e9a4d8ef004c.mockapi.io/events/1'

// fetch(api_event)
//      .then(res => res.json())
//      .then(value => {
//           console.log(value)
//      })

function apiEvent() {
     fetch('https://644dfece4e86e9a4d8ef004c.mockapi.io/events')
          .then(function (res) {
               return res.json()
          })
          .then(function (data) {
               let output = '';

               data.forEach(function (el) {
                    output += `
                    <div class="col">
                         <div class="card">
                              <img src="assets/images/peran mahasiswa.svg" class="card-img-top" alt="ilustrasi banjir">
                              <div class="card-body">
                                   <h5 class="card-title">${el.judul}</h5>
                                   <p class="card-text mb-3">${el.pembuat}</p>
                                   <div class="date mb-2">
                                        <i class="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                        <p class="d-inline text-muted ms-1">${el.tanggal}</p>
                                   </div>
                                   <div class="location">
                                        <i class="fa-solid fa-location-dot text-muted fa-lg"></i>
                                        <p class="d-inline text-muted ms-1">${el.lokasi}</p>
                                   </div>
                                   <div class="d-grid">
                                        <a href="#" class="btn btn-primary btn-join-event mt-4">Join Now</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               `
               })
               document.getElementById('output').innerHTML = output;
          })
          .catch(function (err) {
               console.log(err)
          })
}

apiEvent()
