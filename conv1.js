function openTab(evt, tabName) {

    // Hide all tabs
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className =
            tablinks[i].className.replace(" active", "");
    }

    // Show selected tab
  // Show selected tab
document.getElementById(tabName).style.display = "block";

if (evt && evt.currentTarget) {
    evt.currentTarget.className += " active";
}

    // ==========================
    // Assistant Control
    // ==========================

    const assistantBtn = document.getElementById("assistantBtn");
    const assistantPanel = document.getElementById("assistantPanel");

    const driveAssistantBtn = document.getElementById("driveAssistantBtn");
    const driveAssistantPanel = document.getElementById("driveAssistantPanel");

    // Hide both assistants by default
    assistantBtn.style.display = "none";
    driveAssistantBtn.style.display = "none";

    assistantPanel.classList.remove("active");
    driveAssistantPanel.classList.remove("active");

    // ==========================
    // Basic Input Assistant
    // ==========================
    if (tabName === "Basic") {

        assistantBtn.style.display = "flex";

    }

    // ==========================
    // Drive Components Assistant
    // ==========================
    else if (tabName === "DriveInput") {

        driveAssistantBtn.style.display = "flex";

    }

}

// Open default tab
document.getElementById("defaultOpen").click();


function calculate(){

    updateArea();
    updateBeltData();
    basicCalculation();
    calcIdler();
	calcMainRes();
	calcSecondary();
	calcSpecial();
	calcPower();
	
}
function calculateDriveComponents(){

    calcBeltForces();
	calcRadiusx();
	calcRadiusv();
	calcGear();
	calcShaft();
	calcTailShaft();
	calcSnubShaft();
	calcTakeUp();
	calcBend();


    

}
window.onload = function() {
    updateArea();
    updateBeltData();
    basicCalculation();
    calcIdler();
	calcMainRes();
	calcSecondary();
	calcSpecial();
	calcPower();
	calcBeltForces();
	calcRadiusx();
	calcRadiusv();
	calcGear();
	calcShaft();
	calcTailShaft();
	calcSnubShaft();
	calcTakeUp();
	calcBend();

	
	
};

function getMaxSpeed(Kv, B){

    // Width Group
    let col;

    if(B <= 500)
        col = 0;

    else if(B <= 650)
        col = 1;

    else if(B <= 800)
        col = 2;

    else if(B <= 1050)
        col = 3;

    else
        col = 4;

    // Speed Factor Group

    let row;

    if(Kv == 1)
        row = [2.5,3,3.5,4,4.5];

    else if(Kv == 2)
        row = [2.3,2.75,3.2,3.65,4.12];

    else if(Kv >=3 && Kv <=4)
        row = [2,2.38,2.75,3.15,3.55];

    else if(Kv >=5 && Kv <=6)
        row = [1.65,2,2.35,2.65,3];

    else
        row = [1.45,1.75,2.05,2.35,2.62];

    return row[col];
}
  const areaTable = {

500:{
    20:{0:0.0098,10:0.0142,20:0.0187,30:0.0234},
    25:{0:0.0120,10:0.0162,20:0.0206,30:0.0252},
    30:{0:0.0139,10:0.0180,20:0.0222,30:0.0266},
    35:{0:0.0157,10:0.0196,20:0.0236,30:0.0278},
	40:{0:0.0173,10:0.0210,20:0.0247,30:0.0287},
	45:{0:0.0186,10:0.0220,20:0.0256,30:0.0293}
},

650:{
    20:{0:0.0184,10:0.0262,20:0.03342,30:0.0427},
    25:{0:0.0224,10:0.0299,20:0.0377,30:0.0459},
    30:{0:0.0260,10:0.0332,20:0.0406,30:0.0484},
    35:{0:0.0294,10:0.0362,20:0.0433,30:0.0507},
	40:{0:0.0322,10:0.0386,20:0.0453,30:0.0523},
	45:{0:0.0347,10:0.0407,20:0.0469,30:0.0534}
},

800:{
    20:{0:0.0279,10:0.0405,20:0.0535,30:0.0671},
    25:{0:0.0344,10:0.0466,20:0.0591,30:0.0722},
    30:{0:0.0402,10:0.0518,20:0.0638,30:0.0763},
    35:{0:0.0454,10:0.0564,20:0.0678,30:0.0798},
	40:{0:0.0500,10:0.0603,20:0.0710,30:0.0822},
	45:{0:0.0540,10:0.0636,20:0.0736,30:0.0840}
},

1000:{
    20:{0:0.0478,10:0.0674,20:0.0876,30:0.109},
    25:{0:0.0582,10:0.0771,20:0.0966,30:0.117},
    30:{0:0.0677,10:0.0857,20:0.104,30:0.134},
    35:{0:0.0763,10:0.0933,20:0.111,30:0.129},
	40:{0:0.0838,10:0.0998,20:0.116,30:0.134},
	45:{0:0.0898,10:0.105,20:0.120,30:0.136}
},

1200:{
    20:{0:0.0700,10:0.0988,20:0.129,30:0.160},
    25:{0:0.0853,10:0.113,20:0.142,30:0.172},
    30:{0:0.0992,10:0.126,20:0.153,30:0.182},
    35:{0:0.112,10:0.137,20:0.163,30:0.190},
	40:{0:0.123,10:0.146,20:0.171,30:0.196},
	45:{0:0.132,10:0.154,20:0.176,30:0.200}
},

1400:{
    20:{0:0.0980,10:0.138,20:0.179,30:0.221},
    25:{0:0.120,10:0.158,20:0.197,30:0.238},
    30:{0:0.139,10:0.175,20:0.213,30:0.253},
    35:{0:0.157,10:0.191,20:0.220,30:0.264},
	40:{0:0.171,10:0.204,20:0.237,30:0.272},
	45:{0:0.184,10:0.214,20:0.245,30:0.277}
},

1600:{
    20:{0:0.130,10:0.182,20:0.236,30:0.293},
    25:{0:0.159,10:0.209,20:0.261,30:0.315},
    30:{0:0.185,10:0.233,20:0.282,30:0.334},
    35:{0:0.208,10:0.253,20:0.300,30:0.349},
	40:{0:0.228,10:0.270,20:0.314,30:0.360},
	45:{0:0.244,10:0.283,20:0.324,30:0.366}
},

1800:{
    20:{0:0.167,10:0.233,20:0.302,30:0.374},
    25:{0:0.203,10:0.268,20:0.334,30:0.403},
    30:{0:0.237,10:0.298,20:0.361,30:0.427},
    35:{0:0.266,10:0.324,20:0.384,30:0.446},
	40:{0:0.292,10:0.346,20:0.401,30:0.460},
	45:{0:0.313,10:0.363,20:0.414,30:0.468}
},

2000:{
    20:{0:0.207,10:0.290,20:0.376,30:0.465},
    25:{0:0.253,10:0.332,20:0.415,30:0.501},
    30:{0:0.294,10:0.370,20:0.448,30:0.530},
    35:{0:0.331,10:0.403,20:0.476,30:0.554},
	40:{0:0.362,10:0.429,20:0.490,30:0.571},
	45:{0:0.388,10:0.450,20:0.514,30:0.581}
},

2200:{
    20:{0:0.257,10:0.357,20:0.461,30:0.569},
    25:{0:0.311,10:0.408,20:0.508,30:0.613},
    30:{0:0.363,10:0.455,20:0.549,30:0.649},
    35:{0:0.408,10:0.494,20:0.584,30:0.677},
	40:{0:0.446,10:0.527,20:0.610,30:0.697},
	45:{0:0.478,10:0.552,20:0.629,30:0.710}
},

2400:{
    20:{0:0.303,10:0.423,20:0.547,30:0.677},
    25:{0:0.368,10:0.484,20:0.604,30:0.729},
    30:{0:0.428,10:0.539,20:0.653,30:0.772},
    35:{0:0.482,10:0.586,20:0.694,30:0.806},
	40:{0:0.528,10:0.625,20:0.725,30:0.830},
	45:{0:0.566,10:0.656,20:0.748,30:0.845}
},

2600:{
    20:{0:0.360,10:0.502,20:0.648,30:0.801},
    25:{0:0.439,10:0.575,20:0.716,30:0.863},
    30:{0:0.510,10:0.640,20:0.774,30:0.914},
    35:{0:0.573,10:0.695,20:0.822,30:0.953},
	40:{0:0.628,10:0.741,20:0.859,30:0.982},
	45:{0:0.672,10:0.777,20:0.885,30:0.999}
},

2800:{
    20:{0:0.413,10:0.578,20:0.749,30:0.928},
    25:{0:0.505,10:0.663,20:0.827,30:0.998},
    30:{0:0.585,10:0.737,20:0.894,30:1.063},
    35:{0:0.660,10:0.803,20:0.950,30:1.104},
	40:{0:0.721,10:0.885,20:0.993,30:1.137},
	45:{0:0.774,10:0.897,20:1.025,30:1.158}
}


};
function getSectionArea(B, ts, ss){

    if(areaTable[B] &&
       areaTable[B][ts] &&
       areaTable[B][ts][ss] !== undefined){

        return areaTable[B][ts][ss];
    }

    return 0;
}

