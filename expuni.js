
function openTab(evt, tabName)
{

    // Hide all tab contents
    const tabcontent = document.querySelectorAll(".tab-content");

    tabcontent.forEach(function(content){
        content.classList.remove("active");
    });


    // Remove active class from all buttons
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab){
        tab.classList.remove("active");
    });


    // Show selected tab
    document.getElementById(tabName).classList.add("active");

    // Highlight selected button
    evt.currentTarget.classList.add("active");

}


// Calculate Button
document.getElementById("calculateBtn").addEventListener("click",function(){

    geometryCalculation();
	shapeFactorCalculation();
	movementCalculation();
	    kFactorCalculation();
	   areaCalculation();
	  stressCalculation();
	   materialConstantCalculation();
	   fatigueLifeCalculation();
	   columnStabilityCalculation();
	   inplaneStabilityCalculation();
	   springRateCalculation();
	   
	  

    document.querySelector(".tab[onclick=\"openTab(event,'geometry')\"]").click();

});


let Dc;
let Dm;
let fiu;


function geometryCalculation()
{

    let Db = parseFloat(document.getElementById("Db").value);

    let n = parseFloat(document.getElementById("n").value);

    let t = parseFloat(document.getElementById("t").value);

    let tc = parseFloat(document.getElementById("tc").value);

    let w = parseFloat(document.getElementById("w").value);

    let Ec = parseFloat(document.getElementById("Eb1").value);

 

    let N = parseFloat(document.getElementById("N").value);

    let q = parseFloat(document.getElementById("q").value);
	
	let Lu = parseFloat(document.getElementById("Lu").value);

    //========================
	
	 Lb = N * q;

     Dc = Db + 2*(n*t) + tc;

     Dm = Db + (n*t) + w;

    //========================

    document.getElementById("Dc").innerHTML = Dc.toFixed(3);

    document.getElementById("Dm").innerHTML = Dm.toFixed(3);

    document.getElementById("Ec").innerHTML = Ec.toFixed(0);

    document.getElementById("LbResult").innerHTML = Lb.toFixed(3);

    document.getElementById("NResult").innerHTML = N;

    document.getElementById("qResult").innerHTML = q.toFixed(3);

    document.getElementById("wResult").innerHTML = w.toFixed(3);
	
	document.getElementById("LuResult").innerHTML = Lu.toFixed(3);

}
function movementCalculation()
{
    //===========================
    // Input
    //===========================

    let xComp = parseFloat(document.getElementById("xCompInput").value);  

    let y1 = parseFloat(document.getElementById("y1").value);
	
    let theta = parseFloat(document.getElementById("theta").value);


    let N = parseFloat(document.getElementById("N").value);

    let q = parseFloat(document.getElementById("q").value);

    let P = parseFloat(document.getElementById("P").value);	

    let presetExt = parseFloat(document.getElementById("presetExt").value);

    let presetY = parseFloat(document.getElementById("presetY").value);

    let presetTheta = parseFloat(document.getElementById("presetTheta").value);
	
	let Lu = parseFloat(document.getElementById("Lu").value);

    let Lb = N * q;

    let Lstar = Lu - Lb;
	
	let ratio = Lstar / Lb;
    //===========================
    // Display Input
    //===========================
    document.getElementById("xComp").innerHTML = xComp.toFixed(3);

    document.getElementById("y1Result").innerHTML = y1.toFixed(3);

    document.getElementById("thetaResult").innerHTML = theta.toFixed(3);
	
	document.getElementById("xext").innerHTML = presetExt.toFixed(3);

    document.getElementById("yext").innerHTML = presetY.toFixed(3);

    document.getElementById("thetaext").innerHTML = presetTheta.toFixed(3);
    //===========================
    // Operating Condition
    //===========================
	// compression condition
    let exComp = xComp / (2* N);
let eyComp =
((3 * Dm) / (2 * N * Lb)) *
((1 + ratio) / (1 + 3 * Math.pow(ratio, 2))) *
(Lstar / (Lstar - xComp / 2)) * y1;
    let ethetaComp = (theta * Math.PI / 180) * Dm / (4 * N);
         KthetalComp = 1.0;
    let eypComp =(Math.PI * Dm * KthetalComp * P *
               	Math.sin((theta*Math.PI/180)/2) *(Lb - xComp)) /(4 * fiu);
    let rotationEffectComp = ethetaComp + eypComp;
    let KrComp =(2* (q - exComp) + rotationEffectComp + eyComp ) / (2*q);
	
  //===========================
// Preset Condition
//===========================
let exExt = presetExt / (2 * N);
// Extension
let eyExt =
((3 * Dm) / (2 * N * Lb)) *
((1 + ratio) / (1 + 3 * Math.pow(ratio, 2))) *
(Lstar / (Lstar + presetExt / 2)) * presetY;
let ethetaExt = (presetTheta * Math.PI / 180) * Dm / (4 * N);
    KthetalExt  = 1.0;

let eypExt =(Math.PI * Dm * KthetalExt * P *  
             Math.sin((presetTheta * Math.PI/180)/2) * (Lb + presetExt))/(4 * fiu);
let rotationEffectExt = ethetaExt + eypExt;
let KrExt =(2 * (q + exExt) + rotationEffectExt + eyExt) / (2 * q);

    // Final EJMA Kr use in stresses Calculation
   Kr = Math.max( KrComp, KrExt, 1);

    //===========================
    // Operating Condition
    //===========================
	document.getElementById("Kr").innerHTML = Kr.toFixed(3);
    document.getElementById("exComp").innerHTML = exComp.toFixed(3);
    document.getElementById("eyComp").innerHTML = eyComp.toFixed(3);
	document.getElementById("ethetaComp").innerHTML = ethetaComp.toFixed(3);
    document.getElementById("KthetalComp").innerHTML = KthetalComp.toFixed(3);
    document.getElementById("eypComp").innerHTML = eypComp.toFixed(3);
    document.getElementById("KrComp").innerHTML = KrComp.toFixed(3);
    //===========================
    // Preset Condition
    //===========================
    document.getElementById("exExt").innerHTML = exExt.toFixed(3);
    document.getElementById("eyExt").innerHTML = eyExt.toFixed(3);
    document.getElementById("ethetaExt").innerHTML = ethetaExt.toFixed(3);
    document.getElementById("KthetalExt").innerHTML = KthetalExt.toFixed(3);
    document.getElementById("eypExt").innerHTML = eypExt.toFixed(3);
    document.getElementById("KrExt").innerHTML = KrExt.toFixed(3);	
//=====================================
// OPERATING CONDITION
//=====================================
// ee
let operatingEE1 = eyComp + ethetaComp + Math.abs(exComp);
let operatingEE2 = rotationEffectComp + Math.abs(exComp);
let operatingEE = Math.max( operatingEE1, operatingEE2);
// ec
let operatingEC1 = eyComp + ethetaComp - Math.abs(exComp);
let operatingEC2 = rotationEffectComp - Math.abs(exComp);
let operatingEC = Math.max( operatingEC1, operatingEC2);
//=====================================
// PRESET CONDITION
//=====================================
// ee
let presetEE1 = eyExt + ethetaExt + Math.abs(exExt);
let presetEE2 = rotationEffectExt + Math.abs(exExt);
let presetEE = Math.max(presetEE1,presetEE2);
// ec
let presetEC1 = eyExt + ethetaExt - Math.abs(exExt);
let presetEC2 = rotationEffectExt - Math.abs(exExt);
let presetEC = Math.max( presetEC1, presetEC2);
//=====================================
// MOVEMENT RANGE
//=====================================
let compressionRange = operatingEC + presetEC;
let extensionRange = operatingEE + presetEE;
let totalMovement = Math.max( Math.abs(compressionRange), Math.abs(extensionRange));
//=====================================
// DISPLAY
//=====================================
// Operating
document.getElementById("CompCase1").innerHTML = operatingEE1.toFixed(3);
document.getElementById("CompCase2").innerHTML = operatingEE2.toFixed(3);
document.getElementById("CompCase1o").innerHTML = operatingEC1.toFixed(3);
document.getElementById("CompCase2o").innerHTML = operatingEC2.toFixed(3);
// ee and ec Max
document.getElementById("CompCaseoe").innerHTML = operatingEE.toFixed(3);
document.getElementById("CompCaseoc").innerHTML = operatingEC.toFixed(3);
document.getElementById("CompCasepe").innerHTML = presetEE.toFixed(3);
document.getElementById("CompCasepc").innerHTML = presetEC.toFixed(3);
// Preset
document.getElementById("ExtCase1p").innerHTML = presetEE1.toFixed(3);
document.getElementById("ExtCase2p").innerHTML = presetEE2.toFixed(3);
document.getElementById("ExtCase1").innerHTML = presetEC1.toFixed(3);
document.getElementById("ExtCase2").innerHTML = presetEC2.toFixed(3);
// Movement Range
document.getElementById("compressionRange").innerHTML = compressionRange.toFixed(3);
document.getElementById("extensionRange").innerHTML = extensionRange.toFixed(3);
document.getElementById("totalMovement").innerHTML = totalMovement.toFixed(3);

} 

