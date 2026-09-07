// =====================================================
// ================= HOIST REPORT ======================
// =====================================================

window.addEventListener("message", function(event) {

    if (
        !event.data ||
        event.data.type !== "CRANE_REPORT_DATA"
    ) {
        return;
    }


    const data = event.data.data;


    generateHoistReport(data.HOIST);

    generateTravelReport(data.TRAVEL);

    generateBrakeReport(data.BRAKE);

    generateWireRopeReport(data.ROPE);
	
	generateSheaveReport(data.SHEAVE);
	
	generateDrumDiaReport(data.DRUM_DIA);
	
	generateDrumLenReport(data.DRUM_LEN);
	
	generateWheelReport(data.WHEEL_SELECTION);
	
	generateGearboxReport(data.GEARBOX);
	 
	generateBarrelCouplingReport(data.BARREL_COUPLING);
	
	generateRopeDrumStressReport(data.ROPE_DRUM_STRESS);


});
// =====================================================
// ================= GENERATE HOIST REPORT ==============
// =====================================================

function generateHoistReport(HOIST) {

    const MH = HOIST.MH;
    const AH = HOIST.AH;


    // =================================================
    // ================= MAIN HOIST ====================
    // =================================================

    document.getElementById("mh-given-data").innerHTML = `

        <div>
            Safe Working Load,
            Q = ${MH.q} Ton
        </div>

        <div>
            Bottom Block + Rope Weight,
            Q₁ = ${MH.q1} Ton
        </div>

        <div>
            Mass of Tong,
            Q₂ = ${MH.q2} Ton
        </div>

        <div>
            Rated Speed,
            V = ${MH.v} m/min
        </div>

        <div>
            Number of Gear Stages,
            n = ${MH.n}
        </div>

        <div>
            Number of Pulleys,
            m = ${MH.m}
        </div>

        <div>
            Derating Factor,
            C<sub>amb</sub> = ${MH.camb}
        </div>

        <div>
            Electrical Power Margin =
            ${MH.margin} %
        </div>

        <div>
            Service Factor,
            S = ${MH.s}
        </div>

        <div>
            Number of Motors,
            N = ${MH.MO}
        </div>

        <div>
            Motor Pole =
            ${MH.pole} Pole
        </div>

    `;


    // =================================================
    // TOTAL WEIGHT
    // =================================================

    document.getElementById("mh-total-weight").innerHTML = `

        <div class="calculation-equation">
            M = Q + Q₁ + Q₂
        </div>

        <div class="calculation-equation">
            M =
            ${MH.q} +
            ${MH.q1} +
            ${MH.q2}
        </div>

        <div class="calculation-result">

            Therefore,

            M =

            <span class="calculation-result-box">
                ${MH.M.toFixed(2)} Ton
            </span>

        </div>

    `;


    // =================================================
    // EFFICIENCY
    // =================================================

    document.getElementById("mh-efficiency").innerHTML = `

        <div class="calculation-equation">
            E =
            (0.985)<sup>n</sup>
            ×
            (0.99)<sup>m</sup>
        </div>

        <div class="calculation-equation">

            E =
            (0.985)<sup>${MH.n}</sup>
            ×
            (0.99)<sup>${MH.m}</sup>

        </div>

        <div class="calculation-result">

            Therefore,

            E =

            <span class="calculation-result-box">
                ${MH.E.toFixed(3)}
            </span>

        </div>

    `;


    // =================================================
    // MECHANICAL POWER
    // =================================================

    document.getElementById("mh-mechanical-power").innerHTML = `

        <div class="calculation-equation">

            P<sub>mech</sub>
            =
            M × V
            /
            (6.12 × E)

        </div>


        <div class="calculation-equation">

            P<sub>mech</sub>
            =

            (${MH.M.toFixed(2)} × ${MH.v})
            /

            (6.12 × ${MH.E.toFixed(3)})

        </div>


        <div class="calculation-result">

            Therefore,

            P<sub>mech</sub> =

            <span class="calculation-result-box">

                ${MH.Pmech.toFixed(2)} kW

            </span>

        </div>

    `;


    // =================================================
    // REQUIRED MOTOR POWER
    // =================================================

    document.getElementById("mh-required-power").innerHTML = `

        <div class="calculation-equation">

            P<sub>ele</sub>
            =
            P<sub>mech</sub>
            × S
            × (1 + Margin / 100)
            /
            C<sub>amb</sub>

        </div>


        <div class="calculation-equation">

            P<sub>ele</sub>
            =

            ${MH.Pmech.toFixed(2)}
            ×
            ${MH.s}
            ×
            (1 + ${MH.margin}/100)
            /
            ${MH.camb}

        </div>


        <div class="calculation-result">

            Therefore,

            P<sub>ele</sub> =

            <span class="calculation-result-box">

                ${MH.Pele.toFixed(2)} kW

            </span>

        </div>

    `;


    // =================================================
    // MOTOR SELECTION
    // =================================================

    document.getElementById("mh-motor-selection").innerHTML = `

        <div class="calculation-result">

            Required Motor Power =
            ${MH.Pele.toFixed(2)} kW

        </div>


        <div class="calculation-result">
		   

            Selected Motor Power =
			<div class="calculation-result-box">
            ${MH.finalKW} kW
			</div>

        </div>


        <div class="calculation-result">

            Selected Motor Speed =
            ${MH.finalRPM} RPM

        </div>


        <div class="calculation-result">

            Number of Motors =
            ${MH.MO}

        </div>


        <div class="calculation-result">

            Motor Pole =
            ${MH.pole} Pole

        </div>

    `;


    // =================================================
    // FRAME SELECTION
    // =================================================

    document.getElementById("mh-frame-selection").innerHTML = `

        <div class="calculation-equation">

            Selected Motor Power =
            ${MH.finalKW} kW

        </div>


        <div class="calculation-equation">

            Motor Pole =
            ${MH.pole} Pole

        </div>


        <div class="calculation-result">

            Recommended Motor Frame =

            <span class="calculation-result-box">

                ${MH.frameSize || "Not Available"}

            </span>

        </div>

    `;


    // =================================================
    // ================= AUXILIARY HOIST ==============
    // =================================================

    document.getElementById("ah-given-data").innerHTML = `

        <div>
            Safe Working Load,
            Q = ${AH.q} Ton
        </div>

        <div>
            Bottom Block + Rope Weight,
            Q₁ = ${AH.q1} Ton
        </div>

        <div>
            Mass of Tong,
            Q₂ = ${AH.q2} Ton
        </div>

        <div>
            Rated Speed,
            V = ${AH.v} m/min
        </div>

        <div>
            Number of Gear Stages,
            n = ${AH.n}
        </div>

        <div>
            Number of Pulleys,
            m = ${AH.m}
        </div>

        <div>
            Derating Factor,
            C<sub>amb</sub> = ${AH.camb}
        </div>

        <div>
            Electrical Power Margin =
            ${AH.margin} %
        </div>

        <div>
            Service Factor,
            S = ${AH.s}
        </div>

        <div>
            Number of Motors,
            N = ${AH.MO}
        </div>

        <div>
            Motor Pole =
            ${AH.pole} Pole
        </div>

    `;


    // =================================================
    // AH TOTAL WEIGHT
    // =================================================

    document.getElementById("ah-total-weight").innerHTML = `

        <div class="calculation-equation">

            M = Q + Q₁ + Q₂

        </div>


        <div class="calculation-equation">

            M =
            ${AH.q} +
            ${AH.q1} +
            ${AH.q2}

        </div>


        <div class="calculation-result">

            Therefore,

            M =

            <span class="calculation-result-box">

                ${AH.M.toFixed(2)} Ton

            </span>

        </div>

    `;


    // =================================================
    // AH EFFICIENCY
    // =================================================

    document.getElementById("ah-efficiency").innerHTML = `

        <div class="calculation-equation">

            E =
            (0.985)<sup>n</sup>
            ×
            (0.99)<sup>m</sup>

        </div>


        <div class="calculation-equation">

            E =
            (0.985)<sup>${AH.n}</sup>
            ×
            (0.99)<sup>${AH.m}</sup>

        </div>


        <div class="calculation-result">

            Therefore,

            E =

            <span class="calculation-result-box">

                ${AH.E.toFixed(3)}

            </span>

        </div>

    `;


    // =================================================
    // AH MECHANICAL POWER
    // =================================================

    document.getElementById("ah-mechanical-power").innerHTML = `

        <div class="calculation-equation">

            P<sub>mech</sub>
            =
            M × V
            /
            (6.12 × E)

        </div>


        <div class="calculation-equation">

            P<sub>mech</sub>
            =

            (${AH.M.toFixed(2)} × ${AH.v})
            /

            (6.12 × ${AH.E.toFixed(3)})

        </div>


        <div class="calculation-result">

            Therefore,

            P<sub>mech</sub> =

            <span class="calculation-result-box">

                ${AH.Pmech.toFixed(2)} kW

            </span>

        </div>

    `;


    // =================================================
    // AH REQUIRED POWER
    // =================================================

    document.getElementById("ah-required-power").innerHTML = `

        <div class="calculation-equation">

            P<sub>ele</sub>
            =
            P<sub>mech</sub>
            × S
            × (1 + Margin / 100)
            /
            C<sub>amb</sub>

        </div>


        <div class="calculation-equation">

            P<sub>ele</sub>
            =

            ${AH.Pmech.toFixed(2)}
            ×
            ${AH.s}
            ×
            (1 + ${AH.margin}/100)
            /
            ${AH.camb}

        </div>


        <div class="calculation-result">

            Therefore,

            P<sub>ele</sub> =

            <span class="calculation-result-box">

                ${AH.Pele.toFixed(2)} kW

            </span>

        </div>

    `;


    // =================================================
    // AH MOTOR SELECTION
    // =================================================

    document.getElementById("ah-motor-selection").innerHTML = `

        <div class="calculation-result">

            Required Motor Power =
            ${AH.Pele.toFixed(2)} kW

        </div>


        <div class="calculation-result">

            Selected Motor Power =
			<div class="calculation-result-box">
            ${AH.finalKW} kW
			</div>

        </div>


        <div class="calculation-result">

            Selected Motor Speed =
            ${AH.finalRPM} RPM

        </div>


        <div class="calculation-result">

            Number of Motors =
            ${AH.MO}

        </div>


        <div class="calculation-result">

            Motor Pole =
            ${AH.pole} Pole

        </div>

    `;


    // =================================================
    // AH FRAME
    // =================================================

    document.getElementById("ah-frame-selection").innerHTML = `

        <div class="calculation-equation">

            Selected Motor Power =
            ${AH.finalKW} kW

        </div>


        <div class="calculation-equation">

            Motor Pole =
            ${AH.pole} Pole

        </div>


        <div class="calculation-result">

            Recommended Motor Frame =

            <span class="calculation-result-box">

                ${AH.frameSize || "Not Available"}

            </span>

        </div>

    `;

}
// =========================================================
// ================= TRAVEL REPORT =========================
// =========================================================

