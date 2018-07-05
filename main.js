// var triggers = document.querySelectorAll('a');
// var hightLight = document.createElement('span');
// hightLight.classList.add('active')
// document.body.appendChild(hightLight);
// console.log(hightLight);

// function hightLightLink() {
//     var linkCoords = this.getBoundingClientRect();
//     hightLight.style.width = `{linkCoords.width}px`;
//     hightLight.style.height = `{linkCoords.height}px`;
//     hightLight.style.transform = `transform(100px ,100px)`;
// }


// triggers.forEach(a => a.addEventListener("mouseenter", hightLightLink));


const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));