//===========Cp  value table ============

const TValues = [
0.00,0.05,0.10,0.15,0.20,0.25,
0.30,0.35,0.40,0.45,0.50,
0.55,0.60,0.65,0.70,0.75,
0.80,0.85,0.90,0.95,1.00
];

const MValues = [
0.2,0.4,0.6,0.8,1.0,
1.2,1.4,1.6,2.0,2.5,
3.0,3.5,4.0
];

const CpTable = [

 // T = 0.00
 [1.000,1.000,0.980,0.950,0.950,0.950,0.950,0.950,0.950,0.950,0.950,0.950,0.950],

 // T = 0.05
 [0.976,0.962,0.910,0.842,0.841,0.841,0.841,0.841,0.841,0.840,0.840,0.840,0.840],

 // T = 0.10
 [0.946,0.926,0.870,0.770,0.744,0.744,0.744,0.731,0.731,0.732,0.732,0.732,0.732],

 // T = 0.15
 [0.912,0.890,0.840,0.722,0.657,0.657,0.651,0.632,0.632,0.630,0.630,0.630,0.630],

 // T = 0.20
 [0.876,0.856,0.816,0.700,0.592,0.579,0.564,0.549,0.549,0.550,0.550,0.550,0.550],

 // T = 0.25
 [0.840,0.823,0.784,0.680,0.559,0.518,0.495,0.481,0.481,0.480,0.480,0.480,0.480],

 // T = 0.30
 [0.803,0.780,0.753,0.662,0.536,0.501,0.462,0.432,0.421,0.421,0.421,0.421,0.421],

 // T = 0.35
 [0.767,0.755,0.722,0.640,0.541,0.502,0.460,0.426,0.388,0.367,0.367,0.367,0.367],

 // T = 0.40
 [0.733,0.720,0.696,0.627,0.548,0.503,0.458,0.420,0.369,0.332,0.328,0.322,0.312],

 // T = 0.45
 [0.702,0.691,0.670,0.610,0.551,0.503,0.455,0.414,0.354,0.315,0.299,0.287,0.275],

 // T = 0.50
 [0.674,0.665,0.646,0.593,0.551,0.503,0.453,0.408,0.340,0.300,0.275,0.262,0.248],

 // T = 0.55
 [0.649,0.642,0.624,0.585,0.550,0.501,0.450,0.403,0.332,0.285,0.255,0.241,0.225],

 // T = 0.60
 [0.627,0.622,0.605,0.579,0.547,0.500,0.447,0.398,0.323,0.272,0.242,0.222,0.205],

 // T = 0.65
 [0.610,0.606,0.590,0.574,0.544,0.497,0.444,0.394,0.316,0.260,0.228,0.208,0.190],

 // T = 0.70
 [0.596,0.593,0.585,0.569,0.540,0.494,0.442,0.391,0.309,0.251,0.215,0.194,0.176],

 // T = 0.75
 [0.585,0.583,0.577,0.563,0.536,0.491,0.439,0.388,0.304,0.242,0.201,0.182,0.163],

 // T = 0.80
 [0.577,0.576,0.569,0.557,0.531,0.488,0.437,0.385,0.299,0.235,0.195,0.171,0.152],

 // T = 0.85
 [0.571,0.571,0.566,0.553,0.526,0.485,0.435,0.384,0.296,0.230,0.188,0.161,0.142],

 // T = 0.90
 [0.566,0.566,0.558,0.546,0.521,0.482,0.433,0.382,0.294,0.224,0.180,0.152,0.134],

 // T = 0.95
 [0.560,0.560,0.550,0.540,0.515,0.479,0.432,0.381,0.293,0.219,0.175,0.146,0.126],

 // T = 1.00
 [0.550,0.550,0.543,0.533,0.510,0.476,0.431,0.380,0.292,0.215,0.171,0.140,0.119]

];

