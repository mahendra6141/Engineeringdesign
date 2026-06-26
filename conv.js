function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


function openSubTab(evt, tabName){

  let subtabcontent = document.getElementsByClassName("subtabcontent");
  for(let i=0; i<subtabcontent.length; i++){
    subtabcontent[i].style.display = "none";
  }

  let subtablinks = document.getElementsByClassName("subtablinks");
  for(let i=0; i<subtablinks.length; i++){
    subtablinks[i].className = subtablinks[i].className.replace(" active","");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab(evt, tabName) {

  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // 🔥 ADD THIS PART
  if (tabName === "Radius") {
    document.getElementById("defaultconcaveOpen").click();
  }
  if (tabName === "DrivePulley") {
    document.getElementById("defaultSubOpen").click();
  }

  if (tabName === "TailPulley") {
    document.getElementById("defaultTailOpen").click();
  }

  if (tabName === "SnubPulley") {
    document.getElementById("defaultSnubOpen").click();
  }
  
  if(tabName === "IdlerBelt"){
    updateIdlerWeight();
}
}


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
	
	 

    let A = getSectionArea(B, ts, ss);
	
    document.getElementById("A").value = A.toFixed(4);
}

function calculate(){
  
 
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
  document.getElementById("Qr2").value = Qd.toFixed(2);
  document.getElementById("B2").value = B.toFixed(0);
  document.getElementById("Bv").value = B.toFixed(0);
  document.getElementById("Bx").value = B.toFixed(0);
  document.getElementById("V2").value = V.toFixed(2);
  document.getElementById("V_p").value = V.toFixed(2);
  document.getElementById("Vs").value = V.toFixed(2);
  document.getElementById("V_g").value = V.toFixed(2);
  document.getElementById("L2").value = L.toFixed(2);
  document.getElementById("L3").value = L.toFixed(2);
  document.getElementById("L4").value = L.toFixed(2);
  document.getElementById("L_tp").value = L.toFixed(2);
  document.getElementById("rho_s").value = rho.toFixed(2);
  document.getElementById("rho2").value = rho.toFixed(2);
  document.getElementById("Qd_s").value = Qd.toFixed(2);
  document.getElementById("V_s").value = V.toFixed(2);
  document.getElementById("B_s").value = B.toFixed(0);
  document.getElementById("B_sp").value = B.toFixed(0);
  document.getElementById("H1").value = H.toFixed(2);
  document.getElementById("delta").value = cs.toFixed(2);
  document.getElementById("csc").value = cs.toFixed(2);
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
window.onload = function() {
    updateArea();
	updateIdlerWeight();
	updateBeltData();
	
};


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
}

function updateIdlerWeight(){

    let B = +document.getElementById("B").value;

    let carryDia = document.getElementById("carryDia").value;
    let returnDia = document.getElementById("returnDia").value;

    let carryData = idlerData[B]?.[carryDia];
    let returnData = idlerData[B]?.[returnDia];

    let mcBox = document.getElementById("m_c");
    let miBox = document.getElementById("m_i");
    let mrBox = document.getElementById("m_r");

    // ===== Carrying Idler =====
    if(carryData){

        let mc = carryData.carry / 9.81;
        let mi = mc;

        mcBox.value = mc.toFixed(2);
        miBox.value = mi.toFixed(2);

        mcBox.classList.remove("na-value");
        miBox.classList.remove("na-value");

    }
    else{

        mcBox.value = "NA";
        miBox.value = "NA";

        mcBox.classList.add("na-value");
        miBox.classList.add("na-value");
    }

    // ===== Return Idler =====
    if(returnData){

        let mr = returnData.return / 9.81;

        mrBox.value = mr.toFixed(2);

        mrBox.classList.remove("na-value");

    }
    else{

        mrBox.value = "NA";

        mrBox.classList.add("na-value");
    }
}

function calcIdler(){

  let tc1 = +document.getElementById("t_c1").value;
  let tc2 = +document.getElementById("t_c2").value;
  let ni = +document.getElementById("n_i").value;


  let d1 = +document.getElementById("d1").value;
  let d2 = +document.getElementById("d2").value;
  let d3 = +document.getElementById("d3").value;

  let L = +document.getElementById("L2").value;

  let Qr = +document.getElementById("Qr2").value;
  let V = +document.getElementById("V2").value;
  
  let B = +document.getElementById("B2").value;
  let mc = +document.getElementById("m_c").value;
  let mi = +document.getElementById("m_i").value;
  let mr_w = +document.getElementById("m_r").value;
  
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
  let mG = Qr / (3.6 * V);


  // Output
  document.getElementById("m_c").value = mc.toFixed(2);
  document.getElementById("m_i").value = mi.toFixed(2);
  document.getElementById("m_r").value = mr_w.toFixed(2);
  document.getElementById("n_c").value = nc.toFixed(0);
  document.getElementById("n_r").value = nr.toFixed(0);
  document.getElementById("sa_c").value = sac.toFixed(0);
  document.getElementById("sa_r").value = sar.toFixed(0);
  document.getElementById("mB").value = mB.toFixed(2);
  document.getElementById("mC").value = mC.toFixed(2);
  document.getElementById("mr").value = mr.toFixed(2);
  document.getElementById("mG2").value = mG.toFixed(2);
  document.getElementById("mB2").value = mB.toFixed(2);
  document.getElementById("mc").value = mC.toFixed(2);
  document.getElementById("mr2").value = mr.toFixed(2);
  document.getElementById("mG3").value = mG.toFixed(2);
  document.getElementById("mB_sp").value = mB.toFixed(2);
  document.getElementById("mG_sp").value = mG.toFixed(2);
  document.getElementById("mB_bf").value = mB.toFixed(2);
  document.getElementById("mG_bf").value = mG.toFixed(2);
  document.getElementById("mC_tp").value = mC.toFixed(2);
  document.getElementById("mB_tp").value = mB.toFixed(2);
  document.getElementById("mG_tp").value = mG.toFixed(2);
  document.getElementById("mr_tu").value = mr.toFixed(2);
  document.getElementById("mB_tu").value = mB.toFixed(2);
  document.getElementById("mr").value = mr.toFixed(2);
  document.getElementById("mbc").value = mB.toFixed(2);
  document.getElementById("mCc").value = mC.toFixed(2);
  document.getElementById("mrc").value = mr.toFixed(2);
  document.getElementById("mG2c").value = mG.toFixed(2);
  
}
function calcMainRes(){

  let mc = +document.getElementById("mc").value;
  let mr = +document.getElementById("mr2").value;
  let mG = +document.getElementById("mG3").value;
  let mB = +document.getElementById("mB2").value;

  let delta = +document.getElementById("delta").value;
  let L = +document.getElementById("L3").value;
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
  document.getElementById("g_s").value = g.toFixed(2);
  document.getElementById("g_sp").value = g.toFixed(2);
  document.getElementById("g_tp").value = g.toFixed(2);
  document.getElementById("f_tp").value = f.toFixed(2);
  document.getElementById("delta_sp").value = delta.toFixed(2);
  document.getElementById("R_p").value = R_loaded.toFixed(2);
  document.getElementById("R_empty_p").value = R_empty.toFixed(2);
  document.getElementById("g_bf").value = g.toFixed(2);
  document.getElementById("g_tu").value = g.toFixed(2);
  document.getElementById("gc").value = g.toFixed(2);
   document.getElementById("f_tu").value = f.toFixed(2);
   document.getElementById("fc").value = f.toFixed(2);
  

}
function calcSecondary(){

  let rho = +document.getElementById("rho_s").value;
  let Qd  = +document.getElementById("Qd_s").value;
  let V   = +document.getElementById("V_s").value;
  let B   = +document.getElementById("B_s").value;
  let g   = +document.getElementById("g_s").value;

  let mu1 = +document.getElementById("mu1").value;
  let mu2 = +document.getElementById("mu2").value;

  let V0  = +document.getElementById("V0").value;

  let n1 = +document.getElementById("n1").value;
  let n2 = +document.getElementById("n2").value;
  let n3 = +document.getElementById("n3").value;
  let n  = +document.getElementById("n_total").value;

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
  document.getElementById("Q_vol1").value = Q.toFixed(3);
  document.getElementById("bs").value = b1.toFixed(3);
  document.getElementById("Rs_p").value = Rs.toFixed(3);
  document.getElementById("Rs_empty_p").value = Rs_empty.toFixed(3);
  document.getElementById("Ra_tp").value = Ra.toFixed(3);
  document.getElementById("Rska_tp").value = Rska.toFixed(3);
  document.getElementById("mu2_sp").value = mu2.toFixed(3);

}
function calcSpecial(){

  let g = +document.getElementById("g_sp").value;
  let mB = +document.getElementById("mB_sp").value;
  let mG = +document.getElementById("mG_sp").value;
  let Qv = +document.getElementById("Q_vol1").value;
  let rho2 = +document.getElementById("rho2").value;
  let Vs = +document.getElementById("Vs").value;
  let bs = +document.getElementById("bs").value;


  let delta = +document.getElementById("delta_sp").value;
  let mu2 = +document.getElementById("mu2_sp").value;

  let C1 = +document.getElementById("C1").value;
  let muo = +document.getElementById("muo").value;

  let i = +document.getElementById("i").value;
  let L1 = +document.getElementById("L1").value;

  let B = +document.getElementById("B_sp").value;
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
  document.getElementById("Rsp_p").value = Rsp.toFixed(2);
  document.getElementById("Rsp_empty_p").value = Rsp_empty.toFixed(2);
  document.getElementById("Rs1").value = RS1.toFixed(2);
  document.getElementById("Rsk_tp").value = Rsk.toFixed(2);
  document.getElementById("C1_tp").value = C1.toFixed(2);
  document.getElementById("muo_tp").value = muo.toFixed(2);
  document.getElementById("Cc").value = C1.toFixed(2);
  document.getElementById("muoc").value = muo.toFixed(2);
  document.getElementById("i_tp").value = i.toFixed(2);
  document.getElementById("L1_tp").value = L1.toFixed(2);
   document.getElementById("ddp").value = L1.toFixed(2);
  document.getElementById("RS1_tp").value = RS1.toFixed(2);
  document.getElementById("RS1c").value = RS1.toFixed(2);
  document.getElementById("muo_tu").value = muo.toFixed(2);
  document.getElementById("RBC_tu").value = RBC.toFixed(2);


}
function calcPower(){

  let R = +document.getElementById("R_p").value;
  let R_empty = +document.getElementById("R_empty_p").value;

  let Rs = +document.getElementById("Rs_p").value;
  let Rs_empty = +document.getElementById("Rs_empty_p").value;

  let Rsp = +document.getElementById("Rsp_p").value;
  let Rsp_empty = +document.getElementById("Rsp_empty_p").value;

  let Rs1 = +document.getElementById("Rs1").value;

  let V = +document.getElementById("V_p").value;

  let Rwd = +document.getElementById("Rwd").value;
  let Rbd = +document.getElementById("Rbd").value;

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

  // Output
  document.getElementById("Te").value = Te.toFixed(2);
  document.getElementById("Te_empty").value = Te_empty.toFixed(2);
  document.getElementById("Pdp").value = Pdp.toFixed(3);
  document.getElementById("Pa").value = Pa.toFixed(3);
  document.getElementById("Pm").value = Pm.toFixed(2);
  document.getElementById("Te_bf").value = Te.toFixed(2);
  document.getElementById("Pm_g").value = Pm.toFixed(2);
  document.getElementById("Pa_s").value = Pa.toFixed(3);

}
function calcBeltForces(){

  let mB = +document.getElementById("mB_bf").value;
  let mG = +document.getElementById("mG_bf").value;
  let Te = +document.getElementById("Te_bf").value;

  let phi = +document.getElementById("phi").value;
  let mu = +document.getElementById("mu_bf").value;
  let xi = +document.getElementById("xi").value;

  let g = +document.getElementById("g_bf").value;

  let Pc = +document.getElementById("Pc").value;
  let Pr = +document.getElementById("Pr").value;
  let S  = +document.getElementById("S").value;

  // degree → radian
  let rad = phi * Math.PI / 180;

  // e^(μφ)
  let emphi = Math.exp(mu * rad);

  // T2min
  let T2min = Te * xi / (emphi - 1);

  // Tmax
  let Tmax = Te * (xi/(emphi - 1) + 1);

  // Tmin carrying
  let Tmin_c = Pc * (mB + mG) * g / (8 * S);

  // Tmin return
  let Tmin_r = Pr * mB * g / (8 * S);

  // Output
  document.getElementById("emphi").value = emphi.toFixed(3);
  document.getElementById("T2min").value = T2min.toFixed(2);
  document.getElementById("Tmax").value = Tmax.toFixed(2);
  document.getElementById("mbt").value = Tmax.toFixed(2);
  document.getElementById("Tmin_c").value = Tmin_c.toFixed(2);
  document.getElementById("Tmin_r").value = Tmin_r.toFixed(2);
  document.getElementById("T2").value = T2min.toFixed(2);
  document.getElementById("T1").value = Tmax.toFixed(2);
  document.getElementById("T1_tp").value = Tmax.toFixed(2);
  document.getElementById("T2_s").value = T2min.toFixed(2);
  document.getElementById("T2_tu").value = T2min.toFixed(2);

}

function calcRadiusx(){

  let B = +document.getElementById("Bv").value;

  let Tmax = +document.getElementById("mbt").value;

  let L3 = +document.getElementById("ddp").value;
  let L4c = +document.getElementById("ddpc").value;

  let L = +document.getElementById("L4").value;

  let f = +document.getElementById("fc").value;
  let g = +document.getElementById("gc").value;

  let mb = +document.getElementById("mbc").value;
  let mc = +document.getElementById("mCc").value;
  let mr = +document.getElementById("mrc").value;
  let mG = +document.getElementById("mG2c").value;

  let delta = +document.getElementById("csc").value;

  let C1 = +document.getElementById("Cc").value;
  let muo = +document.getElementById("muoc").value;

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

  let B = +document.getElementById("Bx").value;
 
 let Rcv = (12 * B) / 1000 ;
  // Output  
  document.getElementById("Rcv").value = Rcv.toFixed(2);

}

function calcGear(){

  let V = +document.getElementById("V_g").value;
  let N = +document.getElementById("N_g").value;
  let Pm = +document.getElementById("Pm_g").value;

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

}


// ================= SHAFT =================
function calcShaft(){

  let T1 = +document.getElementById("T1").value;
  let T2 = +document.getElementById("T2").value;
  let alpha = +document.getElementById("alphaa").value * Math.PI/180;
  let W = +document.getElementById("W").value;
  let a = +document.getElementById("a").value;

  let Kb = +document.getElementById("Kb").value;
  let Kt = +document.getElementById("Kt").value;
  let tsd = +document.getElementById("tsd").value;

  let Pa = +document.getElementById("Pa_s").value;
  let n2 = +document.getElementById("n2_s").value;
  let alphaa = +document.getElementById("alphaa").value;

  let R = Math.sqrt(Math.pow(T1 + T2*Math.cos(alpha),2) + Math.pow(W - T2*Math.sin(alpha),2)) /1000;

  let Mb = R * a / 2;

  let Mt = (4500 * Pa) / (2 * Math.PI * n2 * 0.736);

  let d = 10*Math.cbrt((16/(Math.PI*tsd)) * Math.sqrt(Math.pow(Kb*Mb,2)+Math.pow(Kt*Mt,2)));

  document.getElementById("R_s").value = R.toFixed(2);
  document.getElementById("Mb").value = Mb.toFixed(2);
  document.getElementById("Mt").value = Mt.toFixed(2);
  document.getElementById("d").value = d.toFixed(2);
  document.getElementById("R_d").value = R.toFixed(2);
  document.getElementById("R_b").value = R.toFixed(2);
   document.getElementById("alpha_s").value = alphaa.toFixed(2);
   document.getElementById("ts_s").value = ts.toFixed(3);
   document.getElementById("Kb_s").value = Kb.toFixed(1);
   document.getElementById("a_s").value = a.toFixed(1);
   document.getElementById("a_sd").value = a.toFixed(1);
    document.getElementById("a_tu").value = a.toFixed(1);
	document.getElementById("ts_tu").value = tsd.toFixed(3);
	document.getElementById("Kb_tu").value = Kb.toFixed(1);
	document.getElementById("a_bp").value = a.toFixed(1);
	document.getElementById("ts_bp").value = tsd.toFixed(3);
	document.getElementById("Kb_bp").value = Kb.toFixed(1);

}

// ================= DEFLECTION =================
function calcDeflection(){

  let R = +document.getElementById("R_d").value;
  let a = +document.getElementById("a_d").value;
  let D_s = +document.getElementById("D_s").value;
  let Ls = +document.getElementById("Ls").value;
  let E = +document.getElementById("E_drive").value;
  
  let I = (Math.PI * Math.pow(D_s,4)) / 64;
  let f = (0.5*R*a*(3*Math.pow(Ls,2)-4*Math.pow(a,2))) / (24*E*I)*100;
  
  document.getElementById("I").value = I.toFixed(4);
  document.getElementById("f_d").value = f.toFixed(4);
  document.getElementById("E_td").value = E.toFixed(0);
  document.getElementById("E_sd").value = E.toFixed(0);



}

// ================= BEARING =================
function calcBearing(){

  let C = +document.getElementById("C").value;
  let R = +document.getElementById("R_b").value;
  let X = +document.getElementById("X").value;
  let Y = +document.getElementById("Y").value;
  let Fa = +document.getElementById("Fa").value;
  let n = +document.getElementById("n2_b").value;

  let Fr = 0.5 * R;

  let P = X*Fr + Y*Fa;

  let L = Math.pow((C/P),(10/3));

  let Lh = (L * 1e6) / (n * 60);

  document.getElementById("Fr").value = Fr.toFixed(2);
  document.getElementById("P_b").value = P.toFixed(2);
  document.getElementById("L_d").value = L.toFixed(2);
  document.getElementById("Lh").value = Lh.toFixed(0);

}
// ================= SHAFT =================
function calcSnubShaft(){

  let T2 = +document.getElementById("T2_s").value;
  let alpha = +document.getElementById("alpha_s").value * Math.PI/180;
  let W = +document.getElementById("W_s").value;

  let ts = +document.getElementById("ts_s").value;
  let Kb = +document.getElementById("Kb_s").value;
  let a = +document.getElementById("a_s").value;

  // Resultant load (approx as per formula)
 let R = Math.sqrt(
  Math.pow(2 * T2 * Math.sin(alpha / 2), 2) +
  Math.pow(W, 2) -
  4 * T2 * Math.sin(alpha / 2) * W * Math.cos(Math.PI - (alpha / 2))
) / 1000;

  let Mb = R * a / 2;

  let d = Math.cbrt((16/(Math.PI*ts)) * (Kb*Mb))*10;

  document.getElementById("R_snub").value = R.toFixed(2);
  document.getElementById("Mb_snub").value = Mb.toFixed(2);
  document.getElementById("d_snub").value = d.toFixed(2);
  document.getElementById("R_sd").value = R.toFixed(2);
  document.getElementById("R_sb").value = R.toFixed(2);
}

// ================= DEFLECTION =================
function calcSnubDeflection(){

  let R = +document.getElementById("R_sd").value;
  let a = +document.getElementById("a_sd").value;
  let D = +document.getElementById("D_sd").value;
  let Ls = +document.getElementById("Ls_sd").value;
  let E = +document.getElementById("E_sd").value;
  
  let I = (Math.PI * Math.pow(D,4)) / 64;
  let f = (0.5*R*a*(3*Math.pow(Ls,2)-4*Math.pow(a,2))) / (24*E*I) *100;
  
  document.getElementById("I_sd").value = I.toFixed(2);
  document.getElementById("f_sd").value = f.toFixed(4);
  
}

// ================= BEARING =================
function calcSnubBearing(){

  let C = +document.getElementById("C_sd").value;
  let R = +document.getElementById("R_sb").value;
  let X = +document.getElementById("X_sd").value;
  let n = +document.getElementById("n_sd").value;

  let Fr = 0.5 * R;

  let P = X * Fr;

  let L = Math.pow((C/P),(10/3));

  let Lh = (L * 1e6) / (n * 60);

  document.getElementById("Fr_sd").value = Fr.toFixed(2);
  document.getElementById("P_sd").value = P.toFixed(2);
  document.getElementById("L_sd").value = L.toFixed(2);
  document.getElementById("Lh_sd").value = Lh.toFixed(0);
}
function calcTakeUp(){

  let L1 = +document.getElementById("L1_tu").value;
  let T2 = +document.getElementById("T2_tu").value;

  let f = +document.getElementById("f_tu").value;
  let g = +document.getElementById("g_tu").value;

  let mr = +document.getElementById("mr_tu").value;
  let mB = +document.getElementById("mB_tu").value;

  let muo = +document.getElementById("muo_tu").value;
  let i = +document.getElementById("i_tu").value * Math.PI/180;
  let tau = +document.getElementById("tau").value * Math.PI/180;

  let RBC = +document.getElementById("RBC_tu").value;
  let RB = +document.getElementById("RB_tu").value;

  let Rw = +document.getElementById("Rw_tu").value;
  let Rw1 = +document.getElementById("Rw1_tu").value;

  let W = +document.getElementById("W_tu").value;
  let a = +document.getElementById("a_tu").value;

  let ts = +document.getElementById("ts_tu").value;
  let Kb = +document.getElementById("Kb_tu").value;

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
    document.getElementById("Ttu_bp").value = Ttu2.toFixed(2);

}
function calcBend(){

  let T = +document.getElementById("Ttu_bp").value;
  let a = +document.getElementById("a_bp").value;

  let ts = +document.getElementById("ts_bp").value;
  let Kb = +document.getElementById("Kb_bp").value;

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

  let T1 = +document.getElementById("T1_tp").value;
  let L = +document.getElementById("L_tp").value;

  let mC = +document.getElementById("mC_tp").value;
  let mB = +document.getElementById("mB_tp").value;
  let mG = +document.getElementById("mG_tp").value;

  let f = +document.getElementById("f_tp").value;
  let g = +document.getElementById("g_tp").value;

  let Ra = +document.getElementById("Ra_tp").value;
  let Rska = +document.getElementById("Rska_tp").value;
  let Rsk = +document.getElementById("Rsk_tp").value;

  let C1 = +document.getElementById("C1_tp").value;
  let muo = +document.getElementById("muo_tp").value;

  let i = +document.getElementById("i_tp").value * Math.PI/180;
  let L1 = +document.getElementById("L1_tp").value;

  let RS1 = +document.getElementById("RS1_tp").value;

  let RB = +document.getElementById("RB_tp").value;
  let Rw1 = +document.getElementById("Rw1_tp").value;

  let W = +document.getElementById("W_tp").value;
  let a = +document.getElementById("a_tp").value;

  let ts = +document.getElementById("ts_tp").value;
  let Kb = +document.getElementById("Kb_tp").value;

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
  document.getElementById("R_td").value = R.toFixed(2);
  document.getElementById("a_td").value = a.toFixed(2);
  document.getElementById("R_tb").value = R.toFixed(2);
}

// DEFLECTION
function calcTailDeflection(){
  let R = +document.getElementById("R_td").value;
  let a = +document.getElementById("a_td").value;
  let D = +document.getElementById("D_td").value;
  let Ls = +document.getElementById("Ls_td").value;
  let E = +document.getElementById("E_td").value;
  
  
  let I = (Math.PI * Math.pow(D,4))/64;
  let f = (0.5*R*a*(3*Ls*Ls-4*a*a))/(24*E*I) * 100;
  
  document.getElementById("I_td").value = I.toFixed(4);
  document.getElementById("f_td").value = f.toFixed(4);
}

// BEARING
function calcTailBearing(){

  let C = +document.getElementById("C_tb").value;
  let R = +document.getElementById("R_tb").value;
  let X = +document.getElementById("X_tb").value;
  let n = +document.getElementById("n_tb").value;

  let Fr = 0.5 * R;
  let P = X * Fr;

  let L = Math.pow((C/P),(10/3));
  let Lh = (L * 1e6) / (n * 60);

  document.getElementById("Fr_tb").value = Fr.toFixed(2);
  document.getElementById("P_tb").value = P.toFixed(2);
  document.getElementById("L_tb").value = L.toFixed(2);
  document.getElementById("Lh_tb").value = Lh.toFixed(0);
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



//print report function
let reportWindow;


function printReport(){

    if(reportWindow){

        reportWindow.focus();
        reportWindow.print();

    }else{

        alert("Please generate report first.");

    }
}





// report 



function generateReport() {
     reportWindow = window.open('', '_blank');

    reportWindow.document.write(`
<html>
<head>
<link rel="stylesheet" href="conv.css">
<title>Conveyor Design Report</title>
<style>

*{
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    margin:0;
    padding:0;
    color:#000;
    background:#fff;
}

/* Header Image */
.letterhead{
    width:100%;
    height:250px;          /* Header height fixed */
    object-fit:cover;      /* Extra blank area hide */
    object-position:top;
    display:block;
}

/* Content */
.content{
    padding:10px 30px 20px 30px;
}

/* Headings */
h1{
    text-align:center;
    margin:0 0 15px 0;
    font-size:24px;
}

h2{
    margin:10px 0;
    font-size:18px;
    border-bottom:2px solid #000;
    padding-bottom:5px;
}

/* Tables */
table{
    width:80%;
    margin:0 auto 20px auto;
    border-collapse:collapse;
}

th,
td{
    border:1px solid #000;
    padding:8px;
    text-align:left;
    vertical-align:middle;
}

th{
    font-weight:bold;
    background:#d4dde7;
    color:#1f2937;
}

/* Screen only page separator */
.page-break{
    margin:20px 0;
    border-top:2px dashed #999;
}

/* ================= PRINT ================= */

@media print{

    @page{
        size:A4;
        margin:10mm;
    }
	
    .report-toolbar{
        display:none;
    }


    body{
        margin:0;
        padding:0;
    }

    /* Manual page break */
    .page-break{
        page-break-after:always;
        break-after:page;
        border:none;
        height:0;
        margin:0;
    }

    .letterhead{
        width:100%;
        height:150px;
        object-fit:cover;
        object-position:top;
        display:block;
    }

    .content{
        padding:20px 20px;
    }

    table{
        width:100%;
        margin:0;
        border-collapse:collapse;
        page-break-inside:auto;
    }

    tr{
        page-break-inside:avoid;
        page-break-after:auto;
    }

    th{
        page-break-after:avoid;
    }

    h1,
    h2{
        page-break-after:avoid;
    }

    img{
        page-break-inside:avoid;
    }
}

</style>
</head>

<body>

<div class="report-toolbar">
    <button onclick="window.print()">🖨️ Print Report</button>
    <button onclick="window.close()">❌ Close Report</button>
</div>

<img src="letter.png" class="letterhead">

<div class="content">

<div class="cover-page">

<div class="cover-header">

   <table style="width:100%; border:none;">
<tr>
<td style="border:none; text-align:left; font-size:22px; font-weight:bold;">
Mechanical Department
</td>

<td style="border:none; text-align:right; font-size:22px; font-weight:bold;">
SAIL - CET
</td>
</tr>
</table>

</div>

<h1 class="cover-title">
    CONVEYOR DESIGN REPORT
</h1>

<h2 class="cover-project">
    ${document.getElementById("projectName").value}
</h2>

<hr>

<div class="project-info">

<p><span>Project Name</span> : ${document.getElementById("projectName").value}</p>

<p><span>Project No.</span> : ${document.getElementById("projectNo").value}</p>

<p><span>Client</span> : ${document.getElementById("clientName").value}</p>

<p><span>Plant / Area</span> : ${document.getElementById("plantName").value}</p>

<p><span>Location</span> : ${document.getElementById("location").value}</p>

<p><span>Prepared By</span> : ${document.getElementById("preparedBy").value}</p>

<p><span>Revision</span> : ${document.getElementById("revision").value}</p>

<p><span>Date</span> : ${document.getElementById("projectDate").value}</p>

<p><span>Remarks</span> : ${document.getElementById("remarks").value}</p>

</div>

<div class="cover-footer">

<hr>

<p>Prepared using</p>

<h2>Conveyor Design </h2>
<h3> Based on IS:11592</h3>

<p>Version 1.0</p>


</div>

</div>

</div>

</div>

<div class="page-break"></div>

<img src="letter.png" class="letterhead">

<div class="content">

<h1>Input Data</h1>

<h2>Basic Input Parameters</h2>

<table>
 <tr>
        
            <th>Parameter</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Capacity rated (Qd)</td>
            <td>${document.getElementById("Qr").value}</td>
        </tr>
		<tr>
            <td>Designed Factor</td>
            <td>${document.getElementById("nl").value}</td>
        </tr>
		<tr>
            <td>Loading Factor</td>
            <td>${document.getElementById("Lf").value}</td>
        </tr>
		<tr>
            <td>Conveyor Horizontal Length</td>
            <td>${document.getElementById("L").value}</td>
        </tr>
		<tr>
            <td>Total Lift</td>
            <td>${document.getElementById("H").value}</td>
        </tr>
		<tr>
            <td>Conveyor Slope</td>
            <td>${document.getElementById("cs").value}</td>
        </tr>
		<tr>
            <td>Trough Angle</td>
            <td>${document.getElementById("ts").value}</td>
        </tr>
		<tr>
            <td>Surcharge Angle</td>
            <td>${document.getElementById("ss").value}</td>
        </tr>
		<tr>
            <td>Bulk density</td>
            <td>${document.getElementById("rho").value}</td>
        </tr>
		<tr>
            <td>Belt speed </td>
            <td>${document.getElementById("V").value}</td>
        </tr>	
        <tr>
            <td>Belt Width</td>
            <td>${document.getElementById("B").value}</td>
        </tr>
		<tr>
            <td>Slope Factor</td>
            <td>${document.getElementById("K").value}</td>
        </tr>
		<tr>
            <td>Lump Size Factor</td>
            <td>${document.getElementById("K1").value}</td>
        </tr>
		<tr>
            <td>Abrasiveness Factor</td>
            <td>${document.getElementById("K2").value}</td>
        </tr>
		<tr>
            <td>No of Transition idlers (10 degree)</td>
            <td>${document.getElementById("t_c1").value}</td>
        </tr>
		<tr>
            <td>No of Transition idlers (20 degree)</td>
            <td>${document.getElementById("t_c2").value}</td>
        </tr>
		<tr>
            <td>No of idlers (Impact)</td>
            <td>${document.getElementById("n_i").value}</td>
        </tr>
		<tr>
            <td>Сoefficient of friction</td>
            <td>${document.getElementById("f").value}</td>
        </tr>
		<tr>
            <td>μ1 (material-belt friction)</td>
            <td>${document.getElementById("mu1").value}</td>
        </tr>
		<tr>
            <td> μ2 (material-skirt friction)</td>
            <td>${document.getElementById("mu2").value}</td>
        </tr>
		
		
		</table>
		
</div>
<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">
		
		
		<table>
<tr>
    <th>Parameter</th>
    <th>Value</th>
</tr>
         <tr>
            <td>  No of non drive pulleys on carrying side with wrap angle 150-240˚</td>
            <td>${document.getElementById("n1").value}</td>
        </tr>
		<tr>
            <td>  No of non drive pulleys on return side with wrap angle 150-240</td>
            <td>${document.getElementById("n2").value}</td>
        </tr>
		<tr>
            <td> No. of  another non-drive pulleys</td>
            <td>${document.getElementById("n3").value}</td>
        </tr>
		<tr>
            <td>  Coefficient depending upon trough angle</td>
            <td>${document.getElementById("C1").value}</td>
        </tr>
		<tr>
            <td>  Coefficient of friction between carrying idlers and belt</td>
            <td>${document.getElementById("muo").value}</td>
        </tr>
		<tr>
            <td> Idler tilt angle</td>
            <td>${document.getElementById("i").value}</td>
        </tr>
		<tr>
            <td>Tilted idler length</td>
            <td>${document.getElementById("L1").value}</td>
        </tr>
		<tr>
            <td>Skirt length</td>
            <td>${document.getElementById("Lsk").value}</td>
        </tr>
		<tr>
            <td>Cleaner count</td>
            <td>${document.getElementById("nn").value}</td>
        </tr>
		<tr>
            <td> Coefficient of friction between belt and  belt cleaner</td>
            <td>${document.getElementById("mu3").value}</td>
        </tr>
		<tr>
            <td> Pressure between belt cleaner and belt</td>
            <td>${document.getElementById("P").value}</td>
        </tr>
		<tr>
            <td> Discharge plough resistance</td>
            <td>${document.getElementById("Rp").value}</td>
        </tr>
		<tr>
            <td>Drive pulley wrap resistance</td>
            <td>${document.getElementById("Rwd").value}</td>
        </tr>
		<tr>
            <td>Drive pulley bearing resistance</td>
            <td>${document.getElementById("Rbd").value}</td>
        </tr>
		<tr>
            <td>Transmission efficiency</td>
            <td>${document.getElementById("eta1").value}</td>
        </tr>
		<tr>
            <td>Temperature factor</td>
            <td>${document.getElementById("nt").value}</td>
        </tr>
		<tr>
            <td>Motor reserve factor</td>
            <td>${document.getElementById("sf").value}</td>
        </tr>
				<tr>
            <td>Wrap angle</td>
            <td>${document.getElementById("phi").value}</td>
        </tr>
		<tr>
            <td> Coefficient of friction between drive pulley and belt</td>
            <td>${document.getElementById("mu_bf").value}</td>
        </tr>
		<tr>
            <td> Drive factor</td>
            <td>${document.getElementById("xi").value}</td>
        </tr>
		<tr>
            <td> Idler spacing carrying</td>
            <td>${document.getElementById("Pc").value}</td>
        </tr>
		<tr>
            <td> Idler spacing return</td>
            <td>${document.getElementById("Pr").value}</td>
        </tr>
		
		
		</table>
		</div>
		
		

<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">

<table>
<tr>
    <th>Parameter</th>
    <th>Value</th>	
</tr>

          <tr>
            <td> Max sag</td>
            <td>${document.getElementById("Pr").value}</td>
        </tr>
		<tr>
            <td> Motor speed</td>
            <td>${document.getElementById("n_1").value}</td>
        </tr>
		<tr>
            <td>  Service factor</td>
            <td>${document.getElementById("f1").value}</td>
        </tr>
		<tr>
            <td>  Service factor</td>
            <td>${document.getElementById("f2").value}</td>
        </tr>
         <tr>
            <td>  Thermal factor</td>
            <td>${document.getElementById("ft").value}</td>
        </tr>
		<tr>
            <td>  Thermal capacity </td>
            <td>${document.getElementById("PG1").value}</td>
        </tr>
		<tr>
            <td>Permissible tension for steel C-40</td>
            <td>${document.getElementById("PG1").value}</td>
        </tr>
		<tr>
            <td>Bending stress concentration factor</td>
            <td>${document.getElementById("Kb").value}</td>
        </tr>
		<tr>
            <td>Torsion stress concentration factor</td>
            <td>${document.getElementById("Kt").value}</td>
        </tr>
		<tr>
            <td>The angle between T1 and T2 force vectors (α)</td>
            <td>${document.getElementById("alphaa").value}</td>
        </tr>
		<tr>
            <td>Weight of pulley rotating parts </td>
            <td>${document.getElementById("W").value}</td>
        </tr>
		<tr>
            <td>Arm of force </td>
            <td>${document.getElementById("a").value}</td>
        </tr>
		<tr>
            <td>Speed</td>
            <td>${document.getElementById("n2_s").value}</td>
        </tr>
		
		
		
		
</table>
</div>


<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">
<h2>Output Data</h2>

<table>
 <tr>
        
            <th>Parameter</th>
            <th>Value</th>
        </tr>
		<tr>
            <td> Capacity designed (Qd)</td>
            <td>${document.getElementById("Qd").value}</td>
        </tr>
		<tr>
            <td> Max Capacity (Qmax)</td>
            <td>${document.getElementById("Qmax").value}</td>
        </tr>
		<tr>
            <td> Maximum Belt Speed</td>
            <td>${document.getElementById("Vmax").value}</td>
        </tr>
		<tr>
            <td> Min Speed (Vmin)</td>
            <td>${document.getElementById("Vmin").value}</td>
        </tr>
		<tr>
            <td> Material mass (mG)</td>
            <td>${document.getElementById("mG").value}</td>
        </tr>
		<tr>
            <td> Total No. of idlers (Carrying side)</td>
            <td>${document.getElementById("n_c").value}</td>
        </tr>
		<tr>
            <td> Total No. of Self Aling Carrying idlers</td>
            <td>${document.getElementById("sa_c").value}</td>
        </tr>
		<tr>
            <td> No of idlers (Return)</td>
            <td>${document.getElementById("n_r").value}</td>
        </tr>
		<tr>
            <td> No of idlers (Return)</td>
            <td>${document.getElementById("sa_r").value}</td>
        </tr>
		<tr>
            <td>Mass of belt (mB)</td>
            <td>${document.getElementById("mB").value}</td>
        </tr>
		<tr>
            <td>Carrying idler mass (mC)</td>
            <td>${document.getElementById("mC").value}</td>
        </tr>
		<tr>
            <td>Return idler mass (mr)</td>
            <td>${document.getElementById("mr").value}</td>
        </tr>
		
		<tr>
         <th colspan="3" style="text-align:center;">Friction Forces</th>
       </tr>
		
		<tr>
            <td>Main Resistance (Loaded)</td>
            <td>${document.getElementById("R_loaded").value}</td>
        </tr>
		<tr>
            <td>Main Resistance (Loaded)</td>
            <td>${document.getElementById("R_empty").value}</td>
        </tr>
		<tr>
            <td>Volumetric Capacity (Q)</td>
            <td>${document.getElementById("Q_vol").value}</td>
        </tr>
		<tr>
            <td>Acceleration Length (La)</td>
            <td>${document.getElementById("La").value}</td>
        </tr>
		<tr>
            <td>Skirt width (b1)</td>
            <td>${document.getElementById("b1").value}</td>
        </tr>
		<tr>
            <td>Acceleration resistance (Ra)</td>
            <td>${document.getElementById("Ra").value}</td>
        </tr>
</table>
</div>
<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">
		
		
		<table>

		<tr>
            <td>Skirt resistance (Rska)</td>
            <td>${document.getElementById("Rska").value}</td>
        </tr>
		<tr>
            <td>Wrap resistance (Rw)</td>
            <td>${document.getElementById("Rw").value}</td>
        </tr>
		<tr>
            <td>Pulley  Bearing resistance (RB)</td>
            <td>${document.getElementById("RB").value}</td>
        </tr>
		<tr>
            <td>Total Secondary Resistance</td>
            <td>${document.getElementById("Rs").value}</td>
        </tr>
		<tr>
            <td>Empty Belt Resistance</td>
            <td>${document.getElementById("Rs_empty").value}</td>
        </tr>
		<tr>
            <td>Resistance due to idler tilting   (Rt loaded)</td>
            <td>${document.getElementById("Rt").value}</td>
        </tr>
		<tr>
            <td>Resistance due to idler tilting  (Rt empty)</td>
            <td>${document.getElementById("Rt_empty").value}</td>
        </tr>
		<tr>
            <td>Resistance between handled material and skirt plates (Rsk)</td>
            <td>${document.getElementById("Rsk").value}</td>
        </tr>
		<tr>
            <td>Area of contact between belt and belt cleaner (A1)</td>
            <td>${document.getElementById("A1").value}</td>
        </tr>
		<tr>
            <td> Special and secondary resistances  (Rsp total)</td>
            <td>${document.getElementById("Rsp").value}</td>
        </tr>
		<tr>
            <td> Special and secondary resistances  (Rsp empty)</td>
            <td>${document.getElementById("Rsp_empty").value}</td>
        </tr>
		<tr>
            <td>Resistance due to lifting of material (RS1)</td>
            <td>${document.getElementById("RS1").value}</td>
        </tr>
		<tr>
            <td>Peripheral Force (Loaded)</td>
            <td>${document.getElementById("Te").value}</td>
        </tr>
		<tr>
            <td>Peripheral Force (Loaded)</td>
            <td>${document.getElementById("Te_empty").value}</td>
        </tr>
		
		<tr>
    <th colspan="3" style="text-align:center;">
       Motor Power
    </th>
</tr>
		
		<tr>
            <td>Power at Drive Pulley</td>
            <td>${document.getElementById("Pdp").value}</td>
        </tr>
		<tr>
            <td>Power after losses</td>
            <td>${document.getElementById("Pa").value}</td>
        </tr>
		<tr>
            <td>Motor Power</td>
            <td>${document.getElementById("Pm").value}</td>
        </tr>
		
		<tr>
       <th colspan="3" style="text-align:center;">
       Belt Forces
        </th>
       </tr>
	   
		<tr>
            <td>Max belt tension (Tmax)</td>
            <td>${document.getElementById("Tmax").value}</td>
        </tr>
		<tr>
            <td>Min tension return (T2min)</td>
            <td>${document.getElementById("T2min").value}</td>
        </tr>
		<tr>
            <td>Tmin carrying</td>
            <td>${document.getElementById("Tmin_c").value}</td>
        </tr>

</table>
		
</div>
<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">
		
		
<table>	
		<tr>
            <td>Tmin return</td>
            <td>${document.getElementById("Tmin_r").value}</td>
        </tr>
		
		<tr>
        <th colspan="3" style="text-align:center;">
        Radius Of Curvature
    </th>
</tr>
		<tr>
            <td>Minimum radius for partialy loaded belt (Concave)</td>
            <td>${document.getElementById("Rc").value}</td>
        </tr>
		<tr>
            <td>Minimum Radius (Convex)</td>
            <td>${document.getElementById("Rcv").value}</td>
        </tr>
		
		<tr>
       <th colspan="3" style="text-align:center;">
       Gear BOx And Coupling
       </th>
       </tr>
		
		<tr>
            <td>Gear Ratio (i)</td>
            <td>${document.getElementById("ratio").value}</td>
        </tr>
		<tr>
            <td>Nominal Power (PN)</td>
            <td>${document.getElementById("PN").value}</td>
        </tr>
		<tr>
            <td>Thermal Check</td>
            <td>${document.getElementById("thermal").value}</td>
        </tr>
		<tr>
            <td>High-speed coupling index</td>
            <td>${document.getElementById("HS").value}</td>
        </tr>
		<tr>
            <td>Low-speed coupling index</td>
            <td>${document.getElementById("LS").value}</td>
        </tr>
		
		<tr>
    <th colspan="3" style="text-align:center;">
       Drive Pulley
    </th>
</tr>
		
		<tr>
            <td>Shaft Diameter (d)</td>
            <td>${document.getElementById("d").value}</td>
        </tr>
		<tr>
            <td>I</td>
            <td>${document.getElementById("I").value}</td>
        </tr>
		<tr>
            <td>Deflection (f)</td>
            <td>${document.getElementById("f_d").value}</td>
        </tr>
		<tr>
            <td>Life (million rev)</td>
            <td>${document.getElementById("L_d").value}</td>
        </tr>
		<tr>
            <td>Life (hours)</td>
            <td>${document.getElementById("Lh").value}</td>
        </tr>
		
		<tr>
    <th colspan="3" style="text-align:center;">
        Tail Pulley
    </th>
</tr>
		
		<tr>
            <td>Shaft Diameter (d)</td>
            <td>${document.getElementById("d_tp").value}</td>
        </tr>
		<tr>
            <td>I</td>
            <td>${document.getElementById("I_td").value}</td>
        </tr>
		<tr>
            <td>Deflection (f)</td>
            <td>${document.getElementById("f_td").value}</td>
        </tr>
		<tr>
            <td>Life (million rev)</td>
            <td>${document.getElementById("L_tb").value}</td>
        </tr>
		<tr>
            <td>Life (hours)</td>
            <td>${document.getElementById("Lh_tb").value}</td>
        </tr>
		

</table>
		
</div>
<div class="page-break"></div>


<img src="letter.png" class="letterhead">

<div class="content">
		
		
<table>
         
		<tr>
    <th colspan="3" style="text-align:center;">
       Snub Pulley
    </th>
</tr>
		
		<tr>
            <td>Shaft Diameter (d)</td>
            <td>${document.getElementById("d_snub").value}</td>
        </tr>
		<tr>
            <td>I</td>
            <td>${document.getElementById("I_sd").value}</td>
        </tr>
		<tr>
            <td>Deflection (f)</td>
            <td>${document.getElementById("f_sd").value}</td>
        </tr>
		<tr>
            <td>Life (million rev)</td>
            <td>${document.getElementById("L_sd").value}</td>
        </tr>
		<tr>
            <td>Life (hours)</td>
            <td>${document.getElementById("Lh_sd").value}</td>
        </tr>
		
		<tr>
    <th colspan="3" style="text-align:center;">
       Take-Up Pulley 
    </th>
</tr>

		<tr>
            <td>Shaft Diameter (d)</td>
            <td>${document.getElementById("d_tu").value}</td>
        </tr>
		
		<tr>
    <th colspan="3" style="text-align:center;">
       Bend Pulley
    </th>
</tr>
		
		
		<tr>
            <td>Shaft Diameter (d)</td>
            <td>${document.getElementById("d_bp").value}</td>
        </tr>




</table>
</div>

</body>
</html>
`);

    reportWindow.document.close();
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
        "Project_" + projectName,
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

    const data =
        JSON.parse(
            localStorage.getItem(
                "Project_" + selected
            )
        );

    Object.keys(data).forEach(id=>{

        const el =
            document.getElementById(id);

        if(el){

            el.value = data[id];

            /* Trigger calculation if needed */
            el.dispatchEvent(
                new Event('change')
            );

        }

    });
	
refreshProject();
}

function refreshProject(){

    updateArea();
    updateIdlerWeight();
    calculate();
    calculatePulley();
    calculateGearbox();
    calculateTakeUp();
    updateReport();

}

function deleteProject(){

    const selected =
        document.getElementById("projectList").value;

    if(!selected){

        alert("Select Project");
        return;

    }

    if(confirm(
        "Delete "+selected+" ?"
    )){

        localStorage.removeItem(
            "Project_"+selected
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

    list.innerHTML="";

    Object.keys(localStorage).forEach(key=>{

        if(key.startsWith("Project_")){

            let option =
                document.createElement("option");

            option.value=key.replace("Project_","");

            option.textContent=
                key.replace("Project_","");

            list.appendChild(option);

        }

    });

}
  ///////////////////////////////////////
 //////////project manager tab End//////
///////////////////////////////////////