function generateTravelReport(TRAVEL) {

    const CT  = TRAVEL.CT;
    const LT  = TRAVEL.LT;
    const CTE = TRAVEL.CTE;
    const LTE = TRAVEL.LTE;


    // =====================================================
    // HELPER FUNCTIONS
    // =====================================================

    function set(id, value) {

        const element = document.getElementById(id);

        if (element) {

            element.innerHTML = value ?? "-";

        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) return "-";

        return n.toFixed(digits);

    }


    // =====================================================
    // ================= CT NORMAL =========================
    // =====================================================

    set(
        "ct-normal-given-data",

        `
       

        Total Load, Qt = ${num(CT.qt)} TON<br>
        Weight of Trolley, G = ${num(CT.g)} TON<br>
        Rated Speed, V = ${num(CT.v)} m/min<br>
        Acceleration, a = ${num(CT.a)} cm/sec²<br>
        Gear Stages, m = ${num(CT.m, 0)}<br>
        Friction Factor, f = ${num(CT.f)}<br>
        Number of Motors, n = ${num(CT.n, 0)}<br>
        Torque Factor, T = ${num(CT.T)}<br>
        Service Factor, S = ${num(CT.s)}<br>
        Derating Factor, Camb = ${num(CT.camb)}<br>
        Electrical Power Margin = ${num(CT.margin)} %
        `
    );


    // ================= EFFICIENCY =================

    set(
        "ct-normal-efficiency",

        `
        N = 0.985<sup>m</sup><br>

        N = 0.985<sup>${num(CT.m, 0)}</sup><br>
		
		<div class="calculation-result">
        <b>Therefore, N =
		<div class="calculation-result-box">
		 ${num(CT.N, 3)}</b>
		</div></div>
		
        `
    );


    // ================= RUNNING POWER =================

    set(
        "ct-normal-running-power",

        `
        Pr = (Qt + G) × V × f / 6117<br><br>

        Pr = (${num(CT.qt)} + ${num(CT.g)}) ×
        ${num(CT.v)} × ${num(CT.f)} / 6117<br><br>
		
		<div class="calculation-result">

        <b>Therefore, Pr = 		
		<div class="calculation-result-box">
		${num(CT.Pr)} kW</b>
		</div></div>
        `
    );


    // ================= ACCELERATION POWER =================

    set(
        "ct-normal-acceleration-power",

        `
        Pa = (Qt + G) × V × (1100 × a)
        / (6117 × 981 × N)<br>

        Pa = (${num(CT.qt)} + ${num(CT.g)}) ×
        ${num(CT.v)} × (1100 × ${num(CT.a)})
        / (6117 × 981 × ${num(CT.N, 3)})<br>
		
		<div class="calculation-result">

        <b>Therefore, Pa = 
		<div class="calculation-result-box">
		${num(CT.Pa)} kW</b>
		</div></div>
        `
    );


    // ================= MECHANICAL POWER =================

    set(
        "ct-normal-mechanical-power",

        `
        Pmech = (Pr + Pa) / (T × n)<br>

        Pmech = (${num(CT.Pr)} + ${num(CT.Pa)})
        / (${num(CT.T)} × ${num(CT.n, 0)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pmech = 
		<div class="calculation-result-box">
		${num(CT.Pmech)} kW</b>
		</div></div>
        `
    );


    // ================= REQUIRED POWER =================

    set(
        "ct-normal-required-power",

        `
        Pele = Pmech × S ×
        (1 + Margin / 100) / Camb<br>

        Pele = ${num(CT.Pmech)} ×
        ${num(CT.s)} ×
        (1 + ${num(CT.margin)}/100) /
        ${num(CT.camb)}<br>
		
		<div class="calculation-result">
        <b>Therefore, Pele = 
		<div class="calculation-result-box">
		${num(CT.Pele)} kW</b>
		</div></div>
        `
    );


    // ================= MOTOR SELECTION =================

    set(
        "ct-normal-motor-selection",

        `
		<div class="calculation-result">
        Required Motor Power = ${num(CT.Pele)} kW<br>
		</div>
		
		<div class="calculation-result">
        Selected Motor Power = 
		<div class="calculation-result-box">
		${CT.motor ?? "-"} kW<br>
		</div></div>
		
		<div class="calculation-result">
        Number of Motors = ${num(CT.n, 0)}<br>
        Motor Pole = ${CT.pole ?? "-"} Pole
		</div>
        `
    );


    // ================= MOTOR RPM =================

    set(
        "ct-normal-motor-rpm",

        `
        Selected Motor Speed = ${CT.rpm ?? "-"} RPM
        `
    );


    // =====================================================
    // ================= CT EMERGENCY ======================
    // =====================================================

    set(
        "ct-emergency-given-data",

        `


       Reduced Acceleration, a = ${num(CTE.a)} cm/sec²<br>

        `
    );


    // ================= EFFICIENCY =================

    set(
        "ct-emergency-efficiency",

        `
        N = 0.985<sup>m</sup>

        N = 0.985<sup>${num(CTE.m, 0)}</sup><br>
		
		<div class="calculation-result">
		

        <b>Therefore, N = 
		<div class="calculation-result-box">
		${num(CTE.N, 3)}</b>
		</div></div>
        `
    );


    // ================= RUNNING POWER =================

    set(
        "ct-emergency-running-power",

        `
        Pr = (Qt + G) × V × f / 6117<br>

        Pr = (${num(CTE.qt)} + ${num(CTE.g)}) ×
        ${num(CTE.v)} × ${num(CTE.f)} / 6117<br>
		
		<div class="calculation-result">

        <b>Therefore, Pr = 
		<div class="calculation-result-box">
		${num(CTE.Pr)} kW</b>
		</div></div>
        `
    );


    // ================= ACCELERATION POWER =================

    set(
        "ct-emergency-acceleration-power",

        `
        Pa = (Qt + G) × V × (1100 × a)
        / (6117 × 981 × N)<br>

        Pa = (${num(CTE.qt)} + ${num(CTE.g)}) ×
        ${num(CTE.v)} × (1100 × ${num(CTE.a)})
        / (6117 × 981 × ${num(CTE.N, 3)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pa = 
		<div class="calculation-result-box">
		${num(CTE.Pa)} kW</b>
		</div></div>
        `
    );


    // ================= MECHANICAL POWER =================

    set(
        "ct-emergency-mechanical-power",

        `
        Pmech = (Pr + Pa) / (T × n)<br>

        Pmech = (${num(CTE.Pr)} + ${num(CTE.Pa)})
        / (${num(CTE.T)} × ${num(CTE.n, 0)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pmech = 
		<div class="calculation-result-box">
		${num(CTE.Pmech)} kW</b>
		</div></div>
        `
    );


    // ================= REQUIRED POWER =================

    set(
        "ct-emergency-required-power",

        `
        Pele = Pmech × S ×
        (1 + Margin / 100) / Camb<br>

        Pele = ${num(CTE.Pmech)} ×
        ${num(CTE.s)} ×
        (1 + ${num(CTE.margin)}/100) /
        ${num(CTE.camb)}<br>
		
		<div class="calculation-result">				
        <b>Therefore, Pele = 
		<div class="calculation-result-box">
		${num(CTE.Pele)} kW</b>
		</div></div>
        `
    );


    // ================= AUTO MOTOR =================

    set(
        "ct-emergency-motor-selection",

        `
        Required Motor Power = ${num(CTE.Pele)} kW<br>
        Auto Selected Motor Power = ${CTE.motor ?? "-"} kW<br>
        Number of Motors = ${num(CTE.n, 0)}<br>
        Motor Pole = ${CTE.pole ?? "-"} Pole
        `
    );


    // ================= AUTO RPM =================

    set(
        "ct-emergency-motor-rpm",

        `
        Auto Selected Motor Speed = ${CTE.rpm ?? "-"} RPM
        `
    );


    // ================= FINAL CT =================

    set(
        "ct-final-motor-selection",

        `
        Required Motor Power = ${num(CTE.Pele)} kW<br>

        Final Motor Power =
        <span class="calculation-result-box">
            ${CTE.finalKW ?? "-"} kW
        </span>
        <br>

        Final Motor Speed =
        <span class="calculation-result-box">
            ${CTE.finalRPM ?? "-"} RPM
        </span>
        `
    );


    // ================= CT FRAME =================

    let ctFrame = "-";


    if (CTE.frameSize) {

        ctFrame = CTE.frameSize;

    }
    else if (
        CTE.frameInfo &&
        CTE.frameInfo.status === "exact"
    ) {

        ctFrame = CTE.frameInfo.frame;

    }


    set(
        "ct-frame-selection",

        `
        Final Motor Power = ${CTE.finalKW ?? "-"} kW<br>
        Motor Pole = ${CTE.pole ?? "-"} Pole<br>

        Recommended Motor Frame =
        <span class="calculation-result-box">
            ${ctFrame}
        </span>
        `
    );


    // =====================================================
    // ================= LT NORMAL =========================
    // =====================================================

    set(
        "lt-normal-given-data",

        `


        Total Load, Qt = ${num(LT.qt)} TON<br>
        Weight of Crane, G = ${num(LT.g)} TON<br>
        Rated Speed, V = ${num(LT.v)} m/min<br>
        Acceleration, a = ${num(LT.a)} cm/sec²<br>
        Gear Stages, m = ${num(LT.m, 0)}<br>
        Friction Factor, f = ${num(LT.f)}<br>
        Number of Motors, n = ${num(LT.n, 0)}<br>
        Torque Factor, T = ${num(LT.T)}<br>
        Service Factor, S = ${num(LT.s)}<br>
        Derating Factor, Camb = ${num(LT.camb)}<br>
        Electrical Power Margin = ${num(LT.margin)} %
        `
    );


    // ================= EFFICIENCY =================

    set(
        "lt-normal-efficiency",

        `
        N = 0.985<sup>m</sup><br>

        N = 0.985<sup>${num(LT.m, 0)}</sup><br>
		
		<div class="calculation-result">
        <b>Therefore, N = 
		<div class="calculation-result-box">
		${num(LT.N, 3)}</b>
		</div></div>
        `
    );


    // ================= RUNNING POWER =================

    set(
        "lt-normal-running-power",

        `
        Pr = (Qt + G) × V × f / 6117<br><br>

        Pr = (${num(LT.qt)} + ${num(LT.g)}) ×
        ${num(LT.v)} × ${num(LT.f)} / 6117<br><br>
        
		<div class="calculation-result">
        <b>Therefore, Pr = 
		<div class="calculation-result-box">
		${num(LT.Pr)} kW</b>
		</div></div>
        `
    );


    // ================= ACCELERATION POWER =================

    set(
        "lt-normal-acceleration-power",

        `
        Pa = (Qt + G) × V × (1100 × a)
        / (6117 × 981 × N)<br>

        Pa = (${num(LT.qt)} + ${num(LT.g)}) ×
        ${num(LT.v)} × (1100 × ${num(LT.a)})
        / (6117 × 981 × ${num(LT.N, 3)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pa = 
		<div class="calculation-result-box">
		${num(LT.Pa)} kW</b>
		</div></div>
        `
    );


    // ================= MECHANICAL POWER =================

    set(
        "lt-normal-mechanical-power",

        `
        Pmech = (Pr + Pa) / (T × n)<br>

        Pmech = (${num(LT.Pr)} + ${num(LT.Pa)})
        / (${num(LT.T)} × ${num(LT.n, 0)})<br>
        
		<div class="calculation-result">
        <b>Therefore, Pmech = 
		<div class="calculation-result-box">
		${num(LT.Pmech)} kW</b>
		</div></div>
        `
    );


    // ================= REQUIRED POWER =================

    set(
        "lt-normal-required-power",

        `
        Pele = Pmech × S ×
        (1 + Margin / 100) / Camb<br>

        Pele = ${num(LT.Pmech)} ×
        ${num(LT.s)} ×
        (1 + ${num(LT.margin)}/100) /
        ${num(LT.camb)}<br>
		
		<div class="calculation-result">
        <b>Therefore, Pele = 
		<div class="calculation-result-box">
		${num(LT.Pele)} kW</b>
		</div></div>
        `
    );


    // ================= MOTOR SELECTION =================

    set(
        "lt-normal-motor-selection",

        `
		<div class="calculation-result">
        Required Motor Power = ${num(LT.Pele)} kW<br>
		</div>
		<div class="calculation-result">
        Selected Motor Power = 
		<div class="calculation-result-box">
		${LT.motor ?? "-"} kW<br>
		</div></div>
		<div class="calculation-result">
        Number of Motors = ${num(LT.n, 0)}<br>
        Motor Pole = ${LT.pole ?? "-"} Pole
		</div>
        `
    );


    // ================= MOTOR RPM =================

    set(
        "lt-normal-motor-rpm",

        `
        Selected Motor Speed = ${LT.rpm ?? "-"} RPM
        `
    );


    // =====================================================
    // ================= LT EMERGENCY ======================
    // =====================================================

    set(
        "lt-emergency-given-data",

        `



       Reduced Acceleration, a = ${num(LTE.a)} cm/sec²<br>
    
        `
    );


    // ================= EFFICIENCY =================

    set(
        "lt-emergency-efficiency",

        `
        N = 0.985<sup>m</sup>

        N = 0.985<sup>${num(LTE.m, 0)}</sup><br>
		
		<div class="calculation-result">
        <b>Therefore, N = 
		<div class="calculation-result-box">
		${num(LTE.N, 3)}</b>
		</div></div>
        `
    );


    // ================= RUNNING POWER =================

    set(
        "lt-emergency-running-power",

        `
        Pr = (Qt + G) × V × f / 6117<br>

        Pr = (${num(LTE.qt)} + ${num(LTE.g)}) ×
        ${num(LTE.v)} × ${num(LTE.f)} / 6117<br>
		
		<div class="calculation-result">
        <b>Therefore, Pr = 
		<div class="calculation-result-box">
		${num(LTE.Pr)} kW</b>
		</div></div>
        `
    );


    // ================= ACCELERATION POWER =================

    set(
        "lt-emergency-acceleration-power",

        `
        Pa = (Qt + G) × V × (1100 × a)
        / (6117 × 981 × N)<br>

        Pa = (${num(LTE.qt)} + ${num(LTE.g)}) ×
        ${num(LTE.v)} × (1100 × ${num(LTE.a)})
        / (6117 × 981 × ${num(LTE.N, 3)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pa = 
		<div class="calculation-result-box">
		${num(LTE.Pa)} kW</b>
		</div></div>
        `
    );


    // ================= MECHANICAL POWER =================

    set(
        "lt-emergency-mechanical-power",

        `
        Pmech = (Pr + Pa) / (T × n)<br>

        Pmech = (${num(LTE.Pr)} + ${num(LTE.Pa)})
        / (${num(LTE.T)} × ${num(LTE.n, 0)})<br>
		
		<div class="calculation-result">
        <b>Therefore, Pmech = 
		<div class="calculation-result-box">
		${num(LTE.Pmech)} kW</b>
		</div></div>
        `
    );


    // ================= REQUIRED POWER =================

    set(
        "lt-emergency-required-power",

        `
        Pele = Pmech × S ×
        (1 + Margin / 100) / Camb<br>

        Pele = ${num(LTE.Pmech)} ×
        ${num(LTE.s)} ×
        (1 + ${num(LTE.margin)}/100) /
        ${num(LTE.camb)}<br>
		
		<div class="calculation-result">
        <b>Therefore, Pele =
		<div class="calculation-result-box">
		${num(LTE.Pele)} kW</b>
		</div></div>
        `
    );


    // ================= AUTO MOTOR =================

    set(
        "lt-emergency-motor-selection",

        `
		
        Required Motor Power = ${num(LTE.Pele)} kW<br>
        Auto Selected Motor Power = ${LTE.motor ?? "-"} kW<br>
        Number of Motors = ${num(LTE.n, 0)}<br>
        Motor Pole = ${LTE.pole ?? "-"} Pole
        `
    );


    // ================= AUTO RPM =================

    set(
        "lt-emergency-motor-rpm",

        `
        Auto Selected Motor Speed = ${LTE.rpm ?? "-"} RPM
        `
    );


    // ================= FINAL LT =================

    set(
        "lt-final-motor-selection",

        `
        Required Motor Power = ${num(LTE.Pele)} kW<br>

        Final Motor Power =
        <span class="calculation-result-box">
            ${LTE.finalKW ?? "-"} kW
        </span>
        <br><br>

        Final Motor Speed =
        <span class="calculation-result-box">
            ${LTE.finalRPM ?? "-"} RPM
        </span>
        `
    );


    // ================= LT FRAME =================

    let ltFrame = "-";


    if (LTE.frameSize) {

        ltFrame = LTE.frameSize;

    }
    else if (
        LTE.frameInfo &&
        LTE.frameInfo.status === "exact"
    ) {

        ltFrame = LTE.frameInfo.frame;

    }


    set(
        "lt-frame-selection",

        `
        Final Motor Power = ${LTE.finalKW ?? "-"} kW<br>
        Motor Pole = ${LTE.pole ?? "-"} Pole<br>

        Recommended Motor Frame =
        <span class="calculation-result-box">
            ${ltFrame}
        </span>
        `
    );

}
function generateBrakeReport(BRAKE) {

    const MH = BRAKE.MH;
    const AH = BRAKE.AH;
    const CT = BRAKE.CT;
    const LT = BRAKE.LT;


    function set(id, value) {

        const element = document.getElementById(id);

        if (element) {
            element.innerHTML = value ?? "-";
        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);

    }


    function brakeCalculation(data, powerType) {

        const isElectrical = powerType === "electrical";

        const P  = isElectrical ? data.P1  : data.P1m;
        const T  = isElectrical ? data.T1  : data.T1m;

        const drumDia =
            isElectrical
                ? data.drumDiaElectrical
                : data.drumDiaMechanical;

        const drumTorque =
            isElectrical
                ? data.drumTorqueElectrical
                : data.drumTorqueMechanical;


        const powerName =
            isElectrical
                ? "Installed Power (Electrical Power)"
                : "Consumed Power (Mechanical Power)";



        return `

          
           

            <b>Input Data</b><br>

            ${isElectrical ? "Electrical Power" : "Mechanical Power"}, P = ${num(P)} kW<br>

            Motor Speed, N = ${num(data.N1, 0)} RPM<br>

            Coefficient of Reserve, S = ${num(data.S1, 2)}<br>

            Operation Type = ${data.operationType ?? "-"} 


            <br>


            <b>Required Brake Torque</b><br>


            T = (975 × P × S) / N

            <br>


            T = (975 × ${num(P)} × ${num(data.S1, 2)})
            / ${num(data.N1, 0)}

            <br>


            Therefore,

            <span class="calculation-result-box">
                T = ${num(T)} kgm
            </span>


            <br><br>


            <b>Brake Selection</b><br>


            Required Brake Torque
            = ${num(T)} kgm

            <br>


            Number of Selected Brakes
            = <span class="calculation-result-box">
                ${data.brakeCount ?? "-"}
              </span>


            <br>


            <b>Selected Drum</b><br>


            Selected Drum Torque Rating
            = <span class="calculation-result-box">
                ${drumTorque ?? "-"} kgm
              </span>

            <br>


            Selected Drum Brake Diameter
            = <span class="calculation-result-box">
                ${drumDia ?? "-"} mm
              </span>

        `;

    }


    // =====================================================
    // MH
    // =====================================================

    set(
        "mh-electrical-brake",
        brakeCalculation(MH, "electrical")
    );

    set(
        "mh-mechanical-brake",
        brakeCalculation(MH, "mechanical")
    );


    // =====================================================
    // AH
    // =====================================================

    set(
        "ah-electrical-brake",
        brakeCalculation(AH, "electrical")
    );

    set(
        "ah-mechanical-brake",
        brakeCalculation(AH, "mechanical")
    );


    // =====================================================
    // CT
    // =====================================================

    set(
        "ct-electrical-brake",
        brakeCalculation(CT, "electrical")
    );

    set(
        "ct-mechanical-brake",
        brakeCalculation(CT, "mechanical")
    );


    // =====================================================
    // LT
    // =====================================================

    set(
        "lt-electrical-brake",
        brakeCalculation(LT, "electrical")
    );

    set(
        "lt-mechanical-brake",
        brakeCalculation(LT, "mechanical")
    );

}
function generateWireRopeReport(ROPE) {

    const MH = ROPE.MH;
    const AH = ROPE.AH;


    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {

            element.innerHTML =
                value ?? "-";

        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);

    }


    function ropeCalculation(data, name) {

        const recommendation =
            data.recommendation;


        const recommendedDia =
            recommendation
                ? recommendation.dia
                : null;


        const recommendedMBF =
            recommendation
                ? recommendation.mbf
                : null;


        const manufacturerDia =
            Number(data.manufacturerDia);


        const manufacturerMBF =
            data.manufacturerMBF;


        let manufacturerStatus = "";


        if (manufacturerMBF == null) {

            manufacturerStatus = `
                <span class="rope-status-neutral">
                    Manufacturer rope not selected
                </span>
            `;

        }
        else if (manufacturerMBF >= data.BL) {

            manufacturerStatus = `
                <span class="rope-status-ok">
                    ✓ Manufacturer rope satisfies
                    required breaking load
                </span>
            `;

        }
        else {

            manufacturerStatus = `
                <span class="rope-status-warning">
                    ⚠ Manufacturer rope is below
                    required breaking load
                </span>
            `;

        }


        const standardName =
            data.standard === "POWERFORM"
                ? "Powerform"
                : "Indian Standard";


        return `

            Total Weight, M =
            ${num(data.M)} T

            <br>

            Number of Falls, F =
            ${num(data.F, 0)}

            <br>

            Rope Core Type =
            ${data.core ?? "-"}

            <br>

            Rope Grade =
            ${data.grade ?? "-"}

            

            Zp =
            ${num(data.Zp, 2)}

            <br>


            <b>Load per Rope</b><br>

            S = M / F,

            

            S =
            ${num(data.M)} /
            ${num(data.F, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                S = ${num(data.S)} T
            </span>

            <br>


            <b>Required Breaking Strength</b>

            <br>

            Fo = S × Zp

            <br>

            Fo =
            ${num(data.S)} ×
            ${num(data.Zp)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Fo = ${num(data.Fo)} T
            </span>

            <br>


            <b>Required Breaking Load</b>

            <br>

            BL = Fo × 9.81

            <br>

            BL =
            ${num(data.Fo)} × 9.81

            <br>

            Therefore,

            <span class="calculation-result-box">
                BL = ${num(data.BL)} kN
            </span>

            <br>


            <b>Rope Selection</b>

            <br>

            Rope Standard =
            ${standardName}

            <br>

            ${
                data.standard === "POWERFORM"
                    ? `
                        Powerform Type =
                        ${data.powerformType ?? "-"}
                        <br>
                        Powerform Grade =
                        ${data.powerformGrade ?? "-"}
                        <br>
                      `
                    : ""
            }

            <br>

            Required Breaking Load =
            ${num(data.BL)} kN

            <br>


            Recommended Rope Diameter =

            <span class="calculation-result-box">
                ${
                    recommendedDia != null
                        ? num(recommendedDia, 0) + " mm"
                        : "Not Available"
                }
            </span>

            <br>


            Recommended Minimum Breaking Strength =

            <span class="calculation-result-box">
                ${
                    recommendedMBF != null
                        ? num(recommendedMBF) + " kN"
                        : "Not Available"
                }
            </span>

            <br>


            <b>Manufacturer Rope</b>

            <br>

            Manufacturer Rope Diameter =

            ${
                manufacturerDia > 0
                    ? num(manufacturerDia, 0) + " mm"
                    : "Not Given"
            }

            <br>

            Minimum Breaking Strength of Selected Rope =

            ${
                manufacturerMBF != null
                    ? num(manufacturerMBF) + " kN"
                    : "Not Available"
            }

            <br>

            ${manufacturerStatus}

        `;

    }


    set(
        "mh-wire-rope-calculation",
        ropeCalculation(MH, "MH")
    );


    set(
        "ah-wire-rope-calculation",
        ropeCalculation(AH, "AH")
    );

}
function generateSheaveReport(SHEAVE) {

    const MH = SHEAVE.MH;
    const AH = SHEAVE.AH;

    function set(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.innerHTML = value ?? "-";
        }
    }

    function num(value, digits = 2) {
        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);
    }


    // =====================================================
    // PAGE 1 - CALCULATION
    // =====================================================

    function calculationPart1(data) {

        return `


            Wire Rope Diameter, d =
            ${num(data.d, 0)} mm

            <br>

            Main Sheave Factor, Ls =
            ${num(data.Ls, 2)}

            <br>

            Equalizer Sheave Factor, Le =
            ${num(data.Le, 2)}

            <br>

            Rope Construction Factor, Crc =
            ${num(data.Crc, 2)}

            <br><br>


            <b>Main Sheave at Axis</b>

            <br><br>

            Dm = d × Ls × Crc

            <br>

            Dm =
            ${num(data.d, 0)}
            ×
            ${num(data.Ls, 2)}
            ×
            ${num(data.Crc, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                Dm = ${num(data.D, 0)} mm

            </span>

            <br>


            <b>Main Sheave Bottom</b>

            <br>

            Dm' = Dm − d

            <br>

            Dm' =
            ${num(data.D, 0)}
            −
            ${num(data.d, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                Dm' = ${num(data.DM, 0)} mm

            </span>

            <br>


            <b>Equalizer Sheave at Axis</b>

            <br>

            De = Le × d × Crc

            <br>

            De =
            ${num(data.Le, 2)}
            ×
            ${num(data.d, 0)}
            ×
            ${num(data.Crc, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                De = ${num(data.De, 0)} mm

            </span>

            <br>


            <b>Equalizer Sheave Bottom</b>

            <br>

            De' = De − d

            <br>

            De' =
            ${num(data.De, 0)}
            −
            ${num(data.d, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                De' = ${num(data.DE, 0)} mm

            </span>

        `;
    }


    // =====================================================
    // PAGE 2 - SELECTION
    // =====================================================

    function selectionPart2(data) {

        const mainRec = data.mainRecommendation;
        const eqRec = data.eqRecommendation;

        const mainDesignation =
            mainRec
                ? mainRec.designation
                : "Not Available";

        const mainDia =
            mainRec
                ? mainRec.dia
                : null;

        const mainPCD =
            mainRec
                ? mainRec.dia + Number(data.d)
                : null;


        const eqDesignation =
            eqRec
                ? eqRec.designation
                : "Not Available";

        const eqDia =
            eqRec
                ? eqRec.dia
                : null;

        const eqPCD =
            eqRec
                ? eqRec.dia + Number(data.d)
                : null;


        const finalMainPCD =
            Number(data.finalMainPCD) || mainPCD;

        const finalEqPCD =
            Number(data.finalEqPCD) || eqPCD;


        return `

            <b>Recommended Sheave Selection</b>

            <br>

            As per IPSS:1-08-002-18

            <br>


            <b>Main Sheave</b>

            <br>

            Required Main Sheave Diameter =
            ${num(data.D, 0)} mm

            <br>

            Selected Sheave Designation =
            ${mainDesignation}

            <br>

            Selected Main Sheave Diameter =
            ${
                mainDia != null
                    ? num(mainDia, 0) + " mm"
                    : "Not Available"
            }

            <br>

            Recommended Main Sheave PCD =
            ${
                mainPCD != null
                    ? num(mainPCD, 0) + " mm"
                    : "Not Available"
            }

            <br>


            <b>Equalizer Sheave</b>

            <br>

            Required Equalizer Sheave Diameter =
            ${num(data.De, 0)} mm

            <br>

            Selected Sheave Designation =
            ${eqDesignation}

            <br>

            Selected Equalizer Sheave Diameter =
            ${
                eqDia != null
                    ? num(eqDia, 0) + " mm"
                    : "Not Available"
            }

            <br>

            Recommended Equalizer Sheave PCD =
            ${
                eqPCD != null
                    ? num(eqPCD, 0) + " mm"
                    : "Not Available"
            }

            <br>


            <b>Final Selected Sheave PCD</b>

            <br>

            Final Main Sheave PCD =

            <span class="calculation-result-box">

                ${
                    finalMainPCD
                        ? num(finalMainPCD, 2) + " mm"
                        : "Not Available"
                }

            </span>

            <br>

            Final Equalizer Sheave PCD =

            <span class="calculation-result-box">

                ${
                    finalEqPCD
                        ? num(finalEqPCD, 2) + " mm"
                        : "Not Available"
                }

            </span>

        `;
    }


    // =====================================================
    // PAGE 1 → MH + AH
    // =====================================================

    set(
        "mh-sheave-calculation-page1",
        calculationPart1(MH)
    );

    set(
        "ah-sheave-calculation-page1",
        calculationPart1(AH)
    );


    // =====================================================
    // PAGE 2 → MH + AH
    // =====================================================

    set(
        "mh-sheave-calculation-page2",
        selectionPart2(MH)
    );

    set(
        "ah-sheave-calculation-page2",
        selectionPart2(AH)
    );

}
// =====================================================
// ROPE DRUM DIA REPORT
// =====================================================