const CfTable = [

 // T = 0.00
 [1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000],

 // T = 0.05
 [1.116,1.094,1.092,1.066,1.026,1.002,0.983,0.972,0.948,0.930,0.920,0.900,0.900],

 // T = 0.10
 [1.211,1.174,1.163,1.122,1.052,1.000,0.962,0.937,0.892,0.867,0.850,0.830,0.820],

 // T = 0.15
 [1.297,1.248,1.225,1.171,1.077,0.995,0.938,0.899,0.836,0.800,0.780,0.750,0.735],

 // T = 0.20
 [1.376,1.319,1.281,1.217,1.100,0.989,0.915,0.860,0.782,0.730,0.705,0.680,0.655],

 // T = 0.25
 [1.451,1.386,1.336,1.260,1.124,0.983,0.892,0.821,0.730,0.665,0.640,0.610,0.590],

 // T = 0.30
 [1.524,1.452,1.392,1.300,1.147,0.979,0.870,0.784,0.681,0.610,0.580,0.550,0.525],

 // T = 0.35
 [1.597,1.517,1.449,1.340,1.171,0.975,0.851,0.750,0.636,0.560,0.525,0.495,0.470],

 // T = 0.40
 [1.669,1.582,1.508,1.380,1.195,0.975,0.834,0.719,0.595,0.510,0.470,0.445,0.420],

 // T = 0.45
 [1.740,1.646,1.568,1.422,1.220,0.976,0.820,0.691,0.557,0.470,0.425,0.395,0.370],

 // T = 0.50
 [1.812,1.710,1.630,1.465,1.246,0.980,0.809,0.667,0.523,0.430,0.380,0.350,0.325],

 // T = 0.55
 [1.882,1.775,1.692,1.511,1.271,0.987,0.799,0.646,0.492,0.392,0.342,0.303,0.285],

 // T = 0.60
 [1.952,1.841,1.753,1.560,1.298,0.996,0.792,0.627,0.464,0.360,0.300,0.270,0.252],

 // T = 0.65
 [2.020,1.908,1.813,1.611,1.325,1.008,0.787,0.611,0.439,0.330,0.271,0.233,0.213],

 // T = 0.70
 [2.087,1.975,1.871,1.665,1.353,1.022,0.783,0.598,0.416,0.300,0.242,0.200,0.182],

 // T = 0.75
 [2.153,2.045,1.929,1.721,1.382,1.038,0.780,0.586,0.394,0.275,0.212,0.174,0.152],

 // T = 0.80
 [2.217,2.116,1.987,1.779,1.415,1.056,0.779,0.576,0.373,0.253,0.188,0.150,0.130],

 // T = 0.85
 [2.282,2.189,2.049,1.838,1.451,1.076,0.780,0.569,0.354,0.230,0.167,0.130,0.109],

 // T = 0.90
 [2.349,2.265,2.119,1.896,1.492,1.099,0.781,0.563,0.336,0.206,0.146,0.112,0.090],

 // T = 0.95
 [2.421,2.345,2.201,1.951,1.541,1.125,0.785,0.560,0.319,0.188,0.130,0.092,0.074],

 // T = 1.00
 [2.501,2.430,2.305,2.002,1.600,1.154,0.792,0.561,0.303,0.170,0.115,0.081,0.061]

];

