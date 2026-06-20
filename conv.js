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
  let n   = +document.getElementById("n").value;
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
  let Qd = n * Qr;

  // Max Capacity
  let Qmax = A * 3600 * V * rho * K;

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
  document.getElementById("B2").value = B.toFixed(2);
  document.getElementById("V2").value = V.toFixed(2);
  document.getElementById("V_p").value = V.toFixed(2);
  document.getElementById("Vs").value = V.toFixed(2);
  document.getElementById("V_g").value = V.toFixed(2);
  document.getElementById("L2").value = L.toFixed(2);
  document.getElementById("L3").value = L.toFixed(2);
  document.getElementById("L_tp").value = L.toFixed(2);
  document.getElementById("rho_s").value = rho.toFixed(2);
  document.getElementById("rho2").value = rho.toFixed(2);
  document.getElementById("Qd_s").value = Qd.toFixed(2);
  document.getElementById("V_s").value = V.toFixed(2);
  document.getElementById("B_s").value = B.toFixed(2);
  document.getElementById("B_sp").value = B.toFixed(2);
  document.getElementById("H1").value = H.toFixed(2);
  document.getElementById("delta").value = cs.toFixed(2);
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
  document.getElementById("mr_tu").value = mB.toFixed(2);
  document.getElementById("mr").value = mr.toFixed(2);

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
   document.getElementById("f_tu").value = f.toFixed(2);
  

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

  let n = +document.getElementById("n_cl").value;
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
  document.getElementById("i_tp").value = i.toFixed(2);
  document.getElementById("L1_tp").value = L1.toFixed(2);
  document.getElementById("RS1_tp").value = RS1.toFixed(2);
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
  document.getElementById("Tmin_c").value = Tmin_c.toFixed(2);
  document.getElementById("Tmin_r").value = Tmin_r.toFixed(2);
  document.getElementById("T2").value = T2min.toFixed(2);
  document.getElementById("T1").value = Tmax.toFixed(2);
  document.getElementById("T1_tp").value = Tmax.toFixed(2);
  document.getElementById("T2_s").value = T2min.toFixed(2);
  document.getElementById("T2_tu").value = T2min.toFixed(2);

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
  let ts = +document.getElementById("ts").value;

  let Pa = +document.getElementById("Pa_s").value;
  let n2 = +document.getElementById("n2_s").value;
  let alphaa = +document.getElementById("alphaa").value;

  let R = Math.sqrt(Math.pow(T1 + T2*Math.cos(alpha),2) + Math.pow(W - T2*Math.sin(alpha),2)) /1000;

  let Mb = R * a / 2;

  let Mt = (4500 * Pa) / (2 * Math.PI * n2 * 0.736);

  let d = 10*Math.cbrt((16/(Math.PI*ts)) * Math.sqrt(Math.pow(Kb*Mb,2)+Math.pow(Kt*Mt,2)));

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
	document.getElementById("ts_tu").value = ts.toFixed(3);
	document.getElementById("Kb_tu").value = Kb.toFixed(1);
	document.getElementById("a_bp").value = a.toFixed(1);
	document.getElementById("ts_bp").value = ts.toFixed(3);
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
