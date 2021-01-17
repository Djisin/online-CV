let delay;
function displayPage() {
    delay = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    if (window.location.pathname == "/online-CV/index.html") {
        document.getElementById("home-page").style.display = "block";
    }
    else if (window.matchMedia("(max-width: 720px)").matches) {
        document.getElementById("container").style.display = "flex";
    }
    else {
        document.getElementById("container").style.display = "grid";
    }
}

let url = window.location.href
document.addEventListener("DOMContentLoaded", function () {
    //close menu
    let menuElement = document.getElementById('menu');
    document.addEventListener('click', function (event) {
        let isClickedInside = menuElement.contains(event.target);
        if (!isClickedInside) {
            if (url.substring(url.lastIndexOf('#') + 1) === 'menu') {
                document.getElementsByClassName('menu-button icon-minus')[0].click()
            }
        }
    })
    //change index.html
    if (url.substring(url.lastIndexOf('/') + 1) === 'index.html') {
        if ((window.innerWidth || document.documentElement.clientWidth) < 420){
            document.getElementById('home-page-head').innerHTML = 'Miloš'+'<br>'+ 'Radivojević'
        }
    }
});