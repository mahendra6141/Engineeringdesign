// ==========================================
// PROJECT SAVE / LOAD SYSTEM
// ==========================================

const PROJECT_PREFIX = "CRANE_PROJECT_";


// ==========================================
// SAVE PROJECT
// ==========================================

function saveProject() {

    const projectName =
        document.getElementById("projectName").value.trim();

    if (!projectName) {

        alert("Please enter Project Name");

        return;
    }


    const projectData = {};

    
    // ==========================================
    // SAVE ALL INPUTS
    // ==========================================

    document
        .querySelectorAll("input")
        .forEach(element => {

            // Don't save project name
            if (element.id === "projectName") return;

            // Skip elements without ID
            if (!element.id) return;


            // Checkbox
            if (element.type === "checkbox") {

                projectData[element.id] = {
                    type: "checkbox",
                    value: element.checked
                };

            }


            // Radio
            else if (element.type === "radio") {

                if (element.checked) {

                    projectData[element.name] = {
                        type: "radio",
                        value: element.value
                    };

                }

            }


            // Normal Input
            else {

                projectData[element.id] = {
                    type: "input",
                    value: element.value
                };

            }

        });


    // ==========================================
    // SAVE ALL SELECT / DROPDOWN
    // ==========================================

    document
        .querySelectorAll("select")
        .forEach(element => {

            // Don't save saved project dropdown
            if (element.id === "savedProjects") return;

            if (!element.id) return;


            projectData[element.id] = {

                type: "select",

                value: element.value

            };

        });


    // ==========================================
    // SAVE TO LOCAL STORAGE
    // ==========================================

    localStorage.setItem(

        PROJECT_PREFIX + projectName,

        JSON.stringify(projectData)

    );


    // Update dropdown
    updateProjectList();


    // Keep project name selected
    document.getElementById("savedProjects").value =
        projectName;


    alert("Project saved successfully!");
}
// ==========================================
// LOAD PROJECT
// ==========================================

function loadProject() {

    const projectName =
        document.getElementById("savedProjects").value;


    if (!projectName) return;


    const savedData =
        localStorage.getItem(
            PROJECT_PREFIX + projectName
        );


    if (!savedData) {

        alert("Project data not found");

        return;
    }


    const projectData =
        JSON.parse(savedData);


    // ==========================================
    // RESTORE DATA
    // ==========================================

    Object.keys(projectData).forEach(key => {

        const data =
            projectData[key];


        // ======================================
        // RADIO BUTTON
        // ======================================

        if (data.type === "radio") {

            const radio =
                document.querySelector(
                    `input[name="${key}"][value="${data.value}"]`
                );


            if (radio) {

                radio.checked = true;

            }

        }


        // ======================================
        // NORMAL ELEMENT
        // ======================================

        else {

            const element =
                document.getElementById(key);


            if (!element) return;


            // Checkbox
            if (data.type === "checkbox") {

                element.checked =
                    data.value;

            }


            // Input / Select
            else {

                element.value =
                    data.value;

            }

        }

    });


    // Set Project Name
    document.getElementById("projectName").value =
        projectName;


    // ==========================================
    // RECALCULATE EVERYTHING
    // ==========================================

    if (typeof calculateAll === "function") {

        calculateAll();

    }


    alert("Project loaded successfully!");
}
// ==========================================
// UPDATE PROJECT LIST
// ==========================================

function updateProjectList() {

    const projectSelect =
        document.getElementById("savedProjects");


    if (!projectSelect) return;


    const currentValue =
        projectSelect.value;


    projectSelect.innerHTML = `

        <option value="">
            Load Saved Project
        </option>

    `;


    Object.keys(localStorage).forEach(key => {

        if (
            key.startsWith(PROJECT_PREFIX)
        ) {

            const projectName =
                key.replace(
                    PROJECT_PREFIX,
                    ""
                );


            const option =
                document.createElement("option");


            option.value =
                projectName;


            option.textContent =
                projectName;


            projectSelect.appendChild(option);

        }

    });


    // Restore current selection
    if (currentValue) {

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
// INITIALIZE SAVED PROJECTS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateProjectList();

    }
);
