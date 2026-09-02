// =====================================================
// ================= TAB HANDLING ======================
// =====================================================

function openTab(evt, tabName) {

    // ===== Hide all tab contents =====
    const tabcontent = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    // ===== Remove active class from all tab buttons =====
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }


    // ===== Show selected tab =====
    const selectedTab = document.getElementById(tabName);

    if (selectedTab) {
        selectedTab.style.display = "block";
    }


    // ===== Make clicked tab active =====
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}


// =====================================================
// ============== OPEN DEFAULT TAB =====================
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const defaultTab = document.getElementById("defaultOpen");

    if (defaultTab) {
        defaultTab.click();
    }

});

const CRANE = {
    
     

    HOIST: {
        MH: {},
        AH: {}
    },

    TRAVEL: {
        CT: {},
        LT: {},
        CTE: {},
        LTE: {}
    },

    BRAKE: {
        MH: {},
        AH: {},
        CT: {},
        LT: {}
    },

    ROPE: {
        MH: {},
        AH: {}
    },

    SHEAVE: {
        MH: {},
        AH: {}
    },

    DRUM_DIA: {
        MH: {},
        AH: {}
    },

    DRUM_LEN: {
        MH: {},
        AH: {}
    },

    ROPE_DRUM_STRESS: {
        MH: {},
        AH: {}
    },

    BARREL_COUPLING: {
        MH1: {},
        AH1: {}
    },

    GEARBOX: {
        MH: {},
        AH: {},
        CT: {},
        LT: {}
    },

    WHEEL_SELECTION: {
        CT: {},
        LT: {}
    }
};

function updateMechanismData() {

    // ================= READ MASTER MECHANISM =================

    const mech = document.getElementById("mechanism_class").value;


    // ================= SERVICE FACTOR =================

    const STable = {

        M1: 1.0,
        M2: 1.0,
        M3: 1.0,
        M4: 1.0,
        M5: 1.0,
        M6: 1.1,
        M7: 1.2,
        M8: 1.2

    };


    // ================= ZP =================

    const ZpTable = {

        M1: 3.15,
        M2: 3.35,
        M3: 3.55,
        M4: 4.0,
        M5: 4.5,
        M6: 5.6,
        M7: 7.1,
        M8: 9.0

    };


    // ================= SHEAVE / DRUM =================

    const MechCoeffTable = {

        M1: { Ls: 12.5, Le: 11.2, Ld: 11.2 },
        M2: { Ls: 14,   Le: 12.5, Ld: 12.5 },
        M3: { Ls: 16,   Le: 12.5, Ld: 14 },
        M4: { Ls: 18,   Le: 14,   Ld: 16 },
        M5: { Ls: 20,   Le: 14,   Ld: 18 },
        M6: { Ls: 22.4, Le: 16,   Ld: 20 },
        M7: { Ls: 25,   Le: 16,   Ld: 22.4 },
        M8: { Ls: 28,   Le: 18,   Ld: 25 }

    };


    // ================= GET VALUES =================

    const S = STable[mech];
    const Zp = ZpTable[mech];
    const coeff = MechCoeffTable[mech];

    const Ls = coeff.Ls;
    const Le = coeff.Le;
    const Ld = coeff.Ld;


    // ================= SAVE TO CRANE =================

    CRANE.HOIST.MH.mech = mech;
    CRANE.HOIST.AH.mech = mech;

    CRANE.TRAVEL.CT.mech = mech;
    CRANE.TRAVEL.LT.mech = mech;

    CRANE.TRAVEL.CTE.mech = mech;
    CRANE.TRAVEL.LTE.mech = mech;


    // ================= SERVICE FACTOR =================

    CRANE.HOIST.MH.S = S;
    CRANE.HOIST.AH.S = S;

    CRANE.TRAVEL.CT.S = S;
    CRANE.TRAVEL.LT.S = S;

    CRANE.TRAVEL.CTE.S = S;
    CRANE.TRAVEL.LTE.S = S;


    // ================= ZP =================

    CRANE.HOIST.MH.Zp = Zp;
    CRANE.HOIST.AH.Zp = Zp;


    // ================= COEFFICIENTS =================

    CRANE.HOIST.MH.Ls = Ls;
    CRANE.HOIST.MH.Le = Le;
    CRANE.HOIST.MH.Ld = Ld;

    CRANE.HOIST.AH.Ls = Ls;
    CRANE.HOIST.AH.Le = Le;
    CRANE.HOIST.AH.Ld = Ld;
}

//============ ROPE DRUM STRESS ======================

function calcRopeDrumStress(){

let MH = CRANE.ROPE_DRUM_STRESS.MH; 
let AH = CRANE.ROPE_DRUM_STRESS.AH;

// ===== INPUTS =====
MH.Qs  = +mh_q.value;    AH.Qs  = +ah_q.value;
MH.Q1s = +mh_q1.value;   AH.Q1s = +ah_q1.value;
MH.Q1st = +mh_q2.value;   AH.Q1st = +ah_q2.value;

MH.Ds  = +d_mhs.value;    AH.Ds  = +d_ahs.value;
MH.ds  = +di_mhs.value;   AH.ds  = +di_ahs.value;

MH.Ls = +CRANE.DRUM_LEN.MH.finalL / 10 ; // cm
AH.Ls = +CRANE.DRUM_LEN.AH.finalL / 10 ; // cm



MH.Ns  = +CRANE.ROPE.MH.F;    AH.Ns  = +CRANE.ROPE.AH.F;

MH.ps  = +p_mhs.value;    AH.ps  = +p_ahs.value;
MH.ts  = +t_mhs.value;    AH.ts = +t_ahs.value;

MH.Ws  = +CRANE.BARREL_COUPLING.MH1.Md; AH.Ws  = +CRANE.BARREL_COUPLING.AH1.Md;
MH.PCDs= +CRANE.DRUM_DIA.MH.finalDia;   AH.PCDs= +CRANE.DRUM_DIA.AH.finalDia;

// ===== CRUSHING STRESS =====
MH.scrs = (MH.Qs + MH.Q1s + MH.Q1st ) * 1000 / (MH.Ns * MH.ps * MH.ts);
AH.scrs = (AH.Qs + AH.Q1s + AH.Q1st ) * 1000 / (AH.Ns * AH.ps * AH.ts);

// ===== BENDING =====
MH.fs = (MH.Qs + MH.Q1s + MH.Q1st) * 1000 / MH.Ns;
AH.fs = (AH.Qs + AH.Q1s + AH.Q1st) * 1000 / AH.Ns;

MH.Ps = 2 * MH.fs;
AH.Ps = 2 * AH.fs;

MH.Ms = (MH.Ps * MH.Ls)/4 + (MH.Ws * MH.Ls)/8;
AH.Ms = (AH.Ps * AH.Ls)/4 + (AH.Ws * AH.Ls)/8;

MH.Is = Math.PI/64 * (Math.pow(MH.Ds,4) - Math.pow(MH.ds,4));
AH.Is = Math.PI/64 * (Math.pow(AH.Ds,4) - Math.pow(AH.ds,4));

MH.Zs = MH.Is / (MH.Ds/2);
AH.Zs = AH.Is / (AH.Ds/2);

MH.sbs = MH.Ms / MH.Zs;
AH.sbs = AH.Ms / AH.Zs;

MH.scs = Math.sqrt( Math.pow(MH.scrs,2) + Math.pow(MH.sbs,2) );
AH.scs = Math.sqrt( Math.pow(AH.scrs,2) + Math.pow(AH.sbs,2) );

// ===== TORSION =====
MH.Ts = MH.Ps * (MH.PCDs/2) *  100;
AH.Ts = AH.Ps * (AH.PCDs/2) * 100;

MH.Js = (Math.PI/ (16 * MH.Ds) ) * (Math.pow(MH.Ds,4) - Math.pow(MH.ds,4));
AH.Js = (Math.PI/ (16 * AH.Ds) ) * (Math.pow(AH.Ds,4) - Math.pow(AH.ds,4));

MH.taus = MH.Ts / MH.Js;
AH.taus = AH.Ts / AH.Js;

// ===== COMBINED STRESS =====
MH.combs = Math.sqrt( Math.pow(MH.scs,2) + 3*Math.pow(MH.taus,2) );
AH.combs = Math.sqrt( Math.pow(AH.scs,2) + 3*Math.pow(AH.taus,2) );

// ===== CRUSHING STRESS DISPLAY + SAFETY COLOR =====

const mech =
    document.getElementById("mechanism_class").value;


// E-250 permissible crushing stress

let permissibleCrushingStress;

if (["M1", "M2", "M3", "M4", "M5", "M6"].includes(mech)) {

    permissibleCrushingStress = 1250;

} else {

    // M7 and M8
    permissibleCrushingStress = 1100;
}


// ================= MH =================

cr_mhs.innerHTML = MH.scrs.toFixed(2);

if (MH.scrs <= permissibleCrushingStress) {

    cr_mhs.className = "result rope-stress-safe";

} else {

    cr_mhs.className = "result rope-stress-unsafe";
}


// ================= AH =================

cr_ahs.innerHTML = AH.scrs.toFixed(2);

if (AH.scrs <= permissibleCrushingStress) {

    cr_ahs.className = "result rope-stress-safe";

} else {

    cr_ahs.className = "result rope-stress-unsafe";
}

sb_mhs.innerHTML = MH.sbs.toFixed(2);
sb_ahs.innerHTML = AH.sbs.toFixed(2);

sc_mhs.innerHTML = MH.scs.toFixed(2);
sc_ahs.innerHTML = AH.scs.toFixed(2);

ts_mhs.innerHTML = MH.taus.toFixed(2);
ts_ahs.innerHTML = AH.taus.toFixed(2);

comb_mhs.innerHTML = MH.combs.toFixed(0);
comb_ahs.innerHTML = AH.combs.toFixed(0);
}
function updateRopeDrumStrength() {

    const mech =
        document.getElementById("mechanism_class").value;


    // ================= PERMISSIBLE CRUSHING STRESS =================

    let e250Stress;
    let e350Stress;


    if (["M1", "M2", "M3", "M4", "M5", "M6"].includes(mech)) {

        e250Stress = 1250;
        e350Stress = 1500;

    } else {

        // M7 and M8

        e250Stress = 1100;
        e350Stress = 1350;

    }


    // ================= DISPLAY =================

    document.getElementById("drum_selected_class").innerHTML =
        mech;


    document.getElementById("drum_e250_stress").innerHTML =
        e250Stress + " kg/cm²";


    document.getElementById("drum_e350_stress").innerHTML =
        e350Stress + " kg/cm²";


    // Default material = E250
    document.getElementById("drum_permissible_stress").innerHTML =
        e250Stress + " kg/cm²";
}

  
  //=============BARREL COUPLING ======================
  
  // ========= BARREL COUPLING MASTER TABLE =========
const BARREL_COUPLING = [
  { size: "TCBR 25",   Tmax: 7500,    Fr: 19600 },
  { size: "TCBR 50",   Tmax: 9500,    Fr: 22250 },
  { size: "TCBR 75",   Tmax: 12000,   Fr: 24000 },
  { size: "TCBR 100",  Tmax: 16300,   Fr: 29700 },
  { size: "TCBR 130",  Tmax: 23500,   Fr: 41800 },
  { size: "TCBR 160",  Tmax: 29100,   Fr: 46000 },
  { size: "TCBR 200",  Tmax: 33900,   Fr: 50850 },
  { size: "TCBR 300",  Tmax: 42600,   Fr: 58250 },
  { size: "TCBR 400",  Tmax: 57200,   Fr: 82500 },
  { size: "TCBR 500",  Tmax: 102600,  Fr: 133400 },
  { size: "TCBR 600",  Tmax: 138150,  Fr: 143650 },
  { size: "TCBR 1000", Tmax: 185300,  Fr: 158050 },
  { size: "TCBR 1500", Tmax: 250700,  Fr: 190750 },
  { size: "TCBR 2100", Tmax: 381500,  Fr: 288850 },
  { size: "TCBR 2600", Tmax: 442800,  Fr: 334800 },
  { size: "TCBR 3400", Tmax: 532500,  Fr: 372750 },
  { size: "TCBR 4200", Tmax: 665650,  Fr: 426000 },
  { size: "TCBR 6200", Tmax: 816200,  Fr: 498200 },
  { size: "TCBR 8200", Tmax: 900000,  Fr: 525000 },
  { size: "TCBR 9200", Tmax: 1050000, Fr: 550000 },
  { size: "TCBR 10200",Tmax: 1300000, Fr: 600000 }
];

