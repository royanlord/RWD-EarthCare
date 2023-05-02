let id = Number.parseInt((new Map(location.search.replace("?", "").split("&").map(e => e.split("=")))).get("id")) ?? 0

if (id == 0 || Number.isNaN(id)) {
     document.getElementById('output-detail').innerHTML = 'Data kosong'
} else {
     apiEvent()
}

function apiEvent() {
     fetch('https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events')
          .then(function (res) {
               return res.json()
          })
          .then(function (data) {
               let output = ''

               data.forEach(function (el) {
                    if (el.id == id) {
                         output += `
                              <div id="output-detail" class="container my-5 d-flex justify-content-center align-content-center">
                    <div class="row">
                         <div class="col-md-6">
                              <img src="${el.gambar}" class="img-responsive mt-5 w-100"
                                   alt="ilustrasi mencegah banjir">
                              <div class="activity-detail mt-2">
                                   <h3>Activity Detail</h3>
                                   <p>
                                        ${el.detail}
                                   </p>
                              </div>
                         </div>
     
                         <div class="col-md-6 mt-5">
                              <div class="d-flex justify-content-center align-content-center">
                                   <div class="card card-detail" style="width: 30rem;">
                                        <div class="card-body">
                                             <h5 class="fw-bold">
                                                  ${el.judul}
                                             </h5>
                                        </div>
                                        <ul class="list-group list-group-item">
                                             <li class="list-group-item"><i class="fa-solid fa-calendar"></i>&nbsp;${el.tanggal}
                                             </li>
                                             <li class="list-group-item"><i class="fa-solid fa-clock"></i>&nbsp;${el.waktu}
                                             </li>
                                             <li class="list-group-item"><i class="fa-solid fa-ticket"></i>&nbsp;${el.tiket}</li>
                                             <li class="list-group-item"><i
                                                       class="fa-solid fa-location-dot"></i>&nbsp;${el.lokasi}</li>
                                        </ul>
                                        <div class="d-grid p-3">
                                             <a href="" class="btn btn-primary">Daftar Event</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    `
                    }
               })
               document.getElementById('output-detail').innerHTML = output
          })
          .catch(function (err) {
               console.log(err)
          })
}

apiEvent()