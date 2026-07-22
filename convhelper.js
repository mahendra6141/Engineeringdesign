const assistantBody=document.getElementById("assistantBody");
const driveAssistantBody =document.getElementById("driveAssistantBody");

function toggleAssistant(){

    let panel = document.getElementById("assistantPanel");
    let btn = document.getElementById("assistantBtn");

    panel.classList.toggle("active");

    if(panel.classList.contains("active")){

        btn.style.display = "none";
        showCategories();

    }else{

        btn.style.display = "flex";

    }

}
function toggleDriveAssistant(){

    let panel =
    document.getElementById("driveAssistantPanel");

    let btn =
    document.getElementById("driveAssistantBtn");

    panel.classList.toggle("active");

    if(panel.classList.contains("active")){

        btn.style.display="none";

        showDriveCategories();

    }else{

        btn.style.display="flex";

    }

}

function showCategories(){

    assistantBody.innerHTML = `

    <div class="assistant-item" onclick="showConveyor()">
        <span>🚚 Conveyor Details</span>
        <span>➜</span>
    </div>

    <div class="assistant-item" onclick="showGeometry()">
        <span>🛞 Belt & Conveyor Geometry</span>
        <span>➜</span>
    </div>
	<div class="assistant-item" onclick="showFriction()">
         <span>⚙️ Friction Coefficients</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showCleaning()">
         <span>🧹 Belt Cleaning & Skirt Arrangement</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showDrive()">
         <span>⚡ Drive Details</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showMaterial()">
         <span>📦 Material Details</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showIdler()">
         <span>🛞 Idler Arrangement</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showBelt()">
         <span>🎗️ Belt Details</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showOperating()">
         <span>⚙️ Conveyor Operating Parameters</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showPulley()">
         <span>🛞 Pulley Configuration</span>
         <span>➜</span>
     </div>
	 <div class="assistant-item" onclick="showIdlerConfig()">
         <span>📐 Idler Configuration</span>
         <span>➜</span>
     </div>

 
 
   `;
}
function showConveyor(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🚚 Conveyor Details
</div>

<div class="parameter">

<h3>Capacity Rated (Qr)</h3>

<p><b>Meaning :</b> Required material handling capacity of the conveyor.</p>

<p><b>Unit :</b> TPH (Tonnes per Hour)</p>

<p><b>Typical Range :</b> 100 – 5000 TPH</p>

<p><b>Recommended :</b> Use the plant design capacity.</p>

<p><b>Example :</b> Coal Conveyor = 1200 TPH</p>

</div>

<div class="parameter">

<h3>Design Factor</h3>

<p><b>Meaning :</b> Additional capacity margin provided for future expansion and operational safety.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 1.10 – 1.25</p>

<p><b>Recommended :</b> 1.15</p>

</div>

<div class="parameter">

<h3>Loading Factor</h3>

<p><b>Meaning :</b> Percentage of the belt cross-sectional area actually occupied by the material.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.60 – 0.75</p>

<p><b>Recommended :</b> 0.70</p>

</div>

<div class="parameter">

<h3>Horizontal Length (L)</h3>

<p><b>Meaning :</b> Horizontal centre-to-centre distance between the head and tail pulleys.</p>

<p><b>Unit :</b> m</p>

<p><b>Typical Range :</b> 10 – 2000 m</p>

<p><b>Recommendation :</b> Use the value from the General Arrangement (GA) drawing.</p>

</div>

<div class="parameter">

<h3>Total Lift (H)</h3>

<p><b>Meaning :</b> Vertical height through which the material is conveyed.</p>

<p><b>Unit :</b> m</p>

<p><b>Positive :</b> Inclined conveyor</p>

<p><b>Negative :</b> Declined conveyor</p>

</div>

<div class="parameter">

<h3>Conveyor Slope</h3>

<p><b>Meaning :</b> Inclination angle of the conveyor with respect to the horizontal.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 0° – 30°</p>

<p><b>Recommended :</b> Calculate from the conveyor layout or GA drawing.</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Capacity (Qr) is the starting point for all conveyor calculations.</p>

<p>• Design Factor provides a safety margin for future capacity increase.</p>

<p>• Loading Factor affects the required belt width and material cross-sectional area.</p>

<p>• Horizontal Length and Total Lift determine conveyor resistance and motor power.</p>

<p>• Conveyor Slope influences the slope correction factor (K) as per IS 11592.</p>

</div>

`;

}
function showGeometry(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Belt & Conveyor Geometry
</div>

<div class="parameter">

<h3>Belt Width (B)</h3>

<p><b>Meaning :</b> Nominal width of the conveyor belt used for carrying bulk material.</p>

<p><b>Unit :</b> mm</p>

<p><b>Available Sizes :</b> 500, 650, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600 and 2800 mm.</p>

<p><b>Selection Basis :</b> Capacity (Qr), Belt Speed (V), Trough Angle and Surcharge Angle.</p>

<p><b>Recommended :</b> Select the smallest standard belt width that satisfies the required capacity.</p>

<p><b>Reference :</b> IS 11592-2000.</p>

</div>

<div class="parameter">

<h3>Belt Speed (V)</h3>

<p><b>Meaning :</b> Linear speed of the conveyor belt.</p>

<p><b>Unit :</b> m/s</p>

<p><b>Typical Range :</b></p>

<ul>
<li>Coal : 2.0 – 4.5 m/s</li>
<li>Iron Ore : 3.0 – 5.0 m/s</li>
<li>Limestone : 2.0 – 4.0 m/s</li>
<li>Cement : 1.5 – 3.0 m/s</li>
<li>Grains : 1.5 – 2.5 m/s</li>
</ul>

<p><b>Recommended :</b> 2–4 m/s for most industrial conveyors.</p>

<p><b>Reference :</b> IS 11592 Table-6.</p>

</div>

<div class="parameter">

<h3>Trough Angle</h3>

<p><b>Meaning :</b> Angle formed by the carrying idler set to create the belt trough.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Available :</b> 20°, 25°, 30°, 35°, 40° and 45°.</p>

<p><b>Recommended :</b> 35° is the most commonly used value.</p>

<p><b>Effect :</b> Larger trough angles increase the belt carrying capacity but may increase belt edge stress.</p>

<p><b>Selection :</b> Choose according to belt width, material characteristics and idler arrangement.</p>

</div>

<div class="parameter">

<h3>Surcharge Angle</h3>

<p><b>Meaning :</b> Natural angle formed by the bulk material on a moving conveyor belt.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 10° – 30°</p>

<p><b>Common Values :</b></p>

<ul>
<li>Fine Materials : 10°–15°</li>
<li>Coal : 20°</li>
<li>Iron Ore : 20°–25°</li>
<li>Crushed Stone : 25°–30°</li>
</ul>

<p><b>Selection :</b> Depends upon bulk material properties.</p>

<p><b>Reference :</b> IS 8730 / Material Data Sheet.</p>

</div>

<div class="parameter">

<h3>Slope Factor (K)</h3>

<p><b>Meaning :</b> Capacity correction factor for inclined conveyors.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.56 – 1.00</p>

<p><b>Purpose :</b> Corrects the conveyor capacity because the material carrying capacity decreases as the conveyor inclination increases.</p>

<p><b>Selection :</b> Select from IS 11592 Table-9 according to the conveyor slope angle.</p>

<p><b>Recommended :</b> For horizontal conveyors use K = 1.0.</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Belt Width is selected only after confirming the required conveyor capacity.</p>

<p>• Increasing belt speed can reduce the required belt width but increases belt wear and dust generation.</p>

<p>• A 35° trough angle is the industry standard for most bulk material conveyors.</p>

<p>• Surcharge Angle depends on the material and directly affects the conveyor cross-sectional area.</p>

<p>• Always apply the Slope Factor (K) for inclined conveyors to obtain the correct carrying capacity.</p>

<p>• These parameters are primarily used for calculating belt capacity, belt width selection and material cross-sectional area.</p>

</div>

`;

}

function showFriction(){

assistantBody.innerHTML = `

<div class="menuItem" onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
⚙️ Friction Coefficients
</div>

<div class="parameter">

<h3>Coefficient of Friction (f)</h3>

<p><b>Meaning :</b> Artificial friction coefficient representing the resistance of idlers and belt during conveyor operation.</p>

<p><b>Unit :</b> -</p>

<p><b>Recommended :</b></p>

<ul>
<li>0.020 → Standard Conveyor</li>
<li>0.012 → Downhill Conveyor (with Brake)</li>
<li>0.016 → Excellent Condition</li>
<li>0.025 – 0.030 → Poor Maintenance</li>
</ul>

<p><b>Reference :</b> IS 11592-2000 (Page 17)</p>

</div>

<div class="parameter">

<h3>Gravity (g)</h3>

<p><b>Meaning :</b> Standard acceleration due to gravity used in conveyor calculations.</p>

<p><b>Unit :</b> m/s²</p>

<p><b>Standard Value :</b> 9.81 m/s²</p>

<p><b>Normally :</b> Never changed unless specified.</p>

</div>

<div class="parameter">

<h3>Material-Belt Friction (μ₁)</h3>

<p><b>Meaning :</b> Coefficient of friction between conveyed material and the belt surface.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.50 – 0.70</p>

<p><b>Recommended :</b> 0.70</p>

<p><b>Reference :</b> IS 11592-2000</p>

</div>

<div class="parameter">

<h3>Material-Skirt Friction (μ₂)</h3>

<p><b>Meaning :</b> Friction between bulk material and skirt plates inside the loading zone.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.50 – 0.70</p>

<p><b>Recommended :</b> 0.70</p>

</div>

<div class="parameter">

<h3>Trough Factor (C₁)</h3>

<p><b>Meaning :</b> Correction factor based on conveyor trough angle.</p>

<p><b>Unit :</b> -</p>

<ul>
<li>≤ 30° → 0.40</li>
<li>35° – 45° → 0.50</li>
</ul>

<p><b>Reference :</b> IS 11592-2000</p>

</div>

<div class="parameter">

<h3>Carrying Idler Friction (μ₀)</h3>

<p><b>Meaning :</b> Friction coefficient between the carrying idlers and conveyor belt.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.30 – 0.40</p>

<p><b>Recommended :</b> 0.40</p>

</div>

<div class="parameter">

<h3>Belt Cleaner Friction (μ₃)</h3>

<p><b>Meaning :</b> Friction coefficient between the belt cleaner and conveyor belt.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.60 – 0.70</p>

<p><b>Recommended :</b> 0.70</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Higher friction values increase conveyor resistance and required motor power.</p>

<p>• Use standard values unless project specifications require otherwise.</p>

<p>• For critical projects, always verify values from the equipment manufacturer's data or relevant IS standard.</p>

</div>

`;

}

