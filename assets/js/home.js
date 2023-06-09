let inputEmail = document.getElementById("email")
let inputFullname = document.getElementById("fullname")
let inputMessage = document.getElementById("message")
let btnSend = document.getElementById("btnSend")

const validateForm = () => {
    let email = inputEmail.value
    let fullname = inputFullname.value
    let message = inputMessage.value

    if (email !== "" && fullname !== "" && message !== "") {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          document.getElementById("invalid-email").innerHTML = ""
          document.getElementById("invalid-fullname").innerHTML = ""
          document.getElementById("invalid-message").innerHTML = ""
          document.getElementsByName("contact-form")[0].reset()
    } else {
        if (email === "") {
            document.getElementById("invalid-email").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email can't be empty`
        } else if (email !== "") {
            document.getElementById("invalid-email").innerHTML = ""
        }
        if (fullname === "") {
            document.getElementById("invalid-fullname").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Full Name can't be empty`
        } else if (fullname !== "") {
            document.getElementById("invalid-fullname").innerHTML = ""
        }
        if (message === "") {
            document.getElementById("invalid-message").innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Message can't be empty`
        } else if (message !== "") {
            document.getElementById("invalid-message").innerHTML = ""
        }
    }
}

btnSend.addEventListener("click", event => {
    event.preventDefault()
    validateForm()
})