function selectBarrelCoupling(requiredTorque, requiredRadial) {

  for (let row of BARREL_COUPLING) {

    // JUST ABOVE condition (safe side)
    if (row.Tmax >= requiredTorque && row.Fr >= requiredRadial) {
      return row;
    }
  }

  // agar table me koi bhi safe na mile
  return null;
}


  function calcBarrelCoupling() {

    let MH1 = CRANE.BARREL_COUPLING.MH1; 
	let AH1 = CRANE.BARREL_COUPLING.AH1;

    // ================= INPUTS =================
    MH1.Q   = +document.getElementById("mh_q").value;
    AH1.Q   = +document.getElementById("ah_q").value;

    MH1.Q1  = +document.getElementById("mh_q1").value;
    AH1.Q1  = +document.getElementById("ah_q1").value;
    
     MH1.Q1t  = +document.getElementById("mh_q2").value;
     AH1.Q1t  = +document.getElementById("ah_q2").value;

    MH1.Ps  = +CRANE.HOIST.MH.finalKW;
    AH1.Ps  = +CRANE.HOIST.AH.finalKW;

    MH1.N   = + CRANE.HOIST.MH.finalRPM;
    AH1.N   = +CRANE.HOIST.AH.finalRPM;

    MH1.r   = +CRANE.GEARBOX.MH.finalRatio;
    AH1.r   = +CRANE.GEARBOX.AH.finalRatio;

    MH1.d   = +CRANE.DRUM_DIA.MH.finalDia;
    AH1.d   = +CRANE.DRUM_DIA.AH.finalDia;

    MH1.ir  = +document.getElementById("bc_ir_mh").value;
    AH1.ir  = +document.getElementById("bc_ir_ah").value;

    MH1.K1  = +document.getElementById("bc_k1_mh").value;
    AH1.K1  = +document.getElementById("bc_k1_ah").value;

    MH1.K2  = +document.getElementById("bc_k2_mh").value;
    AH1.K2  = +document.getElementById("bc_k2_ah").value;

    MH1.Md  = +document.getElementById("bc_md_mh").value;
    AH1.Md  = +document.getElementById("bc_md_ah").value;
    
    MH1.Mrd  = +CRANE.DRUM_LEN.MH.k;
    AH1.Mrd  = +CRANE.DRUM_LEN.AH.k;


    // ================= CALCULATIONS =================
    MH1.Mnet = (MH1.Q + MH1.Q1 + MH1.Q1t) * 1000;
    AH1.Mnet = (AH1.Q + AH1.Q1 + AH1.Q1t) * 1000;

    MH1.Wnet = 9.81 * MH1.Mnet;
    AH1.Wnet = 9.81 * AH1.Mnet;

    MH1.n = MH1.N / MH1.r;
    AH1.n = AH1.N / AH1.r;

    MH1.Wd = 9.81 * MH1.Md;
    AH1.Wd = 9.81 * AH1.Md;

    MH1.F = MH1.Wnet / ( MH1.ir * MH1.K2 * MH1.Mrd );
    AH1.F = AH1.Wnet / ( AH1.ir * AH1.K2 * AH1.Mrd );

    MH1.T = (975 * 9.81 * MH1.Ps * MH1.K1) /  ( MH1.n * MH1.Mrd )   ;
    AH1.T = (975 * 9.81 * AH1.Ps * AH1.K1) /  ( AH1.n * AH1.Mrd ) ;

    MH1.Tc = MH1.F * MH1.d * MH1.K1 / 2  ;
    AH1.Tc = AH1.F * AH1.d * AH1.K1 / 2  ;

    MH1.Fp = MH1.Wnet / (MH1.Mrd * MH1.ir * MH1.K2);
    AH1.Fp = AH1.Wnet / (AH1.Mrd * AH1.ir * AH1.K2);

    MH1.Fr = (MH1.Fp / 2) + (MH1.Wd / 2);
    AH1.Fr = (AH1.Fp / 2) + (AH1.Wd / 2);

    // ================= OUTPUT =================
    document.getElementById("bc_mnet_mh").innerHTML = MH1.Mnet.toFixed(2);
    document.getElementById("bc_mnet_ah").innerHTML = AH1.Mnet.toFixed(2);

    document.getElementById("bc_wnet_mh").innerHTML = MH1.Wnet.toFixed(2);
    document.getElementById("bc_wnet_ah").innerHTML = AH1.Wnet.toFixed(2);
    
    document.getElementById("bc_Wd_mh").innerHTML = MH1.Wd.toFixed(2);
    document.getElementById("bc_Wd_ah").innerHTML = AH1.Wd.toFixed(2);

    document.getElementById("bc_speed_mh").innerHTML = MH1.n.toFixed(3);
    document.getElementById("bc_speed_ah").innerHTML = AH1.n.toFixed(3);
    
    document.getElementById("bc_torque_mhc").innerHTML = MH1.Tc.toFixed(2);
    document.getElementById("bc_torque_ahc").innerHTML = AH1.Tc.toFixed(2);

    document.getElementById("bc_torque_mh").innerHTML = MH1.T.toFixed(2);
    document.getElementById("bc_torque_ah").innerHTML = AH1.T.toFixed(2);
    
    document.getElementById("bc_static_mh").innerHTML =  MH1.Fp.toFixed(2);
    document.getElementById("bc_static_ah").innerHTML = AH1.Fp.toFixed(2);

    document.getElementById("bc_radial_mh").innerHTML = MH1.Fr.toFixed(2);
    document.getElementById("bc_radial_ah").innerHTML = AH1.Fr.toFixed(2);  


// -------- MH Selection --------
let selMH = selectBarrelCoupling(MH1.T, MH1.Fr);

if (selMH) {
  document.getElementById("sizeMH").innerHTML = selMH.size;
  document.getElementById("rated_torque_mh").innerHTML = (selMH.Tmax / 1000).toFixed(2);
  document.getElementById("rated_radial_mh").innerHTML = (selMH.Fr / 1000).toFixed(2);
} else {
  document.getElementById("sizeMH").innerHTML = "Not Safe";
  document.getElementById("rated_torque_mh").innerHTML = "-";
  document.getElementById("rated_radial_mh").innerHTML = "-";
}

// -------- AH Selection --------
let selAH = selectBarrelCoupling(AH1.T, AH1.Fr);

if (selAH) {
  document.getElementById("sizeAH").innerHTML = selAH.size;
  document.getElementById("rated_torque_ah").innerHTML = (selAH.Tmax / 1000).toFixed(2);
  document.getElementById("rated_radial_ah").innerHTML = (selAH.Fr / 1000).toFixed(2);
} else {
  document.getElementById("sizeAH").innerHTML = "Not Safe";
  document.getElementById("rated_torque_ah").innerHTML = "-";
  document.getElementById("rated_radial_ah").innerHTML = "-";
}

}
// =====================================================
// WHEEL RECOMMENDATION DATABASE
// =====================================================

const recommendedWheelData = [

    // 30 lb./yd
    {
        rails: ["30"],
        size: "200",
        dia: 200
    },

    {
        rails: ["30"],
        size: "250",
        dia: 250
    },


    // 60 lb./yd / CR50 / CR60
    {
        rails: ["60", "CR50", "CR60"],
        size: "320",
        dia: 320
    },

    {
        rails: ["60", "CR50", "CR60"],
        size: "400",
        dia: 400
    },


    // CR80
    {
        rails: ["CR80"],
        size: "500",
        dia: 500
    },

    {
        rails: ["CR80"],
        size: "630A",
        dia: 630
    },

    {
        rails: ["CR80"],
        size: "710A",
        dia: 710
    },

    {
        rails: ["CR80"],
        size: "800A",
        dia: 800
    },

    {
        rails: ["CR80"],
        size: "900A",
        dia: 900
    },


    // CR100
    {
        rails: ["CR100"],
        size: "630B",
        dia: 630
    },

    {
        rails: ["CR100"],
        size: "710C",
        dia: 710
    },

    {
        rails: ["CR100"],
        size: "800B",
        dia: 800
    },

    {
        rails: ["CR100"],
        size: "900B",
        dia: 900
    },


    // CR120
    {
        rails: ["CR120"],
        size: "710B",
        dia: 710
    },

    {
        rails: ["CR120"],
        size: "800B",
        dia: 800
    },

    {
        rails: ["CR120"],
        size: "900B",
        dia: 900
    },

    {
        rails: ["CR120"],
        size: "1000A",
        dia: 1000
    },


    // CR140
    {
        rails: ["CR140"],
        size: "800C",
        dia: 800
    },

    {
        rails: ["CR140"],
        size: "900C",
        dia: 900
    },

    {
        rails: ["CR140"],
        size: "1000B",
        dia: 1000
    }

];
// =====================================================
// SELECT RECOMMENDED WHEEL
// =====================================================

function selectRecommendedWheel(railSize, requiredDia) {

    requiredDia = Number(requiredDia);

    if (!railSize || !requiredDia) {
        return null;
    }


    // -----------------------------------------------
    // STEP 1
    // Selected rail ke compatible wheels
    // -----------------------------------------------

    const railMatchedWheels =
        recommendedWheelData.filter(item =>
            item.rails.includes(railSize)
        );


    if (railMatchedWheels.length === 0) {
        return null;
    }


    // -----------------------------------------------
    // STEP 2
    // Required diameter se chote wheels reject
    // -----------------------------------------------

    const validWheels =
        railMatchedWheels.filter(item =>
            item.dia >= requiredDia
        );


    if (validWheels.length === 0) {
        return null;
    }


    // -----------------------------------------------
    // STEP 3
    // Exact ya nearest higher wheel select
    // -----------------------------------------------

    validWheels.sort((a, b) =>
        a.dia - b.dia
    );


    return validWheels[0];
}
// =====================================================
// DISPLAY RECOMMENDED WHEEL
// =====================================================

function displayRecommendedWheel(
    wheel,
    railSize,
    railElementId,
    sizeElementId,
    diaElementId
) {

    const railEl = el(railElementId);
    const sizeEl = el(sizeElementId);
    const diaEl = el(diaElementId);


    // ================================================
    // RAIL DISPLAY
    // ================================================

    const railLabels = {

        "30": "30 lb./yd",
        "60": "60 lb./yd",

        "CR50": "CR : 50",
        "CR60": "CR : 60",
        "CR80": "CR : 80",

        "CR100": "CR : 100",
        "CR120": "CR : 120",
        "CR140": "CR : 140"
    };


    railEl.innerHTML =
        railLabels[railSize] || "Not Selected";


    // ================================================
    // WHEEL AVAILABLE
    // ================================================

    if (wheel) {

        sizeEl.innerHTML =
            wheel.size;

        diaEl.innerHTML =
            wheel.dia.toFixed(0);

    }


    // ================================================
    // NOT AVAILABLE
    // ================================================

    else {

        sizeEl.innerHTML =
            "Not Available";

        diaEl.innerHTML =
            "—";
    }
}
// =====================================================
// UPDATE RECOMMENDED WHEEL
// =====================================================

function updateRecommendedWheel() {

    // ================= CT =================

    const ctRail =
        el("ct_rail_size").value;

    const ctRequiredDia =
        Number(CRANE.WHEEL_SELECTION.CT.D1);


    const ctWheel =
        selectRecommendedWheel(
            ctRail,
            ctRequiredDia
        );


    displayRecommendedWheel(

        ctWheel,
        ctRail,

        "ct_rail_rec",
        "ct_wheel_size_rec",
        "ct_wheel_dia_rec"
    );



    // ================= LT =================

    const ltRail =
        el("lt_rail_size").value;

    const ltRequiredDia =
        Number(CRANE.WHEEL_SELECTION.LT.D1);


    const ltWheel =
        selectRecommendedWheel(
            ltRail,
            ltRequiredDia
        );


    displayRecommendedWheel(

        ltWheel,
        ltRail,

        "lt_rail_rec",
        "lt_wheel_size_rec",
        "lt_wheel_dia_rec"
    );
}

/* =====================================================
   ================= CT WHEEL LOAD ======================
   ===================================================== */

function calcCTLoad() {
  let CT = CRANE.WHEEL_SELECTION.CT;
	
  let Q  = val("mh_q");
  let G  = val("ct_g");
  let Q1 = val("mh_q1");
  let n1  = val("ct_n0");
  let p  = val("ct_p0");
  let q  = val("ct_q0");
  let y  = val("ct_y0");
  let z  = val("ct_z0");

  // ---- formulas ----
  let w1 = (Q + Q1) * p * q / (y * z);
  let w2 = (G - Q1) / n1;
  
  
  
  CT.P2 = w1 + w2;   // Pmax
  CT.P3 = G / n1;    // Pmin


 // Optional display/result
  set("ct_pmax1", CT.P2);
  set("ct_pmin1", CT.P3);
  

}

/* =====================================================
   ================= LT WHEEL LOAD =======================
   ==================================================================================== */