function generateDrumDiaReport(DRUM_DIA) {

    const MH = DRUM_DIA.MH;
    const AH = DRUM_DIA.AH;


    // =====================================================
    // SET FUNCTION
    // =====================================================

    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML = value ?? "-";
        }
    }


    // =====================================================
    // NUMBER FORMAT
    // =====================================================

    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);
    }


    // =====================================================
    // DRUM DIA CALCULATION
    // =====================================================

    function drumDiaCalculation(data) {

        const manufacturerDia =
            Number(data.manufacturerDia) || 0;

        const finalDia =
            Number(data.finalDia) || 0;


        return `

            <b>Input Data</b>

            <br>

            Wire Rope Diameter, d =
            ${num(data.d, 0)} mm

            <br>

            Rope Drum Factor, Ld =
            ${num(data.Ld, 2)}

            <br>

            Rope Construction Factor, Crc =
            ${num(data.Crc, 2)}

            <br><br>


            <b>Drum Diameter at Axis</b>

            <br>

            Dd = Ld × d × Crc

            <br>

            Dd =
            ${num(data.Ld, 2)}
            ×
            ${num(data.d, 0)}
            ×
            ${num(data.Crc, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                Dd = ${num(data.Dd, 0)} mm

            </span>

            <br><br>


            <b>Drum Diameter at Groove Bottom</b>

            <br>

            Dd' = Dd − d

            <br>

            Dd' =
            ${num(data.Dd, 0)}
            −
            ${num(data.d, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">

                Dd' = ${num(data.DdB, 0)} mm

            </span>

            <br><br>


            <b>Drum Diameter at Shell OD</b>

            <br>

            Drd = Dd' + 2 × (0.4 × d)

            <br>

            Drd =
            ${num(data.DdB, 0)}
            +
            2 × (0.4 × ${num(data.d, 0)})

            <br>

            Therefore,

            <span class="calculation-result-box">

                Drd = ${num(data.Drd, 0)} mm

            </span>

            <br><br>


            <b>Manufacturer Drum Diameter</b>

            <br>

            Manufacturer Selected Drum Diameter =
            ${
                manufacturerDia > 0
                    ? num(manufacturerDia, 0) + " mm"
                    : "Not Provided"
            }

            <br><br>


            <b>Final Selected Drum Diameter</b>

            <br>

            Final Drum Diameter =
            
            <span class="calculation-result-box">

                ${
                    finalDia > 0
                        ? num(finalDia * 1000, 0) + " mm"
                        : "Not Available"
                }

            </span>

        `;
    }


    // =====================================================
    // MH
    // =====================================================

    set(
        "mh-drum-dia-calculation",
        drumDiaCalculation(MH)
    );


    // =====================================================
    // AH
    // =====================================================

    set(
        "ah-drum-dia-calculation",
        drumDiaCalculation(AH)
    );

}
// =====================================================
// ============== ROPE DRUM LENGTH REPORT ==============
// =====================================================

