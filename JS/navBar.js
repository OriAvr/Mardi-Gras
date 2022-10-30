document.getElementById("home").addEventListener('click', function () {
    window.open("homePage.html", "_self");
});
document.getElementById("gallery").addEventListener('click', function () {
    window.open("galleryPage.html", "_self");
});
document.getElementById("faq").addEventListener('click', function () {
    window.open("faqPage.html", "_self");
});
document.getElementById("about").addEventListener('click', function () {
    window.open("aboutPage.html", "_self");
});
document.getElementById("contact").addEventListener('click', function () {
    window.open("contactPage.html", "_self");
});


function navDisplay(isChecked) {
    if (isChecked.checked) {
        document.getElementById('home').style.display = "flex";
        document.getElementById('gallery').style.display = "flex";
        document.getElementById('faq').style.display = "flex";
        document.getElementById('about').style.display = "flex";
        document.getElementById('contact').style.display = "flex";
    } else {
        document.getElementById('home').style.display = "none";
        document.getElementById('gallery').style.display = "none";
        document.getElementById('faq').style.display = "none";
        document.getElementById('about').style.display = "none";
        document.getElementById('contact').style.display = "none";
    }
}

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navItems");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
}