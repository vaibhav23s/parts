// corect user id's

let correctUser = "amol";
let correctPass = "420";

// input &  function

function login() {
  let enteredUser = document.getElementById("emails").value;
  let enteredPass = document.getElementById("password").value;

  // if elase lagaya he chaqu karne ke liye
  if (enteredPass === "" || enteredUser === "") {
    alert("wrong password");
    return;
  } else if (enteredUser === correctUser && enteredPass === correctPass) {
   
    window.location.href="second.html";
  } else {
    alert("Invalid username or password ❌");
  }
}
