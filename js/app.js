const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
});

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();


let counter = 0;
const textList = ['Programmer', 'Graphic Designer', 'Web Developer', 'Web Designer'];
const animatedText = document.querySelector("#animatedText");

setInterval(changeText, 3000);

function changeText () {
    animatedText.innerHTML = textList[counter];
    counter++;
    if(counter >= textList.length) {
        counter = 0;
    }
}


    function openPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }



