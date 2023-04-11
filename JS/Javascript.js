console.log("Hello Basem");

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let pes = ((scrollTop / height) * 100);
    el.style.width = `${pes}%` ;
});



//slider item | Array.from 
var sliderImg = Array.from(document.querySelectorAll(".slider-container img"))
//number of slides
var slidesCount = sliderImg.length;

// set current slide
var currentSlide = 1;

//slide num string element
var slideNumber = document.getElementById("slide-number");

// previous and next
var previous = document.getElementById("prev");
var next = document.getElementById("next");

// Handle click on previous and next
previous.onclick = prevSlide;
next.onclick = nextSlide;

//create the main il element
var pagin = document.createElement("ul")
pagin.setAttribute('id', 'pagin-ul')

//create li depend on slides
for(var i = 1; i<slidesCount+1; i++) {

    //create the li
    var paginItem = document.createElement("li");
    paginItem.setAttribute('data-index', i);
    paginItem.appendChild(document.createTextNode(i));
    // append item to main ul list
    pagin.appendChild(paginItem);
}

//add the created ul element to the page 
document.getElementById('indicators').appendChild(pagin);

// get the new creatde ul
var paginUl = document.getElementById('pagin-ul')

//pagin item | Array.from 
var paginArr = Array.from(document.querySelectorAll("#pagin-ul li"))

//loop through pagination
for (var i = 0; i < paginArr.length; i++) {
    paginArr[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();

    }
}

//triggerthe cheker function
theChecker();


// next slide function 
function nextSlide() {
    if (next.classList.contains("disabled")) {
        //do nothing
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
// previous slide function 
function prevSlide() {
    if (previous.classList.contains("disabled")) {
        //do nothing
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

//create the checkerfunction
function theChecker() {
    // remove all active class 
    removeActive();
    slideNumber.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
    // set active class on current slide
    sliderImg[currentSlide - 1].classList.add('active')
    // set active class on current pagin
    paginUl.children[currentSlide - 1].classList.add('active');
    //check if the current slide is first
    if(currentSlide ==1) {
        //add disabled class on previous 
        previous.classList.add('disabled');
    } else {
        //remove disabled class on previous 
        previous.classList.remove('disabled');
    }
        //check if the current slide is first
    if(currentSlide == slidesCount) {
        //add disabled class on next 
        next.classList.add('disabled');
    } else {
        //remove disabled class on next 
        next.classList.remove('disabled');
    }
}
//remove all active class
function removeActive() {
    //loop throgh img
    sliderImg.forEach(function (img) {
        img.classList.remove('active');
    });
    //loop through pagin
    paginArr.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}



