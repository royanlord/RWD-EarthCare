function apiEvent() {
     setTimeout(() => {
          fetch("https://644dfece4e86e9a4d8ef004c.mockapi.io/events")
          .then(function (res) {
               return res.json();
          })
          .then(function (data) {
               let output = "";
               data.forEach(function (el) {
                    document.title = "Event"
                    const endDate = new Date(el.tanggal);
                    const currentDate = new Date();

                    const eventEnd = currentDate > endDate;

                    const joinButton = eventEnd
                    ? `<a href="#" class="btn btn-danger disabled mt-3">Event Ended</a>`
                    : `<a href="./detail-event.htmlHasLogin?id=${el.id}" class="btn btn-primary btn-join-event mt-3">Join Now</a>`;

                    output += `
                         <div class="row">
                              <div class="col-md-4 col-lg-4">
                                   <div class="card h-100">
                                        <img class="img-fluid" src="${el.gambar}" alt="${el.alt}">
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
                                                  ${joinButton}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    `;
               });
               document.getElementById("output").innerHTML = output;
               document.getElementById("loading").classList.add("d-none")
               document.getElementById("header").classList.remove("d-none")
               document.getElementById("event").classList.remove("d-none")
               document.getElementById("footer").classList.remove("d-none")
          })
          .catch(function (err) {
               console.log(err);
          });
     }, 2600)
  
}

apiEvent();