function updateArea(){

    let B  = +document.getElementById("B").value;
    let ts = +document.getElementById("ts").value;
    let ss = +document.getElementById("ss").value;

    return getSectionArea(B, ts, ss);
}

function  basicCalculation(){
  
 
  let Qr  = +document.getElementById("Qr").value;
  let rho = +document.getElementById("rho").value;
  let V   = +document.getElementById("V").value;
  let K   = +document.getElementById("K").value;
  let nl   = +document.getElementById("nl").value;
  let Lf   = +document.getElementById("Lf").value;
  let B   = +document.getElementById("B").value;
  let L   = +document.getElementById("L").value;
  let H   = +document.getElementById("H").value;
  let K1 = +document.getElementById("K1").value;
  let K2 = +document.getElementById("K2").value;
  let cs = +document.getElementById("cs").value;
  let ts = +document.getElementById("ts").value;
  let ss = +document.getElementById("ss").value;
  let A = getSectionArea(B, ts, ss);
  // Speed factor
  let Kv = K1 + K2;
  
  let Vmax = getMaxSpeed(Kv,B);
  //designed Capacity
  let Qd = nl * Qr;

  // Max Capacity
  let Qmax = Lf * A * 3600 * V * rho * K;

  // Min Speed
  let Vmin = Qd / (A * 3600 * rho * K);

  // Material mass
  let mG = Qd / (3.6 * V);

  // Output
  document.getElementById("Qd").value = Qd.toFixed(2);
  document.getElementById("Kv").value = Kv.toFixed(2);
  document.getElementById("Qmax").value = Qmax.toFixed(2);
  document.getElementById("Vmin").value = Vmin.toFixed(2);
  document.getElementById("mG").value = mG.toFixed(2);

 
 
 
  

  
  
 

  

 
  
  
  
  
  
  
  
  
  document.getElementById("Vmax").value = Vmax.toFixed(2);
  
  
  let vmaxBox = document.getElementById("Vmax");

if(V > Vmax){

    vmaxBox.classList.remove("ok-result");
    vmaxBox.classList.add("error-result");

}
else{

    vmaxBox.classList.remove("error-result");
    vmaxBox.classList.add("ok-result");

}

   let qmaxBox = document.getElementById("Qmax");
if(Qmax >= Qd){

    qmaxBox.classList.remove("error-result");
    qmaxBox.classList.add("ok-result");

}
else{

    qmaxBox.classList.remove("ok-result");
    qmaxBox.classList.add("error-result");

}

let vminBox = document.getElementById("Vmin");

if(V >= Vmin){
    vminBox.classList.remove("error-result");
    vminBox.classList.add("ok-result");
}
else{
    vminBox.classList.remove("ok-result");
    vminBox.classList.add("error-result");
}

} 




const idlerData = {

  500: {
    101.6: {carry:29, return:78},
    114.3: {carry:38, return:90},
    127:   {carry:44, return:98}
  },

  650: {
    101.6: {carry:39, return:74},
    114.3: {carry:46, return:94},
    127:   {carry:49, return:101}
  },

  800: {
    114.3: {carry:76, return:151},
    127:   {carry:78, return:162},
    139.7: {carry:79, return:176},
    152.4: {carry:111, return:194}
  },

  1000: {
    114.3: {carry:86, return:181},
    127:   {carry:102, return:192},
    139.7: {carry:114, return:207},
    152.4: {carry:127, return:222}
  },

  1200: {
    114.3: {carry:96, return:213},
    127:   {carry:123, return:229},
    139.7: {carry:132, return:247},
    152.4: {carry:141, return:266}
  },

  1400: {
    139.7: {carry:142, return:280},
    152.4: {carry:153, return:315}
  },

  1600: {
    139.7: {carry:158, return:312},
    152.4: {carry:170, return:343}
  }

};