function calcLTLoad() {
  let LT = CRANE.WHEEL_SELECTION.LT;
  
  let Q  = val("mh_q");
  let G  = val("ct_g");
  let Wc = val("lt_g");
  let A  = val("lt_A0");
  let B  = val("lt_B0");
  let S  = val("lt_S0");
  let n  = val("lt_n0");

  // ---- formulas ----
  let Wb = Wc - G;
  let w1 = Wb / n;

  let w2 = (G + Q) * (S - A) / ((n/2) * S);
  let w3 = (G * B) / ((n/2) * S);

  LT.P2 = w1 + w2;   // Pmax
  LT.P3 = w1 + w3;   // Pmin
    set("lt_pmax1", LT.P2);
    set("lt_pmin1", LT.P3);
  

}

/* =====================================================
   =============== WHEEL SELECTION ======================
   ===================================================== */
function calcWheelSelection() {

  let CT = CRANE.WHEEL_SELECTION.CT;
  let LT = CRANE.WHEEL_SELECTION.LT;

  //=== INPUT =====

  CT.P1 = +document.getElementById("ct_pl").value;
  LT.P1 = +document.getElementById("lt_pl").value;

  CT.P4 = +document.getElementById("ct_b").value;
  LT.P4 = +document.getElementById("lt_b").value;

  CT.P5 = +document.getElementById("ct_r").value;
  LT.P5 = +document.getElementById("lt_r").value;

  CT.P6 = +document.getElementById("ct_c1").value;
  LT.P6 = +document.getElementById("lt_c1").value;

  CT.P7 = +document.getElementById("ct_c2").value;
  LT.P7 = +document.getElementById("lt_c2").value;


  /* ================= CALCULATIONS ================= */

  CT.A1 = (2 * CT.P2 + CT.P3) / 3;
  LT.A1 = (2 * LT.P2 + LT.P3) / 3;

  CT.B1 = 9.81 * CT.A1;
  LT.B1 = 9.81 * LT.A1;

  CT.C1 = CT.P4 - (4 / 3) * CT.P5;
  LT.C1 = LT.P4 - (4 / 3) * LT.P5;

  CT.D1 = (1000 * CT.B1) / (CT.P1 * CT.C1 * CT.P6 * CT.P7);
  LT.D1 = (1000 * LT.B1) / (LT.P1 * LT.C1 * LT.P6 * LT.P7);


  /* ============ DISPLAY CALCULATED ============ */

  document.getElementById("ct_pmean").innerHTML = CT.A1.toFixed(2);
  document.getElementById("lt_pmean").innerHTML = LT.A1.toFixed(2);

  document.getElementById("ct_f1").innerHTML = CT.B1.toFixed(2);
  document.getElementById("lt_f1").innerHTML = LT.B1.toFixed(2);

  document.getElementById("ct_w").innerHTML = CT.C1.toFixed(2);
  document.getElementById("lt_w").innerHTML = LT.C1.toFixed(2);

  document.getElementById("ct_d_calc").innerHTML = CT.D1.toFixed(2);
  document.getElementById("lt_d_calc").innerHTML = LT.D1.toFixed(2);


  /* ================= FINAL WHEEL DIA ================= */

  // Manufacturer value
  let ct_manu_dia = +el('ct_d_manu').value || 0;
  let lt_manu_dia = +el('lt_d_manu').value || 0;

  // Final Diameter
  CT.finalDia = ct_manu_dia > 0 ? ct_manu_dia : CT.D1;
  LT.finalDia = lt_manu_dia > 0 ? lt_manu_dia : LT.D1;

// ================= RECOMMENDED WHEEL =================

updateRecommendedWheel();
}

function calcCTBuffer() {

  let G = +CRANE.TRAVEL.CT.g;
  let V = +CRANE.TRAVEL.CT.v;
  let C = val("ctb_C");
  let L = val("ctb_L");

  let Vd = V * C / 60;
  let KE = 0.5 * (G / 2) * Vd * Vd;
  let F  = KE / L;

  set("ctb_vd", Vd, 2);
  set("ctb_ke", KE, 2);
  set("ctb_f", F, 2);
}

function calcLTBuffer() {

  let Q  = +CRANE.TRAVEL.LT.g;
  let Q1 = +CRANE.TRAVEL.CT.g;
  let S  = val("ltb_S");
  let a  = val("ltb_a");
  let V  = +CRANE.TRAVEL.LT.v;
  let C  = val("ltb_C");
  let L  = val("ltb_L");

  let M  = (Q - Q1) / 2 + Q1 * (S - a) / S;
  let Vd = V * C / 60;
  let KE = 0.5 * M * Vd * Vd;
  let F  = KE / L;

  set("ltb_m", M, 2);
  set("ltb_vd", Vd, 2);
  set("ltb_ke", KE, 2);
  set("ltb_f", F, 2);
}



function calcGearbox() {

    /* ================= OBJECTS ================= */
    let MH1 = CRANE.GEARBOX.MH;
	let AH1 = CRANE.GEARBOX.AH; 
	let CT1 = CRANE.GEARBOX.CT;
	let LT1 = CRANE.GEARBOX.LT;

    /* ================= INPUTS ================= */

    // Rated Speed V
    MH1.V = +CRANE.HOIST.MH.v;
    AH1.V = +CRANE.HOIST.AH.v;
    CT1.V = +CRANE.TRAVEL.CT.v;
    LT1.V = +CRANE.TRAVEL.LT.v;

    // Motor RPM N
    MH1.N = +CRANE.HOIST.MH.finalRPM;
    AH1.N = +CRANE.HOIST.AH.finalRPM;
    CT1.N = +CRANE.TRAVEL.CTE.finalRPM;
    LT1.N = +CRANE.TRAVEL.LTE.finalRPM;

    // Drum / Wheel Diameter D
    MH1.D = +CRANE.DRUM_DIA.MH.finalDia;
    AH1.D = +CRANE.DRUM_DIA.AH.finalDia;
    CT1.D = +CRANE.WHEEL_SELECTION.CT.finalDia / 1000;
    LT1.D = +CRANE.WHEEL_SELECTION.LT.finalDia / 1000;

    // No. of Falls (Hoist only)
    MH1.F = +CRANE.ROPE.MH.F;
    AH1.F = +CRANE.ROPE.AH.F;
    
    // No. of Rope Drum (Hoist only)
    MH1.Fk = +CRANE.DRUM_LEN.MH.k;
    AH1.Fk = +CRANE.DRUM_LEN.AH.k;

    // Selected Motor Power P
    MH1.P = +CRANE.HOIST.MH.finalKW;
    AH1.P = +CRANE.HOIST.AH.finalKW;
    CT1.P = +CRANE.TRAVEL.CTE.finalKW;
    LT1.P = + CRANE.TRAVEL.LTE.finalKW;

    // Duty Factor DF
    MH1.DF = +document.getElementById("df_mh").value;
    AH1.DF = +document.getElementById("df_ah").value;
    CT1.DF = +document.getElementById("df_ct").value;
    LT1.DF = +document.getElementById("df_lt").value;

    /* ================= CALCULATIONS ================= */

    // Required Gearbox Power Pg = P × DF
    MH1.Pg = MH1.P * MH1.DF;
    AH1.Pg = AH1.P * AH1.DF;
    CT1.Pg = CT1.P * CT1.DF;
    LT1.Pg = LT1.P * LT1.DF;
    
document.getElementById("pg_mh").innerHTML = MH1.Pg.toFixed(2);
document.getElementById("pg_ah").innerHTML = AH1.Pg.toFixed(2);
document.getElementById("pg_ct").innerHTML = CT1.Pg.toFixed(2);
document.getElementById("pg_lt").innerHTML = LT1.Pg.toFixed(2);
     // No of falls per rope drum
    
    MH1.rk = ( MH1.F ) / ( MH1.Fk);
    AH1.rk = ( AH1.F) / (AH1.Fk);

// Required Gear Ratio
MH1.r = (2 * Math.PI * MH1.N * MH1.D) / (MH1.rk * MH1.V);
AH1.r = (2 * Math.PI * AH1.N * AH1.D) / (AH1.rk * AH1.V);

CT1.r = (Math.PI * CT1.N * CT1.D) / CT1.V;
LT1.r = (Math.PI * LT1.N * LT1.D) / LT1.V;

document.getElementById("r_mh").innerHTML = MH1.r.toFixed(2);
document.getElementById("r_ah").innerHTML = AH1.r.toFixed(2);
document.getElementById("r_ct").innerHTML = CT1.r.toFixed(2);
document.getElementById("r_lt").innerHTML = LT1.r.toFixed(2);

// ================= FINAL GEAR RATIO =================

// Manufacturer value
let mh_manu_ratio = +document.getElementById("r_mh_manu").value || 0;
let ah_manu_ratio = +document.getElementById("r_ah_manu").value || 0;
let ct_manu_ratio = +document.getElementById("r_ct_manu").value || 0;
let lt_manu_ratio = +document.getElementById("r_lt_manu").value || 0;


// Final Ratio
MH1.finalRatio = mh_manu_ratio > 0 ? mh_manu_ratio : MH1.r;
AH1.finalRatio = ah_manu_ratio > 0 ? ah_manu_ratio : AH1.r;
CT1.finalRatio = ct_manu_ratio > 0 ? ct_manu_ratio : CT1.r;
LT1.finalRatio = lt_manu_ratio > 0 ? lt_manu_ratio : LT1.r;


}



 //============Calculation Brake ======================

const BRAKE_TABLE = [
    { dia: 160, DC: 8,  AC: 8 },
    { dia: 200, DC: 13.8,  AC: 13.8 },
    { dia: 250, DC: 27.6,  AC: 27.6 },
    { dia: 300, DC: 76,    AC: 76 },
    { dia: 400, DC: 138,   AC: 138 },
    { dia: 500, DC: 277,   AC: 277 },
    { dia: 600, DC: 555,   AC: 555 },
    { dia: 700, DC: 1242,  AC: 1242 },
    { dia: 800, DC: 1242,  AC: 1242 }
];

function selectDrumDia(T, op) {
    for (let i = 0; i < BRAKE_TABLE.length; i++) {
        let row = BRAKE_TABLE[i];

        if (T <= row[op]) {
            return row.dia;
        }
    }
    return "Not Available";
}

function selectDrumTorque(T, op) {
    for (let i = 0; i < BRAKE_TABLE.length; i++) {
        let row = BRAKE_TABLE[i];

        if (T <= row[op]) {
            return row[op];
        }
    }
    return "Not Available";
}


// ================= BRAKE COUNT LOGIC =================
function getBrakeCount(loadTon, motors, type) {

    if (type === 'HOIST') {
        if (loadTon >= 20) {
            return motors * 2;
        } else {
            return motors * 1;
        }
    }

    if (type === 'TRAVEL') {
        return motors;
    }

    return 0;
}

