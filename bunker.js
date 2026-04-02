function calculate(){

let L1=+document.getElementById("L1").value;
let B1=+document.getElementById("B1").value;
let H1=+document.getElementById("H1").value;
let L2=+document.getElementById("L2").value;
let B2=+document.getElementById("B2").value;
let H2=+document.getElementById("H2").value;
let K =+document.getElementById("K").value;
let rho=+document.getElementById("rho").value;
let N =+document.getElementById("N").value;


// ===== VALIDATION =====
if(!L1||!B1||!H1||!L2||!B2||!H2){
    alert("Please fill all required inputs");
    return;
}

// ===== CALCULATION =====

// Top
let A1 = L1 * B1;
let V1 = A1 * H1;

// Slant
let l = Math.sqrt(H2*H2 + Math.pow((L1 - L2)/2,2));
let b = Math.sqrt(H2*H2 + Math.pow((B1 - B2)/2,2));

// Bottom
let A2 = L2 * B2;

// Volume trapezoid
let V2 = (H2/6) * (A1 + A2 + (L1*B2) + (L2*B1));

// Total
let V = V1 + V2;
let Vuse = K * V;

// Angles
let beta1 = Math.atan((2*H2)/(L1 - L2)) * 180/Math.PI;
let beta2 = Math.atan((2*H2)/(B1 - B2)) * 180/Math.PI;

// Totals
let Vt = N * V;
let Vtuse = K * Vt;

// Surface
let Ar1 = L1 * H1;
let Ar2 = B1 * H1;
let Art = 2*Ar1 + 2*Ar2;

let At1 = ((L1 + L2)/2) * (H2 / Math.sin(beta1 * Math.PI/180));
let At2 = ((B1 + B2)/2) * (H2 / Math.sin(beta2 * Math.PI/180));
let Att = 2*At1 + 2*At2;

let As = Art + Att;

// Capacity
let totalCap = rho * N * V;
let useCap = K * totalCap;


// ===== OUTPUT FUNCTION =====
function set(id,val){
    document.getElementById(id).innerText = val.toFixed(4);
}

// ===== FILL OUTPUT =====
set("A1",A1);
set("V1",V1);
set("l",l);
set("b",b);
set("A2",A2);
set("V2",V2);
set("V",V);
set("Vuse",Vuse);
set("beta1",beta1);
set("beta2",beta2);
set("Vt",Vt);
set("Vtuse",Vtuse);
set("Art",Art);
set("Att",Att);
set("As",As);
set("totalCap",totalCap);
set("useCap",useCap);
let fillRatio = Vuse / V;

drawBunker(L1,B1,L2,B2,H1,H2,fillRatio,Vt,Vtuse,useCap,beta1,beta2);

    // ===== SAVE FULL DATA =====
let data = {
  projectId: "bunker_1",   // 👈 tu change kar sakta hai
  type: "bunker",

  input: {
    L1, B1, H1, L2, B2, H2, K, rho, N
  },

  output: {
    V, Vuse, Vt, Vtuse, totalCap, useCap
  }
};

saveData(data);

}
let angleX = 0.6;   // vertical tilt
let angleY = 0.6;   // horizontal rotation