function showCleaning(){

assistantBody.innerHTML = `

<div class="menuItem" onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🧹 Belt Cleaning & Skirt Arrangement
</div>

<div class="parameter">

<h3>Skirt Length (Lsk)</h3>

<p><b>Meaning :</b> Length of the skirt board provided at the loading zone to prevent material spillage.</p>

<p><b>Unit :</b> m</p>

<p><b>Typical Range :</b> 2 – 8 m</p>

<p><b>Recommended :</b> 4 – 6 m for most conveyors.</p>

<p><b>Effect :</b> Larger skirt length increases skirt friction resistance.</p>

</div>

<div class="parameter">

<h3>Number of Belt Cleaners (n)</h3>

<p><b>Meaning :</b> Total number of belt cleaners installed on the conveyor.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical :</b></p>

<ul>
<li>1 → Primary Cleaner</li>
<li>2 → Primary + Secondary</li>
<li>3 → Primary + Secondary + V-Plough</li>
</ul>

<p><b>Recommended :</b> 2 or 3 cleaners.</p>

</div>

<div class="parameter">

<h3>Cleaner Pressure (P)</h3>

<p><b>Meaning :</b> Contact pressure between the belt cleaner blade and the conveyor belt.</p>

<p><b>Unit :</b> N/m²</p>

<p><b>Recommended Range :</b> 3 × 10⁴ to 1 × 10⁵ N/m²</p>

<p><b>Default Value :</b> 65000 N/m²</p>

<p><b>Reference :</b> IS 11592-2000 (Page 17)</p>

</div>

<div class="parameter">

<h3>Discharge Plough Resistance (Rp)</h3>

<p><b>Meaning :</b> Additional resistance created by a discharge plough mounted on the return belt.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Value :</b> 0 N (when no plough is installed).</p>

<p><b>Enter :</b> Manufacturer's value or calculated resistance if a plough is provided.</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Increase Lsk only as much as required to control spillage.</p>

<p>• Excessive cleaner pressure increases belt wear and power consumption.</p>

<p>• If no discharge plough is installed, keep Rp = 0.</p>

<p>• Cleaner resistance and skirt resistance are included in Special Resistance calculations.</p>

</div>

`;

}

function showDrive(){

assistantBody.innerHTML = `

<div class="menuItem" onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
⚡ Drive System
</div>

<div class="parameter">

<h3>Drive Pulley Wrap Resistance (Rwd)</h3>

<p><b>Meaning :</b> Additional resistance due to the conveyor belt wrapping around the drive pulley.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 100 – 500 N</p>

<p><b>Default Value :</b> 230 N</p>

<p><b>Selection :</b> Use calculated value or manufacturer's recommendation.</p>

</div>

<div class="parameter">

<h3>Drive Pulley Bearing Resistance (Rbd)</h3>

<p><b>Meaning :</b> Resistance produced by the bearings supporting the drive pulley.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 50 – 300 N</p>

<p><b>Default Value :</b> 100 N</p>

<p><b>Selection :</b> Use bearing manufacturer's data whenever available.</p>

</div>

<div class="parameter">

<h3>Transmission Efficiency (η₁)</h3>

<p><b>Meaning :</b> Overall mechanical efficiency of the gearbox, coupling and drive transmission.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.90 – 0.98</p>

<ul>
<li>Gearbox : 0.94 – 0.97</li>
<li>Direct Drive : 0.97 – 0.98</li>
</ul>

<p><b>Recommended :</b> 0.95</p>

</div>

<div class="parameter">

<h3>Motor Reserve Factor (SF)</h3>

<p><b>Meaning :</b> Safety margin applied while selecting the motor rating.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 1.10 – 1.30</p>

<ul>
<li>Normal Duty : 1.10</li>
<li>Heavy Duty : 1.15 – 1.25</li>
<li>Severe Duty : 1.30</li>
</ul>

<p><b>Recommended :</b> 1.10</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Higher transmission efficiency reduces required motor power.</p>

<p>• Always use the gearbox manufacturer's efficiency if available.</p>

<p>• Reserve factor ensures the selected motor can handle overloads and future capacity increases.</p>

<p>• Final motor rating should always be selected as the next higher standard motor rating.</p>

</div>

`;

}

function showMaterial(){

assistantBody.innerHTML = `

<div class="menuItem" onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
📦 Material Details
</div>

<div class="parameter">

<h3>Bulk Density (ρ)</h3>

<p><b>Meaning :</b> Mass of bulk material per unit volume.</p>

<p><b>Unit :</b> t/m³</p>

<p><b>Typical Values :</b></p>

<ul>
<li>Coal : 0.80 – 1.00</li>
<li>Limestone : 1.40 – 1.70</li>
<li>Iron Ore : 2.00 – 2.80</li>
<li>Sand : 1.50 – 1.80</li>
<li>Cement Clinker : 1.30 – 1.60</li>
</ul>

<p><b>Recommended :</b> Use the bulk density specified by the material supplier.</p>

</div>

<div class="parameter">

<h3>Lump Size Factor (K₁)</h3>

<p><b>Meaning :</b> Correction factor based on the maximum lump size of the conveyed material.</p>

<p><b>Unit :</b> -</p>

<p><b>Selection :</b></p>

<ul>
<li>K₁ = 0 → Fine Grain (&lt;10 mm)</li>
<li>K₁ = 1 → Granular (&lt;25 mm)</li>
<li>K₁ = 2 → Sized & Unsized (&lt;20% oversized)</li>
<li>K₁ = 3 → Sized Material (&lt;60% permissible)</li>
<li>K₁ = 4 → Unsized Material (Exceeds permissible size)</li>
</ul>

<p><b>Reference :</b> IS 11592-2000 Table 4 (Page 7)</p>

</div>

<div class="parameter">

<h3>Abrasiveness Factor (K₂)</h3>

<p><b>Meaning :</b> Indicates the abrasive nature of the conveyed material.</p>

<p><b>Unit :</b> -</p>

<p><b>Selection :</b></p>

<ul>
<li>K₂ = 1 → Non Abrasive (Grains, Wood Chips, Sand)</li>
<li>K₂ = 2 → Mildly Abrasive (Coal, Gravel, Salt)</li>
<li>K₂ = 3 → Abrasive (Limestone, Slag, Pellets)</li>
<li>K₂ = 4 → Very Abrasive (Iron Ore, Granite, Coke, Sinter)</li>
</ul>

<p><b>Reference :</b> IS 11592-2000 Table 5 (Page 7)</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Bulk density directly affects conveyor capacity, belt width and motor power.</p>

<p>• Higher K₁ values indicate larger lump sizes, which may require a wider belt.</p>

<p>• Higher K₂ values indicate more abrasive materials, leading to increased wear on the belt, idlers and chutes.</p>

<p>• Always use material properties provided by the plant or material supplier whenever available.</p>

</div>

`;

}
function showIdler(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Idler Arrangement
</div>

<div class="parameter">
<h3>Transition Idlers (10°)</h3>

<p><b>Meaning :</b> Initial transition idlers placed near the head/tail pulley to gradually change the belt trough angle.</p>

<p><b>Purpose :</b> Reduces belt edge stress and improves belt life.</p>

<p><b>Typical :</b> 1–3 Nos.</p>

<p><b>Recommended :</b> 2 Nos.</p>

</div>

<div class="parameter">
<h3>Transition Idlers (20°)</h3>

<p><b>Meaning :</b> Second stage transition before reaching the final trough angle.</p>

<p><b>Purpose :</b> Smooth belt transition and reduced belt damage.</p>

<p><b>Typical :</b> 1–3 Nos.</p>

<p><b>Recommended :</b> 2 Nos.</p>

</div>

<div class="parameter">
<h3>Impact Idlers</h3>

<p><b>Meaning :</b> Rubber ring idlers installed at the loading zone.</p>

<p><b>Purpose :</b> Absorb impact from falling material and protect the belt.</p>

<p><b>Typical :</b> Depends on loading length.</p>

<p><b>Recommended :</b> Usually 4–15 Nos.</p>

</div>

<div class="parameter">
<h3>Carrying Idler Diameter</h3>

<p><b>Meaning :</b> Diameter of carrying idlers supporting the loaded belt.</p>

<p><b>Standard Sizes :</b></p>

<ul>
<li>101.6 mm</li>
<li>114.3 mm</li>
<li>127 mm</li>
<li>139.7 mm</li>
<li>152.4 mm</li>
</ul>

<p><b>Selection :</b> Larger diameters are preferred for higher belt speed and heavier conveyors.</p>

<p><b>Recommended :</b> 152.4 mm for medium to heavy duty conveyors.</p>

</div>

<div class="parameter">
<h3>Return Idler Diameter</h3>

<p><b>Meaning :</b> Diameter of idlers supporting the empty return belt.</p>

<p><b>Standard Sizes :</b></p>

<ul>
<li>101.6 mm</li>
<li>114.3 mm</li>
<li>127 mm</li>
<li>139.7 mm</li>
<li>152.4 mm</li>
</ul>

<p><b>Selection :</b> Usually equal to or smaller than carrying idlers depending on conveyor duty.</p>

<p><b>Recommended :</b> 152.4 mm for standard heavy-duty conveyors.</p>

</div>

`;

}
function showBelt(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🟦 Belt Specification
</div>

<div class="parameter">

<h3>Belt Type</h3>

<p><b>Meaning :</b> Belt rating represents the tensile strength and number of fabric plies.</p>

<p><b>Format :</b> Strength / Number of Plies</p>

<p><b>Examples :</b></p>

<ul>
<li>250/2 → 250 N/mm, 2 Plies</li>
<li>500/3 → 500 N/mm, 3 Plies</li>
<li>800/4 → 800 N/mm, 4 Plies</li>
<li>1250/4 → 1250 N/mm, 4 Plies</li>
<li>2000/5 → 2000 N/mm, 5 Plies</li>
</ul>

<p><b>Selection :</b> Select according to calculated belt tension.</p>

</div>

<div class="parameter">

<h3>Carcass Thickness (δ₁)</h3>

<p><b>Meaning :</b> Total thickness of the belt carcass (fabric layers only).</p>

<p><b>Unit :</b> mm</p>

<p><b>Note :</b> This value is automatically filled after selecting the belt type.</p>

<p><b>Purpose :</b> Used for belt weight and strength calculations.</p>

</div>

<div class="parameter">

<h3>Top Cover Thickness (δ₂)</h3>

<p><b>Meaning :</b> Rubber cover on the carrying side of the belt.</p>

<p><b>Unit :</b> mm</p>

<p><b>Typical Values :</b></p>

<ul>
<li>General Material : 4–6 mm</li>
<li>Coal : 5–6 mm</li>
<li>Limestone : 6–8 mm</li>
<li>Iron Ore : 8–10 mm</li>
</ul>

<p><b>Recommended :</b> 6 mm</p>

</div>

<div class="parameter">

<h3>Bottom Cover Thickness (δ₃)</h3>

<p><b>Meaning :</b> Rubber cover on the return side of the belt.</p>

<p><b>Unit :</b> mm</p>

<p><b>Typical Values :</b></p>

<ul>
<li>General Purpose : 2–3 mm</li>
<li>Heavy Duty : 3–4 mm</li>
</ul>

<p><b>Recommended :</b> 3 mm</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Higher belt ratings are required for longer conveyors and higher tensions.</p>

<p>• Top cover is generally thicker because it is exposed to material impact and abrasion.</p>

<p>• Bottom cover mainly protects the belt from idler wear.</p>

<p>• Carcass thickness is automatically selected from the belt database and should not be modified manually.</p>

</div>

`;

}
function showOperating(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
⚙️ Conveyor Operating Parameters
</div>

<div class="parameter">

<h3>Gravity (g)</h3>

<p><b>Meaning :</b> Acceleration due to gravity used in all conveyor force and power calculations.</p>

<p><b>Unit :</b> m/s²</p>

<p><b>Standard Value :</b> 9.81 m/s²</p>

<p><b>Recommendation :</b> Normally this value should not be changed.</p>

</div>

<div class="parameter">

<h3>Material Speed Component (V₀)</h3>

<p><b>Meaning :</b> Initial velocity of the material while it is being loaded onto the conveyor belt.</p>

<p><b>Unit :</b> m/s</p>

<p><b>Typical Values :</b></p>

<ul>
<li>Direct chute loading : 0 m/s</li>
<li>Feeder loading : 0.5 – 1.5 m/s</li>
<li>Transfer conveyor : 1 – 3 m/s</li>
</ul>

<p><b>Recommended :</b> Use 0 m/s unless the loading velocity is known.</p>

</div>

<div class="parameter">

<h3>Temperature Factor (ηt)</h3>

<p><b>Meaning :</b> Correction factor used to account for the effect of operating temperature on conveyor performance.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.90 – 1.00</p>

<ul>
<li>Normal Temperature : 0.94 – 1.00</li>
<li>High Temperature : Refer manufacturer's recommendation.</li>
</ul>

<p><b>Recommended :</b> 0.94</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Gravity is normally fixed at 9.81 m/s².</p>

<p>• V₀ affects acceleration resistance during loading.</p>

<p>• Keep V₀ = 0 when material is loaded without initial velocity.</p>

<p>• Temperature factor should only be modified for special operating environments.</p>

</div>

`;

}
function showPulley(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Pulley Configuration
</div>

<div class="parameter">

<h3>Carrying Side Pulleys (n₁)</h3>

<p><b>Meaning :</b> Number of non-drive pulleys located on the carrying side of the conveyor.</p>

<p><b>Wrap Angle :</b> 150° – 240°</p>

<p><b>Typical Value :</b> 1 – 2</p>

<p><b>Example :</b> Head Bend Pulley = 1</p>

<p><b>Note :</b> Do not include the drive pulley.</p>

</div>

<div class="parameter">

<h3>Return Side Pulleys (n₂)</h3>

<p><b>Meaning :</b> Number of non-drive pulleys located on the return side of the conveyor.</p>

<p><b>Wrap Angle :</b> 150° – 240°</p>

<p><b>Typical Value :</b> 1 – 2</p>

<p><b>Example :</b> Tail Pulley = 1</p>

<p><b>Note :</b> Count only return-side non-drive pulleys.</p>

</div>

<div class="parameter">

<h3>Other Non-Drive Pulleys (n₃)</h3>

<p><b>Meaning :</b> Remaining non-drive pulleys that are not included in n₁ or n₂.</p>

<p><b>Examples :</b></p>

<ul>
<li>Snub Pulley</li>
<li>Take-up Pulley</li>
<li>Bend Pulley</li>
<li>Deflector Pulley</li>
</ul>

<p><b>Typical Value :</b> 2 – 6</p>

<p><b>Recommended :</b> Enter the actual number from the conveyor layout.</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Do not include the drive pulley in any of these values.</p>

<p>• These pulley counts are used in resistance calculations.</p>

<p>• Incorrect pulley counts may significantly affect the calculated conveyor power.</p>

<p>• Always verify the pulley arrangement from the GA (General Arrangement) drawing.</p>

</div>

`;

}