function calcBrake() {

    let MH1 = CRANE.BRAKE.MH;
    let AH1 = CRANE.BRAKE.AH;
    let CT1 = CRANE.BRAKE.CT;
    let LT1 = CRANE.BRAKE.LT;

//============= ELECTRICAL POWER =================
MH1.P1 = +CRANE.HOIST.MH.finalKW;
AH1.P1 = +CRANE.HOIST.AH.finalKW;
CT1.P1 = +CRANE.TRAVEL.CTE.finalKW;
LT1.P1 = +CRANE.TRAVEL.LTE.finalKW;

//============= MECHANICAL POWER =================
MH1.P1m = +CRANE.HOIST.MH.Pmech;
AH1.P1m = +CRANE.HOIST.AH.Pmech;
CT1.P1m = +CRANE.TRAVEL.CT.Pmech;
LT1.P1m = +CRANE.TRAVEL.LT.Pmech;

//============= COMMON INPUTS =================
MH1.S1 = +document.getElementById("mh-s1").value;
AH1.S1 = +document.getElementById("ah-s1").value;
CT1.S1 = +document.getElementById("ct-s1").value;
LT1.S1 = +document.getElementById("lt-s1").value;

MH1.N1 = +CRANE.HOIST.MH.finalRPM;
AH1.N1 = +CRANE.HOIST.AH.finalRPM;
CT1.N1 = +CRANE.TRAVEL.CTE.finalRPM;
LT1.N1 = +CRANE.TRAVEL.LTE.finalRPM;


//============= TORQUE CALCULATION =================

// Electrical
MH1.T1 = (975 * MH1.P1 * MH1.S1) / MH1.N1;
AH1.T1 = (975 * AH1.P1 * AH1.S1) / AH1.N1;
CT1.T1 = (975 * CT1.P1 * CT1.S1) / CT1.N1;
LT1.T1 = (975 * LT1.P1 * LT1.S1) / LT1.N1;

// Mechanical
MH1.T1m = (975 * MH1.P1m * MH1.S1) / MH1.N1;
AH1.T1m = (975 * AH1.P1m * AH1.S1) / AH1.N1;
CT1.T1m = (975 * CT1.P1m * CT1.S1) / CT1.N1;
LT1.T1m = (975 * LT1.P1m * LT1.S1) / LT1.N1;


//============= DISPLAY TORQUE =================

document.getElementById("mh_T1").innerHTML = MH1.T1.toFixed(2);
document.getElementById("ah_T1").innerHTML = AH1.T1.toFixed(2);
document.getElementById("ct_T1").innerHTML = CT1.T1.toFixed(2);
document.getElementById("lt_T1").innerHTML = LT1.T1.toFixed(2);

document.getElementById("mh_T1m").innerHTML = MH1.T1m.toFixed(2);
document.getElementById("ah_T1m").innerHTML = AH1.T1m.toFixed(2);
document.getElementById("ct_T1m").innerHTML = CT1.T1m.toFixed(2);
document.getElementById("lt_T1m").innerHTML = LT1.T1m.toFixed(2);


//============= OPERATION TYPE =================

let mhOp = document.getElementById("mh-op").value;
let ahOp = document.getElementById("ah-op").value;
let ctOp = document.getElementById("ct-op").value;
let ltOp = document.getElementById("lt-op").value;


//============= DRUM SELECTION =================

// Electrical
let mhDrum = selectDrumDia(MH1.T1, mhOp);
let ahDrum = selectDrumDia(AH1.T1, ahOp);
let ctDrum = selectDrumDia(CT1.T1, ctOp);
let ltDrum = selectDrumDia(LT1.T1, ltOp);

let mhDrumT = selectDrumTorque(MH1.T1, mhOp);
let ahDrumT = selectDrumTorque(AH1.T1, ahOp);
let ctDrumT = selectDrumTorque(CT1.T1, ctOp);
let ltDrumT = selectDrumTorque(LT1.T1, ltOp);


// Mechanical
let mhDrumm = selectDrumDia(MH1.T1m, mhOp);
let ahDrumm = selectDrumDia(AH1.T1m, ahOp);
let ctDrumm = selectDrumDia(CT1.T1m, ctOp);
let ltDrumm = selectDrumDia(LT1.T1m, ltOp);

let mhDrumTm = selectDrumTorque(MH1.T1m, mhOp);
let ahDrumTm = selectDrumTorque(AH1.T1m, ahOp);
let ctDrumTm = selectDrumTorque(CT1.T1m, ctOp);
let ltDrumTm = selectDrumTorque(LT1.T1m, ltOp);


//============= OUTPUT =================

// Dia
document.getElementById("mh_drum").innerHTML = mhDrum;
document.getElementById("ah_drum").innerHTML = ahDrum;
document.getElementById("ct_drum").innerHTML = ctDrum;
document.getElementById("lt_drum").innerHTML = ltDrum;

document.getElementById("mh_drumm").innerHTML = mhDrumm;
document.getElementById("ah_drumm").innerHTML = ahDrumm;
document.getElementById("ct_drumm").innerHTML = ctDrumm;
document.getElementById("lt_drumm").innerHTML = ltDrumm;


// Torque rating
document.getElementById("mh_drumt").innerHTML = mhDrumT;
document.getElementById("ah_drumt").innerHTML = ahDrumT;
document.getElementById("ct_drumt").innerHTML = ctDrumT;
document.getElementById("lt_drumt").innerHTML = ltDrumT;

document.getElementById("mh_drumtm").innerHTML = mhDrumTm;
document.getElementById("ah_drumtm").innerHTML = ahDrumTm;
document.getElementById("ct_drumtm").innerHTML = ctDrumTm;
document.getElementById("lt_drumtm").innerHTML = ltDrumTm;


// ================= READ MOTORS =================

let mhMotors = +CRANE.HOIST.MH.MO;
let ahMotors = +CRANE.HOIST.AH.MO;
let ctMotors = +CRANE.TRAVEL.CT.n;
let ltMotors = +CRANE.TRAVEL.LT.n;


// ================= LOAD =================

let mhLoad = +document.getElementById("mh_q").value;
let ahLoad = +document.getElementById("ah_q").value;


// ================= BRAKES =================

let mhBrakes = getBrakeCount(mhLoad, mhMotors, 'HOIST');
let ahBrakes = getBrakeCount(ahLoad, ahMotors, 'HOIST');

let ctBrakes = getBrakeCount(0, ctMotors, 'TRAVEL');
let ltBrakes = getBrakeCount(0, ltMotors, 'TRAVEL');

document.getElementById("mh_br").innerHTML = mhBrakes;
document.getElementById("ah_br").innerHTML = ahBrakes;
document.getElementById("ct_br").innerHTML = ctBrakes;
document.getElementById("lt_br").innerHTML = ltBrakes;


}

    //======================== WIRE ROPE CALCULATION ============

const RopeTable = {
    "FC": {   // Fiber Core
        "1570": {
            8:33, 9:42, 10:52, 11:63, 12:75, 13:88, 14:102,
            16:133,18:168,20:207,22:251,24:298,26:350,28:406,
            32:530,36:671,38:748,40:829,44:1003,48:1193,52:1401,
            56:1624,60:1865,64:2121,68:2395,70:2538,72:2688,
            76:2982,80:3115,82:3655,86:3831,88:4011,92:4384
        },
        "1770": {
            8:37, 9:47, 10:58, 11:71, 12:84, 13:99, 14:114,
            16:149,18:189,20:234,22:283,24:336,26:395,28:458,
            32:593,36:757,38:843,40:934,44:1130,48:1345,52:1579,
            56:1831,60:2102,64:2392,68:2700,70:2861,72:3027,
            76:3373,80:3737,82:4120,86:4319,88:4522,92:4942
        },
        "1960": {
            8:41, 9:52, 10:65, 11:78, 12:93, 13:109, 14:127,
            16:166,18:209,20:259,22:313,24:372,26:437,28:507,
            32:662,36:838,38:934,40:1035,44:1252,48:1490,52:1748,
            56:2028,60:2328,64:2648,68:2990,70:3168,72:3352,
            76:3735,80:4138,82:4562,86:4782,88:5007,92:5473
        }
    },

    "SC": {   // Steel Core
        "1570": {
            8:36, 9:45, 10:56, 11:68, 12:81, 13:95, 14:110,
            16:143,18:181,20:224,22:274,24:322,26:377,28:439,
            32:575,36:705,38:808,40:895,44:1083,48:1289,52:1513,
            56:1754,60:2014,64:2291,68:2587,70:2741,72:2900,
            76:3231,80:3580,82:3947,86:4137,88:4332,92:4735
        },
        "1770": {
            8:40, 9:51, 10:63, 11:76, 12:91, 13:107, 14:124,
            16:161,18:204,20:252,22:308,24:363,26:426,28:494,
            32:646,36:817,38:911,40:1009,44:1221,48:1453,52:1705,
            56:1978,60:2270,64:2583,68:2916,70:3093,72:3269,
            76:3633,80:4036,82:4450,86:4664,88:4884,92:5338
        },
        "1960": {
            8:45, 9:57, 10:70, 11:85, 12:101, 13:118, 14:137,
            16:179,18:226,20:279,22:338,24:402,26:472,28:548,
            32:715,36:905,38:1008,40:1117,44:1352,48:1612,52:1888,
            56:2190,60:2514,64:2860,68:3229,70:3422,72:3620,
            76:4034,80:4469,82:4928,86:5165,88:5408,92:5911
        }
    }
};
// =====================================================
// SELECT SHEAVE
// =====================================================

function selectSheave(requiredDia, ropeDia) {

    requiredDia = Number(requiredDia);
    ropeDia = Number(ropeDia);

    if (!requiredDia || !ropeDia) {
        return null;
    }


    // -------------------------------------------------
    // STEP 1
    // Sirf wahi sheaves lo jisme rope dia available hai
    // -------------------------------------------------

    const ropeMatchedSheaves = recommendedSheaveData.filter(item =>
        item.ropes.includes(ropeDia)
    );


    if (ropeMatchedSheaves.length === 0) {
        return null;
    }


    // -------------------------------------------------
    // STEP 2
    // Required diameter se choti sheave reject
    // -------------------------------------------------

    const validSheaves = ropeMatchedSheaves.filter(item =>
        item.dia >= requiredDia
    );


    if (validSheaves.length === 0) {
        return null;
    }


    // -------------------------------------------------
    // STEP 3
    // Sabse choti valid / nearest higher sheave select
    // -------------------------------------------------

    validSheaves.sort((a, b) => a.dia - b.dia);


    return validSheaves[0];
}

// =====================================================
// RECOMMENDED SHEAVE DATA BASED ON ROPE DIA
// =====================================================

const recommendedSheaveData = [
    { ropes: [8, 10], designation: "200",  dia: 200 },
    { ropes: [10, 12, 14], designation: "250", dia: 250 },
    { ropes: [10], designation: "315A", dia: 315 },
    { ropes: [16, 18], designation: "315B", dia: 315 },
    { ropes: [12], designation: "400A", dia: 400 },
    { ropes: [20, 22, 24], designation: "400B", dia: 400 },
    { ropes: [14, 16], designation: "500A", dia: 500 },
    { ropes: [24, 26, 28], designation: "500B", dia: 500 },
    { ropes: [18, 20], designation: "630A", dia: 630 },
    { ropes: [30, 32, 36], designation: "630B", dia: 630 },
    { ropes: [22, 24], designation: "710A", dia: 710 },
    { ropes: [40], designation: "710B", dia: 710 },
    { ropes: [26], designation: "800", dia: 800 },
    { ropes: [28, 30], designation: "900", dia: 900 },
    { ropes: [32], designation: "1000", dia: 1000 },
    { ropes: [36], designation: "1120", dia: 1120 }
];



// =====================================================
// UPDATE RECOMMENDED SHEAVE
// =====================================================

function updateRecommendedSheave() {

    // =================================================
    // MH DATA
    // =================================================

    const mhRope = Number(CRANE.ROPE.MH.finalDia);

    const mhMainRequired =
        Number(CRANE.SHEAVE.MH.D);

    const mhEqRequired =
        Number(CRANE.SHEAVE.MH.De);


    // =================================================
    // AH DATA
    // =================================================

    const ahRope = Number(CRANE.ROPE.AH.finalDia);

    const ahMainRequired =
        Number(CRANE.SHEAVE.AH.D);

    const ahEqRequired =
        Number(CRANE.SHEAVE.AH.De);


    // =================================================
    // SELECT SHEAVES
    // =================================================

    const mhMainSheave =
        selectSheave(mhMainRequired, mhRope);

    const mhEqSheave =
        selectSheave(mhEqRequired, mhRope);


    const ahMainSheave =
        selectSheave(ahMainRequired, ahRope);

    const ahEqSheave =
        selectSheave(ahEqRequired, ahRope);


    // =================================================
    // DISPLAY MH MAIN
    // =================================================

    displaySelectedSheave(
        mhMainSheave,
        mhRope,
        "mh_main_sheave_designation",
        "mh_main_sheave_dia",
        "mh_main_sheave_pcd"
    );


    // =================================================
    // DISPLAY MH EQUALIZER
    // =================================================

    displaySelectedSheave(
        mhEqSheave,
        mhRope,
        "mh_eq_sheave_designation",
        "mh_eq_sheave_dia",
        "mh_eq_sheave_pcd"
    );


    // =================================================
    // DISPLAY AH MAIN
    // =================================================

    displaySelectedSheave(
        ahMainSheave,
        ahRope,
        "ah_main_sheave_designation",
        "ah_main_sheave_dia",
        "ah_main_sheave_pcd"
    );


    // =================================================
    // DISPLAY AH EQUALIZER
    // =================================================

    displaySelectedSheave(
        ahEqSheave,
        ahRope,
        "ah_eq_sheave_designation",
        "ah_eq_sheave_dia",
        "ah_eq_sheave_pcd"
    );

}
// =====================================================
// DISPLAY SELECTED SHEAVE
// =====================================================

function displaySelectedSheave(
    sheave,
    ropeDia,
    designationId,
    diaId,
    pcdId
) {

    const designationEl = el(designationId);
    const diaEl = el(diaId);
    const pcdEl = el(pcdId);


    // ================================================
    // SHEAVE AVAILABLE
    // ================================================

    if (sheave) {

        designationEl.innerHTML =
            sheave.designation;

        diaEl.innerHTML =
            sheave.dia.toFixed(0);

        const pcd =
            sheave.dia + ropeDia;

        pcdEl.innerHTML =
            pcd.toFixed(0);

    }


    // ================================================
    // SHEAVE NOT AVAILABLE
    // ================================================

    else {

        designationEl.innerHTML =
            "Not Available";

        diaEl.innerHTML =
            "—";

        pcdEl.innerHTML =
            "—";
    }
}

/* ============================================================
   GET ROPE DIAMETER ≥ Required Breaking Load
   ============================================================ */