const beltData = {

"250/2":  {thk:2.7, mrbt:25,  drive:250,  snub:200, low:160},
"315/3":  {thk:3.2, mrbt:31,  drive:315,  snub:250, low:200},
"400/3":  {thk:3.9, mrbt:40,  drive:400,  snub:315, low:250},
"500/3":  {thk:4.0, mrbt:50,  drive:400,  snub:315, low:250},
"500/4":  {thk:5.2, mrbt:55,  drive:500,  snub:400, low:315},
"630/3":  {thk:4.3, mrbt:63,  drive:400,  snub:315, low:250},
"630/4":  {thk:5.6, mrbt:70,  drive:630,  snub:500, low:400},
"800/4":  {thk:5.8, mrbt:90,  drive:630,  snub:500, low:400},
"800/5":  {thk:6.4, mrbt:90,  drive:630,  snub:500, low:400},
"1000/4": {thk:6.6, mrbt:110, drive:630,  snub:500, low:400},
"1000/5": {thk:6.9, mrbt:110, drive:630,  snub:500, low:400},
"1250/4": {thk:6.7, mrbt:140, drive:630,  snub:500, low:400},
"1250/5": {thk:7.4, mrbt:140, drive:800,  snub:630, low:500},
"1400/4": {thk:7.5, mrbt:155, drive:800,  snub:630, low:500},
"1600/4": {thk:7.7, mrbt:180, drive:800,  snub:630, low:500},
"1600/5": {thk:8.1, mrbt:180, drive:800,  snub:630, low:500},
"2000/5": {thk:10.2,mrbt:220, drive:1000, snub:800, low:630}

};

function updateBeltData(){

    let type = document.getElementById("beltType").value;

    if(!beltData[type]) return;

    let belt = beltData[type];

    document.getElementById("d1").value = belt.thk;

    document.getElementById("mrbt").value = belt.mrbt;
    document.getElementById("driveDia").value = belt.drive;
    document.getElementById("snubDia").value = belt.snub;
    document.getElementById("lowDia").value = belt.low;
	document.getElementById("rmbtl").value = belt.mrbt;
}



function calcIdler(){

  let tc1 = +document.getElementById("t_c1").value;
  let tc2 = +document.getElementById("t_c2").value;
  let ni = +document.getElementById("n_i").value;


  let d1 = +document.getElementById("d1").value;
  let d2 = +document.getElementById("d2").value;
  let d3 = +document.getElementById("d3").value;

  let L = +document.getElementById("L").value;

  let Qd = +document.getElementById("Qd").value;
  let V = +document.getElementById("V").value;
  
  let B = +document.getElementById("B").value;
  
  let carryDia = document.getElementById("carryDia").value;
let returnDia = document.getElementById("returnDia").value;

let carryData = idlerData[B]?.[carryDia];
let returnData = idlerData[B]?.[returnDia];

let mc = carryData ? carryData.carry / 9.81 : 0;
let mi = mc;
let mr_w = returnData ? returnData.return / 9.81 : 0;
  
  
  // No of Self Align Carrying idlers
  let sac = Math.ceil((L - 5 - 5) / 15) + 1;
  
  // No of Self Align Return idlers
  let sar = Math.ceil((L - 5 - 5) / 15) + 1;
  
  // No of Carrying idlers
  let nc = Math.ceil((L - 0.4 * ni - sac - tc1 - tc2) / 1) ;

   // No of Return idlers
  let nr = Math.ceil(L / 3) - sar ; 
  
  // Belt mass
  let mB = 1.1 * (d1 + d2 + d3) * B / 1000;

  // Idler mass per meter
  let mC = (3 * mc * nc + 3 * mc * sac + 3 * mi * ni) / L;
  let mr = (mr_w * nr +  mr_w * sar ) / L;

  // Material mass
  let mG = Qd / (3.6 * V);


  // Output
  
  document.getElementById("n_c").value = nc.toFixed(0);
  document.getElementById("n_r").value = nr.toFixed(0);
  document.getElementById("sa_c").value = sac.toFixed(0);
  document.getElementById("sa_r").value = sar.toFixed(0);
  document.getElementById("mB").value = mB.toFixed(2);
  document.getElementById("mC").value = mC.toFixed(2);
  document.getElementById("mr").value = mr.toFixed(2);
  document.getElementById("mG2").value = mG.toFixed(2);
  
  
  
  
  
  
  
  document.getElementById("mr").value = mr.toFixed(2);

}
function calcMainRes(){

  let mc = +document.getElementById("mC").value;
  let mr = +document.getElementById("mr").value;
  let mG = +document.getElementById("mG2").value;
  let mB = +document.getElementById("mB").value;

  let delta = +document.getElementById("cs").value;
  let L = +document.getElementById("L").value;
  let f = +document.getElementById("f").value;
  let g = +document.getElementById("g").value;

  // Degree to radian conversion
  let rad = delta * Math.PI / 180;

  // Loaded Resistance
  let R_loaded = f * L * g * (mc + mr + (2*mB + mG) * Math.cos(rad));

  // Empty Belt Resistance
  let R_empty = f * L * g * (mc + mr + (2*mB) * Math.cos(rad));

  // Output
  document.getElementById("R_loaded").value = R_loaded.toFixed(2);
  document.getElementById("R_empty").value = R_empty.toFixed(2);
  
  
 
  
  
  
  
  
  
  

}
function calcSecondary(){

  let rho = +document.getElementById("rho").value;
  let Qd  = +document.getElementById("Qd").value;
  let V   = +document.getElementById("V").value;
  let B   = +document.getElementById("B").value;
  let g   = +document.getElementById("g").value;

  let mu1 = +document.getElementById("mu1").value;
  let mu2 = +document.getElementById("mu2").value;

  let V0  = +document.getElementById("V0").value;

  let n1 = +document.getElementById("n1").value;
  let n2 = +document.getElementById("n2").value;
  let n3 = +document.getElementById("n3").value;
  
 
   //
   let n = n1 + n2 + n3
  // Volumetric capacity
  let Q = Qd / (3600 * rho);

  // Acceleration length
  let La = (V*V - V0*V0) / (2 * g * mu1);

  // Skirt width (convert mm → m)
  let b1 = (2/3) * (B / 1000);

  // Acceleration resistance
  let Ra = Q * 1000 * rho * (V - V0);

  // Skirt resistance (simplified safe formula)
  let Rska = (mu2 * Q*Q * 1000 * rho * g * La) / Math.pow(((V+V0)/2),2) / Math.pow(b1,2);

  // Wrap resistance
  let Rw = 230*n1 + 175*n2 + 140*n3;

  // Bearing resistance
  let RB = n * 100;

  // Total secondary resistance
  let Rs = Ra + Rska + Rw + RB;

  // Empty belt
  let Rs_empty = Rs - (50 * n);

  // Output
  document.getElementById("Q_vol").value = Q.toFixed(3);
  document.getElementById("La").value = La.toFixed(3);
  document.getElementById("b1").value = b1.toFixed(3);
  document.getElementById("Ra").value = Ra.toFixed(3);
  document.getElementById("Rska").value = Rska.toFixed(3);
  document.getElementById("Rw").value = Rw.toFixed(2);
  document.getElementById("RB").value = RB.toFixed(2);
  document.getElementById("Rs").value = Rs.toFixed(3);
  document.getElementById("Rs_empty").value = Rs_empty.toFixed(3);
  
  
  
  
  
  

}
function calcSpecial(){

  let g = +document.getElementById("g").value;
  let mB = +document.getElementById("mB").value;
  let mG = +document.getElementById("mG").value;
  let Qv = +document.getElementById("Q_vol").value;
  let rho2 = +document.getElementById("rho").value;
  let Vs = +document.getElementById("V").value;
  let bs = +document.getElementById("b1").value;


  let delta = +document.getElementById("cs").value;
  let mu2 = +document.getElementById("mu2").value;

  let C1 = +document.getElementById("C1").value;
  let muo = +document.getElementById("muo").value;

  let i = +document.getElementById("i").value;
  let L1 = +document.getElementById("L1").value;

  let B = +document.getElementById("B").value;
  let H = +document.getElementById("H").value;
  let Lsk = +document.getElementById("Lsk").value;

  let n = +document.getElementById("nn").value;
  let mu3 = +document.getElementById("mu3").value;
  let P = +document.getElementById("P").value;

  let Rp = +document.getElementById("Rp").value;

  // radian conversion
  let d = delta * Math.PI / 180;
  let rad_i = i * Math.PI / 180;

  // Rt loaded
  let Rt = g * C1 * muo * L1 * (mB + mG) * Math.cos(d) * Math.sin(rad_i);

  // Rt empty
  let Rt_empty = g * C1 * muo * L1 * (mB) * Math.cos(d) * Math.sin(rad_i);

  // A1
  let A1 = 0.02 * (B/1000) * n;

  // RBC
  let RBC = A1 * P * mu3;

  // Rsk (approx same logic as earlier)
  let Rsk = mu2 * Math.pow(Qv,2) *rho2 * g * Lsk *1000 / (Math.pow(Vs,2) * Math.pow(bs,2)) ;

  // Total
  let Rsp = Rt + Rsk + RBC + Rp;
  let Rsp_empty = Rt_empty + RBC + Rp;

  // Lifting resistance
  let RS1 = mG * g * H;

  // Output
  document.getElementById("Rt").value = Rt.toFixed(2);
  document.getElementById("Rt_empty").value = Rt_empty.toFixed(2);
  document.getElementById("Rsk").value = Rsk.toFixed(2);
  document.getElementById("A1").value = A1.toFixed(3);
  document.getElementById("RBC").value = RBC.toFixed(2);
  document.getElementById("Rsp").value = Rsp.toFixed(2);
  document.getElementById("Rsp_empty").value = Rsp_empty.toFixed(2);
  document.getElementById("RS1").value = RS1.toFixed(2);
  

  
  
  
  
  
  
 
   
  
  
  


}

