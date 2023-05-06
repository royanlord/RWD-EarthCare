let id =
  Number.parseInt(
    new Map(
      location.search
        .replace("?", "")
        .split("&")
        .map((e) => e.split("="))
    ).get("id")
  ) ?? 0;

if (id == 0 || Number.isNaN(id)) {
  document.getElementById("output-detail").innerHTML = "Data kosong";
} else {
  apiEvent();
}

function apiEvent() {
     setTimeout(() => {
          fetch("https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events")
          .then(function (res) {
               return res.json();
          })
          .then(function (data) {
               let output = "";

               data.forEach(function (el) {
                    document.title = `${el.judul}`
                    if (el.id == id) {
                         output += `
                              <div id="output-detail" class="container my-5 d-flex flex-sm-column justify-content-justify-content-center align-content-center flex-lg-row">
                                   <div class="row">
                                        <div class="col-lg-9 col-md-12">
                                             <div class="img-detail mt-5">
                                                  <img src="${el.gambar}" class="img-responsive img-fluid w-100"
                                                       alt="ilustrasi mencegah banjir">
                                                  <div class="activity-detail mt-2">
                                                       <h4>Activity Detail</h4>
                                                       <p class="text-detail">
                                                            ${el.detail}
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                         
                                   <div class="row">
                                        <div class="col-md-12 col-lg-3">
                                             <div class="card card-detail-event mt-5 mx-md-auto" style="width: 28rem; height: 28rem;">
                                                  <div class="card-body">
                                                  <h4 class="card-title mb-4 fw-bold">${el.judul}</h4>
                                                  <div class="date-detail mb-4">
                                                       <i class="fa-solid fa-calendar"></i>
                                                       <p class="d-inline text-muted ms-1">${el.tanggal}</p>
                                                  </div>
                                                  <div class="time-detail mb-4">
                                                       <i class="fa-solid fa-clock"></i>
                                                       <p class="d-inline text-muted ms-1">${el.waktu}</p>
                                                  </div>
                                                  <div class="ticket-detail mb-4">
                                                       <i class="fa-solid fa-ticket"></i>
                                                       <p class="d-inline text-muted ms-1">${el.tiket}</p>
                                                  </div>
                                                  <div class="location-detail mb-4">
                                                       <i class="fa-solid fa-location-dot"></i>
                                                       <p class="d-inline text-muted ms-1">${el.lokasi}</p>
                                                  </div>
                                                  <div class="registration-detail mb-4">
                                                       <i class="fa-solid fa-address-card"></i>
                                                       <p class="d-inline text-muted ms-1">${el.pendaftaran}</p>
                                                  </div>
                                                  <div class="d-grid mt-2 mt-3 btn-detail-event">
                                                       <a href="./event-success.html" class="btn btn-primary">Daftar Event</a>
                                                  </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         `;
                    }
               });
               document.getElementById("output-detail").innerHTML = output;
               document.getElementById("loading").classList.add("d-none")
               document.getElementById("header").classList.remove("d-none")
               document.getElementById("detail-evt").classList.remove("d-none")
               document.getElementById("footer").classList.remove("d-none")
          })
          .catch(function (err) {
               console.log(err);
          });
     }, 2000)
  
}

apiEvent();