function showIdlerConfig(){

assistantBody.innerHTML = `

<div class="menuItem"
onclick="showCategories()">
⬅ Back
</div>

<div class="helpTitle">
📐 Idler Configuration
</div>

<div class="parameter">

<h3>Idler Tilt Angle (i)</h3>

<p><b>Meaning :</b> Inclination angle of the side carrying idlers with respect to the horizontal.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 1° – 3°</p>

<p><b>Recommended :</b> 2°</p>

<p><b>Purpose :</b> The forward tilt helps keep the belt centrally aligned and improves tracking during operation.</p>

</div>

<div class="parameter">

<h3>Tilted Idler Length (L₁)</h3>

<p><b>Meaning :</b> Length of the inclined side idler roll.</p>

<p><b>Unit :</b> mm</p>

<p><b>Typical Range :</b> 250 – 500 mm</p>

<p><b>Recommended :</b> Select according to the belt width and idler arrangement.</p>

<p><b>Example :</b> For a 1200 mm belt, L₁ is commonly around 300–380 mm.</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Forward tilt improves belt tracking and reduces belt wander.</p>

<p>• Excessive tilt may increase belt wear and running resistance.</p>

<p>• L₁ should match the selected idler frame and belt width.</p>

<p>• Always verify dimensions from the idler manufacturer's catalogue.</p>

</div>

`;

}
//========= helper function for drive input =========
//===================================================
//===================================================
function showDriveCategories(){

driveAssistantBody.innerHTML = `

<div class="assistant-item" onclick="showBeltForceGuide()">
    <span>⚡ Belt Forces Parameters</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showRadiusGuide()">
    <span>📐 Radius of Curvature</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showGearGuide()">
    <span>⚙ Gearbox Selection</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showDrivePulleyGuide()">
    <span>🛞 Drive Pulley</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showTailGuide()">
    <span>🛞 Tail Pulley</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showSnubGuide()">
    <span>🛞 Snub Pulley</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showTakeupGuide()">
    <span>🛞 Take-Up Pulley</span>
    <span>➜</span>
</div>

<div class="assistant-item" onclick="showBendGuide()">
    <span>🛞 Bend Pulley</span>
    <span>➜</span>
</div>

`;

}
function showBeltForceGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem"
onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
⚡ Belt Forces Parameters
</div>

<div class="parameter">

<h3>Wrap Angle (φ)</h3>

<p><b>Meaning :</b> Angle of contact between the conveyor belt and the drive pulley.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 180° – 230°</p>

<p><b>Recommended :</b> 210° for single drive pulley arrangements.</p>

<p><b>Reference :</b> IS 11592-2000</p>

</div>

<div class="parameter">

<h3>Coefficient of Friction (μ)</h3>

<p><b>Meaning :</b> Friction coefficient between the belt and drive pulley lagging.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Values :</b></p>

<ul>

<li>Dry Rubber Lagging : 0.40 – 0.45</li>

<li>Wet Rubber Lagging : 0.35</li>

<li>Dirty Condition : 0.25 – 0.30</li>

<li>Very Wet : 0.20</li>

</ul>

<p><b>Reference :</b> IS 11592-2000 Table 16</p>

</div>

<div class="parameter">

<h3>Drive Factor (ξ)</h3>

<p><b>Meaning :</b> Correction factor used for calculating maximum belt tension in drive arrangements.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Values :</b></p>

<ul>

<li>Single Drive : 1.0 – 2.0</li>