const CdTable = [

 // T = 0.00
 [1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000,1.000],

 // T = 0.05
 [1.061,1.066,1.105,1.079,1.057,1.037,1.016,1.006,0.992,0.980,0.970,0.965,0.955],

 // T = 0.10
 [1.128,1.137,1.195,1.171,1.128,1.080,1.039,1.015,0.984,0.960,0.945,0.930,0.910],

 // T = 0.15
 [1.198,1.209,1.277,1.271,1.208,1.130,1.067,1.025,0.974,0.935,0.910,0.890,0.870],

 // T = 0.20
 [1.269,1.282,1.352,1.374,1.294,1.185,1.099,1.037,0.966,0.915,0.885,0.860,0.830],

 // T = 0.25
 [1.340,1.354,1.424,1.476,1.384,1.246,1.135,1.052,0.958,0.895,0.855,0.825,0.790],

 // T = 0.30
 [1.411,1.426,1.492,1.575,1.476,1.311,1.175,1.070,0.952,0.875,0.825,0.790,0.755],

 // T = 0.35
 [1.480,1.496,1.559,1.667,1.571,1.381,1.220,1.091,0.947,0.840,0.800,0.760,0.720],

 // T = 0.40
 [1.547,1.565,1.626,1.753,1.667,1.457,1.269,1.116,0.945,0.833,0.775,0.730,0.685],

 // T = 0.45
 [1.614,1.633,1.691,1.832,1.766,1.539,1.324,1.145,0.946,0.825,0.750,0.700,0.655],

 // T = 0.50
 [1.679,1.700,1.757,1.905,1.866,1.628,1.385,1.181,0.950,0.815,0.730,0.670,0.625],

 // T = 0.55
 [1.743,1.766,1.822,1.973,1.969,1.725,1.452,1.223,0.958,0.800,0.710,0.645,0.595],

 // T = 0.60
 [1.807,1.832,1.886,2.037,2.075,1.830,1.529,1.273,0.970,0.790,0.688,0.620,0.567],

 // T = 0.65
 [1.872,1.897,1.950,2.099,2.182,1.943,1.614,1.333,0.988,0.785,0.670,0.597,0.538],

 // T = 0.70
 [1.937,1.963,2.014,2.160,2.291,2.056,1.710,1.402,1.011,0.780,0.657,0.575,0.510],

 // T = 0.75
 [2.003,2.029,2.077,2.221,2.399,2.197,1.819,1.484,1.042,0.780,0.642,0.555,0.489],

 // T = 0.80
 [2.070,2.096,2.141,2.283,2.505,2.336,1.941,1.578,1.081,0.785,0.635,0.538,0.470],

 // T = 0.85
 [2.138,2.164,2.206,2.345,2.603,2.483,2.080,1.688,1.130,0.795,0.628,0.522,0.452],

 // T = 0.90
 [2.206,2.234,2.273,2.407,2.690,2.634,2.236,1.813,1.191,0.815,0.625,0.510,0.438],

 // T = 0.95
 [2.274,2.305,2.344,2.467,2.758,2.789,2.412,1.957,1.267,0.845,0.630,0.502,0.428],

 // T = 1.00
 [2.341,2.378,2.422,2.521,2.800,2.943,2.611,2.121,1.359,0.890,0.640,0.500,0.420]

];

