let articles = document.getElementById("article-content")
let url = 'https://644e5c2c4e86e9a4d8f6d279.mockapi.io/article'

setTimeout(() => {
    fetch(url)
        .then(response => response.json())
        .then((response) => {
            response.map((data) => {
                articles.innerHTML += `
                    <div class="row mx-3 mb-4">
                        <div class="col-lg-6">
                            <img src='assets/images/${data.image}' class="img-fluid my-2 me-4 rounded-3" alt="kebakaran hutan">
                        </div>
                        <div class="col-lg-6 ps-lg-5 d-flex flex-column justify-content-center">
                            <h2 class="fw-semibold">${data.titleArticle}</h2>
                            <p>${data.description}</p>
                            <div class="date-article mb-4">
                                <i class="fa-solid fa-calendar-days text-muted fa-lg"></i>
                                <p class="d-inline text-muted ms-1">${data.datePost}</p>
                            </div>
                            <div class="button-more">
                                <a href="detailArticle.html?id=${data.id}" class="btn btn-primary border-0 px-3 py-2" id="btnSelengkapnya">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                `
            }).join('')
            document.getElementById("loading").classList.add("d-none")
            document.getElementById("header").classList.remove("d-none")
            document.getElementById("article").classList.remove("d-none")
            document.getElementById("footer").classList.remove("d-none")
            // console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}, 2600)