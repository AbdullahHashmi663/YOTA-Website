// var crsr = document.querySelector("#cursor");
// var crsr1 = document.querySelector("#cursor-blur");
// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   crsr1.style.left = dets.x - 125 + "px";
//   crsr1.style.top = dets.y - 125 + "px";
// });

// var h4all = document.querySelectorAll("nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     elem.style.color = "#10ecb99c";
//     crsr.style.scale = 2;
//     crsr.style.border = "1px solid #fff";
//     crsr.style.backgroundColor = "#16D99E";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     elem.style.color = "#fff";
//     crsr.style.border = "0px solid #10ecb99c;";
//     crsr.style.backgroundColor = "#059981";
//   });
// });
// let scrollInterval;

// // Function to start scrolling
// function startScrolling() {
//   // Start scrolling if not already scrolling
//   if (!scrollInterval) {
//     scrollInterval = setInterval(function () {
//       window.scrollBy(0, 3000); // Scroll down by 5 pixels

//       // Stop scrolling if we reach the bottom of the page
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         clearInterval(scrollInterval);
//         scrollInterval = null; // Reset the interval variable
//       }
//     }, 20); // Adjust the speed here (lower means faster)
//   }
// }

// // Function to stop scrolling
// function stopScrolling() {
//   clearInterval(scrollInterval);
//   scrollInterval = null; // Reset the interval variable
// }
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}