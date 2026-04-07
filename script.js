// ==========================
// Part 1: Date Display
// ==========================

// Create a new Date object for the current date and time
var today = new Date();

// Extract month, day, and year from the Date object
// getMonth() is 0-based (January = 0), so we add 1
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// Add leading zeros to month and day if they are single digits
// Converting to string and using padStart ensures two-digit formatting
var monthFormatted = String(month).padStart(2, "0");
var dayFormatted = String(day).padStart(2, "0");

// Build the formatted date string in MM/DD/YYYY format
var dateString = "Today is " + monthFormatted + "/" + dayFormatted + "/" + year;

// Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateString;


// ==========================
// Part 2: Number Conversion
// ==========================

// Define four separate variables with different types of string values
var valueOne = "88";        // a numeric string (integer)
var valueTwo = "3.14";      // a numeric string with a decimal
var valueThree = "hello";   // a non-numeric string
var valueFour = "250";      // another numeric string (integer)

// --- Convert each value using Number() ---
var convertedOne = Number(valueOne);
var convertedTwo = Number(valueTwo);
var convertedThree = Number(valueThree);
var convertedFour = Number(valueFour);

// --- Check isNaN and isInteger for each converted value ---
var isNanOne = Number.isNaN(convertedOne);
var isIntOne = Number.isInteger(convertedOne);

var isNanTwo = Number.isNaN(convertedTwo);
var isIntTwo = Number.isInteger(convertedTwo);

var isNanThree = Number.isNaN(convertedThree);
var isIntThree = Number.isInteger(convertedThree);

var isNanFour = Number.isNaN(convertedFour);
var isIntFour = Number.isInteger(convertedFour);

// --- Build result sentences for each value ---
var resultOne = "Original: '" + valueOne + "' → Converted: " + convertedOne +
  " → isNaN: " + isNanOne + " → isInteger: " + isIntOne;

var resultTwo = "Original: '" + valueTwo + "' → Converted: " + convertedTwo +
  " → isNaN: " + isNanTwo + " → isInteger: " + isIntTwo;

var resultThree = "Original: '" + valueThree + "' → Converted: " + convertedThree +
  " → isNaN: " + isNanThree + " → isInteger: " + isIntThree;

var resultFour = "Original: '" + valueFour + "' → Converted: " + convertedFour +
  " → isNaN: " + isNanFour + " → isInteger: " + isIntFour;

// --- Part 4 (Conditional #1): Check if valueThree is NaN ---
var nanMessage = "";
if (Number.isNaN(convertedThree)) {
  nanMessage = "⚠ \"" + valueThree + "\" is not a valid number.";
} else {
  nanMessage = "✓ \"" + valueThree + "\" was successfully converted.";
}

// --- Part 4 (Conditional #2): Check if valueOne is an integer ---
var intMessage = "";
if (Number.isInteger(convertedOne)) {
  intMessage = "✓ The converted value of \"" + valueOne + "\" is an integer.";
} else {
  intMessage = "✗ The converted value of \"" + valueOne + "\" is not an integer.";
}

// Combine all results into one HTML string using <p> tags for clarity
var conversionOutput = "<p>" + resultOne + "</p>" +
  "<p>" + resultTwo + "</p>" +
  "<p>" + resultThree + "</p>" +
  "<p>" + resultFour + "</p>" +
  "<p class='condition-msg'>" + nanMessage + "</p>" +
  "<p class='condition-msg'>" + intMessage + "</p>";

// Display the combined result inside the numberConversionOutput element
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Define numeric variables for a price calculator scenario
var itemPrice = 49.99;
var taxRate = 0.0725;
var shippingCost = 5.50;

// Perform addition: calculate the subtotal (price + shipping)
var subtotal = itemPrice + shippingCost;

// Perform multiplication: calculate the tax amount
var taxAmount = itemPrice * taxRate;

// Perform addition: calculate the grand total
var grandTotal = subtotal + taxAmount;

// Use toFixed(2) to format currency values to two decimal places
var taxFormatted = taxAmount.toFixed(2);
var totalFormatted = grandTotal.toFixed(2);

// Use toLocaleString() to display the total with locale-based formatting
var totalLocaleFormatted = grandTotal.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
});

// Use Number.parseFloat() on a string to demonstrate parsing
var parsedShipping = Number.parseFloat("5.50 dollars");

// Build the math results string
var mathResults = "<p><strong>Item Price:</strong> $" + itemPrice + "</p>" +
  "<p><strong>Shipping Cost:</strong> $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Tax Rate:</strong> " + (taxRate * 100).toFixed(2) + "%</p>" +
  "<hr>" +
  "<p><strong>Subtotal (price + shipping):</strong> $" + subtotal.toFixed(2) + "</p>" +
  "<p><strong>Tax Amount:</strong> $" + taxFormatted + "</p>" +
  "<p><strong>Grand Total:</strong> $" + totalFormatted + "</p>" +
  "<p><strong>Grand Total (toLocaleString):</strong> " + totalLocaleFormatted + "</p>" +
  "<p><strong>Parsed shipping from \"5.50 dollars\":</strong> " + parsedShipping + "</p>";

// --- Part 4 (Conditional #3 — bonus): Check if grand total is over $50 ---
if (grandTotal > 50) {
  mathResults += "<p class='condition-msg'>💰 Your order total exceeds $50.00!</p>";
} else {
  mathResults += "<p class='condition-msg'>Your order total is under $50.00.</p>";
}

// Display the math results inside the mathOutput element
document.getElementById("mathOutput").innerHTML = mathResults;
