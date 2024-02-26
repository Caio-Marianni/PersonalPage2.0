// BACKGROUND FLOW FIELD --------------------------------------------
let particles = [];
const num = 500;

const noiseScale = 0.01/2;

function setup() {
//   IF THE BACKGROUND NEED TO BE A LONGER BACKGROUND -> 5 is the number off sections in the page
//   createCanvas(window.innerWidth * 5, window.innerHeight);
  createCanvas(window.innerWidth, window.innerHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  stroke(1);
  // For a cool effect try uncommenting this line
  // And comment out the background() line in draw
  stroke('#f43d15');
  clear();

}
function draw() {
  
  background(0, 0, 0, 8);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = width;
      p.y = height;
      p.x = random(width);
      p.y = random(height);
    }
  }
}9
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

// NAV ELEMENTS SELECT-----------------------------------------------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("main #navbar ul li a");

window.addEventListener("wheel", (evento) => {
  // console.log("Dados do pageXOffSet e scrollX ->")
  // console.log(pageXOffset)
  // console.log(scrollX)
  evento.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  // let current = "";
  // sections.forEach((section) => {
  //   const sectionHorizontal = section.offsetLeft;
  //   const sectionWidth = section.clientWidth;
  //   if (pageXOffset >= sectionHorizontal - sectionWidth / 3) {
  //     current = section.getAttribute("id");
  //   }
  // });

  // navLi.forEach((a ) => {
  //   a.classList.remove("active");
  //   if (a.classList.contains(current)) {
  //     a.classList.add("active");
  //   }
  // });
});

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("#navbar .text-container ul li a");
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((a ) => {
//     a.classList.remove("active");
//     if (a.classList.contains(current)) {
//       a.classList.add("active");
//     }
//   });
// });




//SCROLL TRANSLATE--------------------------------------------------
const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
});