function findRange(value,array){

    if(value<=array[0]){
        return{
            lowIndex:0,
            highIndex:1,
            low:array[0],
            high:array[1]
        };
    }

    if(value>=array[array.length-1]){
        return{
            lowIndex:array.length-2,
            highIndex:array.length-1,
            low:array[array.length-2],
            high:array[array.length-1]
        };
    }

    for(let i=0;i<array.length-1;i++){

        if(value>=array[i] && value<=array[i+1]){

            return{

                lowIndex:i,
                highIndex:i+1,
                low:array[i],
                high:array[i+1]

            };

        }

    }

}

function interpolate2D(T,M,table,TValues,MValues){

let tx=findRange(T,TValues);

let mx=findRange(M,MValues);

let Jy=table[tx.lowIndex][mx.lowIndex];

let Ky=table[tx.highIndex][mx.lowIndex];

let Ly=table[tx.lowIndex][mx.highIndex];

let Qy=table[tx.highIndex][mx.highIndex];

let A=((T-tx.low)/(tx.high-tx.low))
*(Ky-Jy)+Jy;

let B=((T-tx.low)/(tx.high-tx.low))
*(Qy-Ly)+Ly;

let Cp=((M-mx.low)/(mx.high-mx.low))
*(B-A)+A;

return Cp;

}

