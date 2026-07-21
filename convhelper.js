const assistantBody=document.getElementById("assistantBody");

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