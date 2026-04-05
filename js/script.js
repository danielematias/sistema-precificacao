// js/script.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const params = Object.fromEntries(formData);
    calculatePrices(params);
}

// Function to calculate prices in real time
function calculatePrices(params) {
    const modi = parseFloat(params.mod) || 0;
    const cif = parseFloat(params.cif) || 0;
    const icms = parseFloat(params.icms) || 0;
    const margin = parseFloat(params.margin) || 0;
    const commission = parseFloat(params.commission) || 0;

    // Example calculation
    const totalPrice = cif + (cif * (margin / 100)) + commission;
    const finalPrice = totalPrice * (1 + (icms / 100));

    // Display or return the final price
    console.log(`Final Price: ${finalPrice.toFixed(2)}`);
}

// Function to adjust parameters (example)
function adjustParameters(paramName, value) {
    switch(paramName) {
        case 'mod':
            // Adjust MOD
            break;
        case 'cif':
            // Adjust CIF
            break;
        case 'icms':
            // Adjust ICMS
            break;
        case 'margin':
            // Adjust Margin
            break;
        case 'commission':
            // Adjust Commission
            break;
        default:
            console.error('Parameter not recognized');
            break;
    }
}

// Event listener to handle form submission
document.getElementById('myForm').addEventListener('submit', handleFormSubmission);