<li>Dual Drive : Depends on load sharing</li>

</ul>

<p><b>Recommended :</b> Use the selected drive arrangement.</p>

</div>

<div class="parameter">

<h3>Carrying Idler Spacing (Pc)</h3>

<p><b>Meaning :</b> Centre distance between carrying idlers.</p>

<p><b>Unit :</b> m</p>

<p><b>Typical Values :</b></p>

<ul>

<li>1.5 m</li>

<li>1.2 m</li>

<li>1.0 m</li>

</ul>

<p><b>Selection :</b> Depends upon belt width and bulk density.</p>

<p><b>Reference :</b> IS 11592-2000 Table 17</p>

</div>

<div class="parameter">

<h3>Return Idler Spacing (Pr)</h3>

<p><b>Meaning :</b> Centre distance between return idlers.</p>

<p><b>Unit :</b> m</p>

<p><b>Typical Value :</b> 3.0 m</p>

<p><b>Reference :</b> IS 11592-2000 Table 17</p>

</div>

<div class="parameter">

<h3>Maximum Belt Sag (S)</h3>

<p><b>Meaning :</b> Maximum allowable sag of the belt between adjacent idlers.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.015 – 0.025</p>

<p><b>Recommended :</b> 0.02 (2%)</p>

</div>

<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Wrap angle directly affects the available frictional grip on the drive pulley.</p>

<p>• Higher friction coefficient increases power transmission capacity.</p>

<p>• Incorrect idler spacing results in excessive belt sag and reduced belt life.</p>

<p>• Belt sag should generally be limited to about 2% for proper conveyor operation.</p>

<p>• Use IS 11592-2000 Tables 16 and 17 for selecting μ, Pc and Pr values.</p>

</div>

`;

}
function showDrivePulleyGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Drive Pulley Design Parameters
</div>

<div class="parameter">

<h3>Permissible Stress for Steel C-40 (τs)</h3>

<p><b>Meaning :</b> Allowable shear stress of the shaft material used for shaft diameter design.</p>

<p><b>Unit :</b> kN/cm²</p>

<p><b>Typical Range :</b> 5.5 – 7.5 kN/cm²</p>

<p><b>Recommended :</b> 6.37 kN/cm² for C-40 steel.</p>

<p><b>Reference :</b> PSG Design Data Book / Machine Design.</p>

</div>


<div class="parameter">

<h3>Bending Stress Concentration Factor (Kb)</h3>

<p><b>Meaning :</b> Shock and fatigue factor used for bending moment calculation.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 1.5 – 2.5</p>

<p><b>Recommended :</b> 2.0 for belt conveyor drive shafts.</p>

</div>


<div class="parameter">

<h3>Torsion Stress Concentration Factor (Kt)</h3>

<p><b>Meaning :</b> Shock and fatigue factor used for transmitted torque.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 1.0 – 2.0</p>

<p><b>Recommended :</b> 1.5</p>

</div>


<div class="parameter">

<h3>Angle Between T₁ & T₂ (α)</h3>

<p><b>Meaning :</b> Included angle between tight side and slack side belt tensions acting on the drive pulley.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 20° – 60°</p>

<p><b>Recommendation :</b> Obtain from conveyor layout or pulley arrangement drawing.</p>

</div>


<div class="parameter">

<h3>Weight of Rotating Parts (W)</h3>

<p><b>Meaning :</b> Self weight of pulley shell, shaft, hubs and lagging acting on the shaft.</p>

<p><b>Unit :</b> N</p>

<p><b>Recommendation :</b> Obtain from manufacturer's GA drawing or pulley catalogue.</p>

</div>


<div class="parameter">

<h3>Arm of Force (a)</h3>

<p><b>Meaning :</b> Distance between bearing centre and pulley centre used for bending moment calculation.</p>

<p><b>Unit :</b> cm</p>

<p><b>Recommendation :</b> Obtain from pulley assembly drawing.</p>

</div>


<div class="parameter">

<h3>Pulley Speed (n₂)</h3>

<p><b>Meaning :</b> Rotational speed of the drive pulley.</p>

<p><b>Unit :</b> rpm</p>

<p><b>Calculated By :</b></p>

<p>n₂ = (60 × Belt Speed)/(π × Pulley Diameter)</p>

<p><b>Recommendation :</b> Automatically calculated from conveyor speed and pulley diameter.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Shaft diameter is calculated using combined bending and torsional loading.</p>

<p>• Kb and Kt account for shock and fatigue during conveyor operation.</p>

<p>• Weight of pulley significantly increases shaft bending moment.</p>

<p>• Use the actual pulley GA drawing for arm length and pulley weight.</p>

<p>• Final shaft diameter should always be rounded up to the nearest standard shaft size.</p>

<p>• Verify shaft deflection and bearing life after shaft diameter selection.</p>

</div>

`;

}
function showSnubGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Snub Pulley Design Parameters
</div>

<div class="parameter">

<h3>Weight of Rotating Parts (W)</h3>

<p><b>Meaning :</b> Total weight of the snub pulley rotating assembly including pulley shell, shaft, hubs and lagging.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 2000 – 8000 N</p>

<p><b>Recommended :</b> Use the actual weight from the pulley manufacturer's GA drawing or catalogue.</p>

<p><b>Purpose :</b> This load contributes directly to the shaft bending moment and shaft diameter calculation.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• A snub pulley is used to increase the wrap angle on the drive pulley and improve traction.</p>

<p>• Unlike the drive pulley, the snub pulley does not transmit power; it only redirects the belt.</p>

<p>• Shaft design is mainly governed by belt tensions and the self-weight of the pulley.</p>

<p>• Use the actual pulley weight supplied by the manufacturer for accurate shaft design.</p>

<p>• After shaft sizing, always verify shaft deflection and bearing life.</p>

<p>• The final shaft diameter should be selected from the nearest higher standard shaft size.</p>

</div>

