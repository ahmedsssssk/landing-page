/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// create global variables storing unordered list,sections,links and "scrol to top" Button
const navaigationBar = document.getElementById(`navbar__list`);
const sections = document.querySelectorAll(`section`);
const myButton = document.getElementById(`up`);


// building navigation bar
function buildNavBar() {
    // loop over existing sections to build navnigation bar including links corresponding to each section dynamically
    for (let section of sections) {
        navaigationBar.innerHTML += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
    };
};
buildNavBar();

// Add class 'active' to section when near top of viewport
function highlightSecInViewport () {
    for (i = 0; i<sections.length; i++) {
        if (sections[i].getBoundingClientRect().top >= -300 && sections[i].getBoundingClientRect().top <= 300) {
            sections[i].classList.add(`your-active-class`);
            sections[i].style.backgroundColor = `purple`;
            const listItems = document.querySelectorAll(`li`); // create variable corresponding to each item on navigation bar
            listItems.forEach(listItem => {
                if (listItem.textContent == sections[i].dataset.nav) { // condition to detect if section in viewport corresponding to that on navigation bar or not!
                    listItem.style.backgroundColor = `green`;
                } else {
                    listItem.style.backgroundColor = `chartreuse`;
                };
            });
        } else {
            sections[i].classList.remove(`your-active-class`);
            sections[i].style.backgroundColor = `blue`;
        };
        
    };
};
document.addEventListener(`scroll`, highlightSecInViewport);

// Scroll to  corresponding section using scollIntoView()
const links = document.querySelectorAll(`.menu__link`);
links.forEach(link => {
    link.addEventListener(`click`, function(event){
        event.preventDefault();
        sections.forEach(sec => {
            if (link.textContent == sec.dataset.nav) {
                sec.scrollIntoView({behavior: `smooth`})
            }
        });
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/
// When the Button appear
window.onscroll = function () {
    if(window.pageYOffset >= 800) {
        myButton.style.display = `block`
    } else {
        myButton.style.display = `none`
    };
    
};
// implemnetation function Scroll to top by the button
myButton.onclick = function () {
    window.scrollTo (0,0);
}; 