const motorRatings = [
    0.18, 0.25, 0.37, 0.55, 0.75,
    1.1, 1.5, 2.2, 3.7, 5.5,
    7.5, 9.3, 11, 15, 18.5,
    22, 30, 37, 45, 55,
    75, 90, 110, 132, 150,
    160, 180, 200, 225, 250,
    275, 315
];

function calcPower(){

  let R = +document.getElementById("R_loaded").value;
  let R_empty = +document.getElementById("R_empty").value;

  let Rs = +document.getElementById("Rs").value;
  let Rs_empty = +document.getElementById("Rs_empty").value;

  let Rsp = +document.getElementById("Rsp").value;
  let Rsp_empty = +document.getElementById("Rsp_empty").value;

  let Rs1 = +document.getElementById("RS1").value;

  let V = +document.getElementById("V").value;

  let Rwd = +document.getElementById("Rw").value;
  let Rbd = +document.getElementById("RB").value;

  let eta1 = +document.getElementById("eta1").value;
  let nt = +document.getElementById("nt").value;
  let sf = +document.getElementById("sf").value;

  // Peripheral force
  let Te = R + Rs + Rsp + Rs1;
  let Te_empty = R_empty + Rs_empty + Rsp_empty;

  // Power
  let Pdp = Te * V / 1000;

  // Power after losses
  let Pa = Pdp + ((Rwd + Rbd) * V / 1000);

  // Motor power
  let Pm = sf * Pa / eta1 / nt;
  
    // Selected Standard Motor Rating
let selectedMotor = motorRatings.find(rating => rating >= Pm);

let pms = document.getElementById("Pms");

if(selectedMotor){

    // Agar user ne manufacturer value nahi di hai
    if(document.getElementById("selectedMotorPower").value.trim() === ""){
        document.getElementById("selectedMotorPower").value = selectedMotor;
    }

    pms.innerHTML = `
        <span style="color:green;font-weight:bold;">
            ✅ Recommended Standard Motor : ${selectedMotor} kW
        </span>
    `;

}
else{

    pms.innerHTML = `
        <span style="color:red;font-weight:bold;">
            ❌ Calculated Motor Rating : ${Pm.toFixed(2)} kW<br>
            Standard motor rating is not available in the current library.<br>
            Please select the next higher rating from the manufacturer's catalogue.
        </span>
    `;

}

  // Output
 
  document.getElementById("Te").value = Te.toFixed(2);
  document.getElementById("Te_empty").value = Te_empty.toFixed(2);
  document.getElementById("Pdp").value = Pdp.toFixed(3);
  document.getElementById("Pa").value = Pa.toFixed(3);
  document.getElementById("Pm").value = Pm.toFixed(2);

 

}
function calcBeltForces(){

  let mB = +document.getElementById("mB").value;
  let mG = +document.getElementById("mG").value;
  let Te = +document.getElementById("Te").value;

  let phi = +document.getElementById("phi").value;
  let mu = +document.getElementById("mu_bf").value;
  let xi = +document.getElementById("xi").value;

  let g = +document.getElementById("g").value;

  let Pc = +document.getElementById("Pc").value;
  let Pr = +document.getElementById("Pr").value;
  let S  = +document.getElementById("S").value;
  let bw  = +document.getElementById("B").value;
  let rm  = +document.getElementById("rmbtl").value;

  // degree → radian
  let rad = phi * Math.PI / 180;

  // e^(μφ)
  let emphi = Math.exp(mu * rad);

  // T2min
  let T2min = Te * xi / (emphi - 1) ;

  // Tmax
  let Tmax = Te * (xi/(emphi - 1) + 1) ;

  // Tmin carrying
  let Tmin_c = Pc * (mB + mG) * g / (8 * S);

  // Tmin return
  let Tmin_r = Pr * mB * g /  (8 * S);
  
   let BL = Tmax / bw;
   
   let PL = BL * 100 /rm ;
   
let status = "";
let bgColor = "";
let textColor = "";

if (PL < 50){
    status = "⚠ Belt Rating May Be Reduced";
    bgColor = "#fff3cd";
    textColor = "#856404";
}
else if (PL <= 80){
    status = "✅ Selected Belt Rating OK";
    bgColor = "#d4edda";
    textColor = "#155724";
}
else{
    status = "⚠ Increase Belt Rating";
    bgColor = "#f8d7da";
    textColor = "#721c24";
}

// Status box
let beltStatus = document.getElementById("beltStatus");
beltStatus.innerHTML = status;
beltStatus.style.background = bgColor;
beltStatus.style.color = textColor;

// Percentage box
let prelBox = document.getElementById("prel");
prelBox.style.background = bgColor;
prelBox.style.border = "2px solid " + textColor;
prelBox.style.color = textColor;

// Belt Rating
let relBox = document.getElementById("rmbtl");
relBox.style.background = bgColor;
relBox.style.border = "2px solid " + textColor;
relBox.style.color = textColor;

  // Output
  document.getElementById("prel").value = PL.toFixed(2);
  document.getElementById("beltl").value = BL.toFixed(2);
  document.getElementById("emphi").value = emphi.toFixed(3);
  document.getElementById("T2min").value = (T2min / 1000).toFixed(2);
  document.getElementById("Tmax").value = (Tmax / 1000).toFixed(2);
  
  document.getElementById("Tmin_c").value = (Tmin_c / 1000).toFixed(2);
  document.getElementById("Tmin_r").value = (Tmin_r / 1000).toFixed(2);
}

