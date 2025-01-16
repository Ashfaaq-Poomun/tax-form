window.addEventListener("DOMContentLoaded", () => {
  // Initially set the tax notice to Rs 0
  document.getElementById("tax-notice").textContent = `Tax Refund: Rs 0`;
});

// Calc Total Income
function calculateTotalIncome() {
  let totalIncome = 0;

  // Get the value of the main annual salary
  const annualSalary =
    parseFloat(document.getElementById("annual-salary").value) || 0;
  totalIncome += annualSalary;

  // Get the value of the investment income
  const investment =
    parseFloat(document.getElementById("investment").value) || 0;
  totalIncome += investment;

  // Get the value of each additional income source
  const incomeAmounts = document.querySelectorAll('[name="income-amount"]');
  incomeAmounts.forEach((amountInput) => {
    totalIncome += parseFloat(amountInput.value) || 0;
  });

  // Update the total income display
  document.getElementById(
    "total-income"
  ).textContent = `Rs ${totalIncome.toLocaleString()}`;

  // Determine the tax rate based on total income (7.5% for Rs. 500,000 - Rs. 1,000,000, else 6%)
  let taxRate = 6;
  if (totalIncome >= 500000 && totalIncome <= 1000000) {
    taxRate = 7.5;
  }

  // Update the tax rate display
  document.getElementById("tax-rate").textContent = `${taxRate}%`;

  // Get the deduction values (Charitable Donations, Mortgage Interest, and Pension Scheme)
  const charitableDonations =
    parseFloat(document.getElementById("charitable-donations").value) || 0;
  const mortgageInterest =
    parseFloat(document.getElementById("mortgage-interest").value) || 0;
  const pensionScheme =
    parseFloat(document.getElementById("pension").value) || 0;

  // Calculate total deductions
  const totalDeductions =
    charitableDonations + mortgageInterest + pensionScheme;

  // Get the number of dependents and set the dependent threshold
  const dependents = parseInt(document.getElementById("dependents").value) || 0;
  let dependentTaxThreshold = 200000;

  // Set thresholds based on the number of dependents
  if (dependents === 1) {
    dependentTaxThreshold = 250000;
  } else if (dependents === 2) {
    dependentTaxThreshold = 450000;
  } else if (dependents > 2) {
    dependentTaxThreshold = 600000;
  }

  // Calculate taxable income after deductions and the dependent threshold
  let taxableIncome = totalIncome - totalDeductions - dependentTaxThreshold;

  // If taxable income is negative, it's below the threshold meaning it should be tax refund
  if (taxableIncome <= 0) {
    document.getElementById(
      "tax-notice"
    ).textContent = `Tax Refund: Rs ${Math.abs(
      (taxableIncome * taxRate) / 100
    ).toLocaleString()}`;
    return;
  }

  // Calculate tax payable based on the taxable income
  let taxPayable = (taxableIncome * taxRate) / 100;

  // Display Tax Refund or Tax Payable based on the calculated tax
  if (taxPayable < 0) {
    // If tax payable is negative, it's a refund
    taxPayable = Math.abs(taxPayable);
    document.getElementById(
      "tax-notice"
    ).textContent = `Tax Refund: Rs ${taxPayable.toLocaleString()}`;
  } else {
    // Otherwise, it's tax payable
    document.getElementById(
      "tax-notice"
    ).textContent = `Tax Payable: Rs ${taxPayable.toLocaleString()}`;
  }
}

// Event listener for annual salary input
document
  .getElementById("annual-salary")
  .addEventListener("input", calculateTotalIncome);

// Event listener for investment input
document
  .getElementById("investment")
  .addEventListener("input", calculateTotalIncome);

// Event listener for charitable donations input
document
  .getElementById("charitable-donations")
  .addEventListener("input", calculateTotalIncome);

// Event listener for mortgage interest input
document
  .getElementById("mortgage-interest")
  .addEventListener("input", calculateTotalIncome);

// Event listener for pension scheme input
document
  .getElementById("pension")
  .addEventListener("input", calculateTotalIncome);

// Event listener for dependents input
document
  .getElementById("dependents")
  .addEventListener("input", calculateTotalIncome);

// Event listener for each dynamically added income amount
document
  .getElementById("additional-income-container")
  .addEventListener("input", (e) => {
    if (e.target && e.target.name === "income-amount") {
      calculateTotalIncome(); // Recalculate total income when any income amount changes
    }
  });
