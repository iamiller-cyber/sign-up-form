const button = document.querySelector("button")
const password = document.querySelector("#password")
const confirm = document.querySelector("#pwcheck")

confirm.addEventListener("blur", () => {
    if (password.textContent !== confirm.textContent) {
        confirm.setCustomValidity("Passwords don't match.")
    }
    else {confirm.setCustomValidity("")
}
    confirm.reportValidity()

})