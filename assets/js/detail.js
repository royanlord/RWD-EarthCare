let urlDua = `https://644e5c2c4e86e9a4d8f6d279.mockapi.io/detail`
let detail = document.getElementById("detail")
// let queryString = window.location.search
// let urlParams = new URLSearchParams(queryString)
// let id = urlParams.get("id")
let id = Number.parseInt((new Map(location.search.replace("?", "").split("&").map(e => e.split("=")))).get("id"))??0
if (id == 0 || Number.isNaN(id)) {
    // detail.innerText = "data kosong"
    detail.innerHTML = `
        <div class="row d-flex justify-content-center">
            <lottie-player src='https://assets8.lottiefiles.com/packages/lf20_a3kesdek.json' background='transparent' speed='1' style='width: 550px; height: 550px;' loop autoplay></lottie-player>
            <h2 class="fw-semibold text-center" style="margin-top: -80px; z-index: 1">Sorry, Page Not Found</h2>
            <div class="col-12 d-flex justify-content-center">
            </div>
        </div>
    `
} else {
    setTimeout(() => {
        fetch(urlDua)
        .then(response => response.json())
        .then((response) => {
            response.forEach((data) => {
                document.title = `${data.title}`
                if (data.id == id) {
                    detail.innerHTML = `
                        <div class="row mt-4 mx-4">
                            <div class="col-12 rounded-3 mb-lg-4">
                                <img src="assets/images/${data.img}" class="img-fluid rounded-3" alt="${data.title}">
                            </div>
                            <div class="col-12 mt-2 mt-lg-5 mx-lg-auto w-50" id="main-article">
                                <h2 class="fw-semibold">${data.title}</h2>
                                <div class="date-article mb-3 mb-lg-4">
                                    <i class="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                    <p class="d-inline text-muted ms-1">${data.date}</p>
                                </div>
                            <p class="text-wrap">
                                ${data.firstDetail}
                            </p>
                            <p class="text-wrap">
                                ${data.secondDetail}
                            </p>
                            <p class="text-wrap">
                                ${data.thirdDetail}
                            </p>
                            <p class="text-wrap">
                                ${data.fourthDetail}
                            </p>
                            </div>
                        </div>
                    `
                }
            })
            document.getElementById("loading").classList.add("d-none")
            document.getElementById("header").classList.remove("d-none")
            document.getElementById("detail-atc").classList.remove("d-none")
            document.getElementById("footer").classList.remove("d-none")
            
            // let data = response.response
            
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    }, 2600)
}