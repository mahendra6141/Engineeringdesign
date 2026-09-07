// ==========================================
// PROJECT SAVE / LOAD SYSTEM
// ==========================================

const PROJECT_PREFIX = "CRANE_PROJECT_";


// ==========================================
// SAVE PROJECT
// ==========================================

function saveProject(showMessage = true) {

    const projectName =
        document
            .getElementById("projectName")
            .value
            .trim();


    if (!projectName) {

        if (showMessage) {
            alert("Enter Project Name");
        }

        return;
    }


    const data = {};


    // ======================================
    // SAVE INPUT / SELECT / TEXTAREA
    // ======================================

    document
        .querySelectorAll(
            "input, select, textarea"
        )
        .forEach(el => {


            // ==============================
            // DON'T SAVE PROJECT CONTROLS
            // ==============================

            if (
                el.id === "projectName" ||
                el.id === "savedProjects"
            ) {
                return;
            }


            // ==============================
            // RADIO BUTTON
            // ==============================

            if (el.type === "radio") {

                if (el.checked) {

                    data[el.name] =
                        el.value;

                }

            }


            // ==============================
            // CHECKBOX
            // ==============================

            else if (
                el.type === "checkbox" &&
                el.id
            ) {

                data[el.id] =
                    el.checked;

            }


            // ==============================
            // NORMAL INPUT / SELECT
            // ==============================

            else if (el.id) {

                data[el.id] =
                    el.value;

            }

        });


    // ======================================
    // SAVE COMPLETE CALCULATION DATA
    // ======================================

    data.__CRANE_CALCULATION__ =
        JSON.parse(
            JSON.stringify(CRANE)
        );


    // ======================================
    // SAVE CALCULATED OUTPUTS
    // ======================================

    const outputs = {};


    document
        .querySelectorAll("[id]")
        .forEach(el => {

            // Don't save form elements
            if (
                el.tagName === "INPUT" ||
                el.tagName === "SELECT" ||
                el.tagName === "TEXTAREA" ||
                el.tagName === "BUTTON"
            ) {
                return;
            }


            // Don't save containers
if (
    el.children.length > 0 &&
    el.id !== "mh_rope_manufacturer_status" &&
    el.id !== "ah_rope_manufacturer_status"
) {
    return;
}


            if (
                el.id === "projectName" ||
                el.id === "savedProjects"
            ) {
                return;
            }


            outputs[el.id] =
                el.innerHTML;

        });


    data.__CRANE_OUTPUTS__ =
        outputs;


    // ======================================
    // SAVE TO LOCAL STORAGE
    // ======================================

    localStorage.setItem(

        PROJECT_PREFIX + projectName,

        JSON.stringify(data)

    );


    // Remember last project

    localStorage.setItem(

        "CRANE_LAST_PROJECT",

        projectName

    );


    // Update Project List

    updateProjectList();


    // Keep selected project

    document
        .getElementById("savedProjects")
        .value =
        projectName;


    if (showMessage) {

        alert("Project Saved");

    }

}


// ==========================================
// LOAD PROJECT
// ==========================================

function loadProject() {

    const projectName =
        document
            .getElementById("savedProjects")
            .value;


    if (!projectName) {

        alert("Select Project");

        return;

    }


    const savedData =
        localStorage.getItem(
            PROJECT_PREFIX + projectName
        );


    if (!savedData) {

        alert("Project data not found");

        return;

    }


    const data =
        JSON.parse(savedData);


    // ======================================
    // RESTORE ALL FORM DATA
    // ======================================

    Object.keys(data).forEach(key => {


        // Skip calculation snapshot

        if (
            key === "__CRANE_CALCULATION__" ||
            key === "__CRANE_OUTPUTS__"
        ) {
            return;
        }


        // ==================================
        // NORMAL ELEMENT BY ID
        // ==================================

        const el =
            document.getElementById(key);


        if (el) {


            // ==============================
            // CHECKBOX
            // ==============================

            if (
                el.type === "checkbox"
            ) {

                el.checked =
                    data[key];

            }


            // ==============================
            // NORMAL INPUT / SELECT
            // ==============================

            else {

                el.value =
                    data[key];

            }


            // Trigger UI change logic

            el.dispatchEvent(
                new Event(
                    "change",
                    {
                        bubbles: true
                    }
                )
            );

        }


        // ==================================
        // RADIO BUTTON BY NAME + VALUE
        // ==================================

        else {


            const radio =
                document.querySelector(

                    `input[name="${key}"]` +
                    `[value="${data[key]}"]`

                );


            if (radio) {


                radio.checked =
                    true;


                // IMPORTANT:
                // Trigger onchange function

                radio.dispatchEvent(

                    new Event(
                        "change",
                        {
                            bubbles: true
                        }
                    )

                );

            }

        }

    });


    // ======================================
    // RESTORE CRANE CALCULATION SNAPSHOT
    // ======================================

    if (
        data.__CRANE_CALCULATION__
    ) {

        Object.assign(

            CRANE,

            JSON.parse(

                JSON.stringify(

                    data.__CRANE_CALCULATION__

                )

            )

        );

    }


    // ======================================
    // RESTORE CALCULATED OUTPUTS
    // ======================================

    if (
        data.__CRANE_OUTPUTS__
    ) {

        Object.keys(
            data.__CRANE_OUTPUTS__
        )
        .forEach(id => {

            const el =
                document.getElementById(id);


            if (!el) return;


            el.innerHTML =
                data
                    .__CRANE_OUTPUTS__
                    [id];

        });

    }
	
	


    // ======================================
    // RESTORE PROJECT NAME
    // ======================================

    document
        .getElementById("projectName")
        .value =
        projectName;


    // Keep project selected

    document
        .getElementById("savedProjects")
        .value =
        projectName;


    alert("Project Loaded");

}
// ==========================================
// UPDATE PROJECT LIST
// ==========================================

