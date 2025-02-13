document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ name, email });

            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");

            form.reset();
        });
    }

    const userList = document.getElementById("userList");
    if (userList) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let div = document.createElement("div");
            div.classList.add("user-card");
            div.innerHTML = `<strong>Name:</strong> ${user.name} <br> <strong>Email:</strong> ${user.email}`;
            userList.appendChild(div);
        });
    }
});