function getRopeDia(core, grade, BL_required) {

    let tbl = RopeTable[core][grade];

    // Loop diameter ascending
    for (let dia of Object.keys(tbl).map(Number).sort((a,b)=>a-b)) {
        if (tbl[dia] >= BL_required) return dia;
    }
    return "No Match";
}
const PowerformTable = {

    // =====================================================
    // POWER FORM 6/6P
    // =====================================================
    "6/6P": {

        "1770": {
            // Rope Diameter : Minimum Breaking Force (kN)
            10: 75.4,
            11: 91,
            12: 108,
			13: 127,
            14: 148,
			15: 170,
            16: 193,
			17: 218,
			18: 244,
            19: 272,
            20: 302,
            22: 365,
			24: 434,
			25: 484,
			26: 510,
			28: 591,
			30: 707,
			32: 764,
			34: 860,
			35: 910,
			36: 967,
			38: 1073,
			40: 1196,
			42: 1319,
			44: 1442,
			46: 1582,
			48: 1721,
			50: 1868,
			52: 2016,
			54: 2172,
			56: 2335,
			58: 2508,
			60: 2712
        },

        "1960": {
            // Rope Diameter : Minimum Breaking Force (kN)
            10: 83.5,
            11: 101,
            12: 120,
			13: 141,
            14: 163,
			15: 188,
            16: 214,
			17: 241,
			18: 270,
            19: 301,
            20: 334,
            22: 404,
			24: 481,
			25: 522,
			26: 564,
			28: 654,
			30: 751,
			32: 846,
			34: 953,
			35: 1007,
			36: 1071,
			38: 1189,
			40: 1325,
			42: 1461,
			44: 1597,
			46: 1751,
			48: 1906,
			50: 2069,
			52: 2232,
			54: 2405,
			56: 2586,
			58: 2777,
			60: 3004
        },

        // 6/6P me 2160 data tumhare diye table me available nahi hai
        "2160": {
            // Rope Diameter : Minimum Breaking Force (kN)
            10: 92,
            11: 111,
            12: 132,
			13: 155,
            14: 180,
			15: 207,
            16: 236,
			17: 266,
			18: 298,
            19: 332,
            20: 368,
            22: 445,
			24: 530,
			25: 575,
			26: 622,
			28: 721,
			30: 828,
			32: 932,
			34: 1050,
			35: 1110,
			36: 1180,
			38: 1310,
			40: 1460,
			42: 1610,
			44: 1760,
			46: 1930,
			48: 2100,
			50: 2280,
			52: 2460,
			54: 2650,
			56: 2850,
			58: 3060,
			60: 3310
        },
    },


    // =====================================================
    // POWER FORM 8/8P
    // =====================================================
    "8/8P": {

        // 8/8P me 1770 available nahi hai
        "1770": {},

        "1960": {
            // Rope Diameter : Minimum Breaking Force (kN)
            10: 87.8,
            11: 106,
            12: 126,
			13: 148,
            14: 172,
			15: 198,
            16: 225,
			17: 254,
			18: 284,
            19: 317,
            20: 351,
            22: 425,
			24: 506,
			26: 594,
			28: 688,
			30: 790,
			32: 899,
			34: 1013,
			36: 1138,
			38: 1268,
			40: 1405,
			42: 1535,
			44: 1700,
			46: 1858,
			48: 2023,
			50: 2200,
			52: 2374
			
        },

        "2160": {
            // Rope Diameter : Minimum Breaking Force (kN)
            10: 94,
            11: 114,
            12: 135,
			13: 159,
            14: 184,
			15: 211,
            16: 241,
			17: 272,
			18: 304,
            19: 339,
            20: 376,
            22: 455,
			24: 541,
			26: 635,
			28: 737,
			30: 846,
			32: 960,
			34: 1083,
			36: 1218,
			38: 1357,
			40: 1503,
			42: 1651,
			44: 1819,
			46: 1985,
			48: 2162,
			50: 2349,
			52: 2541
        }
    }

};
function getRecommendedRopeDia(table, requiredBL) {

    if (!table || !requiredBL) {
        return null;
    }


    const diameters =
        Object.keys(table)
            .map(Number)
            .sort((a, b) => a - b);


    for (const dia of diameters) {

        const mbf =
            Number(table[dia]);


        if (mbf >= requiredBL) {

            return {
                dia: dia,
                mbf: mbf
            };

        }

    }


    return null;
}
function getRopeStandard(prefix) {

    const selected =
        document.querySelector(
            `input[name="${prefix.toLowerCase()}_rope_standard"]:checked`
        );

    return selected ? selected.value : "IS";
}
function updatePowerformGrades(prefix) {

    const p = prefix.toLowerCase();

    const type =
        document.getElementById(
            `${p}_powerform_type`
        ).value;

    const gradeSelect =
        document.getElementById(
            `${p}_powerform_grade`
        );

    if (!gradeSelect) return;

    // Current selected grade save karo
    const previousGrade = gradeSelect.value;

    // Dropdown clear
    gradeSelect.innerHTML = "";

    // Available grades
    const grades =
        Object.keys(
            PowerformTable[type] || {}
        );

    grades.forEach(grade => {

        const option =
            document.createElement("option");

        option.value = grade;
        option.textContent = grade;

        gradeSelect.appendChild(option);

    });

    // Agar previous grade naye type me available hai
    // to wahi selected rahega
    if (grades.includes(previousGrade)) {

        gradeSelect.value = previousGrade;

    } else if (grades.length > 0) {

        // Naye type ka first available grade
        gradeSelect.value = grades[0];

    }
}
function updateRopeRecommendation(prefix) {

    const isMH = prefix === "MH";

    const rope =
        isMH
            ? CRANE.ROPE.MH
            : CRANE.ROPE.AH;


    const p = prefix.toLowerCase();


    // =========================
    // STANDARD
    // =========================

    const standard =
        getRopeStandard(prefix);


    // =========================
    // POWERFORM OPTIONS
    // =========================

    const powerformBox =
        document.getElementById(
            `${p}_powerform_options`
        );


    if (standard === "POWERFORM") {

    powerformBox.style.display = "block";

    updatePowerformGrades(prefix);

} else {

    powerformBox.style.display = "none";

}


    // =========================
    // FALLS
    // =========================

    const falls =
        isMH
            ? Number(document.getElementById("F").value)
            : Number(document.getElementById("f").value);


    document.getElementById(
        `${p}_rope_falls`
    ).innerHTML = falls || "—";


    // =========================
    // REQUIRED BREAKING LOAD
    // =========================

    const requiredBL =
        Number(rope.BL);


    document.getElementById(
        `${p}_rope_required_bl`
    ).innerHTML =
        requiredBL
            ? requiredBL.toFixed(2)
            : "—";


    // =========================
    // SELECT DATABASE
    // =========================

    let table = null;


    if (standard === "IS") {

        table =
            RopeTable[
                rope.core
            ]?.[
                rope.grade
            ];

    }


    if (standard === "POWERFORM") {

        const type =
            document.getElementById(
                `${p}_powerform_type`
            ).value;


        const grade =
            document.getElementById(
                `${p}_powerform_grade`
            ).value;


        table =
            PowerformTable[
                type
            ]?.[
                grade
            ];

    }


    // =========================
    // RECOMMENDED ROPE
    // =========================

    const recommendation =
        getRecommendedRopeDia(
            table,
            requiredBL
        );


    if (recommendation) {

        document.getElementById(
            `${p}_rope_recommended_dia`
        ).innerHTML =
            recommendation.dia.toFixed(0);


        document.getElementById(
            `${p}_rope_recommended_mbf`
        ).innerHTML =
            recommendation.mbf.toFixed(2);

    } else {

        document.getElementById(
            `${p}_rope_recommended_dia`
        ).innerHTML =
            "Not Available";


        document.getElementById(
            `${p}_rope_recommended_mbf`
        ).innerHTML =
            "—";

    }


    // =========================
    // MANUFACTURER DIA
    // =========================

    const manuDia =
        isMH
            ? Number(document.getElementById("mh_diamanu").value)
            : Number(document.getElementById("ah_diamanu").value);


    document.getElementById(
        `${p}_rope_manufacturer_dia`
    ).innerHTML =
        manuDia
            ? manuDia.toFixed(0) + " mm"
            : "Not Given";


    // =========================
    // MANUFACTURER MBF
    // =========================

    let manufacturerMBF = null;


    if (manuDia && table && table[manuDia]) {

        manufacturerMBF =
            table[manuDia];

    }


    document.getElementById(
        `${p}_rope_manufacturer_mbf`
    ).innerHTML =
        manufacturerMBF !== null
            ? manufacturerMBF.toFixed(2)
            : "Not Available";
	// =========================
// MANUFACTURER STATUS
// =========================

updateManufacturerRopeStatus(
    prefix,
    requiredBL,
    manufacturerMBF);

}
function updateManufacturerRopeStatus(
    prefix,
    requiredBL,
    manufacturerMBF
) {

    const id =
        prefix.toLowerCase() +
        "_rope_manufacturer_status";


    const element =
        document.getElementById(id);


    if (!element) return;


    if (!manufacturerMBF) {

        element.innerHTML =
            `<span class="rope-status-neutral">
                Manufacturer rope not selected
            </span>`;

        return;
    }


    if (manufacturerMBF >= requiredBL) {

        element.innerHTML =
            `<span class="rope-status-ok">
                ✓ Manufacturer rope satisfies required breaking load
            </span>`;

    } else {

        element.innerHTML =
            `<span class="rope-status-warning">
                ⚠ Manufacturer rope is below required breaking load
            </span>`;

    }

}

function calcRope() {

    let MH = CRANE.ROPE.MH;
    let AH = CRANE.ROPE.AH;

    // === INPUTS MAIN HOIST ===
    MH.Q  = +mh_q.value;
    MH.Q1 = +mh_q1.value;
    MH.Qt = +mh_q2.value;
    MH.F  = +F.value;
    MH.Zp = +CRANE.HOIST.MH.Zp;
    MH.core  = mh_core.value;
    MH.grade = mh_grade.value;

    // === INPUTS AUX HOIST ===
    AH.Q  = +ah_q.value;
    AH.Q1 = +ah_q1.value;
    AH.Qt = +ah_q2.value;
    AH.F  = +f.value;
    AH.Zp = +CRANE.HOIST.AH.Zp;
    AH.core  = ah_core.value;
    AH.grade = ah_grade.value;

    // === CALCULATIONS ===
    MH.M  = MH.Q + MH.Q1 + MH.Qt;
    AH.M  = AH.Q + AH.Q1 + AH.Qt;

    MH.S  = MH.M / MH.F;
    AH.S  = AH.M / AH.F;

    MH.Fo = MH.S * MH.Zp;
    AH.Fo = AH.S * AH.Zp;

    MH.BL = MH.Fo * 9.81;
    AH.BL = AH.Fo * 9.81;

   
    // === OUTPUTS ===
    mh_W2.innerHTML = MH.M.toFixed(2);
    ah_w2.innerHTML = AH.M.toFixed(2);

    mh_F2.innerHTML = MH.S.toFixed(2);
    ah_F2.innerHTML = AH.S.toFixed(2);

    mh_B2.innerHTML = MH.Fo.toFixed(2);
    ah_b2.innerHTML = AH.Fo.toFixed(2);

    mh_L2.innerHTML = MH.BL.toFixed(2);
    ah_l2.innerHTML = AH.BL.toFixed(2);

    mh_dia.innerHTML = MH.dia;
    ah_dia.innerHTML = AH.dia;
 
    

   
    // === SELECT ROPE DIAMETER FROM TABLE === 
MH.dia = getRopeDia(MH.core, MH.grade, MH.BL); 
AH.dia = getRopeDia(AH.core, AH.grade, AH.BL); 
// ================= FINAL ROPE DIA =================
// === OUTPUT ===

mh_dia.innerHTML =
    MH.dia || "Not Available";

ah_dia.innerHTML =
    AH.dia || "Not Available";
	
// Manufacturer value
let mh_manu_dia = +el('mh_diamanu').value || 0;
let ah_manu_dia = +el('ah_diamanu').value || 0;

// Final Diameter
MH.finalDia = mh_manu_dia > 0 ? mh_manu_dia : MH.dia;
AH.finalDia = ah_manu_dia > 0 ? ah_manu_dia : AH.dia;

// ================= RECOMMENDED ROPE =================

updateRopeRecommendation("MH");

updateRopeRecommendation("AH");
}