function drawBunker(L1,B1,L2,B2,H1,H2,fillRatio,V,Vuse,As,beta1,beta2){

let canvas = document.getElementById("bunkerCanvas");
let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

// ===== SCALE =====
let maxSize = 10;
let scale = 25;

let maxInput = Math.max(L1,B1,H1+H2);
if(maxInput > maxSize){
    scale = scale * (maxSize / maxInput);
}

// ===== OFFSET =====
let offsetX = 60;
let offsetY = 40;

let cx = 250;
let cy = 50;

// ===== SIZE =====
let w = L1 * scale;
let d = B1 * scale;
let h1 = H1 * scale;
let h2 = H2 * scale;

// ===== ISO FUNCTION =====
function iso(x,y,z){

    // ===== ROTATION =====
    let cosY = Math.cos(angleY);
    let sinY = Math.sin(angleY);

    let cosX = Math.cos(angleX);
    let sinX = Math.sin(angleX);

    // rotate Y (left-right)
    let x1 = x * cosY - y * sinY;
    let y1 = x * sinY + y * cosY;

    // rotate X (up-down tilt)
    let z1 = z * cosX - y1 * sinX;
    let y2 = z * sinX + y1 * cosX;

    return [
        cx + x1 + offsetX,
        cy + y2 + offsetY
    ];
}
function drawFaceAngle(pTop1, pTop2, pBot1, pBot2, label){

    // center of top edge
    let cx = (pTop1[0] + pTop2[0]) / 2;
    let cy = (pTop1[1] + pTop2[1]) / 2;

    // center of bottom edge
    let bx = (pBot1[0] + pBot2[0]) / 2;
    let by = (pBot1[1] + pBot2[1]) / 2;

    // vertical vector (top → नीचे rectangle)
    let v1x = ( (pTop1[0]+pTop2[0])/2 ) - ( (p1[0]+p2[0])/2 );
    let v1y = ( (pTop1[1]+pTop2[1])/2 ) - ( (p1[1]+p2[1])/2 );

    // slant vector (top → hopper)
    let v2x = bx - cx;
    let v2y = by - cy;

    // normalize
    let m1 = Math.sqrt(v1x*v1x + v1y*v1y);
    let m2 = Math.sqrt(v2x*v2x + v2y*v2y);

    v1x /= m1; v1y /= m1;
    v2x /= m2; v2y /= m2;

    let ang1 = Math.atan2(v1y, v1x);
    let ang2 = Math.atan2(v2y, v2x);

    let r = 25;

    ctx.strokeStyle = "#d32f2f";
    ctx.lineWidth = 2;

    // vertical line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + v1x*40, cy + v1y*40);
    ctx.stroke();

    // slant line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + v2x*40, cy + v2y*40);
    ctx.stroke();

    // ===== FIXED ARC =====
let diff = ang2 - ang1;

// normalize (-PI to PI)
if(diff > Math.PI) diff -= 2*Math.PI;
if(diff < -Math.PI) diff += 2*Math.PI;

// always smallest angle
let start = ang1;
let end   = ang1 + diff;

// draw arc inside face
ctx.beginPath();
ctx.arc(cx, cy, r, start, end, diff < 0);
ctx.stroke();

    // label
    ctx.fillStyle = "#d32f2f";
    ctx.fillText(label, cx + 5, cy - 5);
}
// ===== RECTANGLE POINTS =====
let p1 = iso(0,0,0);
let p2 = iso(w,0,0);
let p3 = iso(w,d,0);
let p4 = iso(0,d,0);

let p5 = iso(0,0,h1);
let p6 = iso(w,0,h1);
let p7 = iso(w,d,h1);
let p8 = iso(0,d,h1);

// ===== HOPPER =====
let wb = L2 * scale;
let db = B2 * scale;

let shiftX = (w - wb)/2;
let shiftY = (d - db)/2;

let b1 = iso(shiftX,shiftY,h1+h2);
let b2 = iso(shiftX+wb,shiftY,h1+h2);
let b3 = iso(shiftX+wb,shiftY+db,h1+h2);
let b4 = iso(shiftX,shiftY+db,h1+h2);

// ===== FILL CALC =====
let totalHeight = H1 + H2;
let fillHeight = fillRatio * totalHeight * scale;

// clamp (important)
if(fillHeight > (h1+h2)) fillHeight = h1+h2;
if(fillHeight < 0) fillHeight = 0;

// ===== FILL COLOR =====
ctx.fillStyle = "#4caf50";
ctx.globalAlpha = 1;

// ===== CASE 1: FILL INSIDE HOPPER =====
if(fillHeight <= h2){

    let fb1 = iso(shiftX,shiftY,h1+h2 - fillHeight);
    let fb2 = iso(shiftX+wb,shiftY,h1+h2 - fillHeight);
    let fb3 = iso(shiftX+wb,shiftY+db,h1+h2 - fillHeight);
    let fb4 = iso(shiftX,shiftY+db,h1+h2 - fillHeight);

    // hopper faces
    [[fb1,fb2,b2,b1],
     [fb2,fb3,b3,b2],
     [fb3,fb4,b4,b3],
     [fb4,fb1,b1,b4]].forEach(f=>{
        ctx.beginPath();
        ctx.moveTo(...f[0]);
        f.slice(1).forEach(p=>ctx.lineTo(...p));
        ctx.closePath();
        ctx.fill();
    });

    // top surface
    ctx.beginPath();
    ctx.moveTo(...fb1);
    ctx.lineTo(...fb2);
    ctx.lineTo(...fb3);
    ctx.lineTo(...fb4);
    ctx.closePath();
    ctx.fill();
}

// ===== CASE 2: FILL ABOVE HOPPER =====
else{

    // FULL hopper fill
    [[p5,p6,b2,b1],
     [p6,p7,b3,b2],
     [p7,p8,b4,b3],
     [p8,p5,b1,b4]].forEach(f=>{
        ctx.beginPath();
        ctx.moveTo(...f[0]);
        f.slice(1).forEach(p=>ctx.lineTo(...p));
        ctx.closePath();
        ctx.fill();
    });

    let rectFill = fillHeight - h2;

    let rf1 = iso(0,0,h1 - rectFill);
    let rf2 = iso(w,0,h1 - rectFill);
    let rf3 = iso(w,d,h1 - rectFill);
    let rf4 = iso(0,d,h1 - rectFill);

    // rectangle faces
    [[rf1,rf2,p6,p5],
     [rf2,rf3,p7,p6],
     [rf3,rf4,p8,p7],
     [rf4,rf1,p5,p8]].forEach(f=>{
        ctx.beginPath();
        ctx.moveTo(...f[0]);
        f.slice(1).forEach(p=>ctx.lineTo(...p));
        ctx.closePath();
        ctx.fill();
    });

    // top
    ctx.beginPath();
    ctx.moveTo(...rf1);
    ctx.lineTo(...rf2);
    ctx.lineTo(...rf3);
    ctx.lineTo(...rf4);
    ctx.closePath();
    ctx.fill();
}
// ===== INFO BOX (TOP LEFT) =====
ctx.globalAlpha = 0.9;

// box
let boxX = 10;
let boxY = 10;
let boxW = 250;
let boxH = 75;

ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#333";
ctx.lineWidth = 1;

ctx.beginPath();
ctx.rect(boxX, boxY, boxW, boxH);
ctx.shadowColor = "rgba(0,0,0,0.2)";
ctx.shadowBlur = 5;
ctx.fill();
ctx.stroke();

// text
ctx.fillStyle = "#000";
ctx.font = "12px Arial";

ctx.fillText("Total Volume : " + V.toFixed(2) + "  (m³) " , boxX+10, boxY+20);

ctx.fillStyle = "#4caf50";
ctx.fillText("Total Useful Volume : " + Vuse.toFixed(2) + "  (m³) ", boxX+10, boxY+38);

ctx.fillStyle = "#000";
ctx.fillText("Total Useful Capacity : " + As.toFixed(2) + "  (T) " , boxX+10, boxY+56);

ctx.globalAlpha = 1;

// ===== DRAW OUTLINES LAST (IMPORTANT) =====
ctx.strokeStyle = "#000";
ctx.lineWidth = 1;

// rectangle
[[p1,p2,p6,p5],[p2,p3,p7,p6],
 [p3,p4,p8,p7],[p4,p1,p5,p8]].forEach(f=>{
    ctx.beginPath();
    ctx.moveTo(...f[0]);
    f.slice(1).forEach(p=>ctx.lineTo(...p));
    ctx.closePath();
    ctx.stroke();
});

// hopper
[[p5,p6,b2,b1],[p6,p7,b3,b2],
 [p7,p8,b4,b3],[p8,p5,b1,b4]].forEach(f=>{
    ctx.beginPath();
    ctx.moveTo(...f[0]);
    f.slice(1).forEach(p=>ctx.lineTo(...p));
    ctx.closePath();
    ctx.stroke();
});

// ===== DIMENSIONS & ANGLES =====
ctx.fillStyle = "#000";
ctx.font = "12px Arial";

// ===== TOP LENGTH (L1) =====
ctx.fillText("L1", (p5[0]+p6[0])/2, (p5[1]+p6[1])/2 - 10);

// ===== TOP WIDTH (B1) =====
ctx.fillText("B1", (p6[0]+p7[0])/2 + 5, (p6[1]+p7[1])/2);

// ===== HEIGHT (H1) =====
ctx.fillText("H1", p5[0]-25, (p5[1]+p1[1])/2);

// ===== BOTTOM LENGTH (L2) =====
ctx.fillText("L2", (b1[0]+b2[0])/2, (b1[1]+b2[1])/2 + 15);

// ===== BOTTOM WIDTH (B2) =====
ctx.fillText("B2", (b2[0]+b3[0])/2 + 5, (b2[1]+b3[1])/2 + 10);

// ===== HOPPER HEIGHT (H2) =====
ctx.fillText("H2", b1[0]-25, (b1[1]+p5[1])/2);
// ===== CORRECT FACE ANGLES =====

// β1 → LENGTH SIDE (L1 → L2 face)
drawFaceAngle(
    p5, p6,   // top edge (length)
    b1, b2,   // bottom edge
    "β1 = " + beta1.toFixed(1) + "°"
);

// β2 → WIDTH SIDE (B1 → B2 face)
drawFaceAngle(
    p6, p7,   // top edge (width)
    b2, b3,   // bottom edge
    "β2 = " + beta2.toFixed(1) + "°"
);
}
let canvas = document.getElementById("bunkerCanvas");

let isDragging = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", (e)=>{
    isDragging = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener("mousemove", (e)=>{
    if(!isDragging) return;

    let dx = e.offsetX - lastX;
    let dy = e.offsetY - lastY;

    angleY += dx * 0.01;
    angleX += dy * 0.01;

    lastX = e.offsetX;
    lastY = e.offsetY;

    calculate(); // redraw
});

canvas.addEventListener("mouseup", ()=> isDragging = false);
canvas.addEventListener("mouseleave", ()=> isDragging = false);

function saveData(value) {
  fetch("https://mahendra-api-backend.onrender.com/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ value: value })
  })
  .then(res => res.json())
  .then(data => console.log("Saved:", data))
  .catch(err => console.log("Error:", err));
}

function testSave() {
  let value = document.getElementById("num1").value;

  saveData(value);   // 👈 backend ko bhej raha hai
}
