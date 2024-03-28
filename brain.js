// BACKGROUND FLOW FIELD --------------------------------------------
let particles = [];

const num = 100;

const noiseScale = 0.01/2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(window.innerWidth, window.innerHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  stroke(1);
  stroke('#3ecc3e');
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
}
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

// NAV ELEMENTS SELECT-----------------------------------------------
function change() {
  document.getElementById('radio').checked = true;
}
//SCROLL TRANSLATE--------------------------------------------------
// const scrollContainer = document.querySelector("main");

// scrollContainer.addEventListener("wheel", (evt) => {
//       evt.preventDefault();
//       scrollContainer.scrollLeft += evt.deltaY;
// });
