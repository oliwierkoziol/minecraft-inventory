let isBookOpen = true
let bookButton;
let counter;
let currentPage = 1;
let maxPages = 6;
let selectedTab;

document.addEventListener('DOMContentLoaded', function() {
    bookButton = document.getElementsByClassName("button")[0];
    counter = document.getElementsByClassName("subtitle")[0];
    selectedTab = document.getElementsByClassName("tab")[0];

    bookButton.addEventListener('click', function() { 
        if (isBookOpen) {
            document.getElementsByClassName("inventory")[0].style.display = "none";
            document.getElementsByClassName("tabs")[0].style.display = "none";
            isBookOpen = false;
        } else {
            document.getElementsByClassName("inventory")[0].style.display = "flex";
            document.getElementsByClassName("tabs")[0].style.display = "flex";
            isBookOpen = true;
        }
    })  
    document.getElementsByClassName("arrow back")[0].addEventListener('click', function() {
        if (currentPage==1) {
            currentPage=6;
        } else {
            currentPage--
        }
        counter.innerHTML = `${currentPage}/${maxPages}`;
    })
    document.getElementsByClassName("arrow forw")[0].addEventListener('click', function() {
        if (currentPage==6) {
            currentPage=1;
        } else {
            currentPage++
        }
        counter.innerHTML = `${currentPage}/${maxPages}`;
    })
    document.getElementsByClassName("table")[0].addEventListener('click', function() {
        document.getElementsByClassName("input")[0].value = ''
    })
    Array.from(document.getElementsByClassName("tab")).forEach(element => {
        element.addEventListener('click', function() {
            selectedTab.classList.remove("selected");
            element.classList.add("selected");
            selectedTab = element;
        })
    });;
})