function calcRadiusx(){

  let B = +document.getElementById("B").value;

  let Tmax = +document.getElementById("Tmax").value *1000;

  let L3 = +document.getElementById("L1").value;
  let L4c = +document.getElementById("ddpc").value;

  let L = +document.getElementById("L").value;

  let f = +document.getElementById("f").value;
  let g = +document.getElementById("g").value;

  let mb = +document.getElementById("mB").value;
  let mc = +document.getElementById("mC").value;
  let mr = +document.getElementById("mr").value;
  let mG = +document.getElementById("mG").value;

  let delta = +document.getElementById("cs").value;

  let C1 = +document.getElementById("C1").value;
  let muo = +document.getElementById("muo").value;

  // Degree to radian conversion
  let deltaRad = delta * Math.PI / 180;

  // Tc max
  let Tcmax =
      Tmax 
      - (f * L * g * (mc + mr + mb) * Math.cos(deltaRad))
      - (g * C1 * muo * L3 * (mb + mG) * Math.sin(deltaRad))
      - (g * C1 * muo * L4c * mb * Math.sin(deltaRad));

  // Minimum radius for partially loaded belt
  let Rc = (Tcmax * B ) / (9810 * mb);

  // Output
  document.getElementById("tmaxc").value = Tcmax.toFixed(2);
  document.getElementById("Rc").value = Rc.toFixed(2);

}

function calcRadiusv(){

  let B = +document.getElementById("B").value;
 
 let Rcv = (12 * B) / 1000 ;
  // Output  
  document.getElementById("Rcv").value = Rcv.toFixed(2);

}

function calcGear(){

  let V = +document.getElementById("V").value;
  let N = +document.getElementById("N_g").value;
  let Pm = +document.getElementById("Pm").value;

  let D = +document.getElementById("D_g").value;
  let n1 = +document.getElementById("n_1").value;

  let f1 = +document.getElementById("f1").value;
  let f2 = +document.getElementById("f2").value;

  let ft = +document.getElementById("ft").value;
  let PG1 = +document.getElementById("PG1").value;

  // Speed n2
  let n2 = (60 * V) / (Math.PI * D);

  // Gear ratio
  let ratio = n1 / n2;

  // Nominal power
  let PN = N * f1 * f2;

  // Thermal check
  let thermal = PG1 * ft;

  // Coupling index
  let HS = (1.5 * N) / (0.01 * n1);
  let LS = (1.5 * N) / (0.01 * n2);
  
  
 

  // Output
  document.getElementById("n_2").value = n2.toFixed(2);
  document.getElementById("ratio").value = ratio.toFixed(2);
  document.getElementById("PN").value = PN.toFixed(2);
  document.getElementById("thermal").value = thermal.toFixed(2);
  document.getElementById("HS").value = HS.toFixed(2);
  document.getElementById("LS").value = LS.toFixed(2);

checkGearRatio();

}

function checkGearRatio(){

    let ratio = parseFloat(document.getElementById("ratio").value);

    if(isNaN(ratio) || ratio <= 0) return;

    let minRatio = ratio * 0.95;
    let maxRatio = ratio * 1.10;

    // Hamesha allowable range dikhao
    document.getElementById("ratioRange").value =
        minRatio.toFixed(2) + " - " + maxRatio.toFixed(2);

    let selectedRatio =
        parseFloat(document.getElementById("selectedRatio").value);

    let ratioStatus = document.getElementById("ratioStatus");

    // User ne value nahi dali
    if(isNaN(selectedRatio)){

        ratioStatus.innerHTML = "";
        ratioStatus.style.background = "transparent";
        ratioStatus.style.border = "none";
        ratioStatus.style.color = "";

        return;
    }

    if(selectedRatio >= minRatio && selectedRatio <= maxRatio){

        ratioStatus.innerHTML = "✅ Gear Ratio OK";
        ratioStatus.style.background = "#d4edda";
        ratioStatus.style.border = "2px solid #28a745";
        ratioStatus.style.color = "#155724";

    }
    else if(selectedRatio < minRatio){

        ratioStatus.innerHTML = "⚠️ Gear Ratio Too Low";
        ratioStatus.style.background = "#fff3cd";
        ratioStatus.style.border = "2px solid #ffc107";
        ratioStatus.style.color = "#856404";

    }
    else{

        ratioStatus.innerHTML = "⚠️ Gear Ratio Too High";
        ratioStatus.style.background = "#f8d7da";
        ratioStatus.style.border = "2px solid #dc3545";
        ratioStatus.style.color = "#721c24";

    }

}