function generateDrumLenReport(DRUM_LEN) {

    const MH = DRUM_LEN.MH;
    const AH = DRUM_LEN.AH;


    // =================================================
    // Helper
    // =================================================

    function set(id, value) {

        const element = document.getElementById(id);

        if (element) {
            element.innerHTML = value ?? "-";
        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);

    }


    // =================================================
    // Drum Length Calculation
    // =================================================

    function drumLengthCalculation(data) {

        // D is stored in meter
        const drumDiaMM =
            Number(data.D) * 1000;

        const manufacturerLength =
            Number(data.manufacturerLength) || 0;

        const finalLength =
            Number(data.finalL) || 0;


        return `



            Lift Height, L =
            ${num(data.L, 2)} m

            <br>

            Number of Falls, F =
            ${num(data.F, 0)}

            <br>

            Number of Rope Drums, k =
            ${num(data.k, 0)}

            <br>

            Drum Diameter, D =
            ${num(drumDiaMM, 0)} mm

            <br>

            Pitch, p =
            ${num(data.p, 0)} mm ;



            Extra Grooves, n =
            ${num(data.em ?? data.ea, 0)}

            <br>

            Ungrooved Length at Center, d2 =
            ${num(data.d2, 0)} mm

            <br>

            Clamp Distance Both Ends d3 =
            ${num(data.d3, 0)} mm

            <br>

            <b>1. No. of Falls per Rope Drum</b>
            <br>

            gk = F / k ;



            gk =
            ${num(data.F, 0)}
            /
            ${num(data.k, 0)}

            <br>

            Therefore,
            <span class="calculation-result-box">
                gk = ${num(data.gk, 0)}
            </span>

            <br>

            <b>2. Active Grooves</b>
            <br>

            g = ceil[ L × gk / (2 × π × D) ]

            <br>

            g = ceil[
            ${num(data.L, 2)}
            ×
            ${num(data.gk, 0)}
            /
            (2 × π × ${num(data.D, 3)})
            ]

            <br>

            Therefore,
            <span class="calculation-result-box">
                g = ${num(data.g, 0)}
            </span>

            <br>

            <b>3. Total Grooves</b>
            <br>

            G = g + n ;



            G =
            ${num(data.g, 0)}
            +
            ${num(data.em ?? data.ea, 0)}

            <br>

            Therefore,
            <span class="calculation-result-box">
                G = ${num(data.G, 0)}
            </span>

            <br>

            <b>4. Grooved Distance :</b>
          

            d1 = 2 × G × p

            <br>

            d1 =
            2 ×
            ${num(data.G, 0)}
            ×
            ${num(data.p, 0)}

            <br>

            Therefore,
            <span class="calculation-result-box">
                d1 = ${num(data.d1, 0)} mm
            </span>

            <br>

            <b>5. Total Calculated Drum Length</b>
            <br>

            TD = d1 + d2 + d3

            <br>

            TD =
            ${num(data.d1, 0)}
            +
            ${num(data.d2, 0)}
            +
            ${num(data.d3, 0)}

            <br>

            Therefore,
            <span class="calculation-result-box">
                TD = ${num(data.TD, 0)} mm
            </span>

            <br>

            <b>6. Manufacturer Selected Drum Length</b>
            <br>

            Manufacturer Drum Length =
            ${
                manufacturerLength > 0
                    ? num(manufacturerLength, 0) + " mm"
                    : "Not Provided"
            }

            <br>

            <b>7. Final Selected Drum Length</b>
            <br>

            Final Drum Length =
            <span class="calculation-result-box">
                ${
                    finalLength > 0
                        ? num(finalLength, 0) + " mm"
                        : "Not Available"
                }
            </span>

        `;
    }


    // =================================================
    // Set Report
    // =================================================

    set(
        "mh-drum-length-calculation",
        drumLengthCalculation(MH)
    );


    set(
        "ah-drum-length-calculation",
        drumLengthCalculation(AH)
    );

}
// =====================================================
// ============== WHEEL LOAD & SELECTION REPORT =========
// =====================================================

