// DOM variables
const selectOptionInputs = document.getElementById("select-option-inputs");
const selectOptionWrapperVisual = document.getElementById("select-option-wrapper-visual-inputs");
const selectOptoinVisualPlaceholder = document.getElementById("select-option-visual-placeholder");
const selectOptionVisual = document.getElementById("select-option-visual-inputs");
const selectOptionSubmit = document.getElementById("select-option-submit");

// Arr where to store options values
const optionValues = [];

// Empty values where to store option value
let optionValue;

// Store select > option values to an array
for (let index = 0; index < selectOptionInputs.length; index++) {
    optionValues[index] = selectOptionInputs[index].value;
}

// Hide original select > options elements
selectOptionInputs.style.display = "none";

// Create new visual form
for (let index = 0; index < optionValues.length; index++) {
    const setNewDiv = document.createElement("div");
    setNewDiv.setAttribute("id", `select-option-${index}`);
    setNewDiv.setAttribute("class", "select-option-custom__value");
    const setText = document.createTextNode(optionValues[index]);
    setNewDiv.appendChild(setText);
    selectOptionVisual.appendChild(setNewDiv);
}

// Hide new visual options
selectOptionVisual.style.display = "none";

// Show or hide new visual options
selectOptionWrapperVisual.addEventListener("click", () => {
    if (selectOptionVisual.style.display === "none") {
        selectOptionVisual.style.display = "block";
    } else {
        selectOptionVisual.style.display = "none";
    }
})

// Set the optionValues when user click to the new visual values
selectOptionVisual.addEventListener("click", e => {
    optionValue = e.target.textContent;
    if (optionValue.length > 0) {
        selectOptoinVisualPlaceholder.style.color = "#000";
        selectOptoinVisualPlaceholder.innerHTML = optionValue;
    }
})

/**
 * Click event submit value
 * 
 * You can validate your input values here
 */
selectOptionSubmit.addEventListener("click", () => {
    console.log(`Form values is: ${optionValue}`);
})