// ================= SHAFT =================
function calcShaft(){

  let T1 = +document.getElementById("Tmax").value * 1000;
  let T2 = +document.getElementById("T2min").value *1000;
  let alpha = +document.getElementById("alphaa").value * Math.PI/180;
  let W = +document.getElementById("W").value;
  let a = +document.getElementById("a").value;

  let Kb = +document.getElementById("Kb").value;
  let Kt = +document.getElementById("Kt").value;
  let tsd = +document.getElementById("tsd").value;

 let motorPowerInput =
document.getElementById("selectedMotorPower").value.trim();

let motorPower;

if(motorPowerInput === ""){

    motorPower = motorRatings.find(
        rating => rating >= +document.getElementById("Pm").value
    );

}else{

    motorPower = parseFloat(motorPowerInput);

}
  let n2 = +document.getElementById("n2_s").value;
  let alphaa = +document.getElementById("alphaa").value;

  let R = Math.sqrt(Math.pow(T1 + T2*Math.cos(alpha),2) + Math.pow(W - T2*Math.sin(alpha),2)) /1000;

  let Mb = R * a / 2;

  let Mt = (4500 * motorPower) / (2 * Math.PI * n2 * 0.736);

  let d = 10*Math.cbrt((16/(Math.PI*tsd)) * Math.sqrt(Math.pow(Kb*Mb,2)+Math.pow(Kt*Mt,2)));

  document.getElementById("R_s").value = R.toFixed(2);
  document.getElementById("Mb").value = Mb.toFixed(2);
  document.getElementById("Mt").value = Mt.toFixed(2);
  document.getElementById("d").value = d.toFixed(2);
	
}



// ================= SHAFT =================
function calcSnubShaft(){

  let T2 = +document.getElementById("T2min").value *1000;
  let alpha = +document.getElementById("alphaa").value * Math.PI/180;
  let W = +document.getElementById("W_s").value;

  let ts = +document.getElementById("tsd").value;
  let Kb = +document.getElementById("Kb").value;
  let a = +document.getElementById("a").value;

  // Resultant load (approx as per formula)
 let R = Math.sqrt(
  Math.pow(2 * T2 * Math.sin(alpha / 2), 2) +
  Math.pow(W, 2) -
  4 * T2 * Math.sin(alpha / 2) * W * Math.cos(Math.PI - (alpha / 2))) 
  / 1000;

  let Mb = R * a / 2;

  let d = Math.cbrt((16/(Math.PI*ts)) * (Kb*Mb))*10;

  document.getElementById("R_snub").value = R.toFixed(2);
  document.getElementById("Mb_snub").value = Mb.toFixed(2);
  document.getElementById("d_snub").value = d.toFixed(2);
  
  
}



function calcTakeUp(){

  let L1 = +document.getElementById("L1_tu").value;
  let T2 = +document.getElementById("T2min").value *1000;

  let f = +document.getElementById("f").value;
  let g = +document.getElementById("g").value;

  let mr = +document.getElementById("mr").value;
  let mB = +document.getElementById("mB").value;

  let muo = +document.getElementById("muo").value;
  let i = +document.getElementById("i_tu").value * Math.PI/180;
  let tau = +document.getElementById("tau").value * Math.PI/180;

  let RBC = +document.getElementById("RBC").value;
  let RB = +document.getElementById("RB_tu").value;

  let Rw = +document.getElementById("Rw_tu").value;
  let Rw1 = +document.getElementById("Rw1_tu").value;

  let W = +document.getElementById("W_tu").value;
  let a = +document.getElementById("a").value;

  let ts = +document.getElementById("tsd").value;
  let Kb = +document.getElementById("Kb").value;

  // Ttu
  let Ttu = T2 + f*L1*g*(mr+mB) + g*muo*L1*mB*Math.cos(tau)*Math.sin(i) +   (2 * RBC) / 3 + 2*(RB+Rw);

  // Ttu'
  let Ttu2 = Ttu + RB + Rw1;

  // Resultant load (convert to kN)
  let R = (Ttu + Ttu2 - W)/1000;

  // Bending moment
  let Mb = R * a / 2;

  // Shaft dia
  let d = Math.cbrt((16/(Math.PI*ts)) * (Kb*Mb)) *10;

  // Output
  document.getElementById("Ttu").value = Ttu.toFixed(2);
  document.getElementById("Ttu2").value = Ttu2.toFixed(2);
  document.getElementById("R_tu").value = R.toFixed(2);
  document.getElementById("Mb_tu").value = Mb.toFixed(2);
  document.getElementById("d_tu").value = d.toFixed(2);
   

}
function calcBend(){

  let T = +document.getElementById("Ttu2").value;
  let a = +document.getElementById("a").value;

  let ts = +document.getElementById("tsd").value;
  let Kb = +document.getElementById("Kb").value;

  let W = +document.getElementById("W_bp").value;

  let delta = +document.getElementById("delta_bp").value * Math.PI/180;

  // Resultant load (convert to kN)
  let R = Math.sqrt(Math.pow(T*Math.cos(delta),2) + Math.pow(W + T + T*Math.sin(delta),2)) /1000;

  // Bending moment
  let Mb = R * a / 2;

  // Shaft diameter
  let d = Math.cbrt((16/(Math.PI*ts)) * (Kb*Mb)) * 10;

  // Output
  document.getElementById("R_bp").value = R.toFixed(2);
  document.getElementById("Mb_bp").value = Mb.toFixed(2);
  document.getElementById("d_bp").value = d.toFixed(2);

}
function calcTailShaft(){

  let T1 = +document.getElementById("Tmax").value * 1000;
  let L = +document.getElementById("L").value;

  let mC = +document.getElementById("mC").value;
  let mB = +document.getElementById("mB").value;
  let mG = +document.getElementById("mG").value;

  let f = +document.getElementById("f").value;
  let g = +document.getElementById("g").value;

  let Ra = +document.getElementById("Ra").value;
  let Rska = +document.getElementById("Rska").value;
  let Rsk = +document.getElementById("Rsk").value;

  let C1 = +document.getElementById("C1").value;
  let muo = +document.getElementById("muo").value;

  let i = +document.getElementById("i").value * Math.PI/180;
  let L1 = +document.getElementById("L1").value;

  let RS1 = +document.getElementById("RS1").value;

  let RB = +document.getElementById("RB_tp").value;
  let Rw1 = +document.getElementById("Rw1_tp").value;

  let W = +document.getElementById("W_tp").value;
  let a = +document.getElementById("a").value;

  let ts = +document.getElementById("tsd").value;
  let Kb = +document.getElementById("Kb").value;

  let Ttc = T1 - f*L*g*(mC+mB+mG) - Ra - Rska - Rsk - g*C1*muo*L1*(mB+mG)*Math.sin(i) - RS1;

  let Ttr = Ttc - RB - Rw1;

  let R = Math.sqrt(Math.pow(Ttc+Ttr,2) + Math.pow(W,2)) /1000;

  let Mb = R * a / 2;

  let d = Math.cbrt((16/(Math.PI*ts)) * (Kb*Mb)) * 10;

  document.getElementById("Ttc").value = Ttc.toFixed(2);
  document.getElementById("Ttr").value = Ttr.toFixed(2);
  document.getElementById("R_tp").value = R.toFixed(2);
  document.getElementById("Mb_tp").value = Mb.toFixed(2);
  document.getElementById("d_tp").value = d.toFixed(2);
  

}


// table gear box service factor 

function setValue(id, value){
  document.getElementById(id).value = value;
}
function setValue(id, value){
  document.getElementById(id).value = value;

  // highlight selected
  let cells = document.querySelectorAll(".info-table td");
  cells.forEach(c => c.style.background = "");

  event.target.style.background = "#90caf9";
}










/////////////////////////////////////////
//////////project manager tab///////////
///////////////////////////////////////
function saveProject(){

    const projectName =
        document.getElementById("projectName").value;

    if(projectName===""){
        alert("Enter Project Name");
        return;
    }

    const data = {};

    document.querySelectorAll("input, select, textarea").forEach(el=>{

        if(el.id){

            data[el.id] = el.value;

        }

    });

    localStorage.setItem(
    "Conveyor_" + projectName,
    JSON.stringify(data)
);
    refreshProjectList();

    alert("Project Saved");

}
function loadProject(){

    const selected =
        document.getElementById("projectList").value;

    if(!selected){
        alert("Select Project");
        return;
    }

    const data = JSON.parse(
        localStorage.getItem("Conveyor_" + selected)
    );

    Object.keys(data).forEach(id=>{

        const el = document.getElementById(id);

        if(el){

            el.value = data[id];

            el.dispatchEvent(
                new Event("change")
            );

        }

    });

    refreshProject();

}

function refreshProject(){

    updateArea();
  
    basicCalculation()
	calcIdler();
	calcMainRes();
	calcSecondary();
	calcSpecial();
	calcPower();
	calcBeltForces();
	 calcRadiusx();
	 calcRadiusv();
	 calcGear();
	 calcShaft();

	 calcSnubShaft();

	 calcTakeUp();
	 calcBend();
	 calcTailShaft();
	
	 
    
}

function deleteProject(){

    const selected =
        document.getElementById("projectList").value;

    if(!selected){

        alert("Select Project");
        return;

    }

    if(confirm("Delete " + selected + " ?")){

        localStorage.removeItem(
            "Conveyor_" + selected
        );

        refreshProjectList();

    }

}
window.onload=function(){

    refreshProjectList();

};
function newProject(){

    document.querySelectorAll(
        "#ProjectManager input"
    ).forEach(input=>{

        input.value="";

    });

}
function refreshProjectList(){

    const list =
        document.getElementById("projectList");

    list.innerHTML = "";

    Object.keys(localStorage).forEach(key=>{

        if(key.startsWith("Conveyor_")){

            let option =
                document.createElement("option");

            option.value =
                key.replace("Conveyor_","");

            option.textContent =
                key.replace("Conveyor_","");

            list.appendChild(option);

        }

    });

}
  ///////////////////////////////////////
 //////////project manager tab End//////
///////////////////////////////////////



  ///////////////////////////////////////
 //////////Report Page//////////////////
///////////////////////////////////////

function generateReport(){

    // Recalculate everything
       updateArea();
    updateBeltData();
    basicCalculation();
    calcIdler();
	calcMainRes();
	calcSecondary();
	calcSpecial();
	calcPower();
	
	
	calcBeltForces();
	calcRadiusx();
	calcRadiusv();
	calcGear();
	calcShaft();
	calcTailShaft();
	calcSnubShaft();
	calcTakeUp();
	calcBend();
	
	
	
    
    fillReport();

    openTab(null,"report");

}
function copyValue(fromId,toId){

    document.getElementById(toId).innerHTML =
    document.getElementById(fromId).value;

}