function generateWheelReport(WHEEL) {

    const CT = WHEEL.CT;
    const LT = WHEEL.LT;


    // =================================================
    // HELPERS
    // =================================================

    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML =
                value ?? "-";
        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);

    }


    // =================================================
    // RAIL LABEL
    // =================================================

    function railLabel(rail) {

        const labels = {

            "30": "30 lb./yd",
            "60": "60 lb./yd",

            "CR50": "CR : 50",
            "CR60": "CR : 60",
            "CR80": "CR : 80",

            "CR100": "CR : 100",
            "CR120": "CR : 120",
            "CR140": "CR : 140"

        };

        return labels[rail] || "Not Selected";

    }


    // =================================================
    // PAGE 1 — CT WHEEL LOAD
    // =================================================

    function ctWheelLoadCalculation(data) {

        return `

            <b>Input Data</b>
            <br>

            Hook Load, Q = ${num(data.Q, 2)} ton
            <br>

            Crane Girder Weight, G = ${num(data.G, 2)} ton
            <br>

            Hook/Trolley Weight, Q1 = ${num(data.Q1, 2)} ton
            <br>

            Number of Wheels, n = ${num(data.n, 0)}
            <br>

            Wheel Gauge Distance, p = ${num(data.p, 0)} mm
            <br>

            Wheel Base Distance, q = ${num(data.q, 0)} mm
            <br>

            CT Gauge, y = ${num(data.y, 0)} mm
            <br>

            CT Base, z = ${num(data.z, 0)} mm
            <br>

            <b>Maximum Wheel Load</b>
            <br>

            w1 =
            (Q + Q1) × p × q / (y × z)

            <br>

            w1 =
            (${num(data.Q, 2)} + ${num(data.Q1, 2)})
            × ${num(data.p, 0)}
            × ${num(data.q, 0)}
            /
            (${num(data.y, 0)} × ${num(data.z, 0)})

            <br>

            w1 =
            ${num(data.w1, 2)} ton

            <br>

            w2 =
            (G − Q1) / n

            <br>

            w2 =
            (${num(data.G, 2)} − ${num(data.Q1, 2)})
            /
            ${num(data.n, 0)}

            <br>

            w2 =
            ${num(data.w2, 2)} ton

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pmax = ${num(data.P2, 2)} ton
            </span>

            <br>

            <b>Minimum Wheel Load</b>
            <br>

            Pmin = G / n

            <br>

            Pmin =
            ${num(data.G, 2)}
            /
            ${num(data.n, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pmin = ${num(data.P3, 2)} ton
            </span>

        `;
    }


    // =================================================
    // PAGE 1 — LT WHEEL LOAD
    // =================================================

    function ltWheelLoadCalculation(data) {

        return `

            <b>Input Data</b>
            <br>

            Hook Load, Q = ${num(data.Q, 2)} ton
            <br>

            Crane Girder Weight, G = ${num(data.G, 2)} ton
            <br>

            Total Crane Weight, Wc = ${num(data.Wc, 2)} ton
            <br>

            Min Hook Approach, A = ${num(data.A, 2)} m
            <br>

            Max Hook Approach, B = ${num(data.B, 2)} m
            <br>

            Crane Span, S = ${num(data.S, 2)} m
            <br>

            Number of Wheels, n = ${num(data.n, 0)}
            <br>

            <b>Bridge Weight Contribution</b>
            <br>

            Wb = Wc − G

            <br>

            Wb =
            ${num(data.Wc, 2)}
            −
            ${num(data.G, 2)}

            <br>

            Wb =
            ${num(data.Wb, 2)} ton

            <br>

            w1 = Wb / n

            <br>

            w1 =
            ${num(data.Wb, 2)}
            /
            ${num(data.n, 0)}

            <br>

            w1 =
            ${num(data.w1, 2)} ton

            <br>

            <b>Maximum Wheel Load</b>
            <br>

            w2 =
            (G + Q)(S − A)
            /
            ((n/2) × S)

            <br>

            w2 =
            (${num(data.G, 2)} + ${num(data.Q, 2)})
            ×
            (${num(data.S, 2)} − ${num(data.A, 2)})
            /
            ((${num(data.n, 0)}/2) × ${num(data.S, 2)})

            <br>

            w2 =
            ${num(data.w2, 2)} ton

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pmax = ${num(data.P2, 2)} ton
            </span>

            <br>

            <b>Minimum Wheel Load</b>
            <br>

            w3 =
            G × B
            /
            ((n/2) × S)

            <br>

            w3 =
            ${num(data.G, 2)}
            ×
            ${num(data.B, 2)}
            /
            ((${num(data.n, 0)}/2) × ${num(data.S, 2)})

            <br>

            w3 =
            ${num(data.w3, 2)} ton

            <br>

            Pmin = w1 + w3

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pmin = ${num(data.P3, 2)} ton
            </span>

        `;
    }


    // =================================================
    // PAGE 2 — WHEEL SELECTION CALCULATION
    // =================================================

    function wheelSelectionCalculation(data) {

        return `

            <b>Input Parameters</b>
            <br>

            Limiting Wheel Pressure, PL =
            ${num(data.P1, 2)} N/mm²

            <br>

            Top Width, b =
            ${num(data.P4, 0)} mm

            <br>

            Corner Radius, r =
            ${num(data.P5, 0)} mm

            <br>

            Wheel RPM Coefficient, C1 =
            ${num(data.P6, 3)}

            <br>

            Mechanism Coefficient, C2 =
            ${num(data.P7, 3)}

            <br>

            <b>1. Mean Wheel Load</b>
            <br>

            Pmean = (2 × Pmax + Pmin) / 3

            <br>

            Pmean =
            (2 × ${num(data.P2, 2)}
            +
            ${num(data.P3, 2)}) / 3

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pmean = ${num(data.A1, 2)} ton
            </span>

            <br>

            <b>2. Mean Load</b>
            <br>

            Fmean = 9.81 × Pmean

            <br>

            Fmean =
            9.81 × ${num(data.A1, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Fmean = ${num(data.B1, 2)} kN
            </span>

            <br>

            <b>3. Useful Rail Width</b>
            <br>

            w = b − (4/3) × r

            <br>

            w =
            ${num(data.P4, 0)}
            −
            (4/3) × ${num(data.P5, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                w = ${num(data.C1, 2)} mm
            </span>

            <br>

            <b>4. Calculated Wheel Diameter</b>
            <br>

            D =
            (1000 × Fmean)
            /
            (PL × w × C1 × C2)

            <br>

            D =
            (1000 × ${num(data.B1, 2)})
            /
            (${num(data.P1, 2)}
            ×
            ${num(data.C1, 2)}
            ×
            ${num(data.P6, 3)}
            ×
            ${num(data.P7, 3)})

            <br>

            Therefore,

            <span class="calculation-result-box">
                D = ${num(data.D1, 2)} mm
            </span>

        `;
    }


    // =================================================
    // PAGE 3 — RECOMMENDATION
    // =================================================

    function wheelRecommendation(data) {

        const recommendation =
            data.recommendation;

        const selectedRail =
            railLabel(data.railSize);

        const recommendedSize =
            recommendation
                ? recommendation.size
                : "Not Available";

        const recommendedDia =
            recommendation
                ? recommendation.dia
                : null;

        const manufacturerDia =
            Number(data.manufacturerDia) || 0;

        const finalDia =
            Number(data.finalDia) || 0;


        return `

            <b>Wheel Selection Basis</b>
            <br>

            Standard:
            IPSS:1-08-001-18

            <br>

            Selected Rail Size =
            ${selectedRail}

            <br>

            Calculated Required Wheel Diameter =
            ${num(data.D1, 2)} mm

            <br>

            <b>Recommended Wheel</b>
            <br>

            Recommended Wheel Size =
            ${recommendedSize}

            <br>

            Recommended Wheel Diameter =
            ${
                recommendedDia !== null
                    ? num(recommendedDia, 0) + " mm"
                    : "Not Available"
            }

            <br>

            <b>Manufacturer Selected Wheel</b>
            <br>

            Manufacturer Wheel Diameter =
            ${
                manufacturerDia > 0
                    ? num(manufacturerDia, 0) + " mm"
                    : "Not Provided"
            }

            <br>

            <b>Final Selected Wheel</b>
            <br>

            Final Wheel Diameter =

            <span class="calculation-result-box">
                ${
                    finalDia > 0
                        ? num(finalDia, 2) + " mm"
                        : "Not Available"
                }
            </span>

        `;
    }


    // =================================================
    // SET PAGE 1
    // =================================================

    set(
        "ct-wheel-load-calculation",
        ctWheelLoadCalculation(CT)
    );

    set(
        "lt-wheel-load-calculation",
        ltWheelLoadCalculation(LT)
    );


    // =================================================
    // SET PAGE 2
    // =================================================

    set(
        "ct-wheel-selection-calculation",
        wheelSelectionCalculation(CT)
    );

    set(
        "lt-wheel-selection-calculation",
        wheelSelectionCalculation(LT)
    );


    // =================================================
    // SET PAGE 3
    // =================================================

    set(
        "ct-wheel-recommendation-calculation",
        wheelRecommendation(CT)
    );

    set(
        "lt-wheel-recommendation-calculation",
        wheelRecommendation(LT)
    );

}
// =====================================================
// ================ GEARBOX REPORT =====================
// =====================================================