function updateCrc() {

    let mhSelect = document.getElementById("ropeConst_MH");
    let ahSelect = document.getElementById("ropeConst_AH");

    document.getElementById("Crc_MH").value = mhSelect.value;
    document.getElementById("Crc_AH").value = ahSelect.value;
}
document.addEventListener("DOMContentLoaded", function () {
    updateCrc();
	updateRopeDrumStrength();
});
function calcSheave(){
     let MH = CRANE.SHEAVE.MH;
     let AH = CRANE.SHEAVE.AH;
     // GET INPUTS (MAIN HOIST)
    MH.d  = +CRANE.ROPE.MH.finalDia;
    MH.Ls = +CRANE.HOIST.MH.Ls;
    MH.Le = +CRANE.HOIST.MH.Le;
    MH.Crc = +document.getElementById("Crc_MH").value || 0;
   

    
    // GET INPUTS (AUX HOIST)
    AH.d1  = +CRANE.ROPE.AH.finalDia;
    AH.Ls1 = +CRANE.HOIST.AH.Ls;
    AH.Le1 = +CRANE.HOIST.AH.Le;
    AH.Crc = +document.getElementById("Crc_AH").value || 0;

  
    // ============ CALCULATIONS ============
    //Main Sheave at Axis Dm 
   
    MH.D = MH.d * MH.Ls * MH.Crc;
    AH.D = AH.d1 * AH.Ls1 * AH.Crc;

    //Main Sheave Bottom Dm'
    
    MH.DM = MH.D - MH.d;
    AH.DM = AH.D - AH.d1;

    //Equalizer Sheave Axis De
    MH.De = MH.Le  * MH.d  * MH.Crc;
    AH.De = AH.Le1 * AH.d1 * AH.Crc;

   
     //Equalizer Sheave Bottom De' 
     
     MH.DE = MH.De  - MH.d;
     AH.DE = AH.De - AH.d1;
     
      // ============ DISPLAY ============

    document.getElementById("mh_Dm").innerHTML = MH.D.toFixed(0);
    document.getElementById("ah_Dm").innerHTML = AH.D.toFixed(0);

    document.getElementById("mh_Dmm").innerHTML = MH.DM.toFixed(0);
    document.getElementById("ah_Dmm").innerHTML = AH.DM.toFixed(0);

    document.getElementById("mh_De").innerHTML = MH.De.toFixed(0);
    document.getElementById("ah_De").innerHTML = AH.De.toFixed(0);

    document.getElementById("mh_Dee").innerHTML = MH.DE.toFixed(0);
    document.getElementById("ah_Dee").innerHTML = AH.DE.toFixed(0);
    
    updateRecommendedSheave();
    updateFinalSheavePCD();

    
}
function updateFinalSheavePCD() {

  // ===== Manufacturer Input (if any)
  let mhManu = +document.getElementById("DPCD").value;
  let ahManu = +document.getElementById("dpcd").value;

  // ===== Calculated Main Sheave (Dm)
  let mhDm = +document.getElementById("mh_Dm").innerText;
  let ahDm = +document.getElementById("ah_Dm").innerText;

  // ===== Final Selection
  let mhFinal = (mhManu > 0) ? mhManu : mhDm;
  let ahFinal = (ahManu > 0) ? ahManu : ahDm;

  if (!mhFinal || !ahFinal) return;

  // ===== Show in Selected PCD row
  document.getElementById("mh_Dpp").innerText = mhFinal.toFixed(2);
  document.getElementById("ah_Dpp").innerText = ahFinal.toFixed(2);
}

//============CALCULATE ROPE DRUM DAI============
//===============================================
   
 function calcDrumDia(){

let MH= CRANE.DRUM_DIA.MH; 
let AH= CRANE.DRUM_DIA.AH;

MH.d  = +CRANE.ROPE.MH.finalDia;
MH.Ld = +CRANE.HOIST.MH.Ld;
MH.Crc = +document.getElementById("Crc_MH").value || 1;

AH.d  = + CRANE.ROPE.AH.finalDia;
AH.Ld = +CRANE.HOIST.AH.Ld;
AH.Crc = +document.getElementById("Crc_AH").value || 1;

// Drum Dia
MH.Dd = MH.Ld * MH.d * MH.Crc;
AH.Dd = AH.Ld * AH.d * AH.Crc;

// Groove bottom
MH.DdB = MH.Dd - MH.d;
AH.DdB = AH.Dd - AH.d;

// Shell OD
MH.Drd = MH.DdB + 2 * (0.4 * MH.d);
AH.Drd = AH.DdB + 2 * (0.4 * AH.d);





// Show
document.getElementById("mh_DA").innerHTML  = MH.Dd.toFixed(0);
document.getElementById("ah_da").innerHTML  = AH.Dd.toFixed(0);

document.getElementById("mh_DG").innerHTML  = MH.DdB.toFixed(0);
document.getElementById("ah_dg").innerHTML  = AH.DdB.toFixed(0);

document.getElementById("mh_SOD").innerHTML = MH.Drd.toFixed(0);
document.getElementById("ah_sod").innerHTML = AH.Drd.toFixed(0);

// ================= FINAL DRUM DIA =================

// Manufacturer Drum Diameter (mm)
let mh_manu_dia = +document.getElementById("DPCD").value || 0;
let ah_manu_dia = +document.getElementById("dpcd").value || 0;

// Final Drum Diameter (m)
MH.finalDia = mh_manu_dia > 0
    ? mh_manu_dia / 1000
    : MH.Dd / 1000;

AH.finalDia = ah_manu_dia > 0
    ? ah_manu_dia / 1000
    : AH.Dd / 1000;

}


 //============CALCULATE ROPE DRUM LENGTH============
//===================================================

function calcDrumLen(){

    let MH = CRANE.DRUM_LEN.MH;
    let AH = CRANE.DRUM_LEN.AH;

    // ================= INPUTS =================

    MH.L  = +document.getElementById("HL").value;
    MH.F  = +CRANE.ROPE.MH.F;
    MH.k  = +document.getElementById("DFk").value;
    MH.D  = +CRANE.DRUM_DIA.MH.finalDia;
    MH.p  = +document.getElementById("P").value;
    MH.d2 = +document.getElementById("D2").value;
    MH.d3 = +document.getElementById("D3").value;
    MH.em = +document.getElementById("em").value;

    AH.L  = +document.getElementById("hl").value;
    AH.F  = +CRANE.ROPE.AH.F;
    AH.k  = +document.getElementById("dfk").value;
    AH.D  = +CRANE.DRUM_DIA.AH.finalDia;
    AH.p  = +document.getElementById("p").value;
    AH.d2 = +document.getElementById("d2").value;
    AH.d3 = +document.getElementById("d3").value;
    AH.ea = +document.getElementById("ea").value;


    // ================= CALCULATIONS =================

    // No. of falls per rope drum
    MH.gk = MH.F / MH.k;
    AH.gk = AH.F / AH.k;

    // Active grooves
    MH.g = Math.ceil(
        (MH.L * MH.gk) / (2 * Math.PI * MH.D)
    );

    AH.g = Math.ceil(
        (AH.L * AH.gk) / (2 * Math.PI * AH.D)
    );

    // Total grooves
    MH.G = MH.g + MH.em;
    AH.G = AH.g + AH.ea;

    // Grooved distance
    MH.d1 = 2 * MH.G * MH.p;
    AH.d1 = 2 * AH.G * AH.p;

    // Total calculated length
    MH.TD = MH.d1 + MH.d2 + MH.d3;
    AH.TD = AH.d1 + AH.d2 + AH.d3;


    // ================= DISPLAY CALCULATED =================

    document.getElementById("mh_AG").innerHTML = MH.g.toFixed(0);
    document.getElementById("ah_ag").innerHTML = AH.g.toFixed(0);
    document.getElementById("mh_TG").innerHTML = MH.G.toFixed(0);
    document.getElementById("ah_tg").innerHTML = AH.G.toFixed(0);
    document.getElementById("mh_GD").innerHTML = MH.d1.toFixed(0);
    document.getElementById("ah_gd").innerHTML = AH.d1.toFixed(0);
    document.getElementById("mh_TD").innerHTML = MH.TD.toFixed(0);
    document.getElementById("ah_td").innerHTML = AH.TD.toFixed(0);


    // ================= FINAL DRUM LENGTH =================

    // Manufacturer value
    let mh_manu_L = +document.getElementById("mh_TDs").value || 0;
    let ah_manu_L = +document.getElementById("ah_tds").value || 0;
    // Final Length
    MH.finalL = mh_manu_L > 0 ? mh_manu_L : MH.TD;
    AH.finalL = ah_manu_L > 0 ? ah_manu_L : AH.TD;

}
const motorFrameData = {
    0.18: {2: "63",4: "63",6: "71"},
    0.25: {2: "63",4: "71"},
    0.37: {2: "71",4: "71",6: "80",8: "90S"},
    0.55: {2: "80",4: "80",6: "80",8: "90L"},
    0.75: {2: "80",4: "80",6: "90S",8: "100L"},
	1.10: {2: "80",4: "90S",6: "90L",8: "100L"},
	1.50: {2: "90S",4: "90L",6: "100L",8: "112M"},
	2.20: {2: "90L",4: "100L",6: "112M",8: "132S"},
	3.70: {2: "100L",4: "112M",6: "132S",8: "132M"},
	5.50: {2: "112M",4: "132S",6: "132M"},
	7.5:  {2: "132S",4: "132M"},
	9.30: {2: "160M",4: "160M",6: "160L",8: "180M"},
	11  : {2: "160M",4: "160M",6: "160L",8: "180L"},
	15  : {2: "160M",4: "160L",6: "180L",8: "200L"},
	18.5: {2: "160L",4: "180M",6: "200L",8: "225S"},
	22  : {2: "180M",4: "180L",6: "200L",8: "225M"},
	30  : {2: "200L",4: "200L",6: "225M",8: "250M"},
	37  : {2: "200L",4: "225S",6: "250M",8: "280S"},
	45  : {2: "225M",4: "225M",6: "280S",8: "280M"},
	55  : {2: "250M",4: "250M",6: "280M",8: "315S"},
	75  : {2: "280S",4: "280S",6: "315S",8: "315M"},
	90  : {2: "280M",4: "280M",6: "315M",8: "315L"},
	110 : {2: "315S",4: "315S",6: "315M",8: "315L"},
	132 : {2: "315M",4: "315M",6: "315L",8: "315L"},
	150 : {2: "315L",4: "315M",6: "315L",8: "355L"},
	160 : {2: "315L",4: "315L",6: "315L",8: "355L"},
	180 : {2: "315L",4: "315L",6: "355L",8: "355LX"},
	200 : {2: "315L",4: "315L",6: "355LX",8: "355LX"},
	225 : {2: "355L",4: "355L",6: "355LX",8: "355LX"},
	250 : {2: "355LX",4: "355L",6: "355LX"},
	275 : {6: "355LX"},
	315 : {2: "355LX",4: "355LX"}
	
};

// =====================================================
// FRAME SIZE LOOKUP
// Exact → Lower + Higher → Not Available
// =====================================================

function getFrameRecommendation(kw, pole) {

    kw = Number(kw);
    pole = Number(pole);

    const available = [];

    // Same pole ke available motor data collect karo
    for (const motorKW in motorFrameData) {

        const frame = motorFrameData[motorKW][pole];

        if (frame) {
            available.push({
                kw: Number(motorKW),
                frame: frame
            });
        }
    }

    // KW ascending order
    available.sort((a, b) => a.kw - b.kw);

    // -------------------------------------------------
    // EXACT MATCH
    // -------------------------------------------------

    const exact = available.find(item => item.kw === kw);

    if (exact) {

        return {
            status: "exact",
            frame: exact.frame,
            actualKW: exact.kw,
            lower: null,
            higher: null
        };
    }

    // -------------------------------------------------
    // JUST LOWER
    // -------------------------------------------------

    const lowerCandidates = available.filter(item => item.kw < kw);

    const lower =
        lowerCandidates.length > 0
            ? lowerCandidates[lowerCandidates.length - 1]
            : null;

    // -------------------------------------------------
    // JUST HIGHER
    // -------------------------------------------------

    const higherCandidates = available.filter(item => item.kw > kw);

    const higher =
        higherCandidates.length > 0
            ? higherCandidates[0]
            : null;

    // -------------------------------------------------
    // NO DATA AT ALL
    // -------------------------------------------------

    if (!lower && !higher) {

        return {
            status: "not_available",
            frame: "",
            actualKW: kw,
            lower: null,
            higher: null
        };
    }

    // -------------------------------------------------
    // NOT EXACT → RECOMMENDATION
    // -------------------------------------------------

    return {
        status: "recommended",
        frame: "",
        actualKW: kw,
        lower: lower,
        higher: higher
    };
}
// Motor Ratings List
const motorRatings = [
    0.18,0.25,0.37,0.55,0.75,1.10,1.50,2.20,3.70,5.50,7.50,9.30,11,15,18.5,22,30,
    37,45,55,75,90,110,132,150,160,180,200,225,250,275,315
];

// ================= MANUFACTURER OVERRIDE =================
function finalKW(autoKW, manuKW){
    manuKW = parseFloat(manuKW);
    if(manuKW > 0) return manuKW;
    return autoKW;
}

