// Get references to DOM elements
const form = document.querySelector("#user-input");
const floorsInput = form.querySelector("#floorsInput");
const liftsInput = form.querySelector("#liftsInput");
const formContainer = document.querySelector(".form-container");
const floorContainer = document.querySelector(".floor-container");
const bodyContainer = document.querySelector(".body-container")
const backButton = document.querySelector("#back-btn")

const onSubmit = () => {
    console.log('ONSUBMIT')
    event.preventDefault(); // Prevent default form submission

    // Get user input values
    const floors = parseInt(floorsInput.value);
    const lifts = parseInt(liftsInput.value);

    // Validate user input
    if (isNaN(floors) || floors < 2) {
        alert("Please enter a valid number greater than 1 for floors.");
        return;
    }

    if (isNaN(lifts) || lifts < 1) {
        alert("Please enter a valid number greater than 0 for lifts.");
        return;
    }

    // Clear existing content in the floorContainer
    floorContainer.innerHTML = "";

    // Generate floors dynamically based on user input
    for (let i = floors; i >= 1; i--) {
        const floorDiv = document.createElement("div");
        floorDiv.classList.add("floor");

        const floorLabelDiv = document.createElement("div");
        floorLabelDiv.classList.add("floor-label");
        floorLabelDiv.textContent = `Floor ${i}`;
        floorDiv.appendChild(floorLabelDiv);
        floorContainer.appendChild(floorDiv);

        if (i === 1) {
            for (let j = 1; j <= lifts; j++) {
                const liftDiv = document.createElement("div");
                liftDiv.classList.add("lift");

                const doorLeftDiv = document.createElement("div");
                doorLeftDiv.classList.add("door-left");
                liftDiv.appendChild(doorLeftDiv);

                const doorRightDiv = document.createElement("div");
                doorRightDiv.classList.add("door-right");
                liftDiv.appendChild(doorRightDiv);

                floorDiv.appendChild(liftDiv);
            }
        }
    }

    //clear form
    formContainer.classList.add("hidden");
    bodyContainer.classList.remove("hidden");
}

const onBack = () => {
    //show form
    formContainer.classList.remove("hidden");
    //clear floor
    bodyContainer.classList.add("hidden");
    //clear inputs
    floorsInput.value = "";
    liftsInput.value = "";
}

form.addEventListener("submit", onSubmit);
backButton.addEventListener("click", onBack);