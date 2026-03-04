function calcSilo() {

    let R1 = +document.getElementById("S_R1").value;
    let H1 = +document.getElementById("S_H1").value;
    let R2 = +document.getElementById("S_R2").value;
    let H2 = +document.getElementById("S_H2").value;
    let angle = +document.getElementById("S_angle").value;
    let K = +document.getElementById("S_K").value / 100;

    let totalH = H1 + H2;

    let Vgeo = Math.PI * R1 * R1 * H1;
    let Hr = R1 * Math.tan(angle * Math.PI/180);
    let Vun = (Math.PI * R1 * R1 * Hr)/2;
    let Vcyl = Vgeo - Vun;

    let Vcon = Math.PI * H2 * (R1*R1 + R2*R2 + R1*R2)/3;
    let Vusecon = Vcon * K;

    let Vtotal = Vcyl + Vusecon;
	
	let Vg = Vgeo + Vcon;
	

    let beta = Math.atan(H2/(R1-R2)) * 180/Math.PI;
    let L = Math.sqrt(H2*H2 + (R1-R2)*(R1-R2));

    let Acyl = 2 * Math.PI * R1 * H1;
    let Acon = Math.PI * (R1 + R2) * L;
    let Atotal = Acyl + Acon;

    document.getElementById("S_totalH").value = totalH.toFixed(2);
    document.getElementById("S_Vtotal").value = Vtotal.toFixed(2);
	document.getElementById("G_Vtotal").value = Vg.toFixed(2);
    document.getElementById("S_beta").value = beta.toFixed(2);
    document.getElementById("S_Atotal").value = Atotal.toFixed(2);

    updateSiloDiagram(R1,H1,R2,H2,Vtotal);
}

function updateSiloDiagram(R1,H1,R2,H2,Vtotal){

    let canvas = document.getElementById("SiloDiagram");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ===== Dynamic Scaling Fix =====

let maxHeightPx = canvas.height - 120;  // top-bottom margin
let maxWidthPx  = canvas.width - 50;   // left-right margin

let totalHeightReal = H1 + H2;
let maxRadiusReal = Math.max(R1, R2);

// height based scale
let scaleH = maxHeightPx / totalHeightReal;

// width based scale (diameter ke hisaab se)
let scaleW = maxWidthPx / (2 * maxRadiusReal);

// final scale → jo chhota ho use karo
let scale = Math.min(scaleH, scaleW);

    let cx = canvas.width/2;
    let baseY = canvas.height - 60;

    let cylHeight = H1 * scale;
    let coneHeight = H2 * scale;
    let totalHeight = cylHeight + coneHeight;

    let topY = baseY - totalHeight;
    let cylBottomY = topY + cylHeight;

    // =========================
    // SILO BOUNDARY (Industrial Color)
    // =========================
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#38bdf8";   // steel blue

    // Cylinder
    ctx.strokeRect(cx - R1*scale, topY, R1*2*scale, cylHeight);

    // Top ellipse
    ctx.beginPath();
    ctx.ellipse(cx, topY, R1*scale, 18, 0, 0, Math.PI*2);
    ctx.stroke();

    // Cone boundary
    ctx.beginPath();
    ctx.moveTo(cx - R1*scale, cylBottomY);
    ctx.lineTo(cx - R2*scale, baseY);
    ctx.lineTo(cx + R2*scale, baseY);
    ctx.lineTo(cx + R1*scale, cylBottomY);
    ctx.closePath();
    ctx.stroke();

    // =========================
    // CAPACITY CALC
    // =========================
    let Vgeo = Math.PI * R1 * R1 * H1;
    let Vcon = Math.PI * H2 * (R1*R1 + R2*R2 + R1*R2)/3;
    let totalCapacity = Vgeo + Vcon;

    let fillRatio = Math.min(Vtotal/totalCapacity,1);
    let fillHeightTotal = totalHeight * fillRatio;

    let fillTop = baseY - fillHeightTotal;

    if(Vtotal <= 0) return; // no fill on load

    // =========================
    // CLIPPING AREA (Important Fix)
    // =========================
    ctx.save();

    ctx.beginPath();

    // Create silo clipping path
    ctx.moveTo(cx - R1*scale, topY);
    ctx.lineTo(cx - R1*scale, cylBottomY);
    ctx.lineTo(cx - R2*scale, baseY);
    ctx.lineTo(cx + R2*scale, baseY);
    ctx.lineTo(cx + R1*scale, cylBottomY);
    ctx.lineTo(cx + R1*scale, topY);
    ctx.closePath();

    ctx.clip(); // restrict drawing inside silo only

    // =========================
    // COAL FILL (Professional Gradient)
    // =========================
    let coalGrad = ctx.createLinearGradient(0,fillTop,0,baseY);
    coalGrad.addColorStop(0,"#4b4b4b");
coalGrad.addColorStop(1,"#0f0f0f");

    ctx.fillStyle = coalGrad;

    ctx.fillRect(cx - R1*scale,
                 fillTop,
                 R1*2*scale,
                 baseY-fillTop);

    // Coal texture
   for(let i=0;i<10000;i++){
    let x = cx - R1*scale + Math.random()*R1*2*scale;
    let y = fillTop + Math.random()*(baseY-fillTop);
    ctx.fillStyle = "rgba(120,0,0.35)";
    ctx.fillRect(x,y,2,2);
}

    ctx.restore();
}
window.onload = function(){
   updateSiloDiagram(4,20,1,10,0); // initially empty silo
}