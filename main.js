const validateUser = function () {
    let username = document.getElementById("username").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let salary = (document.getElementById("salary").value || 0)
    if (username.length < 2) {
        alert("Name is required, must be at least of 2 charachters ")
        return
    }
    else if (phone.length != 10) {
        alert("Phone is required, should be exactly 10 digits")
        return
    } else if (email.length == 0) {
        alert("Invalid Email")
        return
    } else if (salary <= 0) {
        alert("You should pay to work :(")
        return
    } else {
        const user = {
            username: username,
            phone: phone,
            email: email,
            salary: salary,
        }
        document.getElementById("container").style.visibility = "hidden"
        alert(`Welcome ${user.username}`)
    }
}