function shapeFactorCalculation()
{

    let Db = parseFloat(document.getElementById("Db").value);
	
	

    let t = parseFloat(document.getElementById("t").value);

    let rm = parseFloat(document.getElementById("rm").value);

    let w = parseFloat(document.getElementById("w").value);


    let tp = t * Math.sqrt(Db / Dm);

    let ratio1 = (2 * rm) / w;

    let ratio2 = (1.82 * rm) / Math.sqrt(Dm * tp);
	
	let Cp = interpolate2D(
    ratio1,
    ratio2,
    CpTable,
    TValues,
    MValues);
	
	let Cf=interpolate2D(
          ratio1,
          ratio2,
          CfTable,
          TValues,
          MValues);

    let Cd=interpolate2D(
          ratio1,
          ratio2,
          CdTable,
          TValues,
          MValues);
		  
     let Eb = parseFloat(document.getElementById("Eb1").value);
     let n  = parseFloat(document.getElementById("n").value);

      fiu = 1.7 *(Dm *Eb *Math.pow(tp,3) *n)/(Math.pow(w,3) *Cf );
		  

    document.getElementById("tpResult").innerHTML = tp.toFixed(3);

    document.getElementById("ratio1").innerHTML = ratio1.toFixed(3);

    document.getElementById("ratio2").innerHTML = ratio2.toFixed(3);
	
	document.getElementById("CpResult").innerHTML=Cp.toFixed(4);

    document.getElementById("CfResult").innerHTML=Cf.toFixed(4);

    document.getElementById("CdResult").innerHTML=Cd.toFixed(4);
	
    document.getElementById("fiuResult").innerHTML =fiu.toFixed(3);
	
	
	
	

}

function areaCalculation()
{

    let rm = parseFloat(document.getElementById("rm").value);

    let w  = parseFloat(document.getElementById("w").value);

    let n  = parseFloat(document.getElementById("n").value);
	
	let q  = parseFloat(document.getElementById("q").value);

    // tp shape factor function se aata hai
    let tp = parseFloat(document.getElementById("tpResult").innerHTML);


    let Ac =((2 * Math.PI * rm) +2 * Math.sqrt( Math.pow((q / 2 - 2 * rm), 2)
              + Math.pow((w - 2 * rm),2) ) ) * n * tp;
			
    document.getElementById("AcResult").innerHTML = Ac.toFixed(3);
}

function kFactorCalculation()
{
    let Lt = parseFloat(document.getElementById("Lt").value);
    let Db = parseFloat(document.getElementById("Db").value);
    let t  = parseFloat(document.getElementById("t").value);

    let k = Lt / (1.5 * Math.sqrt(Db * t));

    // EJMA Condition
    if(k >= 1)
    {
        k = 1;
    }

    document.getElementById("kResult").innerHTML = k.toFixed(3);
}


