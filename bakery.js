let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
  // for checking the entered value is correct or not
  
document.querySelector.signup.addEventListener("submit", validate);


function validate() {
  let emailAddress = document.signup.email.value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let emailCheck = emailPattern.test(emailAddress);

  if (emailCheck == false && document.querySelector(".errorclass") === null) {
    let error = document.createElement("p");
    error.textContent =
      "Email address should be non empty with the format of xyx@yxz.xyz";
      error.style.color = "red";
    error.classList.add("errorclass");
    document.signup.email.after(error);
  } else if (
    emailCheck == true &&
    document.querySelector(".errorclass") !== null
  ) {
    document.querySelector(".errorclass")?.remove();
  }

  let username = document.signup.login.value;
  let userPattern = /[a-z]{2,20}/;
  let userCheck = userPattern.test(username);
  if (userCheck == false && document.querySelector(".errorLogin") === null) {
    let error2 = document.createElement("p");
    error2.textContent =
      "User name should be non empty and within 20 characters long";
    error2.style.color = "red";
    error2.classList.add("errorLogin");
    document.signup.login.after(error2);
  } else if (
    userCheck == true &&
    document.querySelector(".errorLogin") !== null
  ) {
    document.querySelector(".errorLogin")?.remove();
  }

  let password = document.signup.pass.value;
  let passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  let passCheck = passPattern.test(password);
  if (passCheck == false && document.querySelector(".errorPass") === null) {
    let error3 = document.createElement("p");
    error3.textContent =
      "X Password should be at least 6 characters : 1 upper case, 1 lowercase";
    error3.style.color = "red";
    error3.classList.add("errorPass");
    document.signup.pass.after(error3);
  } else if (
    passCheck == true &&
    document.querySelector(".errorPass") !== null
  ) {
    document.querySelector(".errorPass")?.remove();
  }

  let password2 = document.signup.pass2.value;

  if (
    password2 === password &&
    document.querySelector(".errorPass2") === null
  ) {
    let error4 = document.createElement("p");
    error4.textContent = "Please retype password";
    error4.style.color = "red";
    error4.classList.add("errorPass2");
    document.signup.pass2.after(error4);
  } else if (
    password2 !== password &&
    document.querySelector(".errorPass2") !== null
  ) {
    document.querySelector(".errorPass2")?.remove();
  }

  let telephone = document.signup.phoneNumber.value;
  let telephone_pattern = /@^\d{10}$/;
  let telcheck = telephone_pattern.test("telephone");
  if (telcheck == false && document.querySelector(".errorTel") === null) {
    let error5 = document.createElement("p");
    error5.textContent =
      "X Telephone should be 10 digits only";
    error5.style.color = "red";
    error5.classList.add("errorTel");
    document.signup.phoneNumber.after(error5);
  } else if (
    passCheck == true &&
    document.querySelector(".errorTel") !== null
  ) {
    document.querySelector(".errorTel")?.remove();
  }
 
  return false;


}