function finalRPM(autoRPM, manuRPM){
    manuRPM = parseFloat(manuRPM);
    if(manuRPM > 0) return manuRPM;
    return autoRPM;
}


// Pole to RPM Table
const poleRPM = {2:3000, 4:1500, 6:1000, 8:750, 10:600, 12:500};





// Update RPM displays for both normal and emergency where applicable
function updateRPM(prefix){
    // prefix 'mh' or 'ah' updates mh_rpm / ah_rpm
    if(prefix === 'mh' || prefix === 'ah'){
        const pEl = el(prefix + '_pole');
        if(pEl){
            const rpm = poleRPM[ Number(pEl.value) ] || '';
            el(prefix + '_rpm').innerHTML = rpm;
        }
        return;
    }

    // for ct and lt update both normal and emergency rpm displays
    if(prefix === 'ct' || prefix === 'lt'){
        const normalPole = el(prefix + '_pole');
        const emergPole = el(prefix + '_poleE');

        const normalRPM = normalPole ? (poleRPM[ Number(normalPole.value) ] || '') : '';
        const emergRPM  = emergPole ? (poleRPM[ Number(emergPole.value) ] || '') : '';

        if(el(prefix + '_rpm')) el(prefix + '_rpm').innerHTML = normalRPM;
        if(el(prefix + '_rpmE')) el(prefix + '_rpmE').innerHTML = emergRPM;
    }
}

// Motor selector
function selectMotor(p){
    for(let m of motorRatings){ if(p <= m) return m; }
    return 'Above Range';
}

// When normal inputs change, update emergency defaults if the emergency field is marked auto
function setAutoSync(normalId, emergencyId, transformFn){
    const norm = el(normalId); const emerg = el(emergencyId);
    if(!norm || !emerg) return;
    // mark emergency as auto initially
    emerg.dataset.auto = 'true';
    // when user edits emergency, remove auto flag
    emerg.addEventListener('input', ()=>{ emerg.dataset.auto='false'; });
    // when normal changes, if emerg auto then update
    norm.addEventListener('input', ()=>{ if(emerg.dataset.auto==='true') emerg.value = transformFn? transformFn(norm.value) : norm.value; });
}

// Initialize syncs for CT and LT fields
function initAutoCopies(){
    // Q, G, V, m, f, n, T, camb, mech select, poles
    setAutoSync('mh_q','mh_q');
    setAutoSync('ct_g','ct_gE');
    setAutoSync('ct_v','ct_vE');
    setAutoSync('ct_m','ct_mE');
    setAutoSync('ct_f','ct_fE');
    setAutoSync('ct_T','ct_TE');
    setAutoSync('ct_camb','ct_cambE');
	setAutoSync('ct_power_margin','ct_power_marginE');
    // n default half
    setAutoSync('ct_n','ct_nE', (v)=> Math.max(1, Math.floor(Number(v)/2)) );
    // mech select
    const ctMech = el('ct_mech'); const ctMechE = el('ct_mechE');
    if(ctMech && ctMechE){
        ctMechE.dataset.auto='true';
        ctMechE.addEventListener('change', ()=> ctMechE.dataset.auto='false');
        ctMech.addEventListener('change', ()=>{ if(ctMechE.dataset.auto==='true') ctMechE.value = ctMech.value; setServiceFactor('ctE'); setServiceFactor('ct'); });
    }
    // poles
    setAutoSync('ct_pole','ct_poleE');

    // For LT
    setAutoSync('mh_q','mh_q');
    setAutoSync('lt_g','lt_gE');
    setAutoSync('lt_v','lt_vE');
    setAutoSync('lt_m','lt_mE');
    setAutoSync('lt_f','lt_fE');
    setAutoSync('lt_T','lt_TE');
    setAutoSync('lt_camb','lt_cambE');
	setAutoSync('lt_power_margin','lt_power_marginE');
    setAutoSync('lt_n','lt_nE', (v)=> Math.max(1, Math.floor(Number(v)/2)) );
    const ltMech = el('lt_mech'); const ltMechE = el('lt_mechE');
    if(ltMech && ltMechE){
        ltMechE.dataset.auto='true';
        ltMechE.addEventListener('change', ()=> ltMechE.dataset.auto='false');
        ltMech.addEventListener('change', ()=>{ if(ltMechE.dataset.auto==='true') ltMechE.value = ltMech.value; setServiceFactor('ltE'); setServiceFactor('lt'); });
    }
    setAutoSync('lt_pole','lt_poleE');
}

// Init defaults after DOM ready
window.addEventListener('DOMContentLoaded', ()=>{
    // set service factors
   

    // copy initial normal -> emergency for CT/LT (and mark emergency auto)
    if(el('mh_q')) el('mh_q').value = el('mh_q').value;
    if(el('ct_gE')) el('ct_gE').value = el('ct_g').value;
    if(el('ct_vE')) el('ct_vE').value = el('ct_v').value;
    if(el('ct_mE')) el('ct_mE').value = el('ct_m').value;
    if(el('ct_fE')) el('ct_fE').value = el('ct_f').value;
    if(el('ct_nE')) el('ct_nE').value = Math.max(1, Math.floor(Number(el('ct_n').value)/2));
    if(el('ct_TE')) el('ct_TE').value = el('ct_T').value;
    if(el('ct_cambE')) el('ct_cambE').value = el('ct_camb').value;
	if(el('ct_power_marginE')) el('ct_power_marginE').value = el('ct_power_margin').value;
    if(el('ct_mechE')) el('ct_mechE').value = el('ct_mech').value;
    if(el('ct_poleE')) el('ct_poleE').value = el('ct_pole').value;
    if(el('ct_sE')) el('ct_sE').value = el('ct_s').value;

    if(el('mh_q')) el('mh_q').value = el('mh_q').value;
    if(el('lt_gE')) el('lt_gE').value = el('lt_g').value;
    if(el('lt_vE')) el('lt_vE').value = el('lt_v').value;
    if(el('lt_mE')) el('lt_mE').value = el('lt_m').value;
    if(el('lt_fE')) el('lt_fE').value = el('lt_f').value;
    if(el('lt_nE')) el('lt_nE').value = Math.max(1, Math.floor(Number(el('lt_n').value)/2));
    if(el('lt_TE')) el('lt_TE').value = el('lt_T').value;
    if(el('lt_cambE')) el('lt_cambE').value = el('lt_camb').value;
	if(el('lt_power_marginE')) el('lt_power_marginE').value = el('lt_power_margin').value;
    if(el('lt_mechE')) el('lt_mechE').value = el('lt_mech').value;
    if(el('lt_poleE')) el('lt_poleE').value = el('lt_pole').value;
    if(el('lt_sE')) el('lt_sE').value = el('lt_s').value;

    // mark emergency fields auto so they update when normal changes until user edits them
    initAutoCopies();


});

// ================= HELPER =================
function el(id) {
    return document.getElementById(id);
}


// ================= HOIST CALC =================
function calcHoist() {

    let MH = CRANE.HOIST.MH;
    let AH = CRANE.HOIST.AH;

// READ INPUTS
MH.q  = +document.getElementById("mh_q").value;
MH.q1 = +document.getElementById("mh_q1").value;
MH.q2 = +document.getElementById("mh_q2").value;
MH.v  = +document.getElementById("mh_v").value;
MH.n  = +document.getElementById("mh_n").value;
MH.m  = +document.getElementById("mh_m").value;
MH.s = CRANE.HOIST.MH.S;
MH.camb = +document.getElementById("mh_camb").value;
MH.MO = +document.getElementById("mh_mo").value;
MH.margin = +document.getElementById("mh_power_margin").value;

AH.q  = +document.getElementById("ah_q").value;
AH.q1 = +document.getElementById("ah_q1").value;
AH.q2 = +document.getElementById("ah_q2").value;
AH.v  = +document.getElementById("ah_v").value;
AH.n  = +document.getElementById("ah_n").value;
AH.m  = +document.getElementById("ah_m").value;
AH.s = CRANE.HOIST.AH.S;
AH.camb = +document.getElementById("ah_camb").value;
AH.MO = +document.getElementById("ah_mo").value;
AH.margin = +document.getElementById("ah_power_margin").value;


// TOTAL WEIGHT
MH.M = MH.q + MH.q1 + MH.q2;
AH.M = AH.q + AH.q1 + AH.q2;

// EFFICIENCY
MH.E = Math.pow(0.985,MH.n)*Math.pow(0.99,MH.m);
AH.E = Math.pow(0.985,AH.n)*Math.pow(0.99,AH.m);

// MECHANICAL POWER
MH.Pmech = MH.M * MH.v /(6.12*MH.E);
AH.Pmech = AH.M * AH.v /(6.12*AH.E);

// REQUIRED MOTOR POWER
MH.Pele = MH.Pmech * MH.s * ( 1 + MH.margin / 100) /(MH.camb);
AH.Pele = AH.Pmech * AH.s * ( 1 + AH.margin / 100) /(AH.camb);


// ================= AUTO MOTOR =================

let mh_auto_kw  = selectMotor(MH.Pele);
let mh_auto_rpm = poleRPM[Number(el('mh_pole').value)];

let ah_auto_kw  = selectMotor(AH.Pele);
let ah_auto_rpm = poleRPM[Number(el('ah_pole').value)];

el('mh_motor').innerHTML = mh_auto_kw;
el('mh_rpm').innerHTML   = mh_auto_rpm;

el('ah_motor').innerHTML = ah_auto_kw;
el('ah_rpm').innerHTML   = ah_auto_rpm;


// ================= BASIC OUTPUT =================

el('mh_M').innerHTML = MH.M.toFixed(2);
el('ah_M').innerHTML = AH.M.toFixed(2);

el('mh_E').innerHTML = MH.E.toFixed(3);
el('ah_E').innerHTML = AH.E.toFixed(3);

el('mh_Pmech').innerHTML = MH.Pmech.toFixed(2);
el('ah_Pmech').innerHTML = AH.Pmech.toFixed(2);

el('mh_Pele').innerHTML = MH.Pele.toFixed(2);
el('ah_Pele').innerHTML = AH.Pele.toFixed(2);


// ================= FINAL MOTOR (AUTO + MANUFACTURER) =================

let mh_final_kw = finalKW(mh_auto_kw, el('mh_motors').value);
let mh_final_rpm = finalRPM(mh_auto_rpm, el('mh_rpms').value);

let ah_final_kw = finalKW(ah_auto_kw, el('ah_motors').value);
let ah_final_rpm = finalRPM(ah_auto_rpm, el('ah_rpms').value);


// ================= FINAL MOTOR DATA =================

MH.finalKW  = mh_final_kw;
MH.finalRPM = mh_final_rpm;

AH.finalKW  = ah_final_kw;
AH.finalRPM = ah_final_rpm;

// ================= MOTOR POLE =================

MH.pole = Number(el("mh_pole").value);
AH.pole = Number(el("ah_pole").value);


// =====================================================
// FRAME SIZE + RECOMMENDATION
// =====================================================

MH.frameInfo = getFrameRecommendation(
    MH.finalKW,
    MH.pole
);

AH.frameInfo = getFrameRecommendation(
    AH.finalKW,
    AH.pole
);


// =====================================================
// DISPLAY MOTOR POLE
// =====================================================

el("mh_pole_spec").innerHTML = MH.pole;
el("ah_pole_spec").innerHTML = AH.pole;

el("mh_qty").innerHTML = CRANE.HOIST.MH.MO;
el("ah_qty").innerHTML = CRANE.HOIST.AH.MO;


// =====================================================
// DISPLAY FRAME SIZE
// =====================================================

if (MH.frameInfo.status === "exact") {

    MH.frameSize = MH.frameInfo.frame;

    el("mh_frame").innerHTML =
        MH.frameInfo.frame;

} else {

    MH.frameSize = "";

    el("mh_frame").innerHTML =
        "Not Available";
}


if (AH.frameInfo.status === "exact") {

    AH.frameSize = AH.frameInfo.frame;

    el("ah_frame").innerHTML =
        AH.frameInfo.frame;

} else {

    AH.frameSize = "";

    el("ah_frame").innerHTML =
        "Not Available";
}

// Display both
displayFrameInfo(
    MH.frameInfo,
    "mh_frame_info",
    "MH"
);

displayFrameInfo(
    AH.frameInfo,
    "ah_frame_info",
    "AH"
);


}
// =====================================================
// FRAME INFORMATION / RECOMMENDATION
// =====================================================

