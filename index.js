
(() => {
    let isLogIn = localStorage.getItem("logInUser");
    if (isLogIn) {

        console.log("login", isLogIn);
        console.log("yes....");
        move("./home.html")
    } else {
        console.log("no....");
    }
})();


let users = [];
let logInUser = [];


function move(a) {
    window.location.href = a;
}

(() => {
    let userInStringForm = localStorage.getItem("users");
    let logInUserInStringForm = localStorage.getItem("logInUser");
    users = JSON.parse(userInStringForm) || [];
    logInUser = JSON.parse(logInUserInStringForm) || {};
    console.log("users : ", users);
    console.log("LUsers : ", logInUser);
})();


function signUp(e) {
    e.preventDefault();

    let alert = document.querySelector(`#alert`);
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let ConfirmPassword = document.querySelector("#passwordC").value;

    if (password !== ConfirmPassword) {
        alert.style.visibility = "visible";
        alert.innerHTML = " Password doesn't match ! please check and type again ";
        return;
    }

    let newUser = {
        name,
        email,
        password,
        ConfirmPassword,

    }

    let isMatch = false;
    for (let i = 0; i < users.length; i++) {

        if (email === users[i].email) {
            isMatch = true;
            console.log("checking");
            alert.style.visibility = "visible";
            alert.innerHTML = " This email is already registered ! kindly enter a new one  "
            return;
        }
    }


    console.log("running");
    users.push(newUser);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    move("./login.html");
}