function generateGearboxReport(GEARBOX) {

    const MH = GEARBOX.MH;
    const AH = GEARBOX.AH;
    const CT = GEARBOX.CT;
    const LT = GEARBOX.LT;


    // =================================================
    // HELPERS
    // =================================================

    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML =
                value ?? "-";
        }

    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);

    }


    // =================================================
    // HOIST GEARBOX CALCULATION
    // =================================================

    function hoistGearboxCalculation(data) {

        const drumDiaMM =
            Number(data.D) * 1000;


        return `

            <b>Input Data</b>
            <br>

            Rated Speed, V =
            ${num(data.V, 2)} m/min
            <br>

            Motor Speed, N =
            ${num(data.N, 0)} rpm
            <br>

            Drum Diameter, D =
            ${num(drumDiaMM, 0)} mm
            <br>

            Number of Falls, F =
            ${num(data.F, 0)}
            <br>

            Number of Rope Drums, k =
            ${num(data.Fk, 0)}
            <br>

            Selected Motor Power, P =
            ${num(data.P, 2)} kW
            <br>

            Duty Factor, DF =
            ${num(data.DF, 2)}

            <br>

            <b>1. Required Gearbox Power</b>
            <br>

            Pg = P × DF

            <br>

            Pg =
            ${num(data.P, 2)}
            ×
            ${num(data.DF, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pg = ${num(data.Pg, 2)} kW
            </span>

            <br>

            <b>2. Falls per Rope Drum</b>
            <br>

            rk = F / k

            <br>

            rk =
            ${num(data.F, 0)}
            /
            ${num(data.Fk, 0)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                rk = ${num(data.rk, 2)}
            </span>

            <br>

            <b>3. Required Gear Ratio</b>
            <br>

            r =
            (2 × π × N × D)
            /
            (rk × V)

            <br>

            r =
            (2 × π ×
            ${num(data.N, 0)}
            ×
            ${num(data.D, 4)})
            /
            (${num(data.rk, 2)}
            ×
            ${num(data.V, 2)})

            <br>

            Therefore,

            <span class="calculation-result-box">
                Required Gear Ratio = ${num(data.r, 2)}
            </span>

            <br>

            <b>4. Manufacturer Gear Ratio</b>
            <br>

            Manufacturer Gear Ratio =
            ${
                Number(data.manufacturerRatio) > 0
                    ? num(data.manufacturerRatio, 2)
                    : "Not Provided"
            }

            <br>

            <b>5. Final Gear Ratio</b>
            <br>

            Final Gear Ratio =

            <span class="calculation-result-box">
                ${num(data.finalRatio, 2)}
            </span>

        `;
    }


    // =================================================
    // TRAVEL GEARBOX CALCULATION
    // =================================================

    function travelGearboxCalculation(data) {

        const wheelDiaMM =
            Number(data.D) * 1000;


        return `

            <b>Input Data</b>
            <br>

            Rated Speed, V =
            ${num(data.V, 2)} m/min
            <br>

            Motor Speed, N =
            ${num(data.N, 0)} rpm
            <br>

            Wheel Diameter, D =
            ${num(wheelDiaMM, 0)} mm
            <br>

            Selected Motor Power, P =
            ${num(data.P, 2)} kW
            <br>

            Duty Factor, DF =
            ${num(data.DF, 2)}

            <br>

            <b>1. Required Gearbox Power</b>
            <br>

            Pg = P × DF

            <br>

            Pg =
            ${num(data.P, 2)}
            ×
            ${num(data.DF, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Pg = ${num(data.Pg, 2)} kW
            </span>

            <br>

            <b>2. Required Gear Ratio</b>
            <br>

            r =
            (π × N × D) / V

            <br>

            r =
            (π ×
            ${num(data.N, 0)}
            ×
            ${num(data.D, 4)})
            /
            ${num(data.V, 2)}

            <br>

            Therefore,

            <span class="calculation-result-box">
                Required Gear Ratio = ${num(data.r, 2)}
            </span>

            <br>

            <b>3. Manufacturer Gear Ratio</b>
            <br>

            Manufacturer Gear Ratio =
            ${
                Number(data.manufacturerRatio) > 0
                    ? num(data.manufacturerRatio, 2)
                    : "Not Provided"
            }

            <br>

            <b>4. Final Gear Ratio</b>
            <br>

            Final Gear Ratio =

            <span class="calculation-result-box">
                ${num(data.finalRatio, 2)}
            </span>

        `;
    }


    // =================================================
    // PAGE 1 — MH + AH
    // =================================================

    set(
        "mh-gearbox-calculation",
        hoistGearboxCalculation(MH)
    );

    set(
        "ah-gearbox-calculation",
        hoistGearboxCalculation(AH)
    );


    // =================================================
    // PAGE 2 — CT + LT
    // =================================================

    set(
        "ct-gearbox-calculation",
        travelGearboxCalculation(CT)
    );

    set(
        "lt-gearbox-calculation",
        travelGearboxCalculation(LT)
    );

}
function generateBarrelCouplingReport(BARREL_COUPLING) {

    const MH = BARREL_COUPLING.MH1;
    const AH = BARREL_COUPLING.AH1;


    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML =
                value ?? "-";
        }
    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);
    }


    // =====================================================
    // ================= PAGE 1 ============================
    // ===== CALCULATION STEP 1 TO 5 ======================
    // =====================================================

    function calculationPage1(data) {

        const drumDiaMM =
            Number(data.d) * 1000;


        return `

            <b>Input Data</b>
            <br>

            Hook Load, Q =
            ${num(data.Q, 2)} ton
            <br>

            Hook/Trolley Weight, Q1 =
            ${num(data.Q1, 2)} ton
            <br>

            Additional Weight, Q1t =
            ${num(data.Q1t, 2)} ton
            <br>

            Selected Motor Power, Ps =
            ${num(data.Ps, 2)} kW
            <br>

            Motor Speed, N =
            ${num(data.N, 0)} rpm
            <br>

            Gearbox Ratio, r =
            ${num(data.r, 2)}
            <br>

            Drum Diameter, d =
            ${num(drumDiaMM, 0)} mm
            <br>

            Transmission Ratio, ir =
            ${num(data.ir, 2)}
            <br>

            Service Factor, K1 =
            ${num(data.K1, 2)}
            <br>

            Operating Factor, K2 =
            ${num(data.K2, 2)}
            <br>

            Drum Self Mass, Md =
            ${num(data.Md, 0)} kg
            <br>

            Number of Rope Drums, Mrd =
            ${num(data.Mrd, 0)}

            <br>


            <b>1. Net Suspended Mass</b>
            <br>

            Mnet =
            (Q + Q1 + Q1t) × 1000
            <br>

            Mnet =
            (${num(data.Q, 2)}
            +
            ${num(data.Q1, 2)}
            +
            ${num(data.Q1t, 2)})
            × 1000
            <br>

            <span class="calculation-result-box">
                Mnet = ${num(data.Mnet, 2)} kg
            </span>

            <br>


            <b>2. Net Suspended Weight</b>
            <br>

            Wnet = 9.81 × Mnet
            <br>

            Wnet =
            9.81 × ${num(data.Mnet, 2)}
            <br>

            <span class="calculation-result-box">
                Wnet = ${num(data.Wnet, 2)} N
            </span>

            <br>


            <b>3. Drum Speed ;</b>
            

            n = N / r
            <br>

            n =
            ${num(data.N, 0)}
            /
            ${num(data.r, 2)}
            <br>

            <span class="calculation-result-box">
                n = ${num(data.n, 3)} rpm
            </span>

            <br>


            <b>4. Drum Self Weight</b>
            <br>

            Wd = 9.81 × Md
            <br>

            Wd =
            9.81 × ${num(data.Md, 0)}
            <br>

            <span class="calculation-result-box">
                Wd = ${num(data.Wd, 2)} N
            </span>

            


            

        `;
    }


    // =====================================================
    // ================= PAGE 2 ============================
    // ===== CALCULATION STEP 6 TO 9 ======================
    // =====================================================

    function calculationPage2(data) {

        return `
		
		    <b>5. Static Radial Force</b>
            <br>

            F =
            Wnet /
            (ir × K2 × Mrd)
            <br>

            F =
            ${num(data.Wnet, 2)}
            /
            (${num(data.ir, 2)}
            ×
            ${num(data.K2, 2)}
            ×
            ${num(data.Mrd, 0)})
            <br>

            <span class="calculation-result-box">
                F = ${num(data.F, 2)} N
            </span>
			<br><br>

            <b>6. Required Coupling Torque</b>
            <br>

            T =
            (975 × 9.81 × Ps × K1) /
            (n × Mrd)
            <br>

            T =
            (975 × 9.81 ×
            ${num(data.Ps, 2)} ×
            ${num(data.K1, 2)})
            /
            (${num(data.n, 3)} ×
            ${num(data.Mrd, 0)})
            <br>

            <span class="calculation-result-box">
                T = ${num(data.T, 2)} Nm
            </span>

            <br><br>


            <b>7. Torque Due to Radial Load</b>
            <br>

            Tc =
            F × d × K1 / 2
            <br>

            Tc =
            ${num(data.F, 2)}
            ×
            ${num(data.d, 4)}
            ×
            ${num(data.K1, 2)}
            /
            2
            <br>

            <span class="calculation-result-box">
                Tc = ${num(data.Tc, 2)} Nm
            </span>

            <br><br>


            <b>8. Static Force for Coupling</b>
            <br>

            Fp =
            Wnet /
            (Mrd × ir × K2)
            <br>

            Fp =
            ${num(data.Wnet, 2)}
            /
            (${num(data.Mrd, 0)}
            ×
            ${num(data.ir, 2)}
            ×
            ${num(data.K2, 2)})
            <br>

            <span class="calculation-result-box">
                Fp = ${num(data.Fp, 2)} N
            </span>

            <br><br>


            <b>9. Required Radial Load</b>
            <br>

            Fr =
            (Fp / 2) + (Wd / 2)
            <br>

            Fr =
            (${num(data.Fp, 2)} / 2)
            +
            (${num(data.Wd, 2)} / 2)
            <br>

            <span class="calculation-result-box">
                Fr = ${num(data.Fr, 2)} N
            </span>

        `;
    }


    // =====================================================
    // ================= PAGE 3 ============================
    // ============== COUPLING SELECTION ===================
    // =====================================================

    function selection(data) {

        const recommendation =
            data.recommendation;


        const selectedSize =
            recommendation
                ? recommendation.size
                : "Not Safe";


        const ratedTorque =
            recommendation
                ? recommendation.Tmax / 1000
                : null;


        const ratedRadial =
            recommendation
                ? recommendation.Fr / 1000
                : null;


        return `

            <b>Selection Standard / Basis</b>
            <br>

            Barrel Coupling Master Table
            <br><br>


            <b>Required Coupling Torque</b>
            <br>

            Required Torque =
            ${num(data.T, 2)} Nm
            <br>

            Required Torque =
            ${num(data.T / 1000, 2)} kNm

            <br><br>


            <b>Required Radial Load</b>
            <br>

            Required Radial Load =
            ${num(data.Fr, 2)} N
            <br>

            Required Radial Load =
            ${num(data.Fr / 1000, 2)} kN

            <br><br>


            <b>Selection Condition</b>
            <br>

            Coupling Torque Capacity ≥ Required Torque
            <br>

            Coupling Radial Capacity ≥ Required Radial Load

            <br><br>


            <b>Selected Barrel Coupling</b>
            <br>

            Selected Coupling Size =
            ${selectedSize}
            <br>

            Rated Torque =
            ${
                ratedTorque !== null
                    ? num(ratedTorque, 2) + " kNm"
                    : "Not Available"
            }
            <br>

            Rated Radial Load =
            ${
                ratedRadial !== null
                    ? num(ratedRadial, 2) + " kN"
                    : "Not Available"
            }

            <br><br>


            <b>Capacity Check</b>
            <br>

            Torque Check:
            ${
                recommendation
                    ? num(recommendation.Tmax / 1000, 2)
                      + " kNm ≥ "
                      + num(data.T / 1000, 2)
                      + " kNm — SAFE"
                    : "NOT AVAILABLE"
            }

            <br>

            Radial Load Check:
            ${
                recommendation
                    ? num(recommendation.Fr / 1000, 2)
                      + " kN ≥ "
                      + num(data.Fr / 1000, 2)
                      + " kN — SAFE"
                    : "NOT AVAILABLE"
            }

            <br><br>


            <b>Final Selected Barrel Coupling</b>
            <br>

            <span class="calculation-result-box">
                ${selectedSize}
            </span>

        `;
    }


    // =====================================================
    // ================= SET PAGE 1 ========================
    // =====================================================

    set(
        "mh-barrel-coupling-calculation-page1",
        calculationPage1(MH)
    );

    set(
        "ah-barrel-coupling-calculation-page1",
        calculationPage1(AH)
    );


    // =====================================================
    // ================= SET PAGE 2 ========================
    // =====================================================

    set(
        "mh-barrel-coupling-calculation-page2",
        calculationPage2(MH)
    );

    set(
        "ah-barrel-coupling-calculation-page2",
        calculationPage2(AH)
    );


    // =====================================================
    // ================= SET PAGE 3 ========================
    // =====================================================

    set(
        "mh-barrel-coupling-selection",
        selection(MH)
    );

    set(
        "ah-barrel-coupling-selection",
        selection(AH)
    );
}
// =====================================================
// ============ ROPE DRUM STRESS REPORT ================
// =====================================================

