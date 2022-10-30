document.getElementById("submitBtn").addEventListener('click', function () {
    let validEmail = emailValidation();
    let userName = document.getElementById("fName").value + " " + document.getElementById("lName").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let message = document.getElementById("msg").value;
    if (firstName.length && lastName.length && message.length > 0 && validEmail) {
        alert('Thank you for your message ' + userName);
    } else if (validEmail) {
        alert('Please Fill Out The Missing Fields');
    }
});

function emailValidation() {
    let emailAddress = document.getElementById("email").value
    console.log(emailAddress);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}