`;

}
function showRadiusGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
📐 Radius of Curvature Parameters
</div>

<div class="parameter">

<h3>Young's Modulus of Belt (Eb)</h3>

<p><b>Meaning :</b> Elastic modulus of the conveyor belt, representing the belt stiffness against tensile deformation.</p>

<p><b>Unit :</b> kN/m²</p>

<p><b>Typical Range :</b> 300 – 1000 kN/m² (depending on belt construction)</p>

<p><b>Recommended :</b> Use the value specified by the belt manufacturer.</p>

<p><b>Reference :</b> Belt manufacturer's catalogue / DIN 22101 / IS 11592.</p>

</div>


<div class="parameter">

<h3>Horizontal Length of Curve (L₄)</h3>

<p><b>Meaning :</b> Horizontal distance occupied by the vertical curve section of the conveyor.</p>

<p><b>Unit :</b> m</p>

<p><b>Recommendation :</b> Obtain from the conveyor General Arrangement (GA) drawing.</p>

<p><b>Purpose :</b> Used for determining the minimum permissible vertical radius of curvature.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Radius of curvature prevents excessive belt lift-off and material spillage.</p>

<p>• A higher belt modulus (Eb) results in a larger minimum allowable curve radius.</p>

<p>• Vertical curves should satisfy belt tension and belt stiffness requirements.</p>

<p>• The curve radius should always comply with the belt manufacturer's recommendations.</p>

<p>• Excessively small radii can lead to belt separation from idlers and unstable conveyor operation.</p>

<p>• Verify both concave and convex curve requirements during conveyor layout design.</p>

</div>

`;

}
function showBendGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Bend Pulley Design Parameters
</div>

<div class="parameter">

<h3>Weight of Rotating Parts (W)</h3>

<p><b>Meaning :</b> Total weight of the bend pulley assembly including pulley shell, shaft, hubs and lagging.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 3000 – 10000 N</p>

<p><b>Recommended :</b> Use the actual pulley weight from the manufacturer's General Arrangement (GA) drawing or catalogue.</p>

<p><b>Purpose :</b> This load contributes to the shaft bending moment and shaft diameter calculation.</p>

</div>


<div class="parameter">

<h3>Conveyor Slope in Take-Up Area (δ₁)</h3>

<p><b>Meaning :</b> Inclination angle of the conveyor in the take-up section where the bend pulley is installed.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 0° – 20°</p>

<p><b>Recommended :</b> Obtain from the conveyor General Arrangement (GA) drawing.</p>

<p><b>Purpose :</b> Used for resolving belt tension components and determining the resultant shaft loading.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Bend pulleys are used to change the direction of belt travel.</p>

<p>• They do not transmit driving torque; they only redirect the belt.</p>

<p>• Shaft design is governed primarily by belt tensions and pulley self-weight.</p>

<p>• Conveyor slope affects the direction and magnitude of the resultant forces acting on the pulley.</p>

<p>• Use the manufacturer's pulley weight for accurate shaft design calculations.</p>

<p>• After shaft sizing, always verify shaft deflection and bearing life.</p>

<p>• Select the final shaft diameter from the nearest higher standard shaft size.</p>

</div>

`;

}
function showGearGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
⚙️ Gearbox Selection Parameters
</div>

<div class="parameter">

<h3>Selected Motor Power (N)</h3>

<p><b>Meaning :</b> Rated output power of the motor selected for driving the conveyor.</p>

<p><b>Unit :</b> kW</p>

<p><b>Recommendation :</b> Select the next higher standard motor rating than the calculated motor power.</p>

<p><b>Purpose :</b> Used for gearbox selection, coupling selection and shaft design.</p>

</div>


<div class="parameter">

<h3>Selected Pulley Diameter (D)</h3>

<p><b>Meaning :</b> Diameter of the selected drive pulley.</p>

<p><b>Unit :</b> m</p>

<p><b>Recommendation :</b> Select according to IS 11592 and belt manufacturer's recommendation.</p>

<p><b>Purpose :</b> Used to calculate pulley speed and gearbox reduction ratio.</p>

</div>


<div class="parameter">

<h3>Selected Motor Speed (n₁)</h3>

<p><b>Meaning :</b> Rated speed of the selected electric motor.</p>

<p><b>Unit :</b> rpm</p>

<p><b>Typical Values :</b> 740, 990, 1485 and 2980 rpm.</p>

<p><b>Recommendation :</b> Use the rated speed provided by the motor manufacturer.</p>

</div>


<div class="parameter">

<h3>Service Factor (f₁)</h3>

<p><b>Meaning :</b> Factor accounting for operating hours and service severity.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.9 – 1.5</p>

<p><b>Reference :</b> IS 7403 / Gearbox Manufacturer Catalogue.</p>

</div>


<div class="parameter">

<h3>Start Factor (f₂)</h3>

<p><b>Meaning :</b> Factor accounting for additional load during conveyor starting.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 1.0 – 1.3</p>

<p><b>Recommendation :</b> Use the value recommended by the gearbox manufacturer.</p>

</div>


<div class="parameter">

<h3>Thermal Factor (fₜ)</h3>

<p><b>Meaning :</b> Correction factor considering gearbox heat dissipation capability.</p>

<p><b>Unit :</b> -</p>

<p><b>Typical Range :</b> 0.6 – 1.0</p>

<p><b>Recommendation :</b> Obtain from the gearbox manufacturer's catalogue.</p>

</div>


<div class="parameter">

<h3>Selected Thermal Capacity (PG₁)</h3>

<p><b>Meaning :</b> Continuous thermal power rating of the selected gearbox.</p>

<p><b>Unit :</b> kW</p>

<p><b>Recommendation :</b> Use the manufacturer's thermal rating for the selected gearbox model.</p>

<p><b>Purpose :</b> Used to verify that the gearbox can dissipate the generated heat safely.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• Always select the gearbox based on the manufacturer-selected motor power, not only the calculated motor power.</p>

<p>• Gear ratio should match the calculated pulley speed within the allowable tolerance.</p>

<p>• Verify both mechanical power rating and thermal power rating of the gearbox.</p>

<p>• Service factor and start factor increase the required gearbox capacity.</p>

<p>• Ensure the gearbox output torque exceeds the calculated conveyor requirement.</p>

<p>• Confirm that the selected gearbox is suitable for the duty cycle and ambient operating conditions.</p>

<p>• Final gearbox selection should always be verified using the manufacturer's catalogue.</p>

</div>

`;

}
function showTailGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Tail Pulley Design Parameters
</div>