function copyResult(fromId, toId){

    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    if(!from || !to) return;

    if(
        from.tagName === "INPUT" ||
        from.tagName === "TEXTAREA" ||
        from.tagName === "SELECT"
    ){
        to.innerHTML = from.value;
    }
    else{
        to.innerHTML = from.innerHTML;
    }

}
function fillReport(){

//======================================
// Project Information
//======================================

copyValue("projectName","rProjectName");
copyValue("projectNo","rProjectNo");

copyValue("clientName","rClient");
copyValue("plantName","rPlant");

copyValue("location","rLocation");
copyValue("preparedBy","rPreparedBy");

copyValue("projectDate","rDate");
copyValue("revision","rRevision");

copyValue("remarks","rRemarks");
//======================================
// Basic Conveyor Details
//======================================

copyValue("Qr","rQr");
copyValue("nl","rnl");
copyValue("Lf","rLf");
copyValue("L","rL");
copyValue("H","rH");
copyValue("cs","rcs");
//======================================
// Belt & Conveyor Geometry
//======================================

copyValue("B","rB");
copyValue("V","rV");
copyValue("ts","rts");
copyValue("ss","rss");
copyValue("K","rK");
//======================================
// Idler Arrangement
//======================================

copyValue("t_c1","rt_c1");
copyValue("t_c2","rt_c2");
copyValue("n_i","rn_i");
copyValue("carryDia","rcarryDia");
copyValue("returnDia","rreturnDia");
//======================================
// Belt Cleaning & Skirt Arrangement
//======================================

copyValue("Lsk","rLsk");
copyValue("nn","rnn");
copyValue("P","rP");
copyValue("Rp","rRp");

//======================================
// Drive System
//======================================

copyValue("eta1","reta1");
copyValue("sf","rsf");
//======================================
// Material Details
//======================================

copyValue("rho","rrho");
copyValue("K1","rK1");
copyValue("K2","rK2");

//======================================
// Belt Specification
//======================================

copyValue("beltType","rbeltType");
copyValue("d1","rd1");
copyValue("d2","rd2");
copyValue("d3","rd3");

//======================================
// Friction Coefficients
//======================================

copyValue("f","rf");


copyValue("mu1","rmu1");
copyValue("mu2","rmu2");

copyValue("C1","rC1");

copyValue("muo","rmuo");
copyValue("mu3","rmu3");

//======================================
// Conveyor Operating Parameters
//======================================

copyValue("g",  "rg");
copyValue("V0", "rV0");
copyValue("nt", "rnt");
//======================================
// Pulley Configuration
//======================================

copyValue("n1","rn1");
copyValue("n2","rn2");
copyValue("n3","rn3");
//======================================
// Idler Configuration
//======================================

copyValue("i", "ri");
copyValue("L1", "rL1");
//======================================
// Basic Calculation Results
//======================================

copyValue("Kv","rKv");
copyValue("Vmax","rVmax");
copyValue("Qd","rQd");
copyValue("Qmax","rQmax");
copyValue("Vmin","rVmin");
copyValue("mG","rmG");

//======================================
// Idler & Belt Weight Calculation
//======================================

copyValue("n_c","rn_c");
copyValue("sa_c","rsa_c");
copyValue("n_r","rn_r");
copyValue("sa_r","rsa_r");

copyValue("mB","rmB");
copyValue("mC","rmC");
copyValue("mr","rmr");
copyValue("mG2","rmG2");

copyValue("mrbt","rmrbt");
copyValue("driveDia","rdriveDia");
copyValue("snubDia","rsnubDia");
copyValue("lowDia","rlowDia");
//======================================
// Main Resistance
//======================================

copyResult("R_loaded","rR_loaded");
copyResult("R_empty","rR_empty");

//======================================
// Secondary Resistance
//======================================

copyResult("Q_vol","rQ_vol");
copyResult("La","rLa");
copyResult("b1","rb1");
copyResult("Ra","rRa");
copyResult("Rska","rRska");
copyResult("Rw","rRw");
copyResult("RB","rRB");
copyResult("Rs","rRs");
copyResult("Rs_empty","rRs_empty");

//======================================
// Special & Secondary Resistance
//======================================

copyResult("Rt","rRt");
copyResult("Rt_empty","rRt_empty");
copyResult("Rsk","rRsk");
copyResult("A1","rA1");
copyResult("RBC","rRBC");
copyResult("Rsp","rRsp");
copyResult("Rsp_empty","rRsp_empty");
copyResult("RS1","rRS1");
//======================================
// Power Calculation
//======================================

copyResult("Te","rTe");
copyResult("Te_empty","rTe_empty");

copyResult("Pdp","rPdp");
copyResult("Pa","rPa");
copyResult("Pm","rPm");

copyResult("Pms","rPms");

// Manufacturer Selected Motor
copyValue("selectedMotorPower","rSelectedMotorPower");
//======================================
// Drive Input Parameters
//======================================

copyValue("phi","rphi");
copyValue("mu_bf","rmu_bf");
copyValue("xi","rxi");
copyValue("Pc","rPc");
copyValue("Pr","rPr");
copyValue("S","rS");
//======================================
// Drive Pulley Design Inputs
//======================================

copyValue("tsd","rtsd");
copyValue("Kb","rKb");
copyValue("Kt","rKt");
copyValue("alphaa","ralphaa");
copyValue("W","rW");
copyValue("a","ra");
copyValue("n2_s","rn2_s");

//======================================
// Snub Pulley Design Inputs
//======================================
copyValue("W_s","rW_s");
//======================================
// Radius of Curvature Inputs
//======================================
copyValue("Yv","rYv");
copyValue("ddpc","rddpc");
//======================================
// Bend Pulley Design Inputs
//======================================
copyValue("W_bp","rW_bp");
copyValue("delta_bp","rdelta_bp");
//======================================
// Gearbox Selection
//======================================

copyValue("N_g","rN_g");
copyValue("D_g","rD_g");
copyValue("n_1","rn_1");
copyValue("f1","rf1");
copyValue("f2","rf2");
copyValue("ft","rft");
copyValue("PG1","rPG1");
//============================
// Tail Pulley Design
//============================

copyValue("RB_tp","rRB_tp");
copyValue("Rw1_tp","rRw1_tp");
copyValue("W_tp","rW_tp");

//============================
// Take-Up Pulley Design
//============================

copyValue("L1_tu","rL1_tu");
copyValue("i_tu","ri_tu");
copyValue("tau","rtau");
copyValue("RB_tu","rRB_tu");
copyValue("Rw_tu","rRw_tu");
copyValue("Rw1_tu","rRw1_tu");
copyValue("W_tu","rW_tu");
//======================================
// Belt Forces Calculation
//======================================

// Results
copyResult("emphi","remphi");
copyResult("T2min","rT2min");
copyResult("Tmax","rTmax");
copyResult("Tmin_c","rTmin_c");
copyResult("Tmin_r","rTmin_r");
copyResult("beltl","rbeltl");

// Selected Values
copyValue("rmbtl","rrmbtl");
copyValue("prel","rprel");

// Belt Selection Status
document.getElementById("rbeltStatus").innerHTML =
document.getElementById("beltStatus").innerHTML;
//======================================
// Radius of Curvature Calculation
//======================================

copyResult("tmaxc","rtmaxc");
copyResult("Rc","rRc");
copyResult("Rcv","rRcv");
//======================================
// Gearbox & Coupling Selection
//======================================

copyResult("n_2","rn_2");
copyResult("ratio","rratio");
copyResult("ratioRange","rratioRange");

copyValue("selectedRatio","rselectedRatio");

document.getElementById("rratioStatus").innerHTML =
document.getElementById("ratioStatus").innerHTML;

copyResult("PN","rPN");
copyResult("thermal","rthermal");
copyResult("HS","rHS");
copyResult("LS","rLS");
//======================================
// Drive Pulley Calculation
//======================================

copyResult("R_s","rR_s");
copyResult("Mb","rMb");
copyResult("Mt","rMt");
copyResult("d","rd");

//======================================
// Tail Pulley Calculation
//======================================

copyResult("Ttc","rTtc");
copyResult("Ttr","rTtr");
copyResult("R_tp","rR_tp");
copyResult("Mb_tp","rMb_tp");
copyResult("d_tp","rd_tp");

//======================================
// Snub Pulley Calculation
//======================================

copyResult("R_snub","rR_snub");
copyResult("Mb_snub","rMb_snub");
copyResult("d_snub","rd_snub");

//======================================
// Take-Up Pulley Calculation
//======================================

copyResult("Ttu","rTtu");
copyResult("Ttu2","rTtu2");
copyResult("R_tu","rR_tu");
copyResult("Mb_tu","rMb_tu");
copyResult("d_tu","rd_tu");

//======================================
// Bend Pulley Calculation
//======================================

copyResult("R_bp","rR_bp");
copyResult("Mb_bp","rMb_bp");
copyResult("d_bp","rd_bp");
}