let f=0.5; // scaling factor constant, to change scale
let z=['🎅','⛄','🎄','❄️', '🤶','🎁','🦌']; // 
let t=0;
let t2=0;

let canvas_size = 412;
var canvas;

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   canvas.position(x, y);
// }

function setup() {
  canvas_size = 0.80*Math.min(windowWidth,windowHeight);
  canvas = createCanvas(canvas_size, canvas_size);
  // centerCanvas();
  canvas.parent('sketch-holder');
  // canvas.style('display', 'flex');
}

function windowResized() {
  canvas_size = 0.80*Math.min(windowWidth,windowHeight);
  resizeCanvas(canvas_size, canvas_size);
  // centerCanvas();
}

function draw() {
  background(0);
  for (let i=0;i<140;i++){
    for (let j=0;j<6;j++){
    e(z[i%7],canvas_size/2+canvas_size/(3**(i-t2))*cos(TAU*j/6+t),canvas_size/2+canvas_size/(3**(i-t2))*sin(TAU*j/6+t),canvas_size/(3**(i-t2)));
    }
  }
  t+=1/90;
  t2=t2+1/90;
  if (t2>6){
    t2=0;
  }
}

function e(ch,x,y,si){
  textSize(si*f);
  text(ch,x-69*si*f/100,y+7*si*f/20);
}