<div class="parameter">

<h3>Pulley Bearing Resistance (RB)</h3>

<p><b>Meaning :</b> Frictional resistance developed in the tail pulley bearings during rotation.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 50 – 300 N</p>

<p><b>Recommendation :</b> Use the value recommended by the pulley or bearing manufacturer.</p>

<p><b>Purpose :</b> Included in the calculation of tail pulley shaft loading.</p>

</div>


<div class="parameter">

<h3>Wrap Resistance (Rw)</h3>

<p><b>Meaning :</b> Resistance caused by belt wrapping around the tail pulley.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 100 – 300 N</p>

<p><b>Recommendation :</b> Use IS 11592 recommendations or the pulley manufacturer's data.</p>

<p><b>Purpose :</b> Added to the shaft loading and pulley resistance calculations.</p>

</div>


<div class="parameter">

<h3>Weight of Rotating Parts (W)</h3>

<p><b>Meaning :</b> Total weight of the tail pulley assembly including shell, shaft, hubs and lagging.</p>

<p><b>Unit :</b> N</p>

<p><b>Recommendation :</b> Obtain the actual value from the manufacturer's General Arrangement (GA) drawing or catalogue.</p>

<p><b>Purpose :</b> Used to calculate shaft bending moment and shaft diameter.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• The tail pulley normally does not transmit power; it redirects the conveyor belt.</p>

<p>• Shaft design depends mainly on belt tensions, pulley weight and bearing resistance.</p>

<p>• Bearing resistance and wrap resistance contribute to the total shaft loading.</p>

<p>• Use the manufacturer's pulley weight for accurate shaft design calculations.</p>

<p>• After determining the shaft diameter, always verify shaft deflection and bearing life.</p>

<p>• Select the final shaft diameter from the nearest higher standard shaft size.</p>

</div>

`;

}
function showTakeupGuide(){

driveAssistantBody.innerHTML = `

<div class="menuItem" onclick="showDriveCategories()">
⬅ Back
</div>

<div class="helpTitle">
🛞 Take-Up Pulley Design Parameters
</div>

<div class="parameter">

<h3>Distance Between Drive Pulley & Take-Up Unit (L₁)</h3>

<p><b>Meaning :</b> Centre-to-centre horizontal distance between the drive pulley and the take-up pulley.</p>

<p><b>Unit :</b> m</p>

<p><b>Recommendation :</b> Obtain from the conveyor General Arrangement (GA) drawing.</p>

<p><b>Purpose :</b> Used for determining belt tension distribution and take-up forces.</p>

</div>


<div class="parameter">

<h3>Angle of Tilt of Idler Axis (i)</h3>

<p><b>Meaning :</b> Inclination of the return idler axis relative to the horizontal.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Range :</b> 0° – 5°</p>

<p><b>Recommendation :</b> Use the actual conveyor arrangement.</p>

</div>


<div class="parameter">

<h3>Troughing Angle of Return Idlers (τ)</h3>

<p><b>Meaning :</b> Inclination angle of the return idler set.</p>

<p><b>Unit :</b> Degree (°)</p>

<p><b>Typical Values :</b> 0°, 10° or 15°</p>

<p><b>Recommendation :</b> Use the value specified in the conveyor layout.</p>

</div>


<div class="parameter">

<h3>Pulley Bearing Resistance (RB)</h3>

<p><b>Meaning :</b> Frictional resistance developed in the take-up pulley bearings.</p>

<p><b>Unit :</b> N</p>

<p><b>Typical Range :</b> 50 – 300 N</p>

<p><b>Recommendation :</b> Use the bearing manufacturer's recommended value.</p>

</div>


<div class="parameter">

<h3>Wrap Resistance (Rw)</h3>

<p><b>Meaning :</b> Resistance caused by the belt wrapping around the take-up pulley.</p>

<p><b>Unit :</b> N</p>

<p><b>Recommendation :</b> Use IS 11592 recommendations or manufacturer's data.</p>

</div>


<div class="parameter">

<h3>Wrap Resistance (Rw₁)</h3>

<p><b>Meaning :</b> Additional resistance due to belt wrap and pulley interaction.</p>

<p><b>Unit :</b> N</p>

<p><b>Recommendation :</b> Use the design value recommended by IS 11592 or the pulley manufacturer.</p>

</div>


<div class="parameter">

<h3>Weight of Rotating Parts (W)</h3>

<p><b>Meaning :</b> Total weight of the take-up pulley assembly including shell, shaft, hubs and lagging.</p>

<p><b>Unit :</b> N</p>

<p><b>Recommendation :</b> Use the actual pulley weight from the manufacturer's GA drawing or catalogue.</p>

<p><b>Purpose :</b> Used in shaft bending moment and shaft diameter calculations.</p>

</div>


<div class="parameter">

<h3>Engineering Notes</h3>

<p>• The take-up pulley maintains the required belt tension throughout the conveyor.</p>

<p>• Proper take-up design minimizes belt slip and improves tracking.</p>

<p>• Bearing resistance, wrap resistance and pulley weight contribute to shaft loading.</p>

<p>• Use actual manufacturer data wherever available for pulley weight and bearing resistance.</p>

<p>• Verify shaft diameter, shaft deflection and bearing life after completing the design.</p>

<p>• Final shaft size should always be selected from the nearest higher standard diameter.</p>

</div>

`;

}