function stressCalculation()
{
    let Db  = parseFloat(document.getElementById("Db").value);
    let n   = parseFloat(document.getElementById("n").value);
    let t   = parseFloat(document.getElementById("t").value);
    let tc  = parseFloat(document.getElementById("tc").value);
    let q = parseFloat(document.getElementById("q").value);
    let Lt  = parseFloat(document.getElementById("Lt").value);
    let Lc  = parseFloat(document.getElementById("Lc").value);

    let P   = parseFloat(document.getElementById("P").value);

    let Eb1 = parseFloat(document.getElementById("Eb1").value);
    let Eb2 = parseFloat(document.getElementById("Eb2").value);

    let Ac = parseFloat(document.getElementById("AcResult").innerHTML);
    let k = parseFloat(document.getElementById("kResult").innerHTML);

    let w   = parseFloat(document.getElementById("w").value);

    let tp  = parseFloat(document.getElementById("tpResult").innerHTML);

    let Cp  = parseFloat(document.getElementById("CpResult").innerHTML);
    let Cf  = parseFloat(document.getElementById("CfResult").innerHTML);
    let Cd  = parseFloat(document.getElementById("CdResult").innerHTML);

    let Kr  = parseFloat(document.getElementById("Kr").innerHTML);

    let e   = parseFloat(document.getElementById("totalMovement").innerHTML);

    //==========================
    // S1
    //==========================
    let S1 = P * Math.pow(Db+n*t,2) * Lt * Eb1 * k 
	           / ( 2* ( n*t*Eb1*Lt*(Db+n*t) + tc*k*Eb1*Lc*Dc  ) );
    //==========================
    // S1'
    //==========================
    let S1p = P * Math.pow(Dc,2) *  Lt * Eb1 * k
               /  ( 2*( n*t*Eb1*Lt*(Db+n*t) + tc*k*Eb1*Lc*Dc ) );
    //==========================
    // S2
    //==========================
     S2 = P * Dm * Kr *  q / (2*Ac);
    //==========================
    // S3
    //==========================
    let S3 = P * w /(2*n*tp);
    //==========================
    // S4
    //==========================
    let S4 =(P/(2*n)) * Math.pow(w/tp,2) * Cp;
    //==========================
    // S5
    //==========================
    let S5 = Eb2 * tp * tp *  e / ( 2* Math.pow(w,3)*  Cf );
    //==========================
    // S6
    //==========================
    let S6 = 5* Eb2* tp* e / ( 3* w*w* Cd );
    //==========================
	 let St = 0.7 * (S3 + S4) + S5 + S6;
	 
    // Display
    //==========================

    document.getElementById("S1").innerHTML  = S1.toFixed(2);

    document.getElementById("S1p").innerHTML = S1p.toFixed(2);

    document.getElementById("S2").innerHTML  = S2.toFixed(2);

    document.getElementById("S3").innerHTML  = S3.toFixed(2);

    document.getElementById("S4").innerHTML  = S4.toFixed(2);

    document.getElementById("S5").innerHTML  = S5.toFixed(2);

    document.getElementById("S6").innerHTML  = S6.toFixed(2);
	
	document.getElementById("St").innerHTML  = St.toFixed(2);

}


function materialConstantCalculation()
{
    let material =
    document.getElementById("materialClass").value;

    let C,b;

    if(material=="1")
    {
        C=1.86e6;
        b=54000;
    }
    else if(material=="2")
    {
        C=2.33e6;
        b=67500;
    }
    else if(material=="3")
    {
        C=2.70e6;
        b=78300;
    }

    document.getElementById("C").value=C;

    document.getElementById("b").value=b;
}

function fatigueLifeCalculation()
{
    let St = parseFloat(document.getElementById("St").innerHTML);

    let C  = parseFloat(document.getElementById("C").value);

    let b  = parseFloat(document.getElementById("b").value);

    let fc = parseFloat(document.getElementById("fc").value);

    let Nc = Math.pow(C / (((145 * St) / fc) - b), 3.4);

    if (Nc < 1000000)
{
    document.getElementById("Nc").innerHTML = Nc.toFixed(0);
}
else
{
    document.getElementById("Nc").innerHTML = Nc.toExponential(6);
}
}