function generateRopeDrumStressReport(ROPE_DRUM_STRESS) {

    const MH = ROPE_DRUM_STRESS.MH;
    const AH = ROPE_DRUM_STRESS.AH;


    // =====================================================
    // ================= HELPER ===========================
    // =====================================================

    function set(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.innerHTML =
                value ?? "-";
        }
    }


    function num(value, digits = 2) {

        const n = Number(value);

        if (!Number.isFinite(n)) {
            return "-";
        }

        return n.toFixed(digits);
    }


    // =====================================================
    // ================= PAGE 1 ============================
    // ===== INPUT + CRUSHING STRESS ======================
    // =====================================================

    function calculationPage1(data) {

        return `


            Hook Load, Q =
            ${num(data.Qs, 2)} ton
            <br>

            Hook/Trolley Weight, Q1 =
            ${num(data.Q1s, 2)} ton
            <br>

            Additional Weight, Q1t =
            ${num(data.Q1st, 2)} ton
            <br>

            Outer Drum Diameter, D =
            ${num(data.Ds, 2)} cm
            <br>

            Inner Drum Diameter, d =
            ${num(data.ds, 2)} cm
            <br>

            Rope Drum Length, L =
            ${num(data.Ls, 2)} cm
            <br>

            Number of Falls, N =
            ${num(data.Ns, 0)}
            <br>

            Groove Pitch, p =
            ${num(data.ps, 2)} cm
            <br>

            Thickness below Groove, t =
            ${num(data.ts, 2)} cm
            <br>

            Drum Self Mass, Ws =
            ${num(data.Ws, 2)} kg
            <br>

            Drum PCD,
            PCD =
            ${num(data.PCDs * 100, 2)} cm

            <br>


            <b>1. Crushing Stress</b>
            <br>

            σcr =
            (Q + Q1 + Q1t) × 1000 /
            (N × p × t)

            <br>

            σcr =
            (${num(data.Qs, 2)}
            +
            ${num(data.Q1s, 2)}
            +
            ${num(data.Q1st, 2)})
            × 1000
            /
            (${num(data.Ns, 0)}
            ×
            ${num(data.ps, 2)}
            ×
            ${num(data.ts, 2)})

            <br>

            <span class="calculation-result-box">
                σcr = ${num(data.scrs, 2)} kg/cm²
            </span>

            <br>


            <b>Crushing Stress Check</b>
            <br>

            Permissible Crushing Stress =
            ${num(
                data.permissibleCrushingStress,
                0
            )} kg/cm²

            <br>

            Calculated Crushing Stress =
            ${num(data.scrs, 2)} kg/cm²

            <br>

            ${
                Number(data.scrs) <=
                Number(data.permissibleCrushingStress)
                    ? `<span class="calculation-result-box">
                        Crushing Stress = SAFE
                       </span>`
                    : `<span class="calculation-result-box">
                        Crushing Stress = UNSAFE
                       </span>`
            }
			<br>
			<b>2. Load per Rope Fall</b>
            <br>

            fs =
            (Q + Q1 + Q1t) × 1000 / N

            <br>

            fs =
            (${num(data.Qs, 2)}
            +
            ${num(data.Q1s, 2)}
            +
            ${num(data.Q1st, 2)})
            × 1000
            /
            ${num(data.Ns, 0)}

            <br>

            <span class="calculation-result-box">
                fs = ${num(data.fs, 2)} N
            </span>
			
			<br>
			 <b>3. Total Load for Beam Action</b>
            <br>

            Ps = 2 × fs

            

            Ps =
            2 × ${num(data.fs, 2)}

            <br>

            <span class="calculation-result-box">
                Ps = ${num(data.Ps, 2)} N
            </span>

           
			
			

        `;
    }


    // =====================================================
    // ================= PAGE 2 ============================
    // ===== BENDING + COMBINED NORMAL ===================
    // =====================================================

    function calculationPage2(data) {

        return `

           


        


            <b>4. Bending Moment</b>
            <br>

            Ms =
            (Ps × L) / 4
            +
            (Ws × L) / 8

            <br>

            Ms =
            (${num(data.Ps, 2)}
            ×
            ${num(data.Ls, 2)})
            / 4
            +
            (${num(data.Ws, 2)}
            ×
            ${num(data.Ls, 2)})
            / 8

            <br>

            <span class="calculation-result-box">
                Ms = ${num(data.Ms, 2)}
            </span>

            <br>


            <b>5. Second Moment of Area</b>
            <br>

            Is =
            π / 64 × (D⁴ − d⁴)

            <br>

            Is =
            π / 64 ×
            (
            ${num(data.Ds, 2)}⁴
            −
            ${num(data.ds, 2)}⁴
            )

            <br>

            <span class="calculation-result-box">
                Is = ${num(data.Is, 2)} cm⁴
            </span>

            <br>


            <b>6. Section Modulus</b>
            <br>

            Zs = Is / (D / 2)

            <br>

            Zs =
            ${num(data.Is, 2)}
            /
            (${num(data.Ds, 2)} / 2)

            <br>

            <span class="calculation-result-box">
                Zs = ${num(data.Zs, 2)} cm³
            </span>

            <br>


            <b>7. Bending Stress</b>
            <br>

            σb = Ms / Zs

            <br>

            σb =
            ${num(data.Ms, 2)}
            /
            ${num(data.Zs, 2)}

            <br>

            <span class="calculation-result-box">
                σb = ${num(data.sbs, 2)} kg/cm²
            </span>

            <br>


            <b>8. Combined Normal Stress</b>
            <br>

            σc =
            √(σcr² + σb²)

            <br>

            σc =
            √(
            ${num(data.scrs, 2)}²
            +
            ${num(data.sbs, 2)}²
            )

            <br>

            <span class="calculation-result-box">
                σc = ${num(data.scs, 2)} kg/cm²
            </span>
			<br>
			<b>9. Torsional Moment</b>
            <br>

            Ts =
            Ps × (PCD / 2) × 100

            <br>

            Ts =
            ${num(data.Ps, 2)}
            ×
            (${num(data.PCDs, 4)} / 2)
            × 100

            <br>

            <span class="calculation-result-box">
                Ts = ${num(data.Ts, 2)}
            </span>


        `;
    }


    // =====================================================
    // ================= PAGE 3 ============================
    // ===== TORSION + FINAL COMBINED STRESS ==============
    // =====================================================

    function calculationPage3(data) {

        return `

            


            <b>10. Polar Moment of Inertia</b>
            <br>

            Js =
            π / (16 × D)
            ×
            (D⁴ − d⁴)

            <br>

            Js =
            π /
            (16 × ${num(data.Ds, 2)})
            ×
            (
            ${num(data.Ds, 2)}⁴
            −
            ${num(data.ds, 2)}⁴
            )

            <br>

            <span class="calculation-result-box">
                Js = ${num(data.Js, 2)} cm³
            </span>

            <br>


            <b>11. Torsional Stress</b>
            <br>

            τ =
            Ts / Js

            <br>

            τ =
            ${num(data.Ts, 2)}
            /
            ${num(data.Js, 2)}

            <br>

            <span class="calculation-result-box">
                τ = ${num(data.taus, 2)} kg/cm²
            </span>

            <br>

            <b>12. Final Combined Stress</b>
            <br>

            σcomb =
            √(σc² + 3τ²)

            <br>

            σcomb =
            √(
            ${num(data.scs, 2)}²
            +
            3 ×
            ${num(data.taus, 2)}²
            )

            <br>

            <span class="calculation-result-box">
                σcomb = ${num(data.combs, 0)} kg/cm²
            </span>

            <br>


            <b>13. Rope Drum Strength Criteria</b>
            <br>

            Mechanism Classification =
            ${data.mechanismClass || "Not Available"}

            <br>

            E-250 Permissible Stress =
            ${num(data.materialE250Stress, 0)}
            kg/cm²

            <br>

            E-350 Permissible Stress =
            ${num(data.materialE350Stress, 0)}
            kg/cm²

            <br>

            Selected Permissible Crushing Stress =
            ${num(data.permissibleCrushingStress, 0)}
            kg/cm²

            <br>


            <b>Final Crushing Stress Check</b>
            <br>

            Calculated σcr =
            ${num(data.scrs, 2)} kg/cm²

            <br>

            Permissible σcr =
            ${num(data.permissibleCrushingStress, 0)}
            kg/cm²

            <br>

            ${
                Number(data.scrs) <=
                Number(data.permissibleCrushingStress)
                    ? `<span class="calculation-result-box">
                        Crushing Stress = SAFE
                       </span>`
                    : `<span class="calculation-result-box">
                        Crushing Stress = UNSAFE
                       </span>`
            }

            <br>


            <b>Final Combined Stress</b>
            <br>

            <span class="calculation-result-box">
                σcomb = ${num(data.combs, 0)} kg/cm²
            </span>

        `;
    }


    // =====================================================
    // ================= SET PAGE 1 ========================
    // =====================================================

    set(
        "mh-rope-drum-stress-page1",
        calculationPage1(MH)
    );

    set(
        "ah-rope-drum-stress-page1",
        calculationPage1(AH)
    );


    // =====================================================
    // ================= SET PAGE 2 ========================
    // =====================================================

    set(
        "mh-rope-drum-stress-page2",
        calculationPage2(MH)
    );

    set(
        "ah-rope-drum-stress-page2",
        calculationPage2(AH)
    );


    // =====================================================
    // ================= SET PAGE 3 ========================
    // =====================================================

    set(
        "mh-rope-drum-stress-page3",
        calculationPage3(MH)
    );

    set(
        "ah-rope-drum-stress-page3",
        calculationPage3(AH)
    );
}