function displayFrameInfo(info, elementId, label) {

    const element = el(elementId);

    if (!element) return;


    // EXACT
    if (info.status === "exact") {

        element.innerHTML = `
            <span class="frame-exact">
                ✓ ${label}: Exact frame available
            </span>
        `;

        return;
    }


    // RECOMMENDATION
    if (info.status === "recommended") {

        let html = `
            <span class="frame-warning">
                ⚠ ${label}: Exact frame data not available
            </span>
        `;

        if (info.lower) {

            html += `
                <span class="frame-lower">
                    ↓ Lower: 
                    ${info.lower.kw} kW → Frame ${info.lower.frame}
                </span>
            `;
        }

        if (info.higher) {

            html += `
                <span class="frame-higher">
                    ↑ Higher:
                    ${info.higher.kw} kW → Frame ${info.higher.frame}
                </span>
            `;
        }

        element.innerHTML = html;

        return;
    }


    // NOT AVAILABLE
    element.innerHTML = `
        <span class="frame-not-available">
            ✕ ${label}: Frame size not available in database
        </span>
    `;
}


// ================= TRAVEL CALC =================
function calcTravel(){

    let CT= CRANE.TRAVEL.CT;
    let LT= CRANE.TRAVEL.LT;
    let CTE=CRANE.TRAVEL.CTE; 
    let LTE= CRANE.TRAVEL.LTE;

    // Normal Inputs
    CT.q=+mh_q.value;   LT.q=+mh_q.value;
    CT.q2=+mh_q2.value; LT.q2=+mh_q2.value;
    CT.g=+ct_g.value; LT.g=+lt_g.value;
    CT.v=+ct_v.value; LT.v=+lt_v.value;
    CT.a=+ct_a.value; LT.a=+lt_a.value;
    CT.m=+ct_m.value; LT.m=+lt_m.value;
    CT.f=+ct_f.value; LT.f=+lt_f.value;
    CT.n=+ct_n.value; LT.n=+lt_n.value;
    CT.T=+ct_T.value; LT.T=+lt_T.value;
    CT.s=+CRANE.TRAVEL.CT.S; LT.s=+CRANE.TRAVEL.LT.S;
    CT.camb=+ct_camb.value; LT.camb=+lt_camb.value;
	CT.margin=+ct_power_margin.value; LT.margin=+lt_power_margin.value;

    // Emergency Inputs (editable)
    CTE.q = +mh_q.value; LTE.q = +mh_q.value;
    CTE.q2 = +mh_q2.value; LTE.q2 = +mh_q2.value;
    CTE.g = +ct_gE.value; LTE.g = +lt_gE.value;
    CTE.v = +ct_vE.value; LTE.v = +lt_vE.value;
    CTE.a = +ct_ar.value;   // reduced acceleration
    LTE.a = +lt_ar.value;
    CTE.m = +ct_mE.value; LTE.m = +lt_mE.value;
    CTE.f = +ct_fE.value; LTE.f = +lt_fE.value;
    CTE.n = +ct_nE.value; LTE.n = +lt_nE.value; // user-editable (defaulted to half)
    CTE.T = +ct_TE.value; LTE.T = +lt_TE.value;
    CTE.s = +CRANE.TRAVEL.CTE.S; LTE.s = +CRANE.TRAVEL.LTE.S;
    CTE.camb = +ct_cambE.value; LTE.camb = +lt_cambE.value;
	CTE.margin = +ct_power_marginE.value; LTE.margin = +lt_power_marginE.value;
    
     //TOTAL WEIGHT
     CT.qt=CT.q  + CT.q2;
     LT.qt=LT.q  + LT.q2;
     
     
    // Normal efficiency
    CT.N=Math.pow(0.985,CT.m);
    LT.N=Math.pow(0.985,LT.m);

    // Emergency efficiency
    CTE.N=Math.pow(0.985,CTE.m);
    LTE.N=Math.pow(0.985,LTE.m);

    // Normal Pr
    CT.Pr=(CT.qt+CT.g)*CT.v*CT.f/6117;
    LT.Pr=(LT.qt+LT.g)*LT.v*LT.f/6117;

    // Emergency Pr (uses emergency q,g,v,f)
    CTE.Pr=(CT.qt+CTE.g)*CTE.v*CTE.f/6117;
    LTE.Pr=(LT.qt+LTE.g)*LTE.v*LTE.f/6117;

    // Normal Pa
    CT.Pa=(CT.qt+CT.g)*CT.v*(1100*CT.a)/(6117*981*CT.N);
    LT.Pa=(LT.qt+LT.g)*LT.v*(1100*LT.a)/(6117*981*LT.N);

    // Emergency Pa (different acceleration and emergency N)
    CTE.Pa=(CT.qt+CTE.g)*CTE.v*(1100*CTE.a)/(6117*981*CTE.N);
    LTE.Pa=(CT.qt+LTE.g)*LTE.v*(1100*LTE.a)/(6117*981*LTE.N);

    // Normal Pmech
    CT.Pmech=(CT.Pr+CT.Pa)/(CT.T*CT.n);
    LT.Pmech=(LT.Pr+LT.Pa)/(LT.T*LT.n);

    // Emergency Pmech (user-supplied CTE.n, LTE.n used)
    CTE.Pmech=(CTE.Pr+CTE.Pa)/(CTE.T*CTE.n);
    LTE.Pmech=(LTE.Pr+LTE.Pa)/(LTE.T*LTE.n);

    // Normal Pele
    CT.Pele=CT.Pmech*CT.s * ( 1 + CT.margin / 100) /CT.camb;
    LT.Pele=LT.Pmech*LT.s * ( 1 + LT.margin / 100) /LT.camb;

    // Emergency Pele
    CTE.Pele=CTE.Pmech*CTE.s * ( 1 + CTE.margin / 100) /CTE.camb;
    LTE.Pele=LTE.Pmech*LTE.s * ( 1 + LTE.margin / 100) /LTE.camb;

    // Fill Outputs
    el('ct_N').innerHTML=CT.N.toFixed(3);
    el('lt_N').innerHTML=LT.N.toFixed(3);
    el('ct_NE').innerHTML=CTE.N.toFixed(3);
    el('lt_NE').innerHTML=LTE.N.toFixed(3);

    el('ct_Pr').innerHTML=CT.Pr.toFixed(2);
    el('lt_Pr').innerHTML=LT.Pr.toFixed(2);
    el('ct_PrE').innerHTML=CTE.Pr.toFixed(2);
    el('lt_PrE').innerHTML=LTE.Pr.toFixed(2);

    el('ct_Pa').innerHTML=CT.Pa.toFixed(2);
    el('lt_Pa').innerHTML=LT.Pa.toFixed(2);
    el('ct_PaE').innerHTML=CTE.Pa.toFixed(2);
    el('lt_PaE').innerHTML=LTE.Pa.toFixed(2);

    el('ct_Pmech').innerHTML=CT.Pmech.toFixed(2);
    el('lt_Pmech').innerHTML=LT.Pmech.toFixed(2);
    el('ct_PmechE').innerHTML=CTE.Pmech.toFixed(2);
    el('lt_PmechE').innerHTML=LTE.Pmech.toFixed(2);

    el('ct_Pele').innerHTML=CT.Pele.toFixed(2);
    el('lt_Pele').innerHTML=LT.Pele.toFixed(2);
    el('ct_PeleE').innerHTML=CTE.Pele.toFixed(2);
    el('lt_PeleE').innerHTML=LTE.Pele.toFixed(2);

let ct_auto_kw  = selectMotor(CT.Pele);
let ct_auto_rpm = poleRPM[ Number(el('ct_pole').value) ];

let ct_manu_kw  = el('ct_motors').value;
let ct_manu_rpm = el('ct_rpms').value;

el('ct_motor').innerHTML = ct_auto_kw;
el('ct_rpm').innerHTML   = ct_auto_rpm;


let lt_auto_kw  = selectMotor(LT.Pele);
let lt_auto_rpm = poleRPM[ Number(el('lt_pole').value) ];

let lt_manu_kw  = el('lt_motors').value;
let lt_manu_rpm = el('lt_rpms').value;

el('lt_motor').innerHTML = lt_auto_kw;
el('lt_rpm').innerHTML   = lt_auto_rpm;


    let cte_auto_kw  = selectMotor(CTE.Pele);
let cte_auto_rpm = poleRPM[ Number(el('ct_poleE').value) ];

let cte_manu_kw  = el('ct_motorEs').value;
let cte_manu_rpm = el('ct_rpmEs').value;

el('ct_motorE').innerHTML = cte_auto_kw;
el('ct_rpmE').innerHTML   = cte_auto_rpm;

let lte_auto_kw  = selectMotor(LTE.Pele);
let lte_auto_rpm = poleRPM[ Number(el('lt_poleE').value) ];

let lte_manu_kw  = el('lt_motorEs').value;
let lte_manu_rpm = el('lt_rpmEs').value;

el('lt_motorE').innerHTML = lte_auto_kw;
el('lt_rpmE').innerHTML   = lte_auto_rpm;


 // ================= FINAL MOTOR DATA =================

// CT - Emergency motor is used for final selection
CTE.finalKW = finalKW(cte_auto_kw, cte_manu_kw);
CTE.finalRPM = finalRPM(cte_auto_rpm, cte_manu_rpm);

// LT - Emergency motor is used for final selection
LTE.finalKW = finalKW(lte_auto_kw, lte_manu_kw);
LTE.finalRPM = finalRPM(lte_auto_rpm, lte_manu_rpm);


// ================= MOTOR POLE =================

CTE.pole = Number(el("ct_poleE").value);
LTE.pole = Number(el("lt_poleE").value);




// =====================================================
// FRAME SIZE + RECOMMENDATION
// =====================================================

CTE.frameInfo = getFrameRecommendation(
    CTE.finalKW,
    CTE.pole
);

LTE.frameInfo = getFrameRecommendation(
    LTE.finalKW,
    LTE.pole
);


// =====================================================
// DISPLAY MOTOR POLE
// =====================================================

el("ct_pole_spec").innerHTML = CTE.pole;
el("lt_pole_spec").innerHTML = LTE.pole;

el("ct_qty").innerHTML = CRANE.TRAVEL.CT.n;
el("lt_qty").innerHTML = CRANE.TRAVEL.LT.n;


// =====================================================
// DISPLAY FRAME SIZE
// =====================================================

// ---------- CT ----------
if (CTE.frameInfo.status === "exact") {

    CTE.frameSize = CTE.frameInfo.frame;

    el("ct_frame").innerHTML =
        CTE.frameInfo.frame;

} else {

    CTE.frameSize = "";

    el("ct_frame").innerHTML =
        "Not Available";
}


// ---------- LT ----------
if (LTE.frameInfo.status === "exact") {

    LTE.frameSize = LTE.frameInfo.frame;

    el("lt_frame").innerHTML =
        LTE.frameInfo.frame;

} else {

    LTE.frameSize = "";

    el("lt_frame").innerHTML =
        "Not Available";
}
// =====================================================
// FRAME INFORMATION / RECOMMENDATION
// =====================================================

displayFrameInfo(
    CTE.frameInfo,
    "ct_frame_info",
    "CT"
);

displayFrameInfo(
    LTE.frameInfo,
    "lt_frame_info",
    "LT"
);
}


function val(id) {
    return +document.getElementById(id).value;
}

function set(id, value) {
    document.getElementById(id).innerHTML = value.toFixed(2);
}
function onInput() {
    calculateAll();
}
function calculateAll() {

    // STEP 1
    updateMechanismData();

    // STEP 2
    calcHoist();

    // STEP 3
    calcTravel();

    // STEP 4
    calcBrake();

    // STEP 5
    calcRope();

    // STEP 6
    calcSheave();

    // STEP 7
    calcDrumDia();

    // STEP 8
    calcDrumLen();

    
     
    calcCTLoad();
     calcLTLoad();
     // STEP 12
    calcWheelSelection();
     
    calcGearbox();
    // STEP 10
    calcBarrelCoupling();

    // STEP 11
    

    calcCTBuffer();
     calcLTBuffer();
	 
	 // STEP 9
    calcRopeDrumStress();
	updateRopeDrumStrength();
	 showCategories();
	 
}
function openAssistant() {
    window.location.href = "assistant.html";
}

// =====================================================
// REFERENCE TABLE SWITCHING
// =====================================================

function showReference(referenceName, clickedItem) {

    // ==========================================
    // Hide all reference tables
    // ==========================================

    document
        .querySelectorAll(".reference-content")
        .forEach(function(content) {

            content.classList.remove("active");

        });


    // ==========================================
    // Remove active from all menu items
    // ==========================================

    document
        .querySelectorAll(".reference-menu-item")
        .forEach(function(item) {

            item.classList.remove("active");

        });


    // ==========================================
    // Show selected reference
    // ==========================================

    const selectedReference =
        document.getElementById(
            "reference-" + referenceName
        );


    if (selectedReference) {

        selectedReference.classList.add("active");

    }


    // ==========================================
    // Highlight selected menu item
    // ==========================================

    if (clickedItem) {

        clickedItem.classList.add("active");

    }

}
window.onload = function () {

    updateRopeDrumStrength();

};