function columnStabilityCalculation()
{

    let N = parseFloat(document.getElementById("N").value);

    let q = parseFloat(document.getElementById("q").value);

    

    let xComp = parseFloat(document.getElementById("xCompInput").value);

    let presetExt = parseFloat(document.getElementById("presetExt").value);

    let theta = parseFloat(document.getElementById("theta").value);

    let presetTheta = parseFloat(document.getElementById("presetTheta").value);
     
	 let Lb = N * q;
    // e =  Movement
    let ec= parseFloat(document.getElementById("exComp").innerHTML);
	let ex= parseFloat(document.getElementById("exExt").innerHTML);


	
	  let Ctheta = 1.0;
	//=========================
// Column Stability Pressure
//=========================

let Psc =(0.34 * Math.PI * Ctheta * fiu) / (Math.pow((2*N),2) * q);

    //=========================
    // Display
    //=========================


    document.getElementById("Ctheta").innerHTML = Ctheta.toFixed(3);
    
	document.getElementById("Psc").innerHTML = Psc.toFixed(3);
}
function inplaneStabilityCalculation()
{
    //=========================
    // Inputs
    //=========================

    let Sy = parseFloat(document.getElementById("Sy").value);

    let P  = parseFloat(document.getElementById("P").value);

    let n  = parseFloat(document.getElementById("n").value);

    let q  = parseFloat(document.getElementById("q").value);

    let w  = parseFloat(document.getElementById("w").value);

    //=========================
    // Previous Results
    //=========================

    let Ac = parseFloat(document.getElementById("AcResult").innerHTML);

    let tp = parseFloat(document.getElementById("tpResult").innerHTML);

    let Cp = parseFloat(document.getElementById("CpResult").innerHTML);

    let S2 = parseFloat(document.getElementById("S2").innerHTML);

    // Kr aur Dm global variables hain
    // Dm geometryCalculation() se
    // Kr movementCalculation() se

    //=========================
    // K2
    //=========================

    let K2 = S2 / P;

    //=========================
    // K4
    //=========================

    let K4 =
        (Cp / (2 * n)) *
        Math.pow((w / tp),2);

    //=========================
    // Delta
    //=========================

    let delta = K4 / (3 * K2);

    //=========================
    // Alpha
    //=========================

    let alpha =
        1 +
        (2 * Math.pow(delta,2)) +
        Math.sqrt(
            1
            - 2 * Math.pow(delta,2)
            + 4 * Math.pow(delta,4)
        );

    //=========================
    // Psi
    //=========================

    let Psi =
        (1.3 * Ac * Sy) /
        (Kr * Dm * q * Math.sqrt(alpha));

    //=========================
    // Display
    //=========================

    document.getElementById("K2Result").innerHTML = K2.toFixed(3);

    document.getElementById("K4Result").innerHTML = K4.toFixed(3);

    document.getElementById("deltaResult").innerHTML = delta.toFixed(4);

    document.getElementById("alphaResult").innerHTML = alpha.toFixed(4);

    document.getElementById("PsiResult").innerHTML = Psi.toFixed(3);
}
function springRateCalculation()
{
    //=========================
    // Inputs
    //=========================

    let Sy = parseFloat(document.getElementById("Sy").value);
    let N  = parseFloat(document.getElementById("N").value);
	let q = parseFloat(document.getElementById("q").value);

    //=========================
    // Previous Results
    //=========================

    let St = parseFloat(document.getElementById("St").innerHTML);

    //=========================
    // Working Spring Rate
    //=========================

    //=========================
    // Overall Spring Rates
    //=========================

    let Ksr = fiu / N;
     Kwr = fiu / N;
	
	//=========================
// Lateral Spring Rate
//=========================

let Lb = N * q;          // Agar pehle se available nahi hai
let Kb = Kwr;

let Ky = (3 * Math.pow(Dm, 2) * Kb) /
         (2 * Math.pow(Lb, 2));
		 
		 //=========================
// Angular Spring Rate
//=========================



let Ktheta =
(
    Math.pow(Dm, 2) * Kb / 8
)
*
(Math.PI / 180)
/
1000;



    //=========================
    // Display
    //=========================
	

    document.getElementById("StSpring").innerHTML = St.toFixed(3);
    document.getElementById("SySpring").innerHTML = Sy.toFixed(3);



    document.getElementById("KwrResult").innerHTML = Kwr.toFixed(3);
	
	document.getElementById("KyResult").innerHTML = Ky.toFixed(3);
		
    document.getElementById("KthetaResult").innerHTML =Ktheta.toFixed(3);
}