// ==========================================
// UPDATE PROJECT LIST
// ==========================================

function updateProjectList() {

    const projectSelect =
        document.getElementById(
            "savedProjects"
        );


    if (!projectSelect) return;


    // Remember currently selected project

    const currentValue =
        projectSelect.value;


    // Clear dropdown

    projectSelect.innerHTML =
        `<option value="">
            Load Saved Project
        </option>`;


    // ======================================
    // GET ALL CRANE PROJECTS
    // ======================================

    const projects =
        Object.keys(localStorage)
            .filter(key =>
                key.startsWith(
                    PROJECT_PREFIX
                )
            )
            .map(key =>
                key.replace(
                    PROJECT_PREFIX,
                    ""
                )
            )
            .sort();


    // ======================================
    // ADD PROJECTS TO DROPDOWN
    // ======================================

    projects.forEach(projectName => {

        const option =
            document.createElement(
                "option"
            );


        option.value =
            projectName;


        option.textContent =
            projectName;


        projectSelect.appendChild(
            option
        );

    });


    // ======================================
    // RESTORE CURRENT SELECTION
    // ======================================

    if (
        currentValue &&
        projects.includes(
            currentValue
        )
    ) {

        projectSelect.value =
            currentValue;

    }

}
// ==========================================
// DELETE PROJECT
// ==========================================

function deleteProject() {

    const projectName =
        document.getElementById("savedProjects").value;


    if (!projectName) {

        alert("Please select a project to delete");

        return;
    }


    const confirmDelete =
        confirm(
            `Delete project "${projectName}"?`
        );


    if (!confirmDelete) return;


    localStorage.removeItem(
        PROJECT_PREFIX + projectName
    );


    // Clear fields
    document.getElementById("projectName").value = "";


    // Update dropdown
    updateProjectList();


    alert("Project deleted successfully!");
}
// ==========================================
// NEW PROJECT
// ==========================================

function newProject() {

    const confirmNew =
        confirm(
            "Start a new project?\n\n" +
            "Current unsaved changes will be cleared."
        );


    if (!confirmNew) return;


    // ======================================
    // RESET ALL INPUTS
    // ======================================

    document
        .querySelectorAll(
            "input, select, textarea"
        )
        .forEach(el => {

            // Project controls
            if (
                el.id === "projectName" ||
                el.id === "savedProjects"
            ) {
                return;
            }


            // Radio
            if (el.type === "radio") {

                el.checked =
                    el.defaultChecked;

                return;
            }


            // Checkbox
            if (el.type === "checkbox") {

                el.checked =
                    el.defaultChecked;

                return;
            }


            // Select
            if (el.tagName === "SELECT") {

                el.selectedIndex =
                    0;

                return;
            }


            // Normal input / textarea
            el.value =
                el.defaultValue;

        });


    // ======================================
    // RESET CRANE CALCULATION OBJECT
    // ======================================

    CRANE.HOIST = {
        MH: {},
        AH: {}
    };

    CRANE.TRAVEL = {
        CT: {},
        LT: {},
        CTE: {},
        LTE: {}
    };

    CRANE.BRAKE = {
        MH: {},
        AH: {},
        CT: {},
        LT: {}
    };

    CRANE.ROPE = {
        MH: {},
        AH: {}
    };

    CRANE.SHEAVE = {
        MH: {},
        AH: {}
    };

    CRANE.DRUM_DIA = {
        MH: {},
        AH: {}
    };

    CRANE.DRUM_LEN = {
        MH: {},
        AH: {}
    };

    CRANE.ROPE_DRUM_STRESS = {
        MH: {},
        AH: {},
        mechanismClass: null,
        e250Stress: null,
        e350Stress: null,
        permissibleCrushingStress: null
    };

    CRANE.BARREL_COUPLING = {
        MH1: {},
        AH1: {}
    };

    CRANE.GEARBOX = {
        MH: {},
        AH: {},
        CT: {},
        LT: {}
    };

    CRANE.WHEEL_SELECTION = {
        CT: {},
        LT: {}
    };


    // ======================================
    // CLEAR PROJECT NAME
    // ======================================

    document
        .getElementById("projectName")
        .value = "";


    // ======================================
    // CLEAR PROJECT SELECTION
    // ======================================

    document
        .getElementById("savedProjects")
        .value = "";


    // ======================================
    // RESET DYNAMIC ROPE UI
    // ======================================

    const mhPowerform =
        document.getElementById(
            "mh_powerform_options"
        );

    const ahPowerform =
        document.getElementById(
            "ah_powerform_options"
        );


    if (mhPowerform) {
        mhPowerform.style.display = "none";
    }


    if (ahPowerform) {
        ahPowerform.style.display = "none";
    }


    // ======================================
    // RESTORE DEFAULT POWERFORM GRADES
    // ======================================

    if (
        typeof updatePowerformGrades ===
        "function"
    ) {

        updatePowerformGrades("MH");
        updatePowerformGrades("AH");

    }


    alert(
        "New Project Ready"
    );

}
// ==========================================
// INITIALIZE SAVED PROJECTS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateProjectList();

    }
);