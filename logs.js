const loginButton = document.getElementById("login");
const storedUsername = localStorage.getItem("username");

if (storedUsername) {
    const icon = document.createElement("i");
    icon.className = "fi fi-rr-user";
    const usernameText = document.createTextNode(storedUsername);
    loginButton.textContent = ''; 
    loginButton.appendChild(icon);
    // loginButton.appendChild(' ');
    loginButton.appendChild(usernameText); 
}

loginButton.addEventListener("click", function (){
    window.location.href = "../login/login.html";
  
});