

let users = [];
let logInUser = {};


(() => {
    let userInStringForm = localStorage.getItem("users");
    let logInUserInStringForm = localStorage.getItem("logInUser");
    users = JSON.parse(userInStringForm) || [];
    logInUser = JSON.parse(logInUserInStringForm) || {};
    console.log("users : ", users);
    console.log("LUsers : ", logInUser);
})();



function move(a) {
    window.location.href = a;
}


(() => {
    let isLogIn = localStorage.getItem("logInUser");
    if (!isLogIn) {

        let alert = document.querySelector(`#alert`);
        console.log("login", isLogIn);
        move("./login.html");
        alert.innerHTML = "please login first"

    } else {
        console.log("you are already login");
    }
})();


let displayName = document.querySelector(`#displayName`);


displayName.innerHTML = logInUser.name.toUpperCase();


let logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("logInUser");

    move("./login.html");
}