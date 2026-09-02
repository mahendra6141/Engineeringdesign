// =====================================================
// ENGINEERING ASSISTANT
// =====================================================

const assistantBody =
    document.getElementById("assistantBody");


// =====================================================
// TOGGLE
// =====================================================

function toggleAssistant() {

    const panel =
        document.getElementById("assistantPanel");

    const btn =
        document.getElementById("assistantBtn");


    panel.classList.toggle("active");


    if (panel.classList.contains("active")) {

        btn.style.display = "none";

        showCategories();

    } else {

        btn.style.display = "flex";

    }

}


// =====================================================
// MAIN CATEGORIES
// =====================================================

function showCategories() {

    assistantBody.innerHTML = `

        <div class="assistant-item"
             onclick="showBasicInput()">

            <span>🏗 Basic Crane Input</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showHoistAssistant()">

            <span>⚡ Hoist Motor</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showTravelAssistant()">

            <span>🚋 Travel Motion</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showBrakeAssistant()">

            <span>🛑 Brake</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showRopeAssistant()">

            <span>🪢 Wire Rope</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showSheaveAssistant()">

            <span>⚙️ Sheave</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showDrumDiaAssistant()">

            <span>🥁 Rope Drum Dia</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showDrumLengthAssistant()">

            <span>📏 Rope Drum Length</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showWheelAssistant()">

            <span>🛞 Wheel Load & Selection</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showGearboxAssistant()">

            <span>⚙️ Gear Box</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showBarrelCouplingAssistant()">

            <span>🔗 Barrel Coupling</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showBufferAssistant()">

            <span>🛑 Buffers</span>
            <span>➜</span>

        </div>


        <div class="assistant-item"
             onclick="showStressAssistant()">

            <span>📐 Rope Drum Stress</span>
            <span>➜</span>

        </div>

    `;

}
function showBasicInput() {

    assistantBody.innerHTML = `

        <div class="menuItem"
             onclick="showCategories()">

            ⬅ Back

        </div>


        <div class="helpTitle">

            🏗 Basic Crane Input

        </div>


        <div class="parameter">

            <h3>Basic Crane Input</h3>

            <p>
                This section contains the basic
                crane design inputs.
            </p>

        </div>

    `;

}
// =====================================================
// ================= HOIST ASSISTANT ====================
// =====================================================

function showHoistAssistant() {

    assistantBody.innerHTML = `

        <!-- BACK -->
        <div class="menuItem" onclick="showCategories()">
            ⬅ Back
        </div>


        <!-- TITLE -->
        <div class="helpTitle">
            ⚡ Hoist Motor Design
        </div>


        <!-- =================================================
             OVERVIEW
        ================================================== -->

        <div class="parameter">

            <h3>📌 Calculation Overview</h3>

            <p>
                The hoist motor is selected based on the total
                lifted load, hoisting speed, mechanical efficiency,
                service factor, electrical power margin and
                motor derating factor.
            </p>

            <p>
                The calculation is performed separately for:
            </p>

            <ul>
                <li><b>MH</b> – Main Hoist</li>
                <li><b>AH</b> – Auxiliary Hoist</li>
            </ul>

        </div>


        <!-- =================================================
             TOTAL WEIGHT
        ================================================== -->

        <div class="parameter">

            <h3>1. Total Hoisting Weight (M)</h3>

            <p>
                <b>Meaning :</b>
                Total mass that has to be lifted by the hoisting
                mechanism.
            </p>

            <p>
                The total mass includes the safe working load,
                bottom block including rope weight and tong mass.
            </p>

            <div class="assistant-formula">

                <b>Formula</b><br><br>

                M = Q + Q1 + Q2

            </div>


            <p><b>Where :</b></p>

            <p>
                Q = Safe Working Load
            </p>

            <p>
                Q1 = Bottom Block Weight including Rope Weight
            </p>

            <p>
                Q2 = Mass of Tong
            </p>


            <div class="assistant-calculation">

                <b>Current MH Calculation</b><br><br>

                Q =
                ${getAssistantValue("mh_q")} Ton<br>

                Q1 =
                ${getAssistantValue("mh_q1")} Ton<br>

                Q2 =
                ${getAssistantValue("mh_q2")} Ton<br><br>

                M =
                ${getAssistantValue("mh_q")}
                +
                ${getAssistantValue("mh_q1")}
                +
                ${getAssistantValue("mh_q2")}

                <br><br>

                <b>
                    M =
                    ${getAssistantHoistResult("mh_M")}
                    Ton
                </b>

            </div>


            <div class="assistant-calculation">

                <b>Current AH Calculation</b><br><br>

                Q =
                ${getAssistantValue("ah_q")} Ton<br>

                Q1 =
                ${getAssistantValue("ah_q1")} Ton<br>

                Q2 =
                ${getAssistantValue("ah_q2")} Ton<br><br>

                M =
                ${getAssistantValue("ah_q")}
                +
                ${getAssistantValue("ah_q1")}
                +
                ${getAssistantValue("ah_q2")}

                <br><br>

                <b>
                    M =
                    ${getAssistantHoistResult("ah_M")}
                    Ton
                </b>

            </div>


            <p>
                <b>Unit :</b> Ton
            </p>

        </div>


        <!-- =================================================
             EFFICIENCY
        ================================================== -->

        <div class="parameter">

            <h3>2. Overall Mechanical Efficiency (E)</h3>

            <p>
                <b>Meaning :</b>
                Overall efficiency of the hoisting transmission
                system considering gear stages and pulley losses.
            </p>


            <div class="assistant-formula">

                <b>Formula</b><br><br>

                E = (0.985)<sup>n</sup>
                ×
                (0.99)<sup>m</sup>

            </div>


            <p><b>Where :</b></p>

            <p>
                n = Number of gear stages
            </p>

            <p>
                m = Pulley count
            </p>

            <p>
                0.985 = Assumed efficiency per gear stage
            </p>

            <p>
                0.99 = Assumed efficiency per pulley
            </p>


            <div class="assistant-calculation">

                <b>MH Calculation</b><br><br>

                n =
                ${getAssistantValue("mh_n")}<br>

                m =
                ${getAssistantValue("mh_m")}<br><br>

                E =
                (0.985)<sup>${getAssistantValue("mh_n")}</sup>
                ×
                (0.99)<sup>${getAssistantValue("mh_m")}</sup>

                <br><br>

                <b>
                    E =
                    ${getAssistantHoistResult("mh_E")}
                </b>

            </div>


            <div class="assistant-calculation">

                <b>AH Calculation</b><br><br>

                n =
                ${getAssistantValue("ah_n")}<br>

                m =
                ${getAssistantValue("ah_m")}<br><br>

                E =
                (0.985)<sup>${getAssistantValue("ah_n")}</sup>
                ×
                (0.99)<sup>${getAssistantValue("ah_m")}</sup>

                <br><br>

                <b>
                    E =
                    ${getAssistantHoistResult("ah_E")}
                </b>

            </div>


            <p>
                <b>Unit :</b> -
            </p>

        </div>


        <!-- =================================================
             MECHANICAL POWER
        ================================================== -->

        <div class="parameter">

            <h3>3. Mechanical Power (Pmech)</h3>

            <p>
                <b>Meaning :</b>
                Mechanical power required at the hoisting
                mechanism before applying service factor,
                electrical margin and motor derating.
            </p>


            <div class="assistant-formula">

                <b>Formula</b><br><br>

                Pmech =
                M × V
                /
                (6.12 × E)

            </div>


            <p><b>Where :</b></p>

            <p>
                M = Total hoisting weight in Ton
            </p>

            <p>
                V = Hoisting speed in m/min
            </p>

            <p>
                E = Overall mechanical efficiency
            </p>

            <p>
                6.12 = Conversion constant for Ton and
                m/min to kW
            </p>


            <div class="assistant-calculation">

                <b>MH Calculation</b><br><br>

                M =
                ${getAssistantHoistResult("mh_M")} Ton<br>

                V =
                ${getAssistantValue("mh_v")} m/min<br>

                E =
                ${getAssistantHoistResult("mh_E")}<br><br>

                Pmech =
                M × V /
                (6.12 × E)

                <br><br>

                Pmech =
                ${getAssistantHoistResult("mh_M")}
                ×
                ${getAssistantValue("mh_v")}
                /
                (6.12 ×
                ${getAssistantHoistResult("mh_E")})

                <br><br>

                <b>
                    Pmech =
                    ${getAssistantHoistResult("mh_Pmech")}
                    kW
                </b>

            </div>


            <div class="assistant-calculation">

                <b>AH Calculation</b><br><br>

                M =
                ${getAssistantHoistResult("ah_M")} Ton<br>

                V =
                ${getAssistantValue("ah_v")} m/min<br>

                E =
                ${getAssistantHoistResult("ah_E")}<br><br>

                Pmech =
                M × V /
                (6.12 × E)

                <br><br>

                <b>
                    Pmech =
                    ${getAssistantHoistResult("ah_Pmech")}
                    kW
                </b>

            </div>


            <p>
                <b>Unit :</b> kW
            </p>

        </div>


        <!-- =================================================
             REQUIRED MOTOR POWER
        ================================================== -->

        <div class="parameter">

            <h3>4. Required Motor Power (Pele)</h3>

            <p>
                <b>Meaning :</b>
                Electrical motor power required after applying
                the service factor, electrical power margin and
                motor derating factor.
            </p>


            <div class="assistant-formula">

                <b>Formula</b><br><br>

                Pele =
                Pmech × S ×
                (1 + Margin / 100)
                /
                Camb

            </div>


            <p><b>Where :</b></p>

            <p>
                Pmech = Mechanical Power
            </p>

            <p>
                S = Service Factor
            </p>

            <p>
                Margin = Electrical Power Margin (%)
            </p>

            <p>
                Camb = Motor Derating Factor
            </p>


            <div class="assistant-calculation">

                <b>MH Calculation</b><br><br>

                Pmech =
                ${getAssistantHoistResult("mh_Pmech")} kW<br>

                S =
                ${getAssistantServiceFactor("mh")}<br>

                Margin =
                ${getAssistantValue("mh_power_margin")} %<br>

                Camb =
                ${getAssistantValue("mh_camb")}<br><br>

                Pele =
                Pmech × S ×
                (1 + Margin / 100)
                /
                Camb

                <br><br>

                Pele =
                ${getAssistantHoistResult("mh_Pmech")}
                ×
                ${getAssistantServiceFactor("mh")}
                ×
                (1 +
                ${getAssistantValue("mh_power_margin")}
                / 100)
                /
                ${getAssistantValue("mh_camb")}

                <br><br>

                <b>
                    Pele =
                    ${getAssistantHoistResult("mh_Pele")}
                    kW
                </b>

            </div>


            <div class="assistant-calculation">

                <b>AH Calculation</b><br><br>

                Pmech =
                ${getAssistantHoistResult("ah_Pmech")} kW<br>

                S =
                ${getAssistantServiceFactor("ah")}<br>

                Margin =
                ${getAssistantValue("ah_power_margin")} %<br>

                Camb =
                ${getAssistantValue("ah_camb")}<br><br>

                Pele =
                Pmech × S ×
                (1 + Margin / 100)
                /
                Camb

                <br><br>

                <b>
                    Pele =
                    ${getAssistantHoistResult("ah_Pele")}
                    kW
                </b>

            </div>


            <p>
                <b>Unit :</b> kW
            </p>

        </div>


        <!-- =================================================
             MOTOR SELECTION
        ================================================== -->

        <div class="parameter">

            <h3>5. Motor Rating Selection</h3>

            <p>
                The automatically selected motor rating is the
                available standard motor rating equal to or
                greater than the calculated required motor power.
            </p>


            <div class="assistant-calculation">

                <b>MH</b><br><br>

                Required Power =
                ${getAssistantHoistResult("mh_Pele")} kW

                <br><br>

                Selected Motor =
                <b>${getAssistantResult("mh_motor")} kW</b>

                <br><br>

                Selected RPM =
                <b>${getAssistantResult("mh_rpm")} RPM</b>

            </div>


            <div class="assistant-calculation">

                <b>AH</b><br><br>

                Required Power =
                ${getAssistantHoistResult("ah_Pele")} kW

                <br><br>

                Selected Motor =
                <b>${getAssistantResult("ah_motor")} kW</b>

                <br><br>

                Selected RPM =
                <b>${getAssistantResult("ah_rpm")} RPM</b>

            </div>


            <p>
                <b>Selection Logic :</b>
                The calculated required power is compared with
                the available motor rating table and the next
                suitable motor rating is selected.
            </p>

        </div>


        <!-- =================================================
             MOTOR POLE
        ================================================== -->

        <div class="parameter">

            <h3>6. Motor Pole & Speed Selection</h3>

            <p>
                Motor synchronous speed is selected according
                to the number of motor poles.
            </p>


            <div class="assistant-formula">

                <b>Basic Relationship</b><br><br>

                Ns = 120 × f / P

                <br><br>

                At 50 Hz:

                <br>

                Ns = 6000 / P

            </div>


            <div class="assistant-calculation">

                <b>MH</b><br><br>

                Selected Pole =
                ${getAssistantResult("mh_pole")} Pole

                <br><br>

                Selected RPM =
                ${getAssistantResult("mh_rpm")} RPM

            </div>


            <div class="assistant-calculation">

                <b>AH</b><br><br>

                Selected Pole =
                ${getAssistantResult("ah_pole")} Pole

                <br><br>

                Selected RPM =
                ${getAssistantResult("ah_rpm")} RPM

            </div>

        </div>


        <!-- =================================================
             MOTOR QUANTITY
        ================================================== -->

        <div class="parameter">

            <h3>7. Number of Motors</h3>

            <p>
                The number of motors specified for the hoisting
                mechanism is used for the final motor arrangement.
            </p>


            <div class="assistant-calculation">

                <b>MH Motor Quantity :</b>
                ${getAssistantValue("mh_mo")}

                <br><br>

                <b>AH Motor Quantity :</b>
                ${getAssistantValue("ah_mo")}

            </div>

        </div>


        <!-- =================================================
             FRAME SIZE
        ================================================== -->

        <div class="parameter">

            <h3>8. Motor Frame Size</h3>

            <p>
                Motor frame size is determined from the selected
                final motor power and number of poles using the
                motor frame-size database.
            </p>


            <div class="assistant-calculation">

                <b>MH</b><br><br>

                Final Motor Power:
                ${getAssistantResult("mh_motor")} kW

                <br>

                Pole:
                ${getAssistantResult("mh_pole")}

                <br><br>

                Frame:
                <b>${getAssistantResult("mh_frame")}</b>

            </div>


            <div class="assistant-calculation">

                <b>AH</b><br><br>

                Final Motor Power:
                ${getAssistantResult("ah_motor")} kW

                <br>

                Pole:
                ${getAssistantResult("ah_pole")}

                <br><br>

                Frame:
                <b>${getAssistantResult("ah_frame")}</b>

            </div>

        </div>


        <!-- =================================================
             SERVICE FACTOR
        ================================================== -->

        <div class="parameter">

            <h3>9. Service Factor</h3>

            <p>
                Service factor is obtained from the selected
                mechanism classification.
            </p>

            <div class="assistant-formula">

                M1 → 1.0<br>
                M2 → 1.0<br>
                M3 → 1.0<br>
                M4 → 1.0<br>
                M5 → 1.0<br>
                M6 → 1.1<br>
                M7 → 1.2<br>
                M8 → 1.2

            </div>


            <p>
                The service factor is applied to the mechanical
                power while determining the required motor power.
            </p>

        </div>


        <!-- =================================================
             STANDARDS
        ================================================== -->

        <div class="parameter">

            <h3>📚 Standards & Design References</h3>

            <div class="assistant-standard">

                <b>Indian Standards / References</b>

                <br><br>

                The applicable IS / IPSS references for the
                hoisting mechanism will be added here after
                verification of the exact design basis,
                clause and table.

            </div>

            <div class="assistant-standard">

                <b>IPSS Reference</b>

                <br><br>

                To be added with exact IPSS number,
                clause and table reference.

            </div>

        </div>


        <!-- =================================================
             ENGINEERING NOTES
        ================================================== -->

        <div class="parameter">

            <h3>📝 Engineering Notes</h3>

            <div class="assistant-note">

                • Total lifted mass must include all components
                that are actually lifted by the hoisting system.

                <br><br>

                • Mechanical efficiency accounts for losses in
                gears and pulley arrangements.

                <br><br>

                • Service factor provides allowance according to
                the selected mechanism classification.

                <br><br>

                • Electrical power margin is an additional
                allowance applied before final motor selection.

                <br><br>

                • Motor derating factor accounts for the reduction
                in usable motor capacity under the specified
                operating conditions.

                <br><br>

                • Final motor selection should be checked against
                the manufacturer's motor catalogue and actual
                operating duty.

            </div>

        </div>

    `;

}
// =====================================================
// ASSISTANT HELPER FUNCTIONS
// =====================================================

function getAssistantValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.value || "-";
}


function getAssistantResult(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.innerText ||
           element.textContent ||
           "-";
}


function getAssistantHoistResult(id) {

    const element = document.getElementById(id);

    if (!element) {

        return "-";

    }

    return element.innerText ||
           element.textContent ||
           "-";
}


function getAssistantServiceFactor(type) {

    if (
        typeof CRANE !== "undefined" &&
        CRANE.HOIST &&
        CRANE.HOIST[type.toUpperCase()]
    ) {

        return CRANE.HOIST[type.toUpperCase()].S;

    }

    return "-";
}
// =====================================================
// ================= TRAVEL ASSISTANT ===================
// =====================================================

function showTravelAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        🚚 Travel Motion Design
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Travel motion calculation determines the motor
            power required for movement of the trolley and
            crane bridge.
        </p>

        <p>
            The calculation considers:
        </p>

        <ul>
            <li>Moving load</li>
            <li>Trolley / crane weight</li>
            <li>Travel speed</li>
            <li>Rolling friction</li>
            <li>Acceleration</li>
            <li>Gear efficiency</li>
            <li>Torque factor</li>
            <li>Service factor</li>
            <li>Electrical power margin</li>
            <li>Motor derating factor</li>
        </ul>

        <p>
            Four operating conditions are considered:
        </p>

        <ul>
            <li><b>CT Normal</b> – Cross Travel normal operation</li>
            <li><b>LT Normal</b> – Long Travel normal operation</li>
            <li><b>CT-E</b> – Cross Travel emergency operation</li>
            <li><b>LT-E</b> – Long Travel emergency operation</li>
        </ul>

    </div>


    <!-- =================================================
         TOTAL WEIGHT
    ================================================== -->

    <div class="parameter">

        <h3>1. Total Moving Weight</h3>

        <p>
            <b>Meaning :</b>
            Total weight considered for travel motion
            calculation.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Qt = Q + Q2

        </div>

        <p><b>Where :</b></p>

        <p>
            Q = Safe Working Load
        </p>

        <p>
            Q2 = Mass of Tong
        </p>

        <p>
            Qt = Total lifted load
        </p>


        <div class="assistant-calculation">

            <b>CT / LT</b><br><br>

            Q =
            ${getAssistantValue("mh_q")} Ton

            <br>

            Q2 =
            ${getAssistantValue("mh_q2")} Ton

            <br><br>

            Qt =
            ${getAssistantValue("mh_q")}
            +
            ${getAssistantValue("mh_q2")}

            <br><br>

            <b>
                Qt =
                ${getTravelCalculatedValue("ct_qt")}
                Ton
            </b>

        </div>


        <p>
            For CT and LT the lifted load is obtained from
            the main hoist input.
        </p>

        <p>
            The trolley/crane self-weight is subsequently
            added to the lifted load for travel calculation.
        </p>

    </div>


    <!-- =================================================
         EFFICIENCY
    ================================================== -->

    <div class="parameter">

        <h3>2. Overall Gear Efficiency (N)</h3>

        <p>
            <b>Meaning :</b>
            Efficiency of the travel gearbox based on the
            number of gear stages.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            N = (0.985)<sup>m</sup>

        </div>

        <p><b>Where :</b></p>

        <p>
            m = Number of gear stages
        </p>

        <p>
            0.985 = Assumed efficiency per gear stage
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            m =
            ${getAssistantValue("ct_m")}

            <br><br>

            N =
            (0.985)<sup>
            ${getAssistantValue("ct_m")}
            </sup>

            <br><br>

            <b>
                N =
                ${getTravelCalculatedValue("ct_N")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            m =
            ${getAssistantValue("lt_m")}

            <br><br>

            <b>
                N =
                ${getTravelCalculatedValue("lt_N")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            m =
            ${getAssistantValue("ct_mE")}

            <br><br>

            <b>
                N =
                ${getTravelCalculatedValue("ct_NE")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            m =
            ${getAssistantValue("lt_mE")}

            <br><br>

            <b>
                N =
                ${getTravelCalculatedValue("lt_NE")}
            </b>

        </div>

    </div>


    <!-- =================================================
         RUNNING POWER
    ================================================== -->

    <div class="parameter">

        <h3>3. Running Power (Pr)</h3>

        <p>
            <b>Meaning :</b>
            Power required to overcome rolling / travelling
            resistance during steady-state movement.
        </p>

        <div class="assistant-formula">

            <b>Formula used in calculator</b><br><br>

            Pr =
            (Qt + G) × V × F / 6117

        </div>

        <p><b>Where :</b></p>

        <p>
            Qt = Total lifted load
        </p>

        <p>
            G = Trolley / Crane weight
        </p>

        <p>
            V = Travel speed
        </p>

        <p>
            F = Friction value
        </p>

        <p>
            6117 = Conversion constant used in the calculation
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            Qt =
            ${getTravelCalculatedValue("ct_qt")} Ton

            <br>

            G =
            ${getAssistantValue("ct_g")} Ton

            <br>

            V =
            ${getAssistantValue("ct_v")} m/min

            <br>

            F =
            ${getAssistantValue("ct_f")}

            <br><br>

            <b>
                Pr =
                ${getTravelCalculatedValue("ct_Pr")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            G =
            ${getAssistantValue("lt_g")} Ton

            <br>

            V =
            ${getAssistantValue("lt_v")} m/min

            <br>

            F =
            ${getAssistantValue("lt_f")}

            <br><br>

            <b>
                Pr =
                ${getTravelCalculatedValue("lt_Pr")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            G =
            ${getAssistantValue("ct_gE")} Ton

            <br>

            V =
            ${getAssistantValue("ct_vE")} m/min

            <br>

            F =
            ${getAssistantValue("ct_fE")}

            <br><br>

            <b>
                Pr =
                ${getTravelCalculatedValue("ct_PrE")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            G =
            ${getAssistantValue("lt_gE")} Ton

            <br>

            V =
            ${getAssistantValue("lt_vE")} m/min

            <br>

            F =
            ${getAssistantValue("lt_fE")}

            <br><br>

            <b>
                Pr =
                ${getTravelCalculatedValue("lt_PrE")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         ACCELERATION POWER
    ================================================== -->

    <div class="parameter">

        <h3>4. Acceleration Power (Pa)</h3>

        <p>
            <b>Meaning :</b>
            Additional power required to accelerate the
            moving mass from rest to the rated travel speed.
        </p>

        <div class="assistant-formula">

            <b>Formula used in calculator</b><br><br>

            Pa =
            (Qt + G) × V × (1100 × a)
            /
            (6117 × 981 × N)

        </div>

        <p><b>Where :</b></p>

        <p>
            Qt = Total lifted load
        </p>

        <p>
            G = Trolley / crane weight
        </p>

        <p>
            V = Travel speed
        </p>

        <p>
            a = Acceleration in cm/sec²
        </p>

        <p>
            N = Overall gear efficiency
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            Acceleration =
            ${getAssistantValue("ct_a")}
            cm/sec²

            <br><br>

            <b>
                Pa =
                ${getTravelCalculatedValue("ct_Pa")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            Acceleration =
            ${getAssistantValue("lt_a")}
            cm/sec²

            <br><br>

            <b>
                Pa =
                ${getTravelCalculatedValue("lt_Pa")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            Emergency Acceleration =
            ${getAssistantValue("ct_ar")}
            cm/sec²

            <br><br>

            <b>
                Pa =
                ${getTravelCalculatedValue("ct_PaE")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            Emergency Acceleration =
            ${getAssistantValue("lt_ar")}
            cm/sec²

            <br><br>

            <b>
                Pa =
                ${getTravelCalculatedValue("lt_PaE")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         MECHANICAL POWER
    ================================================== -->

    <div class="parameter">

        <h3>5. Mechanical Power (Pmech)</h3>

        <p>
            Mechanical power is obtained by combining running
            power and acceleration power and dividing by the
            torque factor and number of motors.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Pmech =
            (Pr + Pa)
            /
            (T × n)

        </div>

        <p><b>Where :</b></p>

        <p>
            Pr = Running Power
        </p>

        <p>
            Pa = Acceleration Power
        </p>

        <p>
            T = Torque Factor
        </p>

        <p>
            n = Number of Motors
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            Pr =
            ${getTravelCalculatedValue("ct_Pr")} kW

            <br>

            Pa =
            ${getTravelCalculatedValue("ct_Pa")} kW

            <br>

            T =
            ${getAssistantValue("ct_T")}

            <br>

            n =
            ${getAssistantValue("ct_n")}

            <br><br>

            <b>
                Pmech =
                ${getTravelCalculatedValue("ct_Pmech")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            Pr =
            ${getTravelCalculatedValue("lt_Pr")} kW

            <br>

            Pa =
            ${getTravelCalculatedValue("lt_Pa")} kW

            <br>

            T =
            ${getAssistantValue("lt_T")}

            <br>

            n =
            ${getAssistantValue("lt_n")}

            <br><br>

            <b>
                Pmech =
                ${getTravelCalculatedValue("lt_Pmech")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            Pr =
            ${getTravelCalculatedValue("ct_PrE")} kW

            <br>

            Pa =
            ${getTravelCalculatedValue("ct_PaE")} kW

            <br>

            T =
            ${getAssistantValue("ct_TE")}

            <br>

            n =
            ${getAssistantValue("ct_nE")}

            <br><br>

            <b>
                Pmech =
                ${getTravelCalculatedValue("ct_PmechE")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            Pr =
            ${getTravelCalculatedValue("lt_PrE")} kW

            <br>

            Pa =
            ${getTravelCalculatedValue("lt_PaE")} kW

            <br>

            T =
            ${getAssistantValue("lt_TE")}

            <br>

            n =
            ${getAssistantValue("lt_nE")}

            <br><br>

            <b>
                Pmech =
                ${getTravelCalculatedValue("lt_PmechE")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         REQUIRED MOTOR POWER
    ================================================== -->

    <div class="parameter">

        <h3>6. Required Motor Power (Pele)</h3>

        <p>
            The required electrical motor power is obtained
            after applying the service factor, electrical power
            margin and motor derating factor.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Pele =
            Pmech × S ×
            (1 + Margin / 100)
            /
            Camb

        </div>

        <p><b>Where :</b></p>

        <p>
            Pmech = Mechanical Power
        </p>

        <p>
            S = Service Factor
        </p>

        <p>
            Margin = Electrical Power Margin
        </p>

        <p>
            Camb = Motor Derating Factor
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            Pmech =
            ${getTravelCalculatedValue("ct_Pmech")} kW

            <br>

            Service Factor =
            ${getTravelServiceFactor("ct")}

            <br>

            Margin =
            ${getAssistantValue("ct_power_margin")} %

            <br>

            Camb =
            ${getAssistantValue("ct_camb")}

            <br><br>

            <b>
                Pele =
                ${getTravelCalculatedValue("ct_Pele")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            Pmech =
            ${getTravelCalculatedValue("lt_Pmech")} kW

            <br>

            Service Factor =
            ${getTravelServiceFactor("lt")}

            <br>

            Margin =
            ${getAssistantValue("lt_power_margin")} %

            <br>

            Camb =
            ${getAssistantValue("lt_camb")}

            <br><br>

            <b>
                Pele =
                ${getTravelCalculatedValue("lt_Pele")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            Pmech =
            ${getTravelCalculatedValue("ct_PmechE")} kW

            <br>

            Service Factor =
            ${getTravelServiceFactor("cte")}

            <br>

            Margin =
            ${getAssistantValue("ct_power_marginE")} %

            <br>

            Camb =
            ${getAssistantValue("ct_cambE")}

            <br><br>

            <b>
                Pele =
                ${getTravelCalculatedValue("ct_PeleE")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            Pmech =
            ${getTravelCalculatedValue("lt_PmechE")} kW

            <br>

            Service Factor =
            ${getTravelServiceFactor("lte")}

            <br>

            Margin =
            ${getAssistantValue("lt_power_marginE")} %

            <br>

            Camb =
            ${getAssistantValue("lt_cambE")}

            <br><br>

            <b>
                Pele =
                ${getTravelCalculatedValue("lt_PeleE")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         TORQUE FACTOR
    ================================================== -->

    <div class="parameter">

        <h3>7. Torque Factor (T)</h3>

        <p>
            Torque factor is used in the mechanical power
            calculation for the travel mechanism.
        </p>

        <div class="assistant-formula">

            Pmech =
            (Pr + Pa)
            /
            (T × n)

        </div>


        <div class="assistant-standard">

            <b>Current Calculator Reference</b>

            <br><br>

            IS 3177 : 2020

            <br>

            Torque Factor

            <br>

            Page No.: 39

        </div>


        <p>
            The selected torque factor depends on the type of
            motor drive arrangement.
        </p>

        <ul>

            <li>
                <b>1.7</b> –
                A.C. Slip Ring Induction Motors
            </li>

            <li>
                <b>1.6</b> –
                A.C. Motors fed from DOL
            </li>

            <li>
                <b>1.5</b> –
                A.C. Motors operated from VFD
            </li>

        </ul>

    </div>


    <!-- =================================================
         MOTOR SELECTION
    ================================================== -->

    <div class="parameter">

        <h3>8. Motor Rating Selection</h3>

        <p>
            The calculated required motor power is compared
            with the available standard motor rating and the
            next suitable rating is selected.
        </p>


        <div class="assistant-calculation">

            <b>CT Normal</b><br><br>

            Required Power =
            ${getTravelResult("ct_motor")}

            <br>

            RPM =
            ${getTravelResult("ct_rpm")}

        </div>


        <div class="assistant-calculation">

            <b>LT Normal</b><br><br>

            Required Power =
            ${getTravelResult("lt_motor")}

            <br>

            RPM =
            ${getTravelResult("lt_rpm")}

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            Required Power =
            ${getTravelResult("ct_motorE")}

            <br>

            RPM =
            ${getTravelResult("ct_rpmE")}

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            Required Power =
            ${getTravelResult("lt_motorE")}

            <br>

            RPM =
            ${getTravelResult("lt_rpmE")}

        </div>

    </div>


    <!-- =================================================
         MOTOR POLE
    ================================================== -->

    <div class="parameter">

        <h3>9. Motor Pole & RPM</h3>

        <p>
            Motor RPM is selected according to the selected
            motor pole configuration.
        </p>

        <div class="assistant-formula">

            Ns = 120 × f / P

            <br><br>

            At 50 Hz:

            <br>

            Ns = 6000 / P

        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Pole =
            ${getAssistantValue("ct_pole")}

            <br>

            RPM =
            ${getTravelResult("ct_rpm")}

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Pole =
            ${getAssistantValue("lt_pole")}

            <br>

            RPM =
            ${getTravelResult("lt_rpm")}

        </div>


        <div class="assistant-calculation">

            <b>CT Emergency</b><br><br>

            Pole =
            ${getAssistantValue("ct_poleE")}

            <br>

            RPM =
            ${getTravelResult("ct_rpmE")}

        </div>


        <div class="assistant-calculation">

            <b>LT Emergency</b><br><br>

            Pole =
            ${getAssistantValue("lt_poleE")}

            <br>

            RPM =
            ${getTravelResult("lt_rpmE")}

        </div>

    </div>


    <!-- =================================================
         MOTOR QUANTITY
    ================================================== -->

    <div class="parameter">

        <h3>10. Number of Motors</h3>

        <p>
            Number of motors is considered in the mechanical
            power calculation through the motor quantity term.
        </p>

        <div class="assistant-calculation">

            <b>CT Normal :</b>
            ${getAssistantValue("ct_n")}

            <br><br>

            <b>LT Normal :</b>
            ${getAssistantValue("lt_n")}

            <br><br>

            <b>CT Emergency :</b>
            ${getAssistantValue("ct_nE")}

            <br><br>

            <b>LT Emergency :</b>
            ${getAssistantValue("lt_nE")}

        </div>

    </div>


    <!-- =================================================
         FRAME SIZE
    ================================================== -->

    <div class="parameter">

        <h3>11. Motor Frame Size</h3>

        <p>
            Frame size is obtained from the final motor power
            and selected motor pole using the motor frame
            database.
        </p>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Frame =
            <b>${getTravelResult("ct_frame")}</b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Frame =
            <b>${getTravelResult("lt_frame")}</b>

        </div>

    </div>


    <!-- =================================================
         STANDARDS
    ================================================== -->

    <div class="parameter">

        <h3>📚 Standards & References</h3>


        <div class="assistant-standard">

            <b>IS 3177 : 2020</b>

            <br><br>

            Used in the current calculator for
            <b>Torque Factor</b>.

            <br><br>

            Current input reference:
            <br>

            Torque Factor – Page No. 39

        </div>


        <div class="assistant-standard">

            <b>IPSS / Other References</b>

            <br><br>

            Exact IPSS number, clause and table will be added
            after verification of the applicable design basis.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Running Power represents the power required to
            overcome travelling resistance.

            <br><br>

            • Acceleration Power represents the additional power
            required during acceleration.

            <br><br>

            • Emergency travel uses separate acceleration,
            gear stages, friction, torque factor and motor
            parameters.

            <br><br>

            • Torque Factor is selected according to the motor
            drive arrangement.

            <br><br>

            • Service Factor is obtained from the mechanism
            classification.

            <br><br>

            • Electrical Power Margin provides additional
            allowance before final motor selection.

            <br><br>

            • Motor derating factor accounts for reduced usable
            motor capacity under specified conditions.

            <br><br>

            • Final motor selection should be checked against
            the manufacturer's catalogue and actual operating
            duty.

        </div>

    </div>

    `;
}
// =====================================================
// ============== TRAVEL ASSISTANT HELPERS ==============
// =====================================================

function getTravelCalculatedValue(id) {

    const element = document.getElementById(id);

    if (element) {

        return element.innerText ||
               element.textContent ||
               "-";

    }

    /*
     * qt is not directly displayed in the result table,
     * therefore read it from CRANE.TRAVEL data.
     */

    if (id === "ct_qt" &&
        CRANE &&
        CRANE.TRAVEL &&
        CRANE.TRAVEL.CT) {

        return Number(CRANE.TRAVEL.CT.qt || 0).toFixed(2);

    }

    if (id === "lt_qt" &&
        CRANE &&
        CRANE.TRAVEL &&
        CRANE.TRAVEL.LT) {

        return Number(CRANE.TRAVEL.LT.qt || 0).toFixed(2);

    }

    return "-";
}


function getTravelResult(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.innerText ||
           element.textContent ||
           "-";
}


function getTravelServiceFactor(type) {

    if (
        typeof CRANE !== "undefined" &&
        CRANE.TRAVEL
    ) {

        if (type === "ct" &&
            CRANE.TRAVEL.CT) {

            return CRANE.TRAVEL.CT.S;

        }

        if (type === "lt" &&
            CRANE.TRAVEL.LT) {

            return CRANE.TRAVEL.LT.S;

        }

        if (type === "cte" &&
            CRANE.TRAVEL.CTE) {

            return CRANE.TRAVEL.CTE.S;

        }

        if (type === "lte" &&
            CRANE.TRAVEL.LTE) {

            return CRANE.TRAVEL.LTE.S;

        }

    }

    return "-";
}


// =====================================================
// ================= BRAKE ASSISTANT ===================
// =====================================================

function showBrakeAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        🛑 Brake Selection
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Brake Selection Overview</h3>

        <p>
            Brake selection is performed for the Main Hoist (MH),
            Auxiliary Hoist (AH), Cross Travel (CT) and Long Travel (LT)
            mechanisms.
        </p>

        <p>
            The calculator determines the required brake torque using
            both electrical motor power and calculated mechanical power.
        </p>

        <ul>
            <li>Final Motor Power</li>
            <li>Mechanical Power</li>
            <li>Final Motor RPM</li>
            <li>Coefficient of Reserve (S)</li>
            <li>Brake Operation Type</li>
            <li>Required Brake Torque</li>
            <li>Number of Brakes</li>
            <li>Selected Drum Torque Rating</li>
            <li>Selected Drum Brake Diameter</li>
        </ul>

    </div>


    <!-- =================================================
         MECHANISM CLASSIFICATION
    ================================================== -->

    <div class="parameter">

        <h3>⚙️ Mechanism Classification</h3>

        <p>
            Mechanism classification defines the duty class of the
            crane mechanism.
        </p>

        <div class="assistant-calculation">

            <b>Current Selection</b><br><br>

            Mechanism Classification =
            <b>${getAssistantValue("mechanism_class")}</b>

        </div>

        <p>
            The selected classification is used for determining
            applicable service factors and mechanism design requirements.
        </p>

    </div>


    <!-- =================================================
         RESERVE COEFFICIENT
    ================================================== -->

    <div class="parameter">

        <h3>🛑 Coefficient of Reserve (S)</h3>

        <p>
            Coefficient of reserve is applied to the motor torque
            to obtain the required brake torque.
        </p>

        <div class="assistant-formula">

            Required Brake Torque =
            Motor Torque × S

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            S =
            <b>${getAssistantValue("mh-s1")}</b>

            <br><br>

            <b>AH</b><br><br>

            S =
            <b>${getAssistantValue("ah-s1")}</b>

            <br><br>

            <b>CT</b><br><br>

            S =
            <b>${getAssistantValue("ct-s1")}</b>

            <br><br>

            <b>LT</b><br><br>

            S =
            <b>${getAssistantValue("lt-s1")}</b>

        </div>

    </div>


    <!-- =================================================
         OPERATION TYPE
    ================================================== -->

    <div class="parameter">

        <h3>⚡ Brake Operation Type</h3>

        <p>
            Operation type determines the applicable brake selection
            data from the brake database.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Operation =
            <b>${getAssistantValue("mh-op")}</b>

            <br><br>

            <b>AH</b><br><br>

            Operation =
            <b>${getAssistantValue("ah-op")}</b>

            <br><br>

            <b>CT</b><br><br>

            Operation =
            <b>${getAssistantValue("ct-op")}</b>

            <br><br>

            <b>LT</b><br><br>

            Operation =
            <b>${getAssistantValue("lt-op")}</b>

        </div>

    </div>


    <!-- =================================================
         ELECTRICAL POWER
    ================================================== -->

    <div class="parameter">

        <h3>⚡ Electrical Power Based Brake Torque</h3>

        <p>
            Electrical-power-based torque uses the final selected
            motor power and final motor speed.
        </p>

        <div class="assistant-formula">

            T =
            (975 × P × S) / N

        </div>

        <p><b>Where :</b></p>

        <ul>
            <li>P = Final Motor Power in kW</li>
            <li>S = Coefficient of Reserve</li>
            <li>N = Final Motor RPM</li>
            <li>T = Required Torque in kg·m</li>
        </ul>


        <!-- MH -->

        <div class="assistant-calculation">

            <h4>🏗️ MH — Main Hoist</h4>

            Final Motor Power =
            ${getBrakeData("mh", "finalKW")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("mh", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("mh-s1")}

            <br><br>

            T =
            (975 ×
            ${getBrakeData("mh", "finalKW")} ×
            ${getAssistantValue("mh-s1")})
            /
            ${getBrakeData("mh", "finalRPM")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("mh_T1")}
                kg·m
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <h4>🏗️ AH — Auxiliary Hoist</h4>

            Final Motor Power =
            ${getBrakeData("ah", "finalKW")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("ah", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("ah-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("ah_T1")}
                kg·m
            </b>

        </div>


        <!-- CT -->

        <div class="assistant-calculation">

            <h4>🚚 CT — Cross Travel</h4>

            Final Motor Power =
            ${getBrakeData("ct", "finalKW")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("ct", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("ct-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("ct_T1")}
                kg·m
            </b>

        </div>


        <!-- LT -->

        <div class="assistant-calculation">

            <h4>🚜 LT — Long Travel</h4>

            Final Motor Power =
            ${getBrakeData("lt", "finalKW")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("lt", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("lt-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("lt_T1")}
                kg·m
            </b>

        </div>

    </div>


    <!-- =================================================
         MECHANICAL POWER
    ================================================== -->

    <div class="parameter">

        <h3>⚙️ Mechanical Power Based Brake Torque</h3>

        <p>
            Mechanical-power-based brake torque is calculated using
            the calculated mechanical power of the mechanism.
        </p>

        <div class="assistant-formula">

            T =
            (975 × Pmech × S) / N

        </div>


        <!-- MH -->

        <div class="assistant-calculation">

            <h4>🏗️ MH — Main Hoist</h4>

            Mechanical Power =
            ${getBrakeData("mh", "Pmech")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("mh", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("mh-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("mh_T1m")}
                kg·m
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <h4>🏗️ AH — Auxiliary Hoist</h4>

            Mechanical Power =
            ${getBrakeData("ah", "Pmech")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("ah", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("ah-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("ah_T1m")}
                kg·m
            </b>

        </div>


        <!-- CT -->

        <div class="assistant-calculation">

            <h4>🚚 CT — Cross Travel</h4>

            Mechanical Power =
            ${getBrakeData("ct", "Pmech")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("ct", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("ct-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("ct_T1m")}
                kg·m
            </b>

        </div>


        <!-- LT -->

        <div class="assistant-calculation">

            <h4>🚜 LT — Long Travel</h4>

            Mechanical Power =
            ${getBrakeData("lt", "Pmech")} kW

            <br>

            Final Motor RPM =
            ${getBrakeData("lt", "finalRPM")} RPM

            <br>

            S =
            ${getAssistantValue("lt-s1")}

            <br><br>

            <b>
                Required Torque =
                ${getBrakeCalculatedValue("lt_T1m")}
                kg·m
            </b>

        </div>

    </div>


    <!-- =================================================
         BRAKE COUNT
    ================================================== -->

    <div class="parameter">

        <h3>🔢 Number of Selected Brakes</h3>

        <p>
            Brake quantity is determined according to the applicable
            mechanism load and motor arrangement.
        </p>


        <div class="assistant-calculation">

            <b>MH — Main Hoist</b><br><br>

            Load =
            ${getAssistantValue("mh_q")} Ton

            <br>

            Number of Motors =
            ${getBrakeMotorCount("mh")}

            <br><br>

            <b>
                Selected Brakes =
                ${getBrakeCalculatedValue("mh_br")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH — Auxiliary Hoist</b><br><br>

            Load =
            ${getAssistantValue("ah_q")} Ton

            <br>

            Number of Motors =
            ${getBrakeMotorCount("ah")}

            <br><br>

            <b>
                Selected Brakes =
                ${getBrakeCalculatedValue("ah_br")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT — Cross Travel</b><br><br>

            Number of Motors =
            ${getBrakeMotorCount("ct")}

            <br><br>

            <b>
                Selected Brakes =
                ${getBrakeCalculatedValue("ct_br")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT — Long Travel</b><br><br>

            Number of Motors =
            ${getBrakeMotorCount("lt")}

            <br><br>

            <b>
                Selected Brakes =
                ${getBrakeCalculatedValue("lt_br")}
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM TORQUE RATING
    ================================================== -->

    <div class="parameter">

        <h3>🔩 Selected Drum Torque Rating</h3>

        <p>
            The calculator selects the next suitable available
            drum brake torque rating according to the required torque
            and operation type.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Electrical Required Torque =
            ${getBrakeCalculatedValue("mh_T1")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("mh_drumt")}</b> kg·m

            <br><br>

            Mechanical Required Torque =
            ${getBrakeCalculatedValue("mh_T1m")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("mh_drumtm")}</b> kg·m

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Electrical Required Torque =
            ${getBrakeCalculatedValue("ah_T1")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("ah_drumt")}</b> kg·m

            <br><br>

            Mechanical Required Torque =
            ${getBrakeCalculatedValue("ah_T1m")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("ah_drumtm")}</b> kg·m

        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Electrical Required Torque =
            ${getBrakeCalculatedValue("ct_T1")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("ct_drumt")}</b> kg·m

            <br><br>

            Mechanical Required Torque =
            ${getBrakeCalculatedValue("ct_T1m")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("ct_drumtm")}</b> kg·m

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Electrical Required Torque =
            ${getBrakeCalculatedValue("lt_T1")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("lt_drumt")}</b> kg·m

            <br><br>

            Mechanical Required Torque =
            ${getBrakeCalculatedValue("lt_T1m")} kg·m

            <br>

            Selected Drum Torque =
            <b>${getBrakeCalculatedValue("lt_drumtm")}</b> kg·m

        </div>

    </div>


    <!-- =================================================
         DRUM DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>⭕ Selected Drum Brake Diameter</h3>

        <p>
            Drum brake diameter is selected from the brake database
            according to required torque and operation type.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Operation =
            ${getAssistantValue("mh-op")}

            <br>

            Electrical Drum Diameter =
            <b>${getBrakeCalculatedValue("mh_drum")}</b> mm

            <br>

            Mechanical Drum Diameter =
            <b>${getBrakeCalculatedValue("mh_drumm")}</b> mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Operation =
            ${getAssistantValue("ah-op")}

            <br>

            Electrical Drum Diameter =
            <b>${getBrakeCalculatedValue("ah_drum")}</b> mm

            <br>

            Mechanical Drum Diameter =
            <b>${getBrakeCalculatedValue("ah_drumm")}</b> mm

        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Operation =
            ${getAssistantValue("ct-op")}

            <br>

            Electrical Drum Diameter =
            <b>${getBrakeCalculatedValue("ct_drum")}</b> mm

            <br>

            Mechanical Drum Diameter =
            <b>${getBrakeCalculatedValue("ct_drumm")}</b> mm

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Operation =
            ${getAssistantValue("lt-op")}

            <br>

            Electrical Drum Diameter =
            <b>${getBrakeCalculatedValue("lt_drum")}</b> mm

            <br>

            Mechanical Drum Diameter =
            <b>${getBrakeCalculatedValue("lt_drumm")}</b> mm

        </div>

    </div>


    <!-- =================================================
         DESIGN FLOW
    ================================================== -->

    <div class="parameter">

        <h3>📐 Brake Selection Calculation Flow</h3>

        <ol>

            <li>Read mechanism classification.</li>

            <li>Read coefficient of reserve S.</li>

            <li>Read brake operation type.</li>

            <li>Read final motor power.</li>

            <li>Read final motor RPM.</li>

            <li>Calculate electrical-power-based brake torque.</li>

            <li>Read mechanical power.</li>

            <li>Calculate mechanical-power-based brake torque.</li>

            <li>Determine number of brakes.</li>

            <li>Select suitable drum torque rating.</li>

            <li>Select corresponding drum brake diameter.</li>

        </ol>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Electrical-power-based torque uses final selected motor
            power and final motor RPM.

            <br><br>

            • Mechanical-power-based torque uses calculated mechanical
            power and final motor RPM.

            <br><br>

            • Coefficient of Reserve provides additional braking
            capacity above the calculated operating torque.

            <br><br>

            • Brake operation type is used for selecting the applicable
            brake database.

            <br><br>

            • Selected drum torque rating should be equal to or greater
            than the required brake torque.

            <br><br>

            • Final brake selection should be verified against the
            applicable manufacturer catalogue and project design basis.

        </div>

    </div>

    `;
}


// =====================================================
// ============== BRAKE ASSISTANT HELPERS ==============
// =====================================================


// -----------------------------------------------------
// READ INPUT VALUE
// -----------------------------------------------------

function getBrakeInput(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.value !== ""
        ? element.value
        : "-";
}


// -----------------------------------------------------
// READ CALCULATED RESULT
// -----------------------------------------------------

function getBrakeCalculatedValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value =
        element.innerText ||
        element.textContent;

    return value && value.trim() !== ""
        ? value.trim()
        : "-";
}


// -----------------------------------------------------
// GENERIC INPUT / SELECT VALUE
// -----------------------------------------------------

function getAssistantValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.value !== undefined &&
           element.value !== ""
        ? element.value
        : "-";
}


// -----------------------------------------------------
// READ CRANE BRAKE / HOIST / TRAVEL DATA
// -----------------------------------------------------

function getBrakeData(type, parameter) {

    try {

        if (type === "mh" &&
            CRANE.HOIST &&
            CRANE.HOIST.MH) {

            return formatBrakeValue(
                CRANE.HOIST.MH[parameter]
            );
        }


        if (type === "ah" &&
            CRANE.HOIST &&
            CRANE.HOIST.AH) {

            return formatBrakeValue(
                CRANE.HOIST.AH[parameter]
            );
        }


        if (type === "ct" &&
            CRANE.TRAVEL &&
            CRANE.TRAVEL.CTE) {

            return formatBrakeValue(
                CRANE.TRAVEL.CTE[parameter]
            );
        }


        if (type === "lt" &&
            CRANE.TRAVEL &&
            CRANE.TRAVEL.LTE) {

            return formatBrakeValue(
                CRANE.TRAVEL.LTE[parameter]
            );
        }

    } catch (error) {

        return "-";

    }

    return "-";
}


// -----------------------------------------------------
// FORMAT DATA
// -----------------------------------------------------

function formatBrakeValue(value) {

    if (value === undefined ||
        value === null ||
        value === "") {

        return "-";
    }

    if (!isNaN(value)) {

        return Number(value).toFixed(2);

    }

    return value;
}


// -----------------------------------------------------
// MOTOR COUNT
// -----------------------------------------------------

function getBrakeMotorCount(type) {

    try {

        if (type === "mh") {

            return formatBrakeValue(
                CRANE.HOIST.MH.MO
            );

        }


        if (type === "ah") {

            return formatBrakeValue(
                CRANE.HOIST.AH.MO
            );

        }


        if (type === "ct") {

            return formatBrakeValue(
                CRANE.TRAVEL.CT.n
            );

        }


        if (type === "lt") {

            return formatBrakeValue(
                CRANE.TRAVEL.LT.n
            );

        }

    } catch (error) {

        return "-";

    }

    return "-";
}



// =====================================================
// ================= WIRE ROPE ASSISTANT ===============
// =====================================================

function showRopeAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        🧵 Wire Rope Selection
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Wire rope selection determines the required rope
            breaking load and suitable rope diameter for the
            Main Hoist (MH) and Auxiliary Hoist (AH).
        </p>

        <p>
            The calculation considers:
        </p>

        <ul>
            <li>Safe Working Load</li>
            <li>Additional load Q1</li>
            <li>Tong / attachment weight Q2</li>
            <li>Number of falls</li>
            <li>Mechanism service factor (Zp)</li>
            <li>Load per rope</li>
            <li>Required breaking strength</li>
            <li>Required breaking load</li>
            <li>Rope core type</li>
            <li>Rope grade</li>
            <li>Manufacturer rope diameter</li>
        </ul>

        <p>
            The calculator performs the selection separately
            for MH and AH.
        </p>

    </div>


    <!-- =================================================
         TOTAL WEIGHT
    ================================================== -->

    <div class="parameter">

        <h3>1. Total Weight (M)</h3>

        <p>
            <b>Meaning :</b>
            Total load considered for wire rope selection.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            M = Q + Q1 + Q2

        </div>

        <p><b>Where :</b></p>

        <ul>
            <li>Q = Safe Working Load</li>
            <li>Q1 = Additional load / hook related load</li>
            <li>Q2 = Tong / attachment weight</li>
            <li>M = Total weight</li>
        </ul>


        <!-- MH -->

        <div class="assistant-calculation">

            <b>🏗️ Main Hoist (MH)</b><br><br>

            Q =
            ${getAssistantValue("mh_q")} Ton

            <br>

            Q1 =
            ${getAssistantValue("mh_q1")} Ton

            <br>

            Q2 =
            ${getAssistantValue("mh_q2")} Ton

            <br><br>

            M =
            ${getAssistantValue("mh_q")}
            +
            ${getAssistantValue("mh_q1")}
            +
            ${getAssistantValue("mh_q2")}

            <br><br>

            <b>
                M =
                ${getRopeCalculatedValue("mh_W2")}
                Ton
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <b>🏗️ Auxiliary Hoist (AH)</b><br><br>

            Q =
            ${getAssistantValue("ah_q")} Ton

            <br>

            Q1 =
            ${getAssistantValue("ah_q1")} Ton

            <br>

            Q2 =
            ${getAssistantValue("ah_q2")} Ton

            <br><br>

            M =
            ${getAssistantValue("ah_q")}
            +
            ${getAssistantValue("ah_q1")}
            +
            ${getAssistantValue("ah_q2")}

            <br><br>

            <b>
                M =
                ${getRopeCalculatedValue("ah_w2")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         NUMBER OF FALLS
    ================================================== -->

    <div class="parameter">

        <h3>2. Number of Falls (F)</h3>

        <p>
            <b>Meaning :</b>
            Number of rope falls supporting the lifted load.
        </p>

        <p>
            Increasing the number of falls reduces the load
            carried by each individual rope part.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Number of Falls =
            ${getAssistantValue("F")}

            <br><br>

            <b>
                F =
                ${getRopeInputValue("F")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Number of Falls =
            ${getAssistantValue("f")}

            <br><br>

            <b>
                F =
                ${getRopeInputValue("f")}
            </b>

        </div>

    </div>


    <!-- =================================================
         LOAD PER ROPE
    ================================================== -->

    <div class="parameter">

        <h3>3. Load per Rope (S)</h3>

        <p>
            <b>Meaning :</b>
            Load carried by each rope part before applying
            the mechanism service factor.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            S = M / F

        </div>

        <p>
            Where M is the total weight and F is the number
            of rope falls.
        </p>


        <!-- MH -->

        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            M =
            ${getRopeCalculatedValue("mh_W2")}
            Ton

            <br>

            F =
            ${getRopeInputValue("F")}

            <br><br>

            S =
            ${getRopeCalculatedValue("mh_W2")}
            /
            ${getRopeInputValue("F")}

            <br><br>

            <b>
                S =
                ${getRopeCalculatedValue("mh_F2")}
                Ton
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            M =
            ${getRopeCalculatedValue("ah_w2")}
            Ton

            <br>

            F =
            ${getRopeInputValue("f")}

            <br><br>

            S =
            ${getRopeCalculatedValue("ah_w2")}
            /
            ${getRopeInputValue("f")}

            <br><br>

            <b>
                S =
                ${getRopeCalculatedValue("ah_F2")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         SERVICE FACTOR
    ================================================== -->

    <div class="parameter">

        <h3>4. Rope Service Factor (Zp)</h3>

        <p>
            <b>Meaning :</b>
            Zp is the rope selection factor obtained from
            the hoist mechanism classification and applicable
            design requirements.
        </p>

        <p>
            The calculator obtains Zp from the hoist calculation.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Mechanism Classification =
            ${getAssistantValue("mechanism_class")}

            <br><br>

            Zp =
            ${getRopeZp("MH")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Mechanism Classification =
            ${getAssistantValue("mechanism_class")}

            <br><br>

            Zp =
            ${getRopeZp("AH")}

        </div>

    </div>


    <!-- =================================================
         REQUIRED BREAKING STRENGTH
    ================================================== -->

    <div class="parameter">

        <h3>5. Required Breaking Strength (Fo)</h3>

        <p>
            The required breaking strength is obtained by
            multiplying the load per rope by the applicable
            rope service factor Zp.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Fo = S × Zp

        </div>

        <p><b>Where :</b></p>

        <ul>
            <li>S = Load per rope</li>
            <li>Zp = Rope service factor</li>
            <li>Fo = Required breaking strength</li>
        </ul>


        <!-- MH -->

        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            S =
            ${getRopeCalculatedValue("mh_F2")}
            Ton

            <br>

            Zp =
            ${getRopeZp("MH")}

            <br><br>

            Fo =
            ${getRopeCalculatedValue("mh_F2")}
            ×
            ${getRopeZp("MH")}

            <br><br>

            <b>
                Fo =
                ${getRopeCalculatedValue("mh_B2")}
                Ton
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            S =
            ${getRopeCalculatedValue("ah_F2")}
            Ton

            <br>

            Zp =
            ${getRopeZp("AH")}

            <br><br>

            Fo =
            ${getRopeCalculatedValue("ah_F2")}
            ×
            ${getRopeZp("AH")}

            <br><br>

            <b>
                Fo =
                ${getRopeCalculatedValue("ah_b2")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         REQUIRED BREAKING LOAD
    ================================================== -->

    <div class="parameter">

        <h3>6. Required Breaking Load (BL)</h3>

        <p>
            The required breaking load is obtained by
            converting the required breaking strength from
            tonne-force to kN.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            BL = Fo × 9.81

        </div>

        <p>
            9.81 is the gravitational conversion factor
            from tonne-force to kN.
        </p>


        <!-- MH -->

        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Fo =
            ${getRopeCalculatedValue("mh_B2")}
            Ton

            <br><br>

            BL =
            ${getRopeCalculatedValue("mh_B2")}
            × 9.81

            <br><br>

            <b>
                Required Breaking Load =
                ${getRopeCalculatedValue("mh_L2")}
                kN
            </b>

        </div>


        <!-- AH -->

        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Fo =
            ${getRopeCalculatedValue("ah_b2")}
            Ton

            <br><br>

            BL =
            ${getRopeCalculatedValue("ah_b2")}
            × 9.81

            <br><br>

            <b>
                Required Breaking Load =
                ${getRopeCalculatedValue("ah_l2")}
                kN
            </b>

        </div>

    </div>


    <!-- =================================================
         ROPE INPUT
    ================================================== -->

    <div class="parameter">

        <h3>7. Rope Construction & Grade</h3>

        <p>
            The rope database is selected according to the
            specified rope core and rope grade.
        </p>


        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Rope Core =
            ${getAssistantSelectValue("mh_core")}

            <br>

            Rope Grade =
            ${getAssistantSelectValue("mh_grade")}

            <br>

            Number of Falls =
            ${getRopeInputValue("F")}

        </div>


        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Rope Core =
            ${getAssistantSelectValue("ah_core")}

            <br>

            Rope Grade =
            ${getAssistantSelectValue("ah_grade")}

            <br>

            Number of Falls =
            ${getRopeInputValue("f")}

        </div>

    </div>


    <!-- =================================================
         AUTOMATIC ROPE DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>8. Automatically Selected Rope Diameter</h3>

        <p>
            The calculator searches the applicable rope
            database and selects the smallest available rope
            diameter whose minimum breaking strength is equal
            to or greater than the required breaking load.
        </p>

        <div class="assistant-formula">

            <b>Selection Logic</b><br><br>

            Select smallest diameter where
            <br><br>

            MBF ≥ Required Breaking Load

        </div>


        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Required Breaking Load =
            ${getRopeCalculatedValue("mh_L2")}
            kN

            <br><br>

            Selected Rope Diameter =
            <b>
                ${getRopeCalculatedValue("mh_dia")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Required Breaking Load =
            ${getRopeCalculatedValue("ah_l2")}
            kN

            <br><br>

            Selected Rope Diameter =
            <b>
                ${getRopeCalculatedValue("ah_dia")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         RECOMMENDED ROPE
    ================================================== -->

    <div class="parameter">

        <h3>9. Recommended Wire Rope</h3>

        <p>
            The recommendation section checks the selected rope
            against the available Indian Standard or Powerform
            rope database.
        </p>


        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Rope Standard =
            ${getRopeStandardAssistant("MH")}

            <br>

            Required Breaking Load =
            ${getRopeRecommendationValue("mh_rope_required_bl")}
            kN

            <br>

            Recommended Diameter =
            <b>
                ${getRopeRecommendationValue("mh_rope_recommended_dia")}
                mm
            </b>

            <br>

            Recommended Minimum Breaking Strength =
            <b>
                ${getRopeRecommendationValue("mh_rope_recommended_mbf")}
                kN
            </b>

        </div>


        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Rope Standard =
            ${getRopeStandardAssistant("AH")}

            <br>

            Required Breaking Load =
            ${getRopeRecommendationValue("ah_rope_required_bl")}
            kN

            <br>

            Recommended Diameter =
            <b>
                ${getRopeRecommendationValue("ah_rope_recommended_dia")}
                mm
            </b>

            <br>

            Recommended Minimum Breaking Strength =
            <b>
                ${getRopeRecommendationValue("ah_rope_recommended_mbf")}
                kN
            </b>

        </div>

    </div>


    <!-- =================================================
         MANUFACTURER ROPE
    ================================================== -->

    <div class="parameter">

        <h3>10. Manufacturer Rope Selection</h3>

        <p>
            A manufacturer-specified rope diameter can be
            entered in the calculator. The corresponding
            minimum breaking strength is then checked against
            the required breaking load.
        </p>


        <div class="assistant-formula">

            <b>Selection Check</b><br><br>

            Manufacturer MBF ≥ Required Breaking Load

            <br><br>

            → Rope satisfies requirement

        </div>


        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Manufacturer Rope Dia =
            ${getRopeRecommendationValue("mh_rope_manufacturer_dia")}

            <br>

            Manufacturer MBF =
            ${getRopeRecommendationValue("mh_rope_manufacturer_mbf")}
            kN

            <br><br>

            Status =
            ${getRopeManufacturerStatus("MH")}

        </div>


        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Manufacturer Rope Dia =
            ${getRopeRecommendationValue("ah_rope_manufacturer_dia")}

            <br>

            Manufacturer MBF =
            ${getRopeRecommendationValue("ah_rope_manufacturer_mbf")}
            kN

            <br><br>

            Status =
            ${getRopeManufacturerStatus("AH")}

        </div>

    </div>


    <!-- =================================================
         FINAL ROPE DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>11. Final Rope Diameter</h3>

        <p>
            If a manufacturer rope diameter is provided,
            it takes priority over the automatically selected
            rope diameter.
        </p>

        <div class="assistant-formula">

            <b>Formula / Logic</b><br><br>

            Final Dia =
            Manufacturer Dia

            <br><br>

            If Manufacturer Dia is not given:

            <br><br>

            Final Dia =
            Automatically Selected Dia

        </div>


        <div class="assistant-calculation">

            <b>🏗️ MH</b><br><br>

            Automatic Dia =
            ${getRopeCalculatedValue("mh_dia")}
            mm

            <br>

            Manufacturer Dia =
            ${getRopeRecommendationValue("mh_rope_manufacturer_dia")}

            <br><br>

            <b>
                Final Rope Dia =
                ${getFinalRopeDia("MH")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>🏗️ AH</b><br><br>

            Automatic Dia =
            ${getRopeCalculatedValue("ah_dia")}
            mm

            <br>

            Manufacturer Dia =
            ${getRopeRecommendationValue("ah_rope_manufacturer_dia")}

            <br><br>

            <b>
                Final Rope Dia =
                ${getFinalRopeDia("AH")}
            </b>

        </div>

    </div>


    <!-- =================================================
         COMPLETE CALCULATION FLOW
    ================================================== -->

    <div class="parameter">

        <h3>📐 Wire Rope Calculation Flow</h3>

        <ol>

            <li>
                Read safe working load Q.
            </li>

            <li>
                Read additional load Q1.
            </li>

            <li>
                Read tong / attachment weight Q2.
            </li>

            <li>
                Calculate total weight M.
            </li>

            <li>
                Read number of falls F.
            </li>

            <li>
                Calculate load per rope S.
            </li>

            <li>
                Obtain rope service factor Zp.
            </li>

            <li>
                Calculate required breaking strength Fo.
            </li>

            <li>
                Convert Fo into required breaking load BL.
            </li>

            <li>
                Select rope database according to core and grade.
            </li>

            <li>
                Select the smallest suitable rope diameter.
            </li>

            <li>
                Compare manufacturer rope, if provided.
            </li>

            <li>
                Determine final rope diameter.
            </li>

        </ol>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • The total weight includes Q, Q1 and Q2.

            <br><br>

            • Number of falls determines the load carried by
            each rope part.

            <br><br>

            • Zp is obtained from the hoist mechanism
            calculation.

            <br><br>

            • Required breaking strength is calculated before
            selecting the rope from the database.

            <br><br>

            • The selected rope should have a minimum breaking
            strength equal to or greater than the calculated
            requirement.

            <br><br>

            • Manufacturer rope diameter can be used as the
            final selected diameter when provided.

            <br><br>

            • Final rope selection should also be checked for
            sheave diameter, drum diameter, rope construction,
            bending fatigue and applicable design standards.

        </div>

    </div>


    <!-- =================================================
         REFERENCES
    ================================================== -->

    <div class="parameter">

        <h3>📚 Engineering References</h3>

        <p>
            <b>Rope Selection :</b>
            Applicable wire-rope design requirements and
            project-approved rope selection data.
        </p>

        <p>
            <b>Rope Database :</b>
            Indian Standard rope data and manufacturer /
            Powerform selection data used in the calculator.
        </p>

        <p>
            <b>Note :</b>
            Exact IS clause, table number, page number and
            manufacturer catalogue reference should be verified
            against the applicable project design basis.
        </p>

    </div>

    `;
}


// =====================================================
// ================= ROPE ASSISTANT HELPERS =============
// =====================================================


function getRopeCalculatedValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    return element.innerText ||
           element.textContent ||
           "-";
}


// =====================================================
// READ ROPE INPUT
// =====================================================

function getRopeInputValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = element.value;

    return value !== "" ? value : "—";
}


// =====================================================
// READ SELECT VALUE
// =====================================================

function getAssistantSelectValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const option =
        element.options[element.selectedIndex];

    return option
        ? option.textContent
        : element.value || "-";
}


// =====================================================
// ROPE ZP
// =====================================================

function getRopeZp(prefix) {

    if (
        typeof CRANE !== "undefined" &&
        CRANE.HOIST
    ) {

        if (
            prefix === "MH" &&
            CRANE.HOIST.MH
        ) {

            return CRANE.HOIST.MH.Zp ??
                   "-";
        }

        if (
            prefix === "AH" &&
            CRANE.HOIST.AH
        ) {

            return CRANE.HOIST.AH.Zp ??
                   "-";
        }

    }

    return "-";
}


// =====================================================
// ROPE RECOMMENDATION VALUE
// =====================================================

function getRopeRecommendationValue(id) {

    const element =
        document.getElementById(id);

    if (!element) return "-";

    return element.innerText ||
           element.textContent ||
           "-";
}


// =====================================================
// ROPE STANDARD
// =====================================================

function getRopeStandardAssistant(prefix) {

    const p =
        prefix.toLowerCase();

    const selected =
        document.querySelector(
            `input[name="${p}_rope_standard"]:checked`
        );

    if (!selected) return "Indian Standard";

    if (selected.value === "POWERFORM") {

        const type =
            document.getElementById(
                `${p}_powerform_type`
            );

        const grade =
            document.getElementById(
                `${p}_powerform_grade`
            );

        return `Powerform ${type ? type.value : ""} ${
            grade ? grade.value : ""
        }`;

    }

    return "Indian Standard";
}


// =====================================================
// MANUFACTURER STATUS
// =====================================================

function getRopeManufacturerStatus(prefix) {

    const p =
        prefix.toLowerCase();

    const element =
        document.getElementById(
            `${p}_rope_manufacturer_status`
        );

    if (!element) return "—";

    return element.innerText ||
           element.textContent ||
           "—";
}


// =====================================================
// FINAL ROPE DIAMETER
// =====================================================

function getFinalRopeDia(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.ROPE
    ) {
        return "—";
    }

    const rope =
        prefix === "MH"
            ? CRANE.ROPE.MH
            : CRANE.ROPE.AH;

    if (
        rope &&
        rope.finalDia !== undefined &&
        rope.finalDia !== null &&
        Number(rope.finalDia) > 0
    ) {

        return Number(rope.finalDia).toFixed(0) + " mm";

    }

    return "—";
}


// =====================================================
// ================= SHEAVE ASSISTANT ===================
// =====================================================

function showSheaveAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Sheave Selection & Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Sheave calculation determines the required diameter of
            the main and equalizer sheaves based on the selected
            wire rope diameter and the applicable sheave diameter
            ratio.
        </p>

        <p>
            The calculation considers:
        </p>

        <ul>
            <li>Final Wire Rope Diameter</li>
            <li>Sheave Diameter Factor (Ls)</li>
            <li>Equalizer Sheave Factor (Le)</li>
            <li>Rope Construction Factor (Crc)</li>
            <li>Main Sheave Diameter</li>
            <li>Equalizer Sheave Diameter</li>
            <li>Recommended Sheave Selection</li>
        </ul>

        <p>
            Calculation is performed separately for
            <b>Main Hoist (MH)</b> and
            <b>Auxiliary Hoist (AH)</b>.
        </p>

    </div>


    <!-- =================================================
         ROPE CONSTRUCTION
    ================================================== -->

    <div class="parameter">

        <h3>1. Wire Rope Construction</h3>

        <p>
            Wire rope construction affects the minimum sheave
            diameter through the rope construction factor
            <b>Crc</b>.
        </p>

        <p>
            The calculator currently provides:
        </p>

        <ul>
            <li>6 × 36 / 6 × 37 / Compacted → Crc = 1.00</li>
            <li>6 × 24 → Crc = 1.12</li>
            <li>6 × 19 → Crc = 1.25</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Rope Construction =
            ${getAssistantSelectText("ropeConst_MH")}

            <br><br>

            Crc =
            ${getAssistantValue("Crc_MH")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Rope Construction =
            ${getAssistantSelectText("ropeConst_AH")}

            <br><br>

            Crc =
            ${getAssistantValue("Crc_AH")}

        </div>

    </div>


    <!-- =================================================
         ROPE DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>2. Selected Wire Rope Diameter</h3>

        <p>
            The final wire rope diameter is obtained from the
            Wire Rope Selection calculation.
        </p>

        <p>
            If a manufacturer rope diameter is entered, that
            diameter becomes the final rope diameter.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Calculated Rope Dia =
            ${getAssistantValue("mh_dia")} mm

            <br><br>

            Final Rope Dia =
            <b>
                ${getSheaveRopeDia("MH")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Calculated Rope Dia =
            ${getAssistantValue("ah_dia")} mm

            <br><br>

            Final Rope Dia =
            <b>
                ${getSheaveRopeDia("AH")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         MAIN SHEAVE DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>3. Main Sheave Diameter (Dm)</h3>

        <p>
            Main sheave diameter is calculated from the final
            rope diameter, applicable sheave factor and rope
            construction factor.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Dm = d × Ls × Crc

        </div>


        <p><b>Where :</b></p>

        <ul>
            <li>d = Final wire rope diameter</li>
            <li>Ls = Main sheave diameter factor</li>
            <li>Crc = Rope construction factor</li>
            <li>Dm = Main sheave diameter at axis</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d =
            ${getSheaveRopeDia("MH")} mm

            <br>

            Ls =
            ${getAssistantValueFromCrane("MH", "Ls")}

            <br>

            Crc =
            ${getAssistantValue("Crc_MH")}

            <br><br>

            Dm =
            ${getSheaveCalculation("MH", "D")}

            mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d =
            ${getSheaveRopeDia("AH")} mm

            <br>

            Ls =
            ${getAssistantValueFromCrane("AH", "Ls1")}

            <br>

            Crc =
            ${getAssistantValue("Crc_AH")}

            <br><br>

            Dm =
            ${getSheaveCalculation("AH", "D")}

            mm

        </div>

    </div>


    <!-- =================================================
         MAIN SHEAVE BOTTOM
    ================================================== -->

    <div class="parameter">

        <h3>4. Main Sheave Bottom Diameter (Dm')</h3>

        <p>
            Main sheave bottom diameter is obtained by subtracting
            the rope diameter from the calculated main sheave
            diameter.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Dm' = Dm − d

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Dm =
            ${getSheaveCalculation("MH", "D")} mm

            <br>

            d =
            ${getSheaveRopeDia("MH")} mm

            <br><br>

            <b>
                Dm' =
                ${getSheaveCalculation("MH", "DM")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Dm =
            ${getSheaveCalculation("AH", "D")} mm

            <br>

            d =
            ${getSheaveRopeDia("AH")} mm

            <br><br>

            <b>
                Dm' =
                ${getSheaveCalculation("AH", "DM")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         EQUALIZER SHEAVE
    ================================================== -->

    <div class="parameter">

        <h3>5. Equalizer Sheave Diameter (De)</h3>

        <p>
            Equalizer sheave diameter is calculated using the
            equalizer sheave factor and rope construction factor.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            De = d × Le × Crc

        </div>


        <p><b>Where :</b></p>

        <ul>
            <li>d = Final wire rope diameter</li>
            <li>Le = Equalizer sheave factor</li>
            <li>Crc = Rope construction factor</li>
            <li>De = Equalizer sheave diameter at axis</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d =
            ${getSheaveRopeDia("MH")} mm

            <br>

            Le =
            ${getAssistantValueFromCrane("MH", "Le")}

            <br>

            Crc =
            ${getAssistantValue("Crc_MH")}

            <br><br>

            <b>
                De =
                ${getSheaveCalculation("MH", "De")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d =
            ${getSheaveRopeDia("AH")} mm

            <br>

            Le =
            ${getAssistantValueFromCrane("AH", "Le1")}

            <br>

            Crc =
            ${getAssistantValue("Crc_AH")}

            <br><br>

            <b>
                De =
                ${getSheaveCalculation("AH", "De")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         EQUALIZER BOTTOM
    ================================================== -->

    <div class="parameter">

        <h3>6. Equalizer Sheave Bottom Diameter (De')</h3>

        <p>
            Equalizer sheave bottom diameter is obtained by
            subtracting the rope diameter from the equalizer
            sheave axis diameter.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            De' = De − d

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            De =
            ${getSheaveCalculation("MH", "De")} mm

            <br>

            d =
            ${getSheaveRopeDia("MH")} mm

            <br><br>

            <b>
                De' =
                ${getSheaveCalculation("MH", "DE")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            De =
            ${getSheaveCalculation("AH", "De")} mm

            <br>

            d =
            ${getSheaveRopeDia("AH")} mm

            <br><br>

            <b>
                De' =
                ${getSheaveCalculation("AH", "DE")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         RECOMMENDED MAIN SHEAVE
    ================================================== -->

    <div class="parameter">

        <h3>7. Recommended Main Sheave Selection</h3>

        <p>
            The calculator compares the calculated required
            sheave diameter with the available sheave database.
            The smallest available sheave equal to or greater
            than the required diameter is selected.
        </p>


        <div class="assistant-formula">

            Required Sheave Dia ≤ Selected Sheave Dia

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Main Sheave Dia =
            ${getSheaveCalculation("MH", "D")} mm

            <br><br>

            Designation =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_main_sheave_designation"
                )}
            </b>

            <br>

            Selected Sheave Dia =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_main_sheave_dia"
                )} mm
            </b>

            <br>

            Selected Sheave PCD =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_main_sheave_pcd"
                )} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Main Sheave Dia =
            ${getSheaveCalculation("AH", "D")} mm

            <br><br>

            Designation =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_main_sheave_designation"
                )}
            </b>

            <br>

            Selected Sheave Dia =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_main_sheave_dia"
                )} mm
            </b>

            <br>

            Selected Sheave PCD =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_main_sheave_pcd"
                )} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         RECOMMENDED EQUALIZER
    ================================================== -->

    <div class="parameter">

        <h3>8. Recommended Equalizer Sheave Selection</h3>

        <p>
            Equalizer sheave selection is performed using the
            calculated equalizer sheave diameter and the same
            applicable rope-diameter-based sheave database.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Equalizer Dia =
            ${getSheaveCalculation("MH", "De")} mm

            <br><br>

            Designation =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_eq_sheave_designation"
                )}
            </b>

            <br>

            Selected Sheave Dia =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_eq_sheave_dia"
                )} mm
            </b>

            <br>

            Selected Sheave PCD =
            <b>
                ${getRecommendedSheaveValue(
                    "mh_eq_sheave_pcd"
                )} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Equalizer Dia =
            ${getSheaveCalculation("AH", "De")} mm

            <br><br>

            Designation =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_eq_sheave_designation"
                )}
            </b>

            <br>

            Selected Sheave Dia =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_eq_sheave_dia"
                )} mm
            </b>

            <br>

            Selected Sheave PCD =
            <b>
                ${getRecommendedSheaveValue(
                    "ah_eq_sheave_pcd"
                )} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL PCD
    ================================================== -->

    <div class="parameter">

        <h3>9. Final Selected Main Sheave PCD</h3>

        <p>
            Final PCD is selected from the calculated sheave
            diameter unless a manufacturer-specified value
            is provided.
        </p>


        <div class="assistant-formula">

            Final PCD =
            Manufacturer PCD
            if provided,
            otherwise Calculated PCD

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Calculated / Selected PCD =
            <b>
                ${getAssistantValue("mh_Dpp")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Calculated / Selected PCD =
            <b>
                ${getAssistantValue("ah_Dpp")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         STANDARD
    ================================================== -->

    <div class="parameter">

        <h3>📚 Standards & References</h3>

        <div class="assistant-standard">

            <b>IPSS:1-08-002-18</b>

            <br><br>

            Recommended sheave selection is currently based on
            the sheave database incorporated in the calculator.

            <br><br>

            The applicable rope diameter and sheave designation
            are matched against the available database.

        </div>

        <div class="assistant-standard">

            <b>Engineering Reference</b>

            <br><br>

            The final sheave selection should be checked against
            the applicable project specification, IPSS requirement
            and manufacturer's catalogue.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Final wire rope diameter is used as the basis for
            sheave calculation.

            <br><br>

            • Rope construction factor Crc changes the required
            sheave diameter.

            <br><br>

            • Main sheave diameter is calculated using Ls.

            <br><br>

            • Equalizer sheave diameter is calculated using Le.

            <br><br>

            • The available sheave database is searched for a
            sheave equal to or greater than the calculated
            requirement.

            <br><br>

            • The smallest suitable available sheave is selected.

            <br><br>

            • PCD is calculated as selected sheave diameter plus
            rope diameter.

            <br><br>

            • Manufacturer-selected dimensions should be checked
            against the calculated requirement.

        </div>

    </div>

    `;

}
// =====================================================
// ============== SHEAVE ASSISTANT HELPERS ==============
// =====================================================

function getSheaveRopeDia(prefix) {

    if (
        typeof CRANE !== "undefined" &&
        CRANE.ROPE
    ) {

        if (
            prefix === "MH" &&
            CRANE.ROPE.MH
        ) {

            return Number(
                CRANE.ROPE.MH.finalDia || 0
            ).toFixed(2);

        }

        if (
            prefix === "AH" &&
            CRANE.ROPE.AH
        ) {

            return Number(
                CRANE.ROPE.AH.finalDia || 0
            ).toFixed(2);

        }

    }

    return "-";
}


// =====================================================
// GET VALUE FROM CRANE.SHEAVE
// =====================================================

function getSheaveCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.SHEAVE
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.SHEAVE.MH
            : CRANE.SHEAVE.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET Ls / Le FROM CRANE.HOIST
// =====================================================

function getAssistantValueFromCrane(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.HOIST
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.HOIST.MH
            : CRANE.HOIST.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET RECOMMENDED SHEAVE RESULT
// =====================================================

function getRecommendedSheaveValue(id) {

    const element =
        document.getElementById(id);

    if (!element) return "-";

    return (
        element.innerText ||
        element.textContent ||
        "-"
    );
}


// =====================================================
// GET SELECT VALUE / TEXT
// =====================================================

function getAssistantSelectText(id) {

    const element =
        document.getElementById(id);

    if (!element) return "-";

    if (element.tagName === "SELECT") {

        const option =
            element.options[element.selectedIndex];

        return option
            ? option.textContent
            : "-";

    }

    return "-";
}

// =====================================================
// ================ DRUM DIA ASSISTANT =================
// =====================================================

function showDrumDiaAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Rope Drum Diameter Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Rope drum diameter calculation determines the required
            drum diameter based on the selected wire rope diameter,
            drum diameter factor and rope construction factor.
        </p>

        <p>
            The calculation is performed separately for
            <b>Main Hoist (MH)</b> and
            <b>Auxiliary Hoist (AH)</b>.
        </p>

        <p>
            The calculation determines:
        </p>

        <ul>

            <li>Drum Diameter at Axis (Dd)</li>

            <li>Drum Diameter at Groove Bottom (Dd')</li>

            <li>Drum Shell Outside Diameter (Drd)</li>

            <li>Manufacturer Selected Drum PCD / Diameter</li>

            <li>Final Drum Diameter</li>

        </ul>

    </div>


    <!-- =================================================
         ROPE DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>1. Selected Wire Rope Diameter</h3>

        <p>
            The final wire rope diameter obtained from the
            Wire Rope Selection calculation is used for
            determining the required rope drum diameter.
        </p>

        <p>
            If a manufacturer rope diameter is provided,
            that diameter becomes the final rope diameter.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Final Rope Dia =

            <b>
                ${getDrumRopeDia("MH")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Final Rope Dia =

            <b>
                ${getDrumRopeDia("AH")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM FACTOR
    ================================================== -->

    <div class="parameter">

        <h3>2. Drum Diameter Factor (Ld)</h3>

        <p>
            <b>Ld</b> is the drum diameter factor used for
            calculating the required drum diameter with respect
            to the selected wire rope diameter.
        </p>

        <p>
            The value of Ld is obtained from the Hoist calculation
            data stored in the calculator.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Ld =

            ${getDrumValueFromCrane("MH", "Ld")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Ld =

            ${getDrumValueFromCrane("AH", "Ld")}

        </div>

    </div>


    <!-- =================================================
         ROPE CONSTRUCTION FACTOR
    ================================================== -->

    <div class="parameter">

        <h3>3. Rope Construction Factor (Crc)</h3>

        <p>
            The rope construction factor <b>Crc</b> accounts for
            the effect of wire rope construction on the required
            drum diameter.
        </p>

        <p>
            The current calculator obtains Crc from the selected
            wire rope construction.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Rope Construction =

            ${getAssistantSelectText("ropeConst_MH")}

            <br><br>

            Crc =

            ${getAssistantValue("Crc_MH")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Rope Construction =

            ${getAssistantSelectText("ropeConst_AH")}

            <br><br>

            Crc =

            ${getAssistantValue("Crc_AH")}

        </div>

    </div>


    <!-- =================================================
         DRUM DIAMETER AT AXIS
    ================================================== -->

    <div class="parameter">

        <h3>4. Drum Diameter at Axis (Dd)</h3>

        <p>
            The drum diameter at axis is calculated using the
            final wire rope diameter, drum diameter factor and
            rope construction factor.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Dd = d × Ld × Crc

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                d = Final wire rope diameter
            </li>

            <li>
                Ld = Drum diameter factor
            </li>

            <li>
                Crc = Rope construction factor
            </li>

            <li>
                Dd = Drum diameter at axis
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d =

            ${getDrumRopeDia("MH")} mm

            <br>

            Ld =

            ${getDrumValueFromCrane("MH", "Ld")}

            <br>

            Crc =

            ${getAssistantValue("Crc_MH")}

            <br><br>

            <b>
                Dd =
                ${getDrumCalculation("MH", "Dd")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d =

            ${getDrumRopeDia("AH")} mm

            <br>

            Ld =

            ${getDrumValueFromCrane("AH", "Ld")}

            <br>

            Crc =

            ${getAssistantValue("Crc_AH")}

            <br><br>

            <b>
                Dd =
                ${getDrumCalculation("AH", "Dd")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         GROOVE BOTTOM
    ================================================== -->

    <div class="parameter">

        <h3>5. Drum Diameter at Groove Bottom (Dd')</h3>

        <p>
            The groove-bottom diameter is obtained by subtracting
            the wire rope diameter from the drum diameter at axis.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Dd' = Dd − d

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                Dd = Drum diameter at axis
            </li>

            <li>
                d = Final wire rope diameter
            </li>

            <li>
                Dd' = Drum diameter at groove bottom
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Dd =

            ${getDrumCalculation("MH", "Dd")}
            mm

            <br>

            d =

            ${getDrumRopeDia("MH")}
            mm

            <br><br>

            <b>
                Dd' =
                ${getDrumCalculation("MH", "DdB")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Dd =

            ${getDrumCalculation("AH", "Dd")}
            mm

            <br>

            d =

            ${getDrumRopeDia("AH")}
            mm

            <br><br>

            <b>
                Dd' =
                ${getDrumCalculation("AH", "DdB")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         SHELL OD
    ================================================== -->

    <div class="parameter">

        <h3>6. Drum Shell Outside Diameter (Drd)</h3>

        <p>
            The drum shell outside diameter is calculated by
            adding the shell thickness allowance to the groove
            bottom diameter.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Drd = Dd' + 2 × (0.4 × d)

        </div>


        <p><b>Which can also be written as:</b></p>

        <div class="assistant-formula">

            Drd = Dd' + 0.8d

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                Dd' = Drum diameter at groove bottom
            </li>

            <li>
                d = Final wire rope diameter
            </li>

            <li>
                0.4d = radial shell allowance used in the calculation
            </li>

            <li>
                Drd = Drum shell outside diameter
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Dd' =

            ${getDrumCalculation("MH", "DdB")}
            mm

            <br>

            d =

            ${getDrumRopeDia("MH")}
            mm

            <br><br>

            Drd =

            Dd' + 2 × (0.4 × d)

            <br><br>

            <b>
                Drd =
                ${getDrumCalculation("MH", "Drd")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Dd' =

            ${getDrumCalculation("AH", "DdB")}
            mm

            <br>

            d =

            ${getDrumRopeDia("AH")}
            mm

            <br><br>

            Drd =

            Dd' + 2 × (0.4 × d)

            <br><br>

            <b>
                Drd =
                ${getDrumCalculation("AH", "Drd")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         MANUFACTURER DRUM DIA
    ================================================== -->

    <div class="parameter">

        <h3>7. Manufacturer Selected Drum Diameter</h3>

        <p>
            A manufacturer-selected drum diameter can be entered
            in the input field.
        </p>

        <p>
            If a manufacturer value is provided, it is used as
            the final drum diameter. Otherwise, the calculated
            drum diameter at axis is used.
        </p>


        <div class="assistant-formula">

            <b>Final Drum Diameter</b>

            <br><br>

            Manufacturer Diameter
            &nbsp; if provided

            <br>

            otherwise

            <br>

            Calculated Dd

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Calculated Drum Dia =

            ${getDrumCalculation("MH", "Dd")}
            mm

            <br><br>

            Manufacturer Drum Dia =

            ${getAssistantValue("DPCD")}
            mm

            <br><br>

            Final Drum Dia =

            <b>
                ${getFinalDrumDia("MH")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Calculated Drum Dia =

            ${getDrumCalculation("AH", "Dd")}
            mm

            <br><br>

            Manufacturer Drum Dia =

            ${getAssistantValue("dpcd")}
            mm

            <br><br>

            Final Drum Dia =

            <b>
                ${getFinalDrumDia("AH")}
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL VALUE
    ================================================== -->

    <div class="parameter">

        <h3>8. Final Drum Diameter Used in Design</h3>

        <p>
            The final drum diameter stored in the calculator is
            converted from millimetres to metres because the
            subsequent design calculations use SI units.
        </p>


        <div class="assistant-formula">

            Final Drum Dia (m)
            =
            Final Drum Dia (mm) / 1000

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Final Drum Dia =

            <b>
                ${getFinalDrumDia("MH")}
            </b>

            <br><br>

            Internal CRANE value =

            <b>
                ${getFinalDrumFinalMeter("MH")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Final Drum Dia =

            <b>
                ${getFinalDrumDia("AH")}
            </b>

            <br><br>

            Internal CRANE value =

            <b>
                ${getFinalDrumFinalMeter("AH")}
            </b>

        </div>

    </div>


    <!-- =================================================
         SUMMARY
    ================================================== -->

    <div class="parameter">

        <h3>📊 Calculation Summary</h3>

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Rope Dia =
            ${getDrumRopeDia("MH")} mm

            <br>

            Ld =
            ${getDrumValueFromCrane("MH", "Ld")}

            <br>

            Crc =
            ${getAssistantValue("Crc_MH")}

            <br><br>

            Dd =
            ${getDrumCalculation("MH", "Dd")} mm

            <br>

            Dd' =
            ${getDrumCalculation("MH", "DdB")} mm

            <br>

            Drd =
            ${getDrumCalculation("MH", "Drd")} mm

            <br><br>

            <b>
                Final Drum Dia =
                ${getFinalDrumDia("MH")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Rope Dia =
            ${getDrumRopeDia("AH")} mm

            <br>

            Ld =
            ${getDrumValueFromCrane("AH", "Ld")}

            <br>

            Crc =
            ${getAssistantValue("Crc_AH")}

            <br><br>

            Dd =
            ${getDrumCalculation("AH", "Dd")} mm

            <br>

            Dd' =
            ${getDrumCalculation("AH", "DdB")} mm

            <br>

            Drd =
            ${getDrumCalculation("AH", "Drd")} mm

            <br><br>

            <b>
                Final Drum Dia =
                ${getFinalDrumDia("AH")}
            </b>

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Final wire rope diameter is used as the basis
            for drum diameter calculation.

            <br><br>

            • Drum diameter factor Ld directly affects the
            required drum diameter.

            <br><br>

            • Rope construction factor Crc is applied to the
            calculated drum diameter.

            <br><br>

            • Groove-bottom diameter is obtained by subtracting
            the rope diameter from the drum axis diameter.

            <br><br>

            • Shell outside diameter is calculated using the
            0.4 × rope diameter radial allowance.

            <br><br>

            • Manufacturer-selected drum diameter takes
            precedence over the calculated value when entered.

            <br><br>

            • The final drum diameter is stored internally
            in metres for subsequent calculations.

            <br><br>

            • Final dimensions should be checked against the
            applicable project specification, design standard
            and drum manufacturer's catalogue.

        </div>

    </div>


    <!-- =================================================
         STANDARD / REFERENCE
    ================================================== -->

    <div class="parameter">

        <h3>📚 Engineering Reference</h3>

        <div class="assistant-standard">

            <b>Design Calculation</b>

            <br><br>

            Drum diameter is calculated from the rope diameter,
            drum diameter factor and rope construction factor
            incorporated in the calculator.

            <br><br>

            The final selected drum dimension should be verified
            against the applicable crane design standard and
            manufacturer's requirements.

        </div>

    </div>

    `;
}


// =====================================================
// ============== DRUM DIA ASSISTANT HELPERS ===========
// =====================================================


// =====================================================
// GET FINAL ROPE DIA
// =====================================================

function getDrumRopeDia(prefix) {

    if (
        typeof CRANE !== "undefined" &&
        CRANE.ROPE
    ) {

        if (
            prefix === "MH" &&
            CRANE.ROPE.MH
        ) {

            const value =
                Number(
                    CRANE.ROPE.MH.finalDia || 0
                );

            return value
                ? value.toFixed(2)
                : "-";
        }


        if (
            prefix === "AH" &&
            CRANE.ROPE.AH
        ) {

            const value =
                Number(
                    CRANE.ROPE.AH.finalDia || 0
                );

            return value
                ? value.toFixed(2)
                : "-";
        }

    }

    return "-";
}


// =====================================================
// GET VALUE FROM CRANE.DRUM_DIA
// =====================================================

function getDrumCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_DIA
    ) {

        return "-";
    }


    const data =
        prefix === "MH"
            ? CRANE.DRUM_DIA.MH
            : CRANE.DRUM_DIA.AH;


    if (!data) return "-";


    const value =
        Number(data[key]);


    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET Ld FROM CRANE.HOIST
// =====================================================

function getDrumValueFromCrane(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.HOIST
    ) {

        return "-";
    }


    const data =
        prefix === "MH"
            ? CRANE.HOIST.MH
            : CRANE.HOIST.AH;


    if (!data) return "-";


    const value =
        Number(data[key]);


    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET FINAL DRUM DIA IN MM
// =====================================================

function getFinalDrumDia(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_DIA
    ) {

        return "-";
    }


    const data =
        prefix === "MH"
            ? CRANE.DRUM_DIA.MH
            : CRANE.DRUM_DIA.AH;


    if (!data) return "-";


    const value =
        Number(data.finalDia || 0);


    if (!value) return "-";


    // finalDia internally meter mein hai
    return (value * 1000).toFixed(2) + " mm";
}


// =====================================================
// GET FINAL DRUM DIA IN METER
// =====================================================

function getFinalDrumFinalMeter(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_DIA
    ) {

        return "-";
    }


    const data =
        prefix === "MH"
            ? CRANE.DRUM_DIA.MH
            : CRANE.DRUM_DIA.AH;


    if (!data) return "-";


    const value =
        Number(data.finalDia || 0);


    return Number.isFinite(value)
        ? value.toFixed(4) + " m"
        : "-";
}



// =====================================================
// =============== DRUM LENGTH ASSISTANT ================
// =====================================================

function showDrumLengthAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Rope Drum Length Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Rope drum length calculation determines the required
            total axial length of the rope drum based on the lift
            height, number of falls, number of rope drums, drum
            diameter, groove pitch and additional drum-end
            requirements.
        </p>

        <p>
            The calculation considers:
        </p>

        <ul>
            <li>Lift Height (L)</li>
            <li>Number of Falls (F)</li>
            <li>Number of Rope Drums (k)</li>
            <li>Final Drum Diameter (D)</li>
            <li>Groove Pitch (p)</li>
            <li>Extra Grooves (n)</li>
            <li>Ungrooved Length at Centre (d2)</li>
            <li>Clamp Distance at Drum End (d3)</li>
            <li>Active Grooves</li>
            <li>Total Grooves</li>
            <li>Grooved Distance</li>
            <li>Total Drum Length</li>
            <li>Final Manufacturer Selected Length</li>
        </ul>

        <p>
            Calculation is performed separately for
            <b>Main Hoist (MH)</b> and
            <b>Auxiliary Hoist (AH)</b>.
        </p>

    </div>


    <!-- =================================================
         LIFT HEIGHT
    ================================================== -->

    <div class="parameter">

        <h3>1. Lift Height (L)</h3>

        <p>
            Lift height represents the vertical distance through
            which the load is lifted. It is used to determine the
            total length of rope that must be accommodated on the
            drum.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Lift Height L =
            ${getDrumLengthInput("HL")}
            m

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Lift Height L =
            ${getDrumLengthInput("hl")}
            m

        </div>

    </div>


    <!-- =================================================
         FALLS
    ================================================== -->

    <div class="parameter">

        <h3>2. Number of Falls (F)</h3>

        <p>
            Number of falls represents the number of rope parts
            supporting the load. The number of falls is obtained
            from the Wire Rope calculation.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Number of Falls F =
            ${getDrumLengthCraneValue("MH", "F")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Number of Falls F =
            ${getDrumLengthCraneValue("AH", "F")}

        </div>

    </div>


    <!-- =================================================
         NUMBER OF ROPE DRUMS
    ================================================== -->

    <div class="parameter">

        <h3>3. Number of Rope Drums (k)</h3>

        <p>
            The total number of falls is distributed among the
            available rope drums.
        </p>


        <div class="assistant-formula">

            Falls per Rope Drum = F / k

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Number of Rope Drums k =
            ${getDrumLengthInput("DFk")}

            <br><br>

            Falls per Rope Drum =
            <b>
                ${getDrumLengthCalculation("MH", "gk")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Number of Rope Drums k =
            ${getDrumLengthInput("dfk")}

            <br><br>

            Falls per Rope Drum =
            <b>
                ${getDrumLengthCalculation("AH", "gk")}
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>4. Final Rope Drum Diameter (D)</h3>

        <p>
            The final drum diameter is obtained from the Rope Drum
            Diameter calculation. If a manufacturer diameter is
            provided, the manufacturer value becomes the final
            drum diameter.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Final Drum Diameter =
            <b>
                ${getDrumLengthDrumDia("MH")} mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Final Drum Diameter =
            <b>
                ${getDrumLengthDrumDia("AH")} mm
            </b>

        </div>

    </div>


    <!-- =================================================
         ACTIVE GROOVES
    ================================================== -->

    <div class="parameter">

        <h3>5. Active Grooves (g)</h3>

        <p>
            Active grooves are the number of grooves required to
            accommodate the rope corresponding to the required
            lift height.
        </p>


        <div class="assistant-formula">

            g = ⌈ (L × gk) / (2 × π × D) ⌉

        </div>


        <p><b>Where :</b></p>

        <ul>
            <li>L = Lift height in metres</li>
            <li>gk = Falls per rope drum</li>
            <li>D = Final drum diameter in metres</li>
            <li>g = Active grooves</li>
            <li>⌈ ⌉ = Round upward to the next whole groove</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            L =
            ${getDrumLengthInput("HL")} m

            <br>

            gk =
            ${getDrumLengthCalculation("MH", "gk")}

            <br>

            D =
            ${getDrumLengthDrumDia("MH")} mm

            <br><br>

            <b>
                Active Grooves g =
                ${getDrumLengthCalculation("MH", "g")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            L =
            ${getDrumLengthInput("hl")} m

            <br>

            gk =
            ${getDrumLengthCalculation("AH", "gk")}

            <br>

            D =
            ${getDrumLengthDrumDia("AH")} mm

            <br><br>

            <b>
                Active Grooves g =
                ${getDrumLengthCalculation("AH", "g")}
            </b>

        </div>

    </div>


    <!-- =================================================
         EXTRA GROOVES
    ================================================== -->

    <div class="parameter">

        <h3>6. Extra Grooves</h3>

        <p>
            Extra grooves are provided in addition to the active
            grooves to maintain sufficient rope reserve and
            accommodate the required drum arrangement.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Extra Grooves n =
            ${getDrumLengthInput("em")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Extra Grooves n =
            ${getDrumLengthInput("ea")}

        </div>

    </div>


    <!-- =================================================
         TOTAL GROOVES
    ================================================== -->

    <div class="parameter">

        <h3>7. Total Grooves (G)</h3>

        <p>
            Total grooves are obtained by adding the active grooves
            and the specified extra grooves.
        </p>


        <div class="assistant-formula">

            G = g + n

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Active Grooves g =
            ${getDrumLengthCalculation("MH", "g")}

            <br>

            Extra Grooves n =
            ${getDrumLengthInput("em")}

            <br><br>

            <b>
                Total Grooves G =
                ${getDrumLengthCalculation("MH", "G")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Active Grooves g =
            ${getDrumLengthCalculation("AH", "g")}

            <br>

            Extra Grooves n =
            ${getDrumLengthInput("ea")}

            <br><br>

            <b>
                Total Grooves G =
                ${getDrumLengthCalculation("AH", "G")}
            </b>

        </div>

    </div>


    <!-- =================================================
         GROOVE PITCH
    ================================================== -->

    <div class="parameter">

        <h3>8. Groove Pitch (p)</h3>

        <p>
            Groove pitch is the centre-to-centre distance between
            adjacent rope grooves on the drum.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Groove Pitch p =
            ${getDrumLengthInput("P")}
            mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Groove Pitch p =
            ${getDrumLengthInput("p")}
            mm

        </div>

    </div>


    <!-- =================================================
         GROOVED DISTANCE
    ================================================== -->

    <div class="parameter">

        <h3>9. Grooved Distance on Both Sides (d1)</h3>

        <p>
            The grooved portion of the drum is calculated from
            the total number of grooves and groove pitch.
        </p>


        <div class="assistant-formula">

            d1 = 2 × G × p

        </div>


        <p><b>Where :</b></p>

        <ul>
            <li>G = Total grooves</li>
            <li>p = Groove pitch</li>
            <li>d1 = Grooved distance on both sides</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            G =
            ${getDrumLengthCalculation("MH", "G")}

            <br>

            p =
            ${getDrumLengthInput("P")} mm

            <br><br>

            <b>
                d1 =
                ${getDrumLengthCalculation("MH", "d1")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            G =
            ${getDrumLengthCalculation("AH", "G")}

            <br>

            p =
            ${getDrumLengthInput("p")} mm

            <br><br>

            <b>
                d1 =
                ${getDrumLengthCalculation("AH", "d1")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         UNGROOVED CENTRE
    ================================================== -->

    <div class="parameter">

        <h3>10. Ungrooved Length at Centre (d2)</h3>

        <p>
            d2 represents the ungrooved portion provided at the
            centre of the drum.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d2 =
            ${getDrumLengthInput("D2")}
            mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d2 =
            ${getDrumLengthInput("d2")}
            mm

        </div>

    </div>


    <!-- =================================================
         CLAMP DISTANCE
    ================================================== -->

    <div class="parameter">

        <h3>11. Clamp Distance at Drum End (d3)</h3>

        <p>
            d3 represents the additional axial length required
            at the drum end for rope termination or clamp
            arrangement.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d3 =
            ${getDrumLengthInput("D3")}
            mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d3 =
            ${getDrumLengthInput("d3")}
            mm

        </div>

    </div>


    <!-- =================================================
         TOTAL DRUM LENGTH
    ================================================== -->

    <div class="parameter">

        <h3>12. Total Calculated Drum Length</h3>

        <p>
            Total drum length is obtained by adding the grooved
            distance, centre ungrooved portion and drum-end clamp
            distance.
        </p>


        <div class="assistant-formula">

            TD = d1 + d2 + d3

        </div>


        <p><b>Where :</b></p>

        <ul>
            <li>d1 = Grooved distance</li>
            <li>d2 = Ungrooved centre length</li>
            <li>d3 = Clamp distance</li>
            <li>TD = Total calculated drum length</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            d1 =
            ${getDrumLengthCalculation("MH", "d1")} mm

            <br>

            d2 =
            ${getDrumLengthInput("D2")} mm

            <br>

            d3 =
            ${getDrumLengthInput("D3")} mm

            <br><br>

            <b>
                TD =
                ${getDrumLengthCalculation("MH", "TD")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            d1 =
            ${getDrumLengthCalculation("AH", "d1")} mm

            <br>

            d2 =
            ${getDrumLengthInput("d2")} mm

            <br>

            d3 =
            ${getDrumLengthInput("d3")} mm

            <br><br>

            <b>
                TD =
                ${getDrumLengthCalculation("AH", "TD")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         MANUFACTURER LENGTH
    ================================================== -->

    <div class="parameter">

        <h3>13. Manufacturer Selected Drum Length</h3>

        <p>
            If a manufacturer-specified drum length is provided,
            that value is used as the final selected drum length.
            Otherwise, the calculated total drum length is used.
        </p>


        <div class="assistant-formula">

            Final Drum Length =
            Manufacturer Length, if provided

            <br><br>

            Otherwise

            <br><br>

            Final Drum Length = Calculated Total Drum Length

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Calculated Drum Length =
            ${getDrumLengthCalculation("MH", "TD")}
            mm

            <br><br>

            Manufacturer Selected Length =
            ${getDrumLengthInput("mh_TDs")}
            mm

            <br><br>

            <b>
                Final Drum Length =
                ${getDrumLengthFinal("MH")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Calculated Drum Length =
            ${getDrumLengthCalculation("AH", "TD")}
            mm

            <br><br>

            Manufacturer Selected Length =
            ${getDrumLengthInput("ah_tds")}
            mm

            <br><br>

            <b>
                Final Drum Length =
                ${getDrumLengthFinal("AH")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL RESULT
    ================================================== -->

    <div class="parameter">

        <h3>14. Final Drum Length Check</h3>

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Calculated Length =
            <b>
                ${getDrumLengthCalculation("MH", "TD")}
                mm
            </b>

            <br><br>

            Final Selected Length =
            <b>
                ${getDrumLengthFinal("MH")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Calculated Length =
            <b>
                ${getDrumLengthCalculation("AH", "TD")}
                mm
            </b>

            <br><br>

            Final Selected Length =
            <b>
                ${getDrumLengthFinal("AH")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         STANDARD / REFERENCE
    ================================================== -->

    <div class="parameter">

        <h3>📚 Engineering Reference</h3>

        <div class="assistant-standard">

            <b>Rope Drum Design</b>

            <br><br>

            Rope drum dimensions should be checked against the
            applicable crane design standard, project
            specification and rope drum manufacturer's design
            requirements.

            <br><br>

            Groove geometry, rope termination, flange dimensions,
            minimum rope reserve and drum shell design should be
            verified separately.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Active grooves are calculated from lift height and
            falls per rope drum.

            <br><br>

            • The active groove count is rounded upward using
            the ceiling function.

            <br><br>

            • Extra grooves are added to obtain the total groove
            requirement.

            <br><br>

            • Grooved distance is calculated from total grooves
            and groove pitch.

            <br><br>

            • Centre ungrooved length d2 and clamp distance d3
            are directly added to the grooved portion.

            <br><br>

            • Total drum length is therefore:

            <br><br>

            <b>
                TD = d1 + d2 + d3
            </b>

            <br><br>

            • Manufacturer-selected drum length takes priority
            when a valid manufacturer value is entered.

            <br><br>

            • Final drum length should always be checked against
            the actual rope winding arrangement and manufacturer's
            drum construction.

        </div>

    </div>

    `;
}


// =====================================================
// ============ DRUM LENGTH ASSISTANT HELPERS ============
// =====================================================


// =====================================================
// GET INPUT VALUE
// =====================================================

function getDrumLengthInput(id) {

    const element =
        document.getElementById(id);

    if (!element) return "-";

    const value =
        Number(element.value);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET VALUE FROM CRANE.DRUM_LEN
// =====================================================

function getDrumLengthCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_LEN
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.DRUM_LEN.MH
            : CRANE.DRUM_LEN.AH;

    if (!data) return "-";

    const value =
        Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET ROPE FALLS FROM CRANE.ROPE
// =====================================================

function getDrumLengthCraneValue(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.ROPE
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.ROPE.MH
            : CRANE.ROPE.AH;

    if (!data) return "-";

    const value =
        Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET FINAL DRUM DIAMETER
// =====================================================

function getDrumLengthDrumDia(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_DIA
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.DRUM_DIA.MH
            : CRANE.DRUM_DIA.AH;

    if (!data) return "-";


    // finalDia is stored in metre

    const value =
        Number(data.finalDia);

    if (!Number.isFinite(value) || value <= 0) {
        return "-";
    }


    // Convert metre → mm

    return (value * 1000).toFixed(2);
}


// =====================================================
// GET FINAL DRUM LENGTH
// =====================================================

function getDrumLengthFinal(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_LEN
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.DRUM_LEN.MH
            : CRANE.DRUM_LEN.AH;

    if (!data) return "-";

    const value =
        Number(data.finalL);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// ================= WHEEL ASSISTANT ====================
// =====================================================

function showWheelAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Wheel Load & Wheel Selection
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Wheel calculation determines the maximum and minimum
            wheel loads and the required wheel diameter for
            <b>Crane Travel (CT)</b> and
            <b>Long Travel (LT)</b>.
        </p>

        <p>
            The calculation considers:
        </p>

        <ul>
            <li>Crane / Trolley loads</li>
            <li>Wheel arrangement</li>
            <li>Wheel gauge and base</li>
            <li>Hook approach</li>
            <li>Crane span</li>
            <li>Limiting wheel pressure</li>
            <li>Rail top width</li>
            <li>Rail corner radius</li>
            <li>Wheel RPM coefficient</li>
            <li>Mechanism coefficient</li>
            <li>Recommended wheel database</li>
        </ul>

        <p>
            The calculation is performed separately for
            <b>CT</b> and <b>LT</b>.
        </p>

    </div>


    <!-- =================================================
         CT WHEEL LOAD
    ================================================== -->

    <div class="parameter">

        <h3>1. CT Wheel Load Calculation</h3>

        <p>
            The CT wheel load calculation determines the maximum
            and minimum load acting on an individual crane-travel
            wheel.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            w₁ =
            (Q + Q₁) × p × q
            /
            (y × z)

            <br><br>

            w₂ =
            (G − Q₁) / n

            <br><br>

            Pmax =
            w₁ + w₂

            <br><br>

            Pmin =
            G / n

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                Q = Main Hoist rated load
            </li>

            <li>
                Q₁ = Trolley / hoist dead load contribution
            </li>

            <li>
                G = Crane / girder dead load
            </li>

            <li>
                p = Max. hook distance wheel gauge
            </li>

            <li>
                q = Max. hook distance wheel base
            </li>

            <li>
                y = CT gauge
            </li>

            <li>
                z = CT base
            </li>

            <li>
                n = Number of CT wheels
            </li>

        </ul>


        <!-- ================= CT INPUTS ================= -->

        <div class="assistant-calculation">

            <b>CT Inputs</b><br><br>

            Q =
            ${getWheelInputValue("mh_q")}
            Ton

            <br>

            Q₁ =
            ${getWheelInputValue("mh_q1")}
            Ton

            <br>

            G =
            ${getWheelInputValue("ct_g")}
            Ton

            <br>

            p =
            ${getWheelInputValue("ct_p0")}
            mm

            <br>

            q =
            ${getWheelInputValue("ct_q0")}
            mm

            <br>

            y =
            ${getWheelInputValue("ct_y0")}
            mm

            <br>

            z =
            ${getWheelInputValue("ct_z0")}
            mm

            <br>

            n =
            ${getWheelInputValue("ct_n0")}

        </div>


        <!-- ================= CT CALCULATION ================= -->

        <div class="assistant-calculation">

            <b>CT Calculation</b><br><br>

            w₁ =
            (Q + Q₁) × p × q / (y × z)

            <br><br>

            w₁ =
            (${getWheelInputValue("mh_q")}
            +
            ${getWheelInputValue("mh_q1")})
            ×
            ${getWheelInputValue("ct_p0")}
            ×
            ${getWheelInputValue("ct_q0")}
            /
            (
            ${getWheelInputValue("ct_y0")}
            ×
            ${getWheelInputValue("ct_z0")}
            )

            <br><br>

            w₁ =
            <b>
                ${getWheelCalculation("CT", "w1")}
            </b>
            Ton

            <br><br>

            w₂ =
            (G − Q₁) / n

            <br><br>

            w₂ =
            (
            ${getWheelInputValue("ct_g")}
            −
            ${getWheelInputValue("mh_q1")}
            )
            /
            ${getWheelInputValue("ct_n0")}

            <br><br>

            w₂ =
            <b>
                ${getWheelCalculation("CT", "w2")}
            </b>
            Ton

        </div>


        <div class="assistant-calculation">

            <b>CT Maximum Wheel Load</b><br><br>

            Pmax = w₁ + w₂

            <br><br>

            Pmax =
            ${getWheelCalculation("CT", "w1")}
            +
            ${getWheelCalculation("CT", "w2")}

            <br><br>

            <b>
                Pmax =
                ${getWheelCalculation("CT", "P2")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT Minimum Wheel Load</b><br><br>

            Pmin = G / n

            <br><br>

            Pmin =
            ${getWheelInputValue("ct_g")}
            /
            ${getWheelInputValue("ct_n0")}

            <br><br>

            <b>
                Pmin =
                ${getWheelCalculation("CT", "P3")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         LT WHEEL LOAD
    ================================================== -->

    <div class="parameter">

        <h3>2. LT Wheel Load Calculation</h3>

        <p>
            LT wheel load is calculated considering the crane span,
            hook approaches and distribution of crane dead load
            over the available wheels.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Wb = Wc − G

            <br><br>

            w₁ = Wb / n

            <br><br>

            w₂ =
            (G + Q) × (S − A)
            /
            ((n / 2) × S)

            <br><br>

            w₃ =
            G × B
            /
            ((n / 2) × S)

            <br><br>

            Pmax = w₁ + w₂

            <br><br>

            Pmin = w₁ + w₃

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                Wc = Total crane dead load
            </li>

            <li>
                G = Crane / girder dead load
            </li>

            <li>
                Wb = Remaining crane weight
            </li>

            <li>
                Q = Main Hoist rated load
            </li>

            <li>
                A = Minimum hook approach
            </li>

            <li>
                B = Maximum hook approach
            </li>

            <li>
                S = Crane span
            </li>

            <li>
                n = Number of LT wheels
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>LT Inputs</b><br><br>

            Wc =
            ${getWheelInputValue("lt_g")}
            Ton

            <br>

            G =
            ${getWheelInputValue("ct_g")}
            Ton

            <br>

            Q =
            ${getWheelInputValue("mh_q")}
            Ton

            <br>

            A =
            ${getWheelInputValue("lt_A0")}
            m

            <br>

            B =
            ${getWheelInputValue("lt_B0")}
            m

            <br>

            S =
            ${getWheelInputValue("lt_S0")}
            m

            <br>

            n =
            ${getWheelInputValue("lt_n0")}

        </div>


        <div class="assistant-calculation">

            <b>LT Remaining Crane Weight</b><br><br>

            Wb = Wc − G

            <br><br>

            Wb =
            ${getWheelInputValue("lt_g")}
            −
            ${getWheelInputValue("ct_g")}

            <br><br>

            <b>
                Wb =
                ${getWheelCalculation("LT", "Wb")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Base Wheel Load</b><br><br>

            w₁ = Wb / n

            <br><br>

            w₁ =
            ${getWheelCalculation("LT", "Wb")}
            /
            ${getWheelInputValue("lt_n0")}

            <br><br>

            <b>
                w₁ =
                ${getWheelCalculation("LT", "w1")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Maximum Load Component</b><br><br>

            w₂ =
            (G + Q) × (S − A)
            /
            ((n / 2) × S)

            <br><br>

            w₂ =
            <b>
                ${getWheelCalculation("LT", "w2")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Minimum Load Component</b><br><br>

            w₃ =
            G × B
            /
            ((n / 2) × S)

            <br><br>

            w₃ =
            <b>
                ${getWheelCalculation("LT", "w3")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Maximum Wheel Load</b><br><br>

            Pmax = w₁ + w₂

            <br><br>

            Pmax =
            ${getWheelCalculation("LT", "w1")}
            +
            ${getWheelCalculation("LT", "w2")}

            <br><br>

            <b>
                Pmax =
                ${getWheelCalculation("LT", "P2")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Minimum Wheel Load</b><br><br>

            Pmin = w₁ + w₃

            <br><br>

            Pmin =
            ${getWheelCalculation("LT", "w1")}
            +
            ${getWheelCalculation("LT", "w3")}

            <br><br>

            <b>
                Pmin =
                ${getWheelCalculation("LT", "P3")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         MEAN WHEEL LOAD
    ================================================== -->

    <div class="parameter">

        <h3>3. Mean Wheel Load</h3>

        <p>
            Mean wheel load is calculated using the weighted
            combination of maximum and minimum wheel loads.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Pmean =
            (2 × Pmax + Pmin) / 3

        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Pmax =
            ${getWheelCalculation("CT", "P2")}
            Ton

            <br>

            Pmin =
            ${getWheelCalculation("CT", "P3")}
            Ton

            <br><br>

            Pmean =
            (2 × Pmax + Pmin) / 3

            <br><br>

            <b>
                Pmean =
                ${getWheelCalculation("CT", "A1")}
                Ton
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Pmax =
            ${getWheelCalculation("LT", "P2")}
            Ton

            <br>

            Pmin =
            ${getWheelCalculation("LT", "P3")}
            Ton

            <br><br>

            Pmean =
            (2 × Pmax + Pmin) / 3

            <br><br>

            <b>
                Pmean =
                ${getWheelCalculation("LT", "A1")}
                Ton
            </b>

        </div>

    </div>


    <!-- =================================================
         MEAN LOAD IN kN
    ================================================== -->

    <div class="parameter">

        <h3>4. Mean Wheel Load in kN</h3>

        <p>
            The mean wheel load in tonnes is converted into
            force in kN using gravitational acceleration.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Fmean = Pmean × 9.81

        </div>


        <p>
            where 9.81 is the gravitational acceleration in
            m/s².
        </p>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Fmean =
            ${getWheelCalculation("CT", "A1")}
            × 9.81

            <br><br>

            <b>
                Fmean =
                ${getWheelCalculation("CT", "B1")}
                kN
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Fmean =
            ${getWheelCalculation("LT", "A1")}
            × 9.81

            <br><br>

            <b>
                Fmean =
                ${getWheelCalculation("LT", "B1")}
                kN
            </b>

        </div>

    </div>


    <!-- =================================================
         USEFUL RAIL WIDTH
    ================================================== -->

    <div class="parameter">

        <h3>5. Useful Rail Width (w)</h3>

        <p>
            Useful rail width is obtained by subtracting the
            wheel contact correction based on the rail corner
            radius from the rail top width.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            w = b − (4 / 3) × r

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                b = Rail top width
            </li>

            <li>
                r = Rail corner radius
            </li>

            <li>
                w = Useful rail width
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            b =
            ${getWheelInputValue("ct_b")}
            mm

            <br>

            r =
            ${getWheelInputValue("ct_r")}
            mm

            <br><br>

            w =
            ${getWheelInputValue("ct_b")}
            −
            (4 / 3 ×
            ${getWheelInputValue("ct_r")})

            <br><br>

            <b>
                w =
                ${getWheelCalculation("CT", "C1")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            b =
            ${getWheelInputValue("lt_b")}
            mm

            <br>

            r =
            ${getWheelInputValue("lt_r")}
            mm

            <br><br>

            w =
            ${getWheelInputValue("lt_b")}
            −
            (4 / 3 ×
            ${getWheelInputValue("lt_r")})

            <br><br>

            <b>
                w =
                ${getWheelCalculation("LT", "C1")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         REQUIRED WHEEL DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>6. Calculated Wheel Diameter</h3>

        <p>
            Required wheel diameter is calculated from the mean
            wheel load, limiting wheel pressure, useful rail width,
            wheel RPM coefficient and mechanism coefficient.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            D =
            (1000 × Fmean)
            /
            (PL × w × C1 × C2)

        </div>


        <p><b>Where :</b></p>

        <ul>

            <li>
                Fmean = Mean wheel load in kN
            </li>

            <li>
                PL = Limiting pressure of wheel
            </li>

            <li>
                w = Useful rail width
            </li>

            <li>
                C1 = Wheel RPM coefficient
            </li>

            <li>
                C2 = Mechanism coefficient
            </li>

            <li>
                D = Required wheel diameter
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Fmean =
            ${getWheelCalculation("CT", "B1")}
            kN

            <br>

            PL =
            ${getWheelInputValue("ct_pl")}

            <br>

            w =
            ${getWheelCalculation("CT", "C1")}
            mm

            <br>

            C1 =
            ${getWheelInputValue("ct_c1")}

            <br>

            C2 =
            ${getWheelInputValue("ct_c2")}

            <br><br>

            D =
            (1000 ×
            ${getWheelCalculation("CT", "B1")})
            /
            (
            ${getWheelInputValue("ct_pl")}
            ×
            ${getWheelCalculation("CT", "C1")}
            ×
            ${getWheelInputValue("ct_c1")}
            ×
            ${getWheelInputValue("ct_c2")}
            )

            <br><br>

            <b>
                Required Wheel Dia =
                ${getWheelCalculation("CT", "D1")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Fmean =
            ${getWheelCalculation("LT", "B1")}
            kN

            <br>

            PL =
            ${getWheelInputValue("lt_pl")}

            <br>

            w =
            ${getWheelCalculation("LT", "C1")}
            mm

            <br>

            C1 =
            ${getWheelInputValue("lt_c1")}

            <br>

            C2 =
            ${getWheelInputValue("lt_c2")}

            <br><br>

            D =
            (1000 ×
            ${getWheelCalculation("LT", "B1")})
            /
            (
            ${getWheelInputValue("lt_pl")}
            ×
            ${getWheelCalculation("LT", "C1")}
            ×
            ${getWheelInputValue("lt_c1")}
            ×
            ${getWheelInputValue("lt_c2")}
            )

            <br><br>

            <b>
                Required Wheel Dia =
                ${getWheelCalculation("LT", "D1")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         RAIL SELECTION
    ================================================== -->

    <div class="parameter">

        <h3>7. Selected Rail Size</h3>

        <p>
            The selected rail size is used to identify the
            compatible wheel sizes from the recommended wheel
            database.
        </p>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Selected Rail =
            <b>
                ${getWheelRailText("ct_rail_size")}
            </b>

            <br><br>

            Required Wheel Dia =
            ${getWheelCalculation("CT", "D1")}
            mm

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Selected Rail =
            <b>
                ${getWheelRailText("lt_rail_size")}
            </b>

            <br><br>

            Required Wheel Dia =
            ${getWheelCalculation("LT", "D1")}
            mm

        </div>

    </div>


    <!-- =================================================
         RECOMMENDED WHEEL
    ================================================== -->

    <div class="parameter">

        <h3>8. Recommended Wheel Selection</h3>

        <p>
            The calculated wheel diameter is compared with the
            available wheel database for the selected rail.
        </p>

        <div class="assistant-formula">

            Required Wheel Dia ≤ Selected Wheel Dia

            <br><br>

            Select the smallest available wheel whose diameter
            is equal to or greater than the calculated requirement.
        </div>


        <div class="assistant-calculation">

            <b>CT Wheel</b><br><br>

            Selected Rail =
            <b>
                ${getRecommendedWheelValue(
                    "ct_rail_rec"
                )}
            </b>

            <br><br>

            Required Wheel Dia =
            ${getWheelCalculation("CT", "D1")}
            mm

            <br><br>

            Recommended Wheel Size =
            <b>
                ${getRecommendedWheelValue(
                    "ct_wheel_size_rec"
                )}
            </b>

            <br><br>

            Recommended Wheel Dia =
            <b>
                ${getRecommendedWheelValue(
                    "ct_wheel_dia_rec"
                )}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Wheel</b><br><br>

            Selected Rail =
            <b>
                ${getRecommendedWheelValue(
                    "lt_rail_rec"
                )}
            </b>

            <br><br>

            Required Wheel Dia =
            ${getWheelCalculation("LT", "D1")}
            mm

            <br><br>

            Recommended Wheel Size =
            <b>
                ${getRecommendedWheelValue(
                    "lt_wheel_size_rec"
                )}
            </b>

            <br><br>

            Recommended Wheel Dia =
            <b>
                ${getRecommendedWheelValue(
                    "lt_wheel_dia_rec"
                )}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL WHEEL DIAMETER
    ================================================== -->

    <div class="parameter">

        <h3>9. Final Selected Wheel Diameter</h3>

        <p>
            The final wheel diameter is selected from the
            manufacturer input when provided. If no manufacturer
            value is entered, the calculated wheel diameter is
            used.
        </p>


        <div class="assistant-formula">

            Final Wheel Dia =
            Manufacturer Wheel Dia

            <br>

            if manufacturer value is provided,

            <br><br>

            otherwise

            <br><br>

            Final Wheel Dia =
            Calculated Wheel Dia
        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Calculated Wheel Dia =
            ${getWheelCalculation("CT", "D1")}
            mm

            <br><br>

            Manufacturer Wheel Dia =
            ${getWheelInputValue("ct_d_manu")}
            mm

            <br><br>

            <b>
                Final Wheel Dia =
                ${getWheelFinalDiameter("CT")}
                mm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Calculated Wheel Dia =
            ${getWheelCalculation("LT", "D1")}
            mm

            <br><br>

            Manufacturer Wheel Dia =
            ${getWheelInputValue("lt_d_manu")}
            mm

            <br><br>

            <b>
                Final Wheel Dia =
                ${getWheelFinalDiameter("LT")}
                mm
            </b>

        </div>

    </div>


    <!-- =================================================
         DATABASE LOGIC
    ================================================== -->

    <div class="parameter">

        <h3>10. Wheel Selection Logic</h3>

        <p>
            The recommended wheel is selected in three steps.
        </p>


        <div class="assistant-calculation">

            <b>Step 1 – Rail Matching</b><br><br>

            The selected rail size is matched with the compatible
            wheel sizes available in the wheel database.

        </div>


        <div class="assistant-calculation">

            <b>Step 2 – Diameter Check</b><br><br>

            Wheels having diameter smaller than the calculated
            required diameter are rejected.

            <br><br>

            Required Wheel Dia ≤ Available Wheel Dia

        </div>


        <div class="assistant-calculation">

            <b>Step 3 – Smallest Suitable Wheel</b><br><br>

            From the remaining wheels, the smallest wheel equal
            to or greater than the required diameter is selected.

        </div>

    </div>


    <!-- =================================================
         STANDARD
    ================================================== -->

    <div class="parameter">

        <h3>📚 Standards & References</h3>

        <div class="assistant-standard">

            <b>IPSS:1-08-001-18</b>

            <br><br>

            Wheel selection is based on the wheel database
            incorporated in the calculator.

            <br><br>

            The selected rail size is matched with the applicable
            wheel size and diameter.

        </div>


        <div class="assistant-standard">

            <b>Engineering Reference</b>

            <br><br>

            Final wheel selection should be checked against the
            applicable project specification, IPSS requirements,
            crane design conditions and manufacturer's catalogue.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • CT and LT wheel loads are calculated separately.

            <br><br>

            • Pmax represents the maximum calculated wheel load.

            <br><br>

            • Pmin represents the minimum calculated wheel load.

            <br><br>

            • Mean wheel load is calculated as
            (2 × Pmax + Pmin) / 3.

            <br><br>

            • Mean wheel load is converted from Ton to kN using
            9.81.

            <br><br>

            • Useful rail width is calculated as
            b − (4/3 × r).

            <br><br>

            • Required wheel diameter depends on mean wheel load,
            limiting wheel pressure and rail contact width.

            <br><br>

            • Wheel RPM and mechanism coefficients are included
            in the wheel diameter calculation.

            <br><br>

            • The recommended wheel is the smallest available
            wheel equal to or greater than the calculated
            requirement.

            <br><br>

            • Manufacturer wheel diameter overrides the calculated
            value when entered.

            <br><br>

            • Final wheel selection should always be verified
            against the applicable design standard and
            manufacturer's catalogue.

        </div>

    </div>

    `;
}


// =====================================================
// ============== WHEEL ASSISTANT HELPERS ===============
// =====================================================


// =====================================================
// GET INPUT VALUE
// =====================================================

function getWheelInputValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    if (!Number.isFinite(value)) {
        return "-";
    }

    return value.toFixed(2);
}


// =====================================================
// GET VALUE FROM CRANE.WHEEL_SELECTION
// =====================================================

function getWheelCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.WHEEL_SELECTION
    ) {
        return "-";
    }


    const data =
        prefix === "CT"
            ? CRANE.WHEEL_SELECTION.CT
            : CRANE.WHEEL_SELECTION.LT;


    if (!data) return "-";


    const value = Number(data[key]);


    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET SELECTED RAIL TEXT
// =====================================================

function getWheelRailText(id) {

    const element =
        document.getElementById(id);


    if (!element) {
        return "-";
    }


    if (element.tagName === "SELECT") {

        const option =
            element.options[
                element.selectedIndex
            ];


        return option
            ? option.textContent
            : "-";
    }


    return "-";
}


// =====================================================
// GET RECOMMENDED WHEEL VALUE
// =====================================================

function getRecommendedWheelValue(id) {

    const element =
        document.getElementById(id);


    if (!element) {
        return "-";
    }


    return (
        element.innerText ||
        element.textContent ||
        "-"
    );
}


// =====================================================
// GET FINAL WHEEL DIAMETER
// =====================================================

function getWheelFinalDiameter(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.WHEEL_SELECTION
    ) {
        return "-";
    }


    const data =
        prefix === "CT"
            ? CRANE.WHEEL_SELECTION.CT
            : CRANE.WHEEL_SELECTION.LT;


    if (!data) {
        return "-";
    }


    const value =
        Number(data.finalDia);


    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}

// =====================================================
// ================= GEARBOX ASSISTANT =================
// =====================================================

function showGearboxAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Gearbox Ratio & Power Selection
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Gearbox calculation determines the required gearbox
            power and gear ratio for the crane mechanisms.
        </p>

        <p>
            The calculation is performed separately for:
        </p>

        <ul>
            <li>Main Hoist (MH)</li>
            <li>Auxiliary Hoist (AH)</li>
            <li>Cross Travel (CT)</li>
            <li>Long Travel (LT)</li>
        </ul>

        <p>
            The calculation considers motor power, motor speed,
            mechanism speed, drum/wheel diameter, number of rope
            falls and duty factor.
        </p>

    </div>


    <!-- =================================================
         INPUT PARAMETERS
    ================================================== -->

    <div class="parameter">

        <h3>1. Gearbox Input Parameters</h3>

        <p>
            The following parameters are taken automatically from
            the corresponding crane calculation tabs.
        </p>

        <ul>
            <li>Motor Power</li>
            <li>Motor RPM</li>
            <li>Mechanism Speed</li>
            <li>Drum Diameter / Wheel Diameter</li>
            <li>Number of Rope Falls</li>
            <li>Number of Rope Drums</li>
            <li>Duty Factor</li>
        </ul>


        <!-- ================= MH ================= -->

        <div class="assistant-calculation">

            <b>MH – Main Hoist</b><br><br>

            Motor Power P =
            ${getGearboxValue("MH", "P")} kW

            <br>

            Motor Speed N =
            ${getGearboxValue("MH", "N")} rpm

            <br>

            Hoisting Speed V =
            ${getGearboxValue("MH", "V")} m/min

            <br>

            Drum Diameter D =
            ${getGearboxValue("MH", "D")} m

            <br>

            No. of Falls F =
            ${getGearboxValue("MH", "F")}

            <br>

            No. of Rope Drums Fk =
            ${getGearboxValue("MH", "Fk")}

            <br>

            Duty Factor DF =
            ${getGearboxValue("MH", "DF")}

        </div>


        <!-- ================= AH ================= -->

        <div class="assistant-calculation">

            <b>AH – Auxiliary Hoist</b><br><br>

            Motor Power P =
            ${getGearboxValue("AH", "P")} kW

            <br>

            Motor Speed N =
            ${getGearboxValue("AH", "N")} rpm

            <br>

            Hoisting Speed V =
            ${getGearboxValue("AH", "V")} m/min

            <br>

            Drum Diameter D =
            ${getGearboxValue("AH", "D")} m

            <br>

            No. of Falls F =
            ${getGearboxValue("AH", "F")}

            <br>

            No. of Rope Drums Fk =
            ${getGearboxValue("AH", "Fk")}

            <br>

            Duty Factor DF =
            ${getGearboxValue("AH", "DF")}

        </div>


        <!-- ================= CT ================= -->

        <div class="assistant-calculation">

            <b>CT – Cross Travel</b><br><br>

            Motor Power P =
            ${getGearboxValue("CT", "P")} kW

            <br>

            Motor Speed N =
            ${getGearboxValue("CT", "N")} rpm

            <br>

            Travel Speed V =
            ${getGearboxValue("CT", "V")} m/min

            <br>

            Wheel Diameter D =
            ${getGearboxValue("CT", "D")} m

            <br>

            Duty Factor DF =
            ${getGearboxValue("CT", "DF")}

        </div>


        <!-- ================= LT ================= -->

        <div class="assistant-calculation">

            <b>LT – Long Travel</b><br><br>

            Motor Power P =
            ${getGearboxValue("LT", "P")} kW

            <br>

            Motor Speed N =
            ${getGearboxValue("LT", "N")} rpm

            <br>

            Travel Speed V =
            ${getGearboxValue("LT", "V")} m/min

            <br>

            Wheel Diameter D =
            ${getGearboxValue("LT", "D")} m

            <br>

            Duty Factor DF =
            ${getGearboxValue("LT", "DF")}

        </div>

    </div>


    <!-- =================================================
         DUTY FACTOR
    ================================================== -->

    <div class="parameter">

        <h3>2. Duty Factor (DF)</h3>

        <p>
            The duty factor is used to account for the operating
            duty and loading conditions of the gearbox.
        </p>

        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Pg = P × DF

        </div>

        <p><b>Where:</b></p>

        <ul>
            <li>P = Selected motor power (kW)</li>
            <li>DF = Duty factor</li>
            <li>Pg = Required gearbox power (kW)</li>
        </ul>


        <!-- ================= MH ================= -->

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            P =
            ${getGearboxValue("MH", "P")} kW

            <br>

            DF =
            ${getGearboxValue("MH", "DF")}

            <br><br>

            <b>
                Pg =
                ${getGearboxCalculation("MH", "Pg")}
                kW
            </b>

        </div>


        <!-- ================= AH ================= -->

        <div class="assistant-calculation">

            <b>AH</b><br><br>

            P =
            ${getGearboxValue("AH", "P")} kW

            <br>

            DF =
            ${getGearboxValue("AH", "DF")}

            <br><br>

            <b>
                Pg =
                ${getGearboxCalculation("AH", "Pg")}
                kW
            </b>

        </div>


        <!-- ================= CT ================= -->

        <div class="assistant-calculation">

            <b>CT</b><br><br>

            P =
            ${getGearboxValue("CT", "P")} kW

            <br>

            DF =
            ${getGearboxValue("CT", "DF")}

            <br><br>

            <b>
                Pg =
                ${getGearboxCalculation("CT", "Pg")}
                kW
            </b>

        </div>


        <!-- ================= LT ================= -->

        <div class="assistant-calculation">

            <b>LT</b><br><br>

            P =
            ${getGearboxValue("LT", "P")} kW

            <br>

            DF =
            ${getGearboxValue("LT", "DF")}

            <br><br>

            <b>
                Pg =
                ${getGearboxCalculation("LT", "Pg")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         ROPE FALLS
    ================================================== -->

    <div class="parameter">

        <h3>3. Number of Falls per Rope Drum</h3>

        <p>
            For hoisting mechanisms, when more than one rope drum
            is used, the total number of rope falls is distributed
            among the rope drums.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            rk = F / Fk

        </div>

        <p><b>Where:</b></p>

        <ul>
            <li>F = Total number of rope falls</li>
            <li>Fk = Number of rope drums</li>
            <li>rk = Falls per rope drum</li>
        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            F =
            ${getGearboxValue("MH", "F")}

            <br>

            Fk =
            ${getGearboxValue("MH", "Fk")}

            <br><br>

            <b>
                rk =
                ${getGearboxCalculation("MH", "rk")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            F =
            ${getGearboxValue("AH", "F")}

            <br>

            Fk =
            ${getGearboxValue("AH", "Fk")}

            <br><br>

            <b>
                rk =
                ${getGearboxCalculation("AH", "rk")}
            </b>

        </div>

    </div>


    <!-- =================================================
         HOIST GEAR RATIO
    ================================================== -->

    <div class="parameter">

        <h3>4. Hoist Gear Ratio – MH & AH</h3>

        <p>
            For hoisting mechanisms, the gearbox ratio is based on
            motor speed, rope drum diameter, hoisting speed and
            number of falls per rope drum.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            r =
            (2 × π × N × D)
            /
            (rk × V)

        </div>


        <p><b>Where:</b></p>

        <ul>
            <li>N = Motor speed (rpm)</li>
            <li>D = Rope drum diameter (m)</li>
            <li>V = Hoisting speed (m/min)</li>
            <li>rk = Number of falls per rope drum</li>
            <li>r = Required gearbox ratio</li>
        </ul>


        <!-- ================= MH ================= -->

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            N =
            ${getGearboxValue("MH", "N")} rpm

            <br>

            D =
            ${getGearboxValue("MH", "D")} m

            <br>

            rk =
            ${getGearboxCalculation("MH", "rk")}

            <br>

            V =
            ${getGearboxValue("MH", "V")} m/min

            <br><br>

            <b>
                r =
                ${getGearboxCalculation("MH", "r")}
            </b>

        </div>


        <!-- ================= AH ================= -->

        <div class="assistant-calculation">

            <b>AH</b><br><br>

            N =
            ${getGearboxValue("AH", "N")} rpm

            <br>

            D =
            ${getGearboxValue("AH", "D")} m

            <br>

            rk =
            ${getGearboxCalculation("AH", "rk")}

            <br>

            V =
            ${getGearboxValue("AH", "V")} m/min

            <br><br>

            <b>
                r =
                ${getGearboxCalculation("AH", "r")}
            </b>

        </div>

    </div>


    <!-- =================================================
         TRAVEL GEAR RATIO
    ================================================== -->

    <div class="parameter">

        <h3>5. Travel Gear Ratio – CT & LT</h3>

        <p>
            For travel mechanisms, the gearbox ratio is calculated
            from motor speed, wheel diameter and travel speed.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            r =
            (π × N × D)
            /
            V

        </div>


        <p><b>Where:</b></p>

        <ul>
            <li>N = Motor speed (rpm)</li>
            <li>D = Wheel diameter (m)</li>
            <li>V = Travel speed (m/min)</li>
            <li>r = Required gearbox ratio</li>
        </ul>


        <!-- ================= CT ================= -->

        <div class="assistant-calculation">

            <b>CT – Cross Travel</b><br><br>

            N =
            ${getGearboxValue("CT", "N")} rpm

            <br>

            D =
            ${getGearboxValue("CT", "D")} m

            <br>

            V =
            ${getGearboxValue("CT", "V")} m/min

            <br><br>

            <b>
                r =
                ${getGearboxCalculation("CT", "r")}
            </b>

        </div>


        <!-- ================= LT ================= -->

        <div class="assistant-calculation">

            <b>LT – Long Travel</b><br><br>

            N =
            ${getGearboxValue("LT", "N")} rpm

            <br>

            D =
            ${getGearboxValue("LT", "D")} m

            <br>

            V =
            ${getGearboxValue("LT", "V")} m/min

            <br><br>

            <b>
                r =
                ${getGearboxCalculation("LT", "r")}
            </b>

        </div>

    </div>


    <!-- =================================================
         REQUIRED POWER SUMMARY
    ================================================== -->

    <div class="parameter">

        <h3>6. Required Gearbox Power Summary</h3>

        <p>
            The required gearbox power is calculated by multiplying
            the selected motor power by the specified duty factor.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Gearbox Power =
            <b>
                ${getGearboxCalculation("MH", "Pg")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Gearbox Power =
            <b>
                ${getGearboxCalculation("AH", "Pg")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Required Gearbox Power =
            <b>
                ${getGearboxCalculation("CT", "Pg")}
                kW
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Required Gearbox Power =
            <b>
                ${getGearboxCalculation("LT", "Pg")}
                kW
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL GEAR RATIO
    ================================================== -->

    <div class="parameter">

        <h3>7. Final Gearbox Ratio</h3>

        <p>
            The calculated gearbox ratio is used as the default
            final ratio. If a manufacturer-specified gearbox ratio
            is entered, the manufacturer value is used instead.
        </p>


        <div class="assistant-formula">

            <b>Selection Logic</b><br><br>

            Final Ratio =
            Manufacturer Ratio,
            if provided

            <br><br>

            Otherwise

            <br>

            Final Ratio =
            Calculated Required Ratio

        </div>


        <!-- ================= MH ================= -->

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Calculated Ratio =
            ${getGearboxCalculation("MH", "r")}

            <br><br>

            Manufacturer Ratio =
            ${getGearboxManufacturerRatio("r_mh_manu")}

            <br><br>

            <b>
                Final Ratio =
                ${getGearboxCalculation("MH", "finalRatio")}
            </b>

        </div>


        <!-- ================= AH ================= -->

        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Calculated Ratio =
            ${getGearboxCalculation("AH", "r")}

            <br><br>

            Manufacturer Ratio =
            ${getGearboxManufacturerRatio("r_ah_manu")}

            <br><br>

            <b>
                Final Ratio =
                ${getGearboxCalculation("AH", "finalRatio")}
            </b>

        </div>


        <!-- ================= CT ================= -->

        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Calculated Ratio =
            ${getGearboxCalculation("CT", "r")}

            <br><br>

            Manufacturer Ratio =
            ${getGearboxManufacturerRatio("r_ct_manu")}

            <br><br>

            <b>
                Final Ratio =
                ${getGearboxCalculation("CT", "finalRatio")}
            </b>

        </div>


        <!-- ================= LT ================= -->

        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Calculated Ratio =
            ${getGearboxCalculation("LT", "r")}

            <br><br>

            Manufacturer Ratio =
            ${getGearboxManufacturerRatio("r_lt_manu")}

            <br><br>

            <b>
                Final Ratio =
                ${getGearboxCalculation("LT", "finalRatio")}
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL SELECTION SUMMARY
    ================================================== -->

    <div class="parameter">

        <h3>8. Gearbox Selection Summary</h3>

        <div class="assistant-calculation">

            <b>MH – Main Hoist</b><br><br>

            Required Power =
            ${getGearboxCalculation("MH", "Pg")} kW

            <br>

            Required Ratio =
            ${getGearboxCalculation("MH", "r")}

            <br>

            Final Ratio =
            <b>
                ${getGearboxCalculation("MH", "finalRatio")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH – Auxiliary Hoist</b><br><br>

            Required Power =
            ${getGearboxCalculation("AH", "Pg")} kW

            <br>

            Required Ratio =
            ${getGearboxCalculation("AH", "r")}

            <br>

            Final Ratio =
            <b>
                ${getGearboxCalculation("AH", "finalRatio")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>CT – Cross Travel</b><br><br>

            Required Power =
            ${getGearboxCalculation("CT", "Pg")} kW

            <br>

            Required Ratio =
            ${getGearboxCalculation("CT", "r")}

            <br>

            Final Ratio =
            <b>
                ${getGearboxCalculation("CT", "finalRatio")}
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT – Long Travel</b><br><br>

            Required Power =
            ${getGearboxCalculation("LT", "Pg")} kW

            <br>

            Required Ratio =
            ${getGearboxCalculation("LT", "r")}

            <br>

            Final Ratio =
            <b>
                ${getGearboxCalculation("LT", "finalRatio")}
            </b>

        </div>

    </div>


    <!-- =================================================
         STANDARD / ENGINEERING REFERENCE
    ================================================== -->

    <div class="parameter">

        <h3>📚 Standards & Engineering Reference</h3>

        <div class="assistant-standard">

            <b>Gearbox Selection</b>

            <br><br>

            The calculated gearbox power represents the minimum
            required power based on the selected motor and duty
            factor.

            <br><br>

            The final gearbox selection should also consider the
            applicable gearbox manufacturer's catalogue, service
            factor, thermal rating, mechanical rating and project
            specifications.

        </div>

        <div class="assistant-standard">

            <b>Engineering Check</b>

            <br><br>

            The selected gearbox power should be equal to or greater
            than the calculated required gearbox power.

            <br><br>

            Selected Gearbox Power ≥ Required Gearbox Power

            <br><br>

            The selected gearbox ratio should provide the required
            mechanism speed under the actual operating conditions.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Motor power is taken from the final selected motor.

            <br><br>

            • Duty factor is applied to obtain the required
            gearbox power.

            <br><br>

            • For MH and AH, the number of rope falls per drum is
            calculated before determining the gearbox ratio.

            <br><br>

            • Hoist gearbox ratio depends on motor RPM, drum
            diameter, hoisting speed and rope falls per drum.

            <br><br>

            • CT and LT gearbox ratio depends on motor RPM,
            wheel diameter and travel speed.

            <br><br>

            • Manufacturer gearbox ratio overrides the calculated
            ratio when a value is entered.

            <br><br>

            • Final gearbox selection should be checked against
            the gearbox manufacturer's catalogue.

            <br><br>

            • Gearbox mechanical rating and thermal rating should
            be checked separately during final equipment selection.

        </div>

    </div>

    `;
}


// =====================================================
// GET GEARBOX DATA
// =====================================================

function getGearboxData(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.GEARBOX
    ) {
        return null;
    }

    return CRANE.GEARBOX[prefix] || null;
}


// =====================================================
// GET GEARBOX VALUE
// =====================================================

function getGearboxValue(prefix, key) {

    const data = getGearboxData(prefix);

    if (!data) return "-";

    const value = Number(data[key]);

    if (!Number.isFinite(value)) {
        return "-";
    }

    return value.toFixed(2);
}


// =====================================================
// GET GEARBOX CALCULATION
// =====================================================

function getGearboxCalculation(prefix, key) {

    const data = getGearboxData(prefix);

    if (!data) return "-";

    const value = Number(data[key]);

    if (!Number.isFinite(value)) {
        return "-";
    }

    return value.toFixed(2);
}


// =====================================================
// GET MANUFACTURER GEAR RATIO
// =====================================================

function getGearboxManufacturerRatio(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "-";
    }

    const value =
        Number(element.value);

    if (
        !Number.isFinite(value) ||
        value <= 0
    ) {
        return "Not Provided";
    }

    return value.toFixed(2);
}

// =====================================================
// ============ BARREL COUPLING ASSISTANT ==============
// =====================================================

function showBarrelCouplingAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Barrel Coupling Selection & Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Barrel coupling is used between the gearbox and rope drum
            to transmit torque and accommodate the radial load generated
            by the rope drum.
        </p>

        <p>
            The barrel coupling calculation determines:
        </p>

        <ul>

            <li>Net Mass of lifted system</li>

            <li>Net Load</li>

            <li>Approximate Rope Drum Self Weight</li>

            <li>Drum Speed</li>

            <li>Drum Static Pull</li>

            <li>Radial Load</li>

            <li>Torque based on consumed power</li>

            <li>Torque based on installed motor power</li>

            <li>Required Barrel Coupling Size</li>

            <li>Selected Rated Torque</li>

            <li>Selected Radial Load Capacity</li>

        </ul>

        <p>
            The calculation is performed separately for
            <b>Main Hoist (MH)</b> and
            <b>Auxiliary Hoist (AH)</b>.
        </p>

    </div>


    <!-- =================================================
         INPUT DATA
    ================================================== -->

    <div class="parameter">

        <h3>1. Input Parameters</h3>

        <p>
            The barrel coupling calculation uses data from the
            Hoist, Gearbox, Rope Drum Diameter and Rope Drum Length
            calculations, together with the coupling-specific input
            parameters.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Hoist Rated Capacity Q =
            ${getBarrelAssistantValue("mh_q")} Ton

            <br><br>

            Hook / Trolley Weight Q1 =
            ${getBarrelAssistantValue("mh_q1")} Ton

            <br><br>

            Additional Weight Q2 =
            ${getBarrelAssistantValue("mh_q2")} Ton

            <br><br>

            Motor Power =
            ${getBarrelCraneValue("MH", "finalKW")} kW

            <br><br>

            Motor Speed =
            ${getBarrelCraneValue("MH", "finalRPM")} RPM

            <br><br>

            Gearbox Ratio =
            ${getBarrelCraneGearboxValue("MH", "finalRatio")}

            <br><br>

            Final Drum Diameter =
            ${getBarrelCraneDrumValue("MH")} m

            <br><br>

            No. of Rope Drums =
            ${getBarrelDrumCount("MH")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Hoist Rated Capacity Q =
            ${getBarrelAssistantValue("ah_q")} Ton

            <br><br>

            Hook / Trolley Weight Q1 =
            ${getBarrelAssistantValue("ah_q1")} Ton

            <br><br>

            Additional Weight Q2 =
            ${getBarrelAssistantValue("ah_q2")} Ton

            <br><br>

            Motor Power =
            ${getBarrelCraneValue("AH", "finalKW")} kW

            <br><br>

            Motor Speed =
            ${getBarrelCraneValue("AH", "finalRPM")} RPM

            <br><br>

            Gearbox Ratio =
            ${getBarrelCraneGearboxValue("AH", "finalRatio")}

            <br><br>

            Final Drum Diameter =
            ${getBarrelCraneDrumValue("AH")} m

            <br><br>

            No. of Rope Drums =
            ${getBarrelDrumCount("AH")}

        </div>


        <p><b>Coupling-specific inputs:</b></p>

        <ul>

            <li>Transmission Ratio ir</li>

            <li>Service Factor K1</li>

            <li>Operating Factor K2</li>

            <li>Drum Self Mass Md</li>

        </ul>

    </div>


    <!-- =================================================
         NET MASS
    ================================================== -->

    <div class="parameter">

        <h3>2. Net Mass Mnet</h3>

        <p>
            The net mass is obtained by adding the rated hoisting
            capacity and the associated additional masses.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Mnet = (Q + Q1 + Q2) × 1000

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Q = Rated hoisting capacity in Ton
            </li>

            <li>
                Q1 = Additional hook / trolley weight in Ton
            </li>

            <li>
                Q2 = Additional weight in Ton
            </li>

            <li>
                Mnet = Net mass in kg
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Q =
            ${getBarrelAssistantValue("mh_q")} Ton

            <br>

            Q1 =
            ${getBarrelAssistantValue("mh_q1")} Ton

            <br>

            Q2 =
            ${getBarrelAssistantValue("mh_q2")} Ton

            <br><br>

            <b>
                Mnet =
                ${getBarrelCalculation("MH", "Mnet")} kg
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Q =
            ${getBarrelAssistantValue("ah_q")} Ton

            <br>

            Q1 =
            ${getBarrelAssistantValue("ah_q1")} Ton

            <br>

            Q2 =
            ${getBarrelAssistantValue("ah_q2")} Ton

            <br><br>

            <b>
                Mnet =
                ${getBarrelCalculation("AH", "Mnet")} kg
            </b>

        </div>

    </div>


    <!-- =================================================
         NET LOAD
    ================================================== -->

    <div class="parameter">

        <h3>3. Net Load Wnet</h3>

        <p>
            Net load is obtained by multiplying the calculated
            net mass by gravitational acceleration.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Wnet = 9.81 × Mnet

        </div>


        <p>
            Where 9.81 is the gravitational acceleration
            in m/s².
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Mnet =
            ${getBarrelCalculation("MH", "Mnet")} kg

            <br><br>

            <b>
                Wnet =
                ${getBarrelCalculation("MH", "Wnet")} N
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Mnet =
            ${getBarrelCalculation("AH", "Mnet")} kg

            <br><br>

            <b>
                Wnet =
                ${getBarrelCalculation("AH", "Wnet")} N
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM SELF WEIGHT
    ================================================== -->

    <div class="parameter">

        <h3>4. Approximate Rope Drum Self Weight Wd</h3>

        <p>
            The self weight of the rope drum is calculated from
            the drum self mass entered by the user.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Wd = 9.81 × Md

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Md = Drum self mass in kg
            </li>

            <li>
                Wd = Drum self weight in N
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Md =
            ${getBarrelInputValue("bc_md_mh")} kg

            <br><br>

            <b>
                Wd =
                ${getBarrelCalculation("MH", "Wd")} N
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Md =
            ${getBarrelInputValue("bc_md_ah")} kg

            <br><br>

            <b>
                Wd =
                ${getBarrelCalculation("AH", "Wd")} N
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM SPEED
    ================================================== -->

    <div class="parameter">

        <h3>5. Rope Drum Speed n</h3>

        <p>
            The rope drum speed is obtained by dividing the motor
            speed by the gearbox ratio.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            n = N / r

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                N = Motor speed in RPM
            </li>

            <li>
                r = Gearbox reduction ratio
            </li>

            <li>
                n = Rope drum speed in RPM
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Motor Speed N =
            ${getBarrelCraneValue("MH", "finalRPM")} RPM

            <br>

            Gearbox Ratio r =
            ${getBarrelCraneGearboxValue("MH", "finalRatio")}

            <br><br>

            <b>
                n =
                ${getBarrelCalculation("MH", "n")} RPM
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Motor Speed N =
            ${getBarrelCraneValue("AH", "finalRPM")} RPM

            <br>

            Gearbox Ratio r =
            ${getBarrelCraneGearboxValue("AH", "finalRatio")}

            <br><br>

            <b>
                n =
                ${getBarrelCalculation("AH", "n")} RPM
            </b>

        </div>

    </div>


    <!-- =================================================
         DRUM STATIC PULL
    ================================================== -->

    <div class="parameter">

        <h3>6. Drum Static Pull Fp</h3>

        <p>
            The static pull acting through the barrel coupling
            is calculated considering the net load, transmission
            ratio, operating factor and number of rope drums.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Fp =
            Wnet /
            (Mrd × ir × K2)

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Wnet = Net load in N
            </li>

            <li>
                Mrd = Number of rope drums
            </li>

            <li>
                ir = Transmission ratio
            </li>

            <li>
                K2 = Operating factor
            </li>

            <li>
                Fp = Drum static pull in N
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Wnet =
            ${getBarrelCalculation("MH", "Wnet")} N

            <br>

            Mrd =
            ${getBarrelCalculation("MH", "Mrd")}

            <br>

            ir =
            ${getBarrelInputValue("bc_ir_mh")}

            <br>

            K2 =
            ${getBarrelInputValue("bc_k2_mh")}

            <br><br>

            <b>
                Fp =
                ${getBarrelCalculation("MH", "Fp")} N
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Wnet =
            ${getBarrelCalculation("AH", "Wnet")} N

            <br>

            Mrd =
            ${getBarrelCalculation("AH", "Mrd")}

            <br>

            ir =
            ${getBarrelInputValue("bc_ir_ah")}

            <br>

            K2 =
            ${getBarrelInputValue("bc_k2_ah")}

            <br><br>

            <b>
                Fp =
                ${getBarrelCalculation("AH", "Fp")} N
            </b>

        </div>

    </div>


    <!-- =================================================
         RADIAL LOAD
    ================================================== -->

    <div class="parameter">

        <h3>7. Radial Load Fr</h3>

        <p>
            Radial load on the barrel coupling is obtained from
            half of the drum static pull plus half of the drum
            self weight.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Fr = (Fp / 2) + (Wd / 2)

            <br><br>

            or

            <br><br>

            Fr = (Fp + Wd) / 2

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Fp =
            ${getBarrelCalculation("MH", "Fp")} N

            <br>

            Wd =
            ${getBarrelCalculation("MH", "Wd")} N

            <br><br>

            <b>
                Fr =
                ${getBarrelCalculation("MH", "Fr")} N
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Fp =
            ${getBarrelCalculation("AH", "Fp")} N

            <br>

            Wd =
            ${getBarrelCalculation("AH", "Wd")} N

            <br><br>

            <b>
                Fr =
                ${getBarrelCalculation("AH", "Fr")} N
            </b>

        </div>

    </div>


    <!-- =================================================
         TORQUE CONSUMED POWER
    ================================================== -->

    <div class="parameter">

        <h3>8. Torque Based on Consumed Power</h3>

        <p>
            The torque corresponding to the consumed motor power
            is calculated using the drum speed and service factor.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Tc =
            (F × d × K1) / 2

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                F = Drum pull
            </li>

            <li>
                d = Final drum diameter in m
            </li>

            <li>
                K1 = Service factor
            </li>

            <li>
                Tc = Torque based on consumed power
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            F =
            ${getBarrelCalculation("MH", "F")} N

            <br>

            d =
            ${getBarrelCraneDrumValue("MH")} m

            <br>

            K1 =
            ${getBarrelInputValue("bc_k1_mh")}

            <br><br>

            <b>
                Tc =
                ${getBarrelCalculation("MH", "Tc")} Nm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            F =
            ${getBarrelCalculation("AH", "F")} N

            <br>

            d =
            ${getBarrelCraneDrumValue("AH")} m

            <br>

            K1 =
            ${getBarrelInputValue("bc_k1_ah")}

            <br><br>

            <b>
                Tc =
                ${getBarrelCalculation("AH", "Tc")} Nm
            </b>

        </div>

    </div>


    <!-- =================================================
         INSTALLED POWER TORQUE
    ================================================== -->

    <div class="parameter">

        <h3>9. Torque Based on Installed Power</h3>

        <p>
            The torque based on installed motor power is calculated
            from the installed motor power, service factor, drum
            speed and number of rope drums.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            T =
            (975 × 9.81 × Ps × K1) /
            (n × Mrd)

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Ps = Installed motor power in kW
            </li>

            <li>
                K1 = Service factor
            </li>

            <li>
                n = Drum speed in RPM
            </li>

            <li>
                Mrd = Number of rope drums
            </li>

            <li>
                T = Required torque in Nm
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Ps =
            ${getBarrelCraneValue("MH", "finalKW")} kW

            <br>

            K1 =
            ${getBarrelInputValue("bc_k1_mh")}

            <br>

            n =
            ${getBarrelCalculation("MH", "n")} RPM

            <br>

            Mrd =
            ${getBarrelCalculation("MH", "Mrd")}

            <br><br>

            <b>
                T =
                ${getBarrelCalculation("MH", "T")} Nm
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Ps =
            ${getBarrelCraneValue("AH", "finalKW")} kW

            <br>

            K1 =
            ${getBarrelInputValue("bc_k1_ah")}

            <br>

            n =
            ${getBarrelCalculation("AH", "n")} RPM

            <br>

            Mrd =
            ${getBarrelCalculation("AH", "Mrd")}

            <br><br>

            <b>
                T =
                ${getBarrelCalculation("AH", "T")} Nm
            </b>

        </div>

    </div>


    <!-- =================================================
         COUPLING SELECTION
    ================================================== -->

    <div class="parameter">

        <h3>10. Barrel Coupling Selection</h3>

        <p>
            The coupling is selected by comparing the required
            torque and radial load with the rated capacity of
            each available barrel coupling.
        </p>


        <div class="assistant-formula">

            <b>Selection Condition</b><br><br>

            Rated Torque ≥ Required Torque

            <br><br>

            AND

            <br><br>

            Rated Radial Load ≥ Required Radial Load

        </div>


        <p>
            The calculator searches the barrel coupling database
            and selects the first coupling satisfying both
            requirements.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Torque =
            ${getBarrelCalculation("MH", "T")} Nm

            <br>

            Required Radial Load =
            ${getBarrelCalculation("MH", "Fr")} N

            <br><br>

            Selected Coupling Size =
            <b>
                ${getBarrelSelectedValue("sizeMH")}
            </b>

            <br>

            Rated Torque =
            <b>
                ${getBarrelSelectedValue("rated_torque_mh")} kNm
            </b>

            <br>

            Rated Radial Load =
            <b>
                ${getBarrelSelectedValue("rated_radial_mh")} kN
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Torque =
            ${getBarrelCalculation("AH", "T")} Nm

            <br>

            Required Radial Load =
            ${getBarrelCalculation("AH", "Fr")} N

            <br><br>

            Selected Coupling Size =
            <b>
                ${getBarrelSelectedValue("sizeAH")}
            </b>

            <br>

            Rated Torque =
            <b>
                ${getBarrelSelectedValue("rated_torque_ah")} kNm
            </b>

            <br>

            Rated Radial Load =
            <b>
                ${getBarrelSelectedValue("rated_radial_ah")} kN
            </b>

        </div>

    </div>


    <!-- =================================================
         DATABASE
    ================================================== -->

    <div class="parameter">

        <h3>11. Barrel Coupling Selection Database</h3>

        <p>
            The calculator uses the following barrel coupling
            database. The coupling must satisfy both torque and
            radial load requirements.
        </p>


        <div class="assistant-standard">

            <b>Selection Logic</b>

            <br><br>

            For every available coupling:

            <br><br>

            Rated Torque ≥ Required Torque

            <br>

            Rated Radial Load ≥ Required Radial Load

            <br><br>

            The first suitable coupling in the database is selected.

        </div>


        <div class="assistant-standard">

            <b>Available Coupling Series</b>

            <br><br>

            TCBR 25

            <br>
            TCBR 50

            <br>
            TCBR 75

            <br>
            TCBR 100

            <br>
            TCBR 130

            <br>
            TCBR 160

            <br>
            TCBR 200

            <br>
            TCBR 300

            <br>
            TCBR 400

            <br>
            TCBR 500

            <br>
            TCBR 600

            <br>
            TCBR 1000

            <br>
            TCBR 1500

            <br>
            TCBR 2100

            <br>
            TCBR 2600

            <br>
            TCBR 3400

            <br>
            TCBR 4200

            <br>
            TCBR 6200

            <br>
            TCBR 8200

            <br>
            TCBR 9200

            <br>
            TCBR 10200

        </div>

    </div>


    <!-- =================================================
         ENGINEERING CHECK
    ================================================== -->

    <div class="parameter">

        <h3>12. Engineering Selection Check</h3>

        <p>
            The selected coupling is considered suitable only when
            both torque and radial load requirements are satisfied.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Required Torque =
            ${getBarrelCalculation("MH", "T")} Nm

            <br>

            Selected Rated Torque =
            ${getBarrelSelectedValue("rated_torque_mh")} kNm

            <br><br>

            Required Radial Load =
            ${getBarrelCalculation("MH", "Fr")} N

            <br>

            Selected Radial Capacity =
            ${getBarrelSelectedValue("rated_radial_mh")} kN

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Required Torque =
            ${getBarrelCalculation("AH", "T")} Nm

            <br>

            Selected Rated Torque =
            ${getBarrelSelectedValue("rated_torque_ah")} kNm

            <br><br>

            Required Radial Load =
            ${getBarrelCalculation("AH", "Fr")} N

            <br>

            Selected Radial Capacity =
            ${getBarrelSelectedValue("rated_radial_ah")} kN

        </div>

    </div>


    <!-- =================================================
         STANDARD
    ================================================== -->

    <div class="parameter">

        <h3>📚 Standards & Engineering Reference</h3>

        <div class="assistant-standard">

            <b>Barrel Coupling Selection</b>

            <br><br>

            The calculator selects the coupling from the
            incorporated barrel coupling database based on
            required torque and radial load.

            <br><br>

            Final coupling selection should be checked against
            the applicable project specification, coupling
            manufacturer's catalogue and relevant design standard.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Net mass is calculated from Q + Q1 + Q2.

            <br><br>

            • Net load is calculated using gravitational
            acceleration of 9.81 m/s².

            <br><br>

            • Drum speed is obtained from motor RPM divided
            by gearbox ratio.

            <br><br>

            • Static pull is dependent on the transmission ratio,
            operating factor and number of rope drums.

            <br><br>

            • Radial load includes the effect of drum self weight.

            <br><br>

            • Service factor K1 increases the required torque.

            <br><br>

            • The coupling must satisfy both torque and radial
            load requirements.

            <br><br>

            • The smallest suitable coupling available in the
            database is selected.

            <br><br>

            • If no coupling satisfies both conditions,
            the result is shown as <b>Not Safe</b>.

            <br><br>

            • Manufacturer catalogue data should be checked before
            finalizing the selected coupling.

            <br><br>

            • <b>Important:</b> In the current calculation code,
            AH1.Mrd is assigned from MH drum count. If MH and AH
            have different numbers of rope drums, this should be
            corrected to use the AH drum count.

        </div>

    </div>


    `;
}


// =====================================================
// ========== BARREL COUPLING ASSISTANT HELPERS ========
// =====================================================


// =====================================================
// GET INPUT VALUE
// =====================================================

function getBarrelInputValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET HOIST INPUT VALUE
// =====================================================

function getBarrelAssistantValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET BARREL COUPLING CALCULATION
// =====================================================

function getBarrelCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.BARREL_COUPLING
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.BARREL_COUPLING.MH
            : CRANE.BARREL_COUPLING.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET VALUE FROM HOIST
// =====================================================

function getBarrelCraneValue(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.HOIST
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.HOIST.MH
            : CRANE.HOIST.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET GEARBOX VALUE
// =====================================================

function getBarrelCraneGearboxValue(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.GEARBOX
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.GEARBOX.MH
            : CRANE.GEARBOX.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET FINAL DRUM DIAMETER
// =====================================================

function getBarrelCraneDrumValue(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_DIA
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.DRUM_DIA.MH
            : CRANE.DRUM_DIA.AH;

    if (!data) return "-";

    const value = Number(data.finalDia);

    return Number.isFinite(value)
        ? value.toFixed(3)
        : "-";
}


// =====================================================
// GET DRUM COUNT
// =====================================================

function getBarrelDrumCount(prefix) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.DRUM_LEN
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.DRUM_LEN.MH
            : CRANE.DRUM_LEN.AH;

    if (!data) return "-";

    const value = Number(data.k);

    return Number.isFinite(value)
        ? value.toFixed(0)
        : "-";
}


// =====================================================
// GET SELECTED COUPLING RESULT
// =====================================================

function getBarrelSelectedValue(id) {

    const element =
        document.getElementById(id);

    if (!element) return "-";

    return (
        element.innerText ||
        element.textContent ||
        "-"
    );
}



// =====================================================
// ================ BUFFER ASSISTANT ===================
// =====================================================

function showBufferAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        🛡️ Buffer Selection & Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Buffer selection is carried out to absorb the kinetic
            energy of the moving crane mechanism during impact.
        </p>

        <p>
            The buffer calculation determines:
        </p>

        <ul>

            <li>Design Speed</li>

            <li>Kinetic Energy</li>

            <li>Required Buffer Force</li>

            <li>Resultant Mass for LT Buffer</li>

        </ul>

        <p>
            The calculation is performed separately for
            <b>Cross Travel (CT)</b> and
            <b>Long Travel (LT)</b>.
        </p>

    </div>


    <!-- =================================================
         CT INPUT DATA
    ================================================== -->

    <div class="parameter">

        <h3>1. CT Buffer Input Parameters</h3>

        <p>
            The CT buffer calculation uses the Cross Travel
            mechanism mass and rated travel speed together with
            the buffer design parameters.
        </p>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            CT Moving Mass =
            ${getBufferCraneValue("CT", "g")} kg

            <br><br>

            CT Rated Speed =
            ${getBufferCraneValue("CT", "v")} m/min

            <br><br>

            Design Speed Percent C =
            ${getBufferInputValue("ctb_C")}

            <br><br>

            Compression Stroke L =
            ${getBufferInputValue("ctb_L")} m

        </div>

    </div>


    <!-- =================================================
         CT DESIGN SPEED
    ================================================== -->

    <div class="parameter">

        <h3>2. CT Buffer Design Speed Vd</h3>

        <p>
            The design speed is obtained by applying the selected
            design speed percentage to the rated CT travel speed.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Vd = V × C / 60

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                V = Rated CT speed in m/min
            </li>

            <li>
                C = Design speed factor
            </li>

            <li>
                60 = Conversion from min to sec
            </li>

            <li>
                Vd = Design speed in m/s
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Rated Speed V =
            ${getBufferCraneValue("CT", "v")} m/min

            <br>

            Design Speed Factor C =
            ${getBufferInputValue("ctb_C")}

            <br><br>

            <b>
                Vd =
                ${getBufferCalculation("CT", "Vd")} m/s
            </b>

        </div>

    </div>


    <!-- =================================================
         CT KINETIC ENERGY
    ================================================== -->

    <div class="parameter">

        <h3>3. CT Buffer Kinetic Energy</h3>

        <p>
            The kinetic energy of the moving CT mechanism is
            calculated using half of the CT moving mass.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            KE = 0.5 × (G / 2) × Vd²

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                G = CT moving mass in kg
            </li>

            <li>
                Vd = Design speed in m/s
            </li>

            <li>
                KE = Kinetic energy in kJ
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            CT Moving Mass G =
            ${getBufferCraneValue("CT", "g")} kg

            <br>

            Design Speed Vd =
            ${getBufferCalculation("CT", "Vd")} m/s

            <br><br>

            <b>
                KE =
                ${getBufferCalculation("CT", "KE")} kJ
            </b>

        </div>

    </div>


    <!-- =================================================
         CT BUFFER FORCE
    ================================================== -->

    <div class="parameter">

        <h3>4. CT Buffer Force</h3>

        <p>
            The required buffer force is obtained by dividing
            the kinetic energy by the compression stroke.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            F = KE / L

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                KE = Kinetic energy
            </li>

            <li>
                L = Buffer compression stroke in m
            </li>

            <li>
                F = Required buffer force
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>CT</b><br><br>

            Kinetic Energy KE =
            ${getBufferCalculation("CT", "KE")} kJ

            <br>

            Compression Stroke L =
            ${getBufferInputValue("ctb_L")} m

            <br><br>

            <b>
                Buffer Force =
                ${getBufferCalculation("CT", "F")} kN
            </b>

        </div>

    </div>


    <!-- =================================================
         LT INPUT DATA
    ================================================== -->

    <div class="parameter">

        <h3>5. LT Buffer Input Parameters</h3>

        <p>
            The LT buffer calculation considers the crane load,
            CT mechanism mass, crane span, trolley approach,
            LT travel speed and selected buffer parameters.
        </p>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            LT Mass / Crane Mass Q =
            ${getBufferCraneValue("LT", "g")} kg

            <br><br>

            CT Mass Q1 =
            ${getBufferCraneValue("CT", "g")} kg

            <br><br>

            Span S =
            ${getBufferInputValue("ltb_S")} m

            <br><br>

            Minimum Trolley Approach a =
            ${getBufferInputValue("ltb_a")} m

            <br><br>

            LT Rated Speed =
            ${getBufferCraneValue("LT", "v")} m/min

            <br><br>

            Design Speed Factor C =
            ${getBufferInputValue("ltb_C")}

            <br><br>

            Compression Stroke L =
            ${getBufferInputValue("ltb_L")} m

        </div>

    </div>


    <!-- =================================================
         LT RESULTANT MASS
    ================================================== -->

    <div class="parameter">

        <h3>6. LT Resultant Mass M</h3>

        <p>
            The resultant mass used for the LT buffer calculation
            is determined from the LT mass, CT mass, crane span
            and minimum trolley approach.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            M =
            (Q − Q1) / 2
            +
            Q1 × (S − a) / S

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Q = LT mass / crane mass
            </li>

            <li>
                Q1 = CT mass
            </li>

            <li>
                S = Crane span
            </li>

            <li>
                a = Minimum trolley approach
            </li>

            <li>
                M = Resultant mass
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Q =
            ${getBufferCraneValue("LT", "g")} kg

            <br>

            Q1 =
            ${getBufferCraneValue("CT", "g")} kg

            <br>

            S =
            ${getBufferInputValue("ltb_S")} m

            <br>

            a =
            ${getBufferInputValue("ltb_a")} m

            <br><br>

            <b>
                Resultant Mass M =
                ${getBufferCalculation("LT", "M")} T
            </b>

        </div>

    </div>


    <!-- =================================================
         LT DESIGN SPEED
    ================================================== -->

    <div class="parameter">

        <h3>7. LT Buffer Design Speed Vd</h3>

        <p>
            The LT design speed is obtained by applying the
            selected design speed factor to the rated LT speed.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            Vd = V × C / 60

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Rated Speed V =
            ${getBufferCraneValue("LT", "v")} m/min

            <br>

            Design Speed Factor C =
            ${getBufferInputValue("ltb_C")}

            <br><br>

            <b>
                Vd =
                ${getBufferCalculation("LT", "Vd")} m/s
            </b>

        </div>

    </div>


    <!-- =================================================
         LT KINETIC ENERGY
    ================================================== -->

    <div class="parameter">

        <h3>8. LT Buffer Kinetic Energy</h3>

        <p>
            The kinetic energy for the LT buffer is calculated
            from the resultant mass and the design speed.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            KE = 0.5 × M × Vd²

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                M = Resultant mass
            </li>

            <li>
                Vd = LT design speed
            </li>

            <li>
                KE = Kinetic energy
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Resultant Mass M =
            ${getBufferCalculation("LT", "M")} T

            <br>

            Design Speed Vd =
            ${getBufferCalculation("LT", "Vd")} m/s

            <br><br>

            <b>
                KE =
                ${getBufferCalculation("LT", "KE")} kJ
            </b>

        </div>

    </div>


    <!-- =================================================
         LT BUFFER FORCE
    ================================================== -->

    <div class="parameter">

        <h3>9. LT Buffer Force</h3>

        <p>
            The required LT buffer force is obtained by dividing
            the calculated kinetic energy by the compression stroke.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            F = KE / L

        </div>


        <div class="assistant-calculation">

            <b>LT</b><br><br>

            Kinetic Energy KE =
            ${getBufferCalculation("LT", "KE")} kJ

            <br>

            Compression Stroke L =
            ${getBufferInputValue("ltb_L")} m

            <br><br>

            <b>
                Buffer Force =
                ${getBufferCalculation("LT", "F")} kN
            </b>

        </div>

    </div>


    <!-- =================================================
         COMPARISON
    ================================================== -->

    <div class="parameter">

        <h3>10. Buffer Selection Summary</h3>

        <div class="assistant-calculation">

            <b>CT Buffer</b><br><br>

            Design Speed =
            ${getBufferCalculation("CT", "Vd")} m/s

            <br>

            Kinetic Energy =
            ${getBufferCalculation("CT", "KE")} kJ

            <br>

            Required Buffer Force =
            <b>
                ${getBufferCalculation("CT", "F")} kN
            </b>

        </div>


        <div class="assistant-calculation">

            <b>LT Buffer</b><br><br>

            Resultant Mass =
            ${getBufferCalculation("LT", "M")} T

            <br>

            Design Speed =
            ${getBufferCalculation("LT", "Vd")} m/s

            <br>

            Kinetic Energy =
            ${getBufferCalculation("LT", "KE")} kJ

            <br>

            Required Buffer Force =
            <b>
                ${getBufferCalculation("LT", "F")} kN
            </b>

        </div>

    </div>


    <!-- =================================================
         ENGINEERING CHECK
    ================================================== -->

    <div class="parameter">

        <h3>11. Engineering Selection Check</h3>

        <p>
            The calculated buffer force represents the minimum
            force that the buffer arrangement must be capable of
            absorbing for the calculated design condition.
        </p>


        <div class="assistant-standard">

            <b>CT Check</b>

            <br><br>

            Required Buffer Force =
            ${getBufferCalculation("CT", "F")} kN

            <br><br>

            The selected CT buffer should have adequate
            energy absorption capacity and compression stroke
            for the calculated condition.

        </div>


        <div class="assistant-standard">

            <b>LT Check</b>

            <br><br>

            Required Buffer Force =
            ${getBufferCalculation("LT", "F")} kN

            <br><br>

            The selected LT buffer should have adequate
            energy absorption capacity and compression stroke
            for the calculated condition.

        </div>

    </div>


    <!-- =================================================
         STANDARD
    ================================================== -->

    <div class="parameter">

        <h3>📚 Engineering Reference</h3>

        <div class="assistant-standard">

            <b>Buffer Selection</b>

            <br><br>

            Buffer selection should be checked against the
            applicable crane design standard, project specification
            and buffer manufacturer's catalogue.

            <br><br>

            The manufacturer's rated energy absorption,
            permissible impact force, compression stroke and
            installation requirements should be verified before
            final selection.

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • CT design speed is calculated from the rated CT speed
            and design speed factor.

            <br><br>

            • LT design speed is calculated from the rated LT speed
            and design speed factor.

            <br><br>

            • CT kinetic energy uses half of the CT moving mass
            as implemented in the calculation.

            <br><br>

            • LT kinetic energy is calculated using the resultant
            LT mass.

            <br><br>

            • Buffer force is obtained by dividing kinetic energy
            by compression stroke.

            <br><br>

            • A higher design speed results in significantly higher
            kinetic energy because KE is proportional to Vd².

            <br><br>

            • A smaller compression stroke results in a higher
            calculated buffer force.

            <br><br>

            • Final buffer selection should consider both
            energy absorption and permissible impact force.

            <br><br>

            • Manufacturer catalogue data should be checked before
            finalizing the buffer selection.

        </div>

    </div>


    `;
}


// =====================================================
// ================ BUFFER ASSISTANT HELPERS ============
// =====================================================


// =====================================================
// GET BUFFER INPUT VALUE
// =====================================================

function getBufferInputValue(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET CRANE VALUE
// =====================================================

function getBufferCraneValue(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.TRAVEL
    ) {
        return "-";
    }

    const data =
        prefix === "CT"
            ? CRANE.TRAVEL.CT
            : CRANE.TRAVEL.LT;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET BUFFER CALCULATION
// =====================================================

function getBufferCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.BUFFER
    ) {
        return "-";
    }

    const data =
        prefix === "CT"
            ? CRANE.BUFFER.CT
            : CRANE.BUFFER.LT;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}

// =====================================================
// ============ ROPE DRUM STRESS ASSISTANT =============
// =====================================================

function showStressAssistant() {

    assistantBody.innerHTML = `

    <!-- BACK -->
    <div class="menuItem" onclick="showCategories()">
        ⬅ Back
    </div>


    <!-- TITLE -->
    <div class="helpTitle">
        ⚙️ Rope Drum Stress Calculation
    </div>


    <!-- =================================================
         OVERVIEW
    ================================================== -->

    <div class="parameter">

        <h3>📌 Calculation Overview</h3>

        <p>
            Rope drum stress calculation is used to determine the
            stresses developed in the rope drum shell due to the
            applied rope load, drum self weight and transmitted torque.
        </p>

        <p>
            The calculation determines:
        </p>

        <ul>

            <li>Crushing Stress</li>

            <li>Bending Stress</li>

            <li>Combined Crushing + Bending Stress</li>

            <li>Torsional Stress</li>

            <li>Combined Equivalent Stress</li>

        </ul>

        <p>
            The calculation is performed separately for
            <b>Main Hoist (MH)</b> and
            <b>Auxiliary Hoist (AH)</b>.
        </p>

    </div>


    <!-- =================================================
         INPUT DATA
    ================================================== -->

    <div class="parameter">

        <h3>1. Input Parameters</h3>

        <p>
            The rope drum stress calculation uses hoist load data,
            rope arrangement, drum geometry, drum length, drum
            self mass and pitch/thickness information.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Rated Capacity Q =
            ${getStressHoistInput("mh_q")} Ton

            <br><br>

            Hook / Trolley Weight Q1 =
            ${getStressHoistInput("mh_q1")} Ton

            <br><br>

            Additional Weight Q2 =
            ${getStressHoistInput("mh_q2")} Ton

            <br><br>

            No. of Falls Ns =
            ${getStressCraneValue("MH", "F", "ROPE")} 

            <br><br>

            Drum Self Mass Ws =
            ${getStressCraneValue("MH", "Md", "BARREL_COUPLING")} kg

            <br><br>

            Final Drum Diameter =
            ${getStressCraneValue("MH", "finalDia", "DRUM_DIA")} m

            <br><br>

            Final Drum Length =
            ${getStressCraneValue("MH", "finalL", "DRUM_LEN")} mm

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Rated Capacity Q =
            ${getStressHoistInput("ah_q")} Ton

            <br><br>

            Hook / Trolley Weight Q1 =
            ${getStressHoistInput("ah_q1")} Ton

            <br><br>

            Additional Weight Q2 =
            ${getStressHoistInput("ah_q2")} Ton

            <br><br>

            No. of Falls Ns =
            ${getStressCraneValue("AH", "F", "ROPE")}

            <br><br>

            Drum Self Mass Ws =
            ${getStressCraneValue("AH", "Md", "BARREL_COUPLING")} kg

            <br><br>

            Final Drum Diameter =
            ${getStressCraneValue("AH", "finalDia", "DRUM_DIA")} m

            <br><br>

            Final Drum Length =
            ${getStressCraneValue("AH", "finalL", "DRUM_LEN")} mm

        </div>


        <p><b>Drum geometry inputs:</b></p>

        <ul>

            <li>Outer Drum Diameter D</li>

            <li>Inner Drum Diameter d</li>

            <li>Pitch p</li>

            <li>Thickness below groove t</li>

        </ul>

    </div>


    <!-- =================================================
         TOTAL LOAD
    ================================================== -->

    <div class="parameter">

        <h3>2. Total Hoisting Load</h3>

        <p>
            The total hoisting load used in the stress calculation
            is obtained by adding the rated capacity and associated
            additional weights.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            W = (Q + Q1 + Q2) × 1000

        </div>


        <p>
            Here the load is expressed in kg for the subsequent
            stress calculations.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Q =
            ${getStressHoistInput("mh_q")} Ton

            <br>

            Q1 =
            ${getStressHoistInput("mh_q1")} Ton

            <br>

            Q2 =
            ${getStressHoistInput("mh_q2")} Ton

            <br><br>

            <b>
                Total Load =
                ${getStressTotalLoad("MH")} kg
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Q =
            ${getStressHoistInput("ah_q")} Ton

            <br>

            Q1 =
            ${getStressHoistInput("ah_q1")} Ton

            <br>

            Q2 =
            ${getStressHoistInput("ah_q2")} Ton

            <br><br>

            <b>
                Total Load =
                ${getStressTotalLoad("AH")} kg
            </b>

        </div>

    </div>


    <!-- =================================================
         CRUSHING STRESS
    ================================================== -->

    <div class="parameter">

        <h3>3. Crushing Stress σcr</h3>

        <p>
            Crushing stress is calculated from the total hoisting
            load, number of rope falls, rope pitch and drum wall
            thickness below the groove.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            σcr =
            (Q + Q1 + Q2) × 1000 /
            (Ns × p × t)

        </div>


        <p><b>Where:</b></p>

        <ul>

            <li>
                Q, Q1, Q2 = Load components in Ton
            </li>

            <li>
                Ns = Number of rope falls
            </li>

            <li>
                p = Rope pitch in cm
            </li>

            <li>
                t = Thickness below groove in cm
            </li>

            <li>
                σcr = Crushing stress in kg/cm²
            </li>

        </ul>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Total Load =
            ${getStressTotalLoad("MH")} kg

            <br>

            Ns =
            ${getStressInputValue("p_mhs", "Ns")}

            <br>

            p =
            ${getStressInputValue("p_mhs", "p")} cm

            <br>

            t =
            ${getStressInputValue("t_mhs", "t")} cm

            <br><br>

            <b>
                σcr =
                ${getStressCalculation("MH", "scrs")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Total Load =
            ${getStressTotalLoad("AH")} kg

            <br>

            Ns =
            ${getStressInputValue("p_ahs", "Ns")}

            <br>

            p =
            ${getStressInputValue("p_ahs", "p")} cm

            <br>

            t =
            ${getStressInputValue("t_ahs", "t")} cm

            <br><br>

            <b>
                σcr =
                ${getStressCalculation("AH", "scrs")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         BENDING STRESS
    ================================================== -->

    <div class="parameter">

        <h3>4. Bending Stress σb</h3>

        <p>
            Bending stress is calculated from the bending moment
            generated by the applied load and rope drum self weight.
        </p>


        <div class="assistant-formula">

            <b>Load per rope fall</b><br><br>

            Fs =
            (Q + Q1 + Q2) × 1000 / Ns

            <br><br>

            <b>Point Load</b><br><br>

            Ps = 2 × Fs

            <br><br>

            <b>Bending Moment</b><br><br>

            Ms =
            (Ps × Ls) / 4
            +
            (Ws × Ls) / 8

        </div>


        <p>
            The bending moment is then divided by the section modulus
            of the drum shell.
        </p>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Load per fall Fs =
            ${getStressCalculation("MH", "fs")} kg

            <br>

            Point Load Ps =
            ${getStressCalculation("MH", "Ps")} kg

            <br>

            Drum Length Ls =
            ${getStressCalculation("MH", "Ls")} cm

            <br>

            Drum Self Mass Ws =
            ${getStressCalculation("MH", "Ws")} kg

            <br><br>

            Bending Moment Ms =
            ${getStressCalculation("MH", "Ms")}

            <br><br>

            Section Modulus Zs =
            ${getStressCalculation("MH", "Zs")}

            <br><br>

            <b>
                σb =
                ${getStressCalculation("MH", "sbs")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Load per fall Fs =
            ${getStressCalculation("AH", "fs")} kg

            <br>

            Point Load Ps =
            ${getStressCalculation("AH", "Ps")} kg

            <br>

            Drum Length Ls =
            ${getStressCalculation("AH", "Ls")} cm

            <br>

            Drum Self Mass Ws =
            ${getStressCalculation("AH", "Ws")} kg

            <br><br>

            Bending Moment Ms =
            ${getStressCalculation("AH", "Ms")}

            <br><br>

            Section Modulus Zs =
            ${getStressCalculation("AH", "Zs")}

            <br><br>

            <b>
                σb =
                ${getStressCalculation("AH", "sbs")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         SECTION PROPERTIES
    ================================================== -->

    <div class="parameter">

        <h3>5. Drum Section Properties</h3>

        <p>
            The second moment of area and section modulus are
            calculated using the outer and inner drum diameters.
        </p>


        <div class="assistant-formula">

            <b>Moment of Inertia</b><br><br>

            I =
            π / 64 × (D⁴ − d⁴)

            <br><br>

            <b>Section Modulus</b><br><br>

            Z =
            I / (D / 2)

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Outer Diameter D =
            ${getStressInputValue("d_mhs", "D")} cm

            <br>

            Inner Diameter d =
            ${getStressInputValue("di_mhs", "d")} cm

            <br><br>

            Moment of Inertia I =
            ${getStressCalculation("MH", "Is")}

            <br><br>

            Section Modulus Z =
            ${getStressCalculation("MH", "Zs")}

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Outer Diameter D =
            ${getStressInputValue("d_ahs", "D")} cm

            <br>

            Inner Diameter d =
            ${getStressInputValue("di_ahs", "d")} cm

            <br><br>

            Moment of Inertia I =
            ${getStressCalculation("AH", "Is")}

            <br><br>

            Section Modulus Z =
            ${getStressCalculation("AH", "Zs")}

        </div>

    </div>


    <!-- =================================================
         COMBINED CRUSHING + BENDING
    ================================================== -->

    <div class="parameter">

        <h3>6. Combined Crushing + Bending Stress</h3>

        <p>
            The crushing stress and bending stress are added to obtain
            the combined normal stress acting on the rope drum shell.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            σc =
            σcr + σb

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Crushing Stress σcr =
            ${getStressCalculation("MH", "scrs")} kg/cm²

            <br>

            Bending Stress σb =
            ${getStressCalculation("MH", "sbs")} kg/cm²

            <br><br>

            <b>
                Combined Stress σc =
                ${getStressCalculation("MH", "scs")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Crushing Stress σcr =
            ${getStressCalculation("AH", "scrs")} kg/cm²

            <br>

            Bending Stress σb =
            ${getStressCalculation("AH", "sbs")} kg/cm²

            <br><br>

            <b>
                Combined Stress σc =
                ${getStressCalculation("AH", "scs")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         TORSIONAL STRESS
    ================================================== -->

    <div class="parameter">

        <h3>7. Torsional Stress τ</h3>

        <p>
            Torsional stress is calculated from the torque transmitted
            through the rope drum and the polar moment of inertia of
            the drum shell.
        </p>


        <div class="assistant-formula">

            <b>Torque</b><br><br>

            Ts =
            Ps × (PCD / 2)

            <br><br>

            <b>Polar Section Property</b><br><br>

            Js =
            π / (16 × D) × (D⁴ − d⁴)

            <br><br>

            <b>Torsional Stress</b><br><br>

            τ =
            Ts / Js

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Point Load Ps =
            ${getStressCalculation("MH", "Ps")} kg

            <br>

            PCD =
            ${getStressCalculation("MH", "PCDs")} m

            <br>

            Torque Ts =
            ${getStressCalculation("MH", "Ts")}

            <br>

            Polar Property Js =
            ${getStressCalculation("MH", "Js")}

            <br><br>

            <b>
                τ =
                ${getStressCalculation("MH", "taus")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Point Load Ps =
            ${getStressCalculation("AH", "Ps")} kg

            <br>

            PCD =
            ${getStressCalculation("AH", "PCDs")} m

            <br>

            Torque Ts =
            ${getStressCalculation("AH", "Ts")}

            <br>

            Polar Property Js =
            ${getStressCalculation("AH", "Js")}

            <br><br>

            <b>
                τ =
                ${getStressCalculation("AH", "taus")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         COMBINED STRESS
    ================================================== -->

    <div class="parameter">

        <h3>8. Combined Stress σcomb</h3>

        <p>
            The final combined stress is calculated by combining
            the normal stress and torsional stress using the
            equivalent stress relationship implemented in the
            calculator.
        </p>


        <div class="assistant-formula">

            <b>Formula</b><br><br>

            σcomb =
            √(σc² + 3τ²)

        </div>


        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Combined Normal Stress σc =
            ${getStressCalculation("MH", "scs")} kg/cm²

            <br>

            Torsional Stress τ =
            ${getStressCalculation("MH", "taus")} kg/cm²

            <br><br>

            <b>
                σcomb =
                ${getStressCalculation("MH", "combs")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Combined Normal Stress σc =
            ${getStressCalculation("AH", "scs")} kg/cm²

            <br>

            Torsional Stress τ =
            ${getStressCalculation("AH", "taus")} kg/cm²

            <br><br>

            <b>
                σcomb =
                ${getStressCalculation("AH", "combs")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         FINAL RESULT
    ================================================== -->

    <div class="parameter">

        <h3>9. Final Rope Drum Stress Result</h3>

        <div class="assistant-calculation">

            <b>MH</b><br><br>

            Crushing Stress =
            ${getStressCalculation("MH", "scrs")} kg/cm²

            <br>

            Bending Stress =
            ${getStressCalculation("MH", "sbs")} kg/cm²

            <br>

            Combined Crushing + Bending =
            ${getStressCalculation("MH", "scs")} kg/cm²

            <br>

            Torsional Stress =
            ${getStressCalculation("MH", "taus")} kg/cm²

            <br><br>

            <b>
                FINAL COMBINED STRESS =
                ${getStressCalculation("MH", "combs")} kg/cm²
            </b>

        </div>


        <div class="assistant-calculation">

            <b>AH</b><br><br>

            Crushing Stress =
            ${getStressCalculation("AH", "scrs")} kg/cm²

            <br>

            Bending Stress =
            ${getStressCalculation("AH", "sbs")} kg/cm²

            <br>

            Combined Crushing + Bending =
            ${getStressCalculation("AH", "scs")} kg/cm²

            <br>

            Torsional Stress =
            ${getStressCalculation("AH", "taus")} kg/cm²

            <br><br>

            <b>
                FINAL COMBINED STRESS =
                ${getStressCalculation("AH", "combs")} kg/cm²
            </b>

        </div>

    </div>


    <!-- =================================================
         ENGINEERING NOTES
    ================================================== -->

    <div class="parameter">

        <h3>📝 Engineering Notes</h3>

        <div class="assistant-note">

            • Crushing stress depends on the total hoisting load,
            number of rope falls, rope pitch and shell thickness.

            <br><br>

            • Bending stress is calculated from the applied load,
            drum self weight and drum length.

            <br><br>

            • Section properties are calculated from the entered
            outer and inner drum diameters.

            <br><br>

            • Combined crushing and bending stress is obtained by
            adding the two normal stresses.

            <br><br>

            • Torsional stress is calculated from the torque
            generated by the applied load.

            <br><br>

            • The final combined stress uses the equivalent stress
            relationship implemented in the calculator.

            <br><br>

            • MH and AH are calculated independently using their
            respective input and CRANE data.

            <br><br>

            • Final design acceptance should be checked against
            the applicable design standard, allowable stress and
            project/manufacturer requirements.

        </div>

    </div>


    `;
}


// =====================================================
// ========== ROPE DRUM STRESS ASSISTANT HELPERS =======
// =====================================================


// =====================================================
// GET HOIST INPUT
// =====================================================

function getStressHoistInput(id) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET NORMAL INPUT VALUE
// =====================================================

function getStressInputValue(id, type) {

    const element = document.getElementById(id);

    if (!element) return "-";

    const value = Number(element.value);

    if (!Number.isFinite(value)) return "-";

    return value.toFixed(2);
}


// =====================================================
// GET CRANE DATA
// =====================================================

function getStressCraneValue(prefix, key, section) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE[section]
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE[section].MH
            : CRANE[section].AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}


// =====================================================
// GET TOTAL LOAD
// =====================================================

function getStressTotalLoad(prefix) {

    const q =
        prefix === "MH"
            ? Number(document.getElementById("mh_q")?.value)
            : Number(document.getElementById("ah_q")?.value);

    const q1 =
        prefix === "MH"
            ? Number(document.getElementById("mh_q1")?.value)
            : Number(document.getElementById("ah_q1")?.value);

    const q2 =
        prefix === "MH"
            ? Number(document.getElementById("mh_q2")?.value)
            : Number(document.getElementById("ah_q2")?.value);

    if (
        !Number.isFinite(q) ||
        !Number.isFinite(q1) ||
        !Number.isFinite(q2)
    ) {
        return "-";
    }

    return ((q + q1 + q2) * 1000).toFixed(2);
}


// =====================================================
// GET CALCULATED STRESS VALUE
// =====================================================

function getStressCalculation(prefix, key) {

    if (
        typeof CRANE === "undefined" ||
        !CRANE.ROPE_DRUM_STRESS
    ) {
        return "-";
    }

    const data =
        prefix === "MH"
            ? CRANE.ROPE_DRUM_STRESS.MH
            : CRANE.ROPE_DRUM_STRESS.AH;

    if (!data) return "-";

    const value = Number(data[key]);

    return Number.isFinite(value)
        ? value.toFixed(2)
        : "-";
}

