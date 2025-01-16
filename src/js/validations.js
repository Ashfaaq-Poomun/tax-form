const form = document.getElementById("tax-form");
const nidInput = document.getElementById("nid");
const nidError = document.getElementById("nid-error");
const nidLengthError = document.getElementById("nid-length-error");
const salaryInput = document.getElementById("annual-salary");
const salaryError = document.getElementById("annual-salary-error");
const emailInput = document.getElementById("email");
const emailError = document.createElement("p");
const additionalIncomeInput = document.getElementById("additional-income");
const additionalIncomeConInput = document.getElementById(
  "additional-income-container"
);
const additionalIncomeError = document.getElementById(
  "additional-income-error"
);
const investmentInput = document.getElementById("investment");
const charitableDonationsInput = document.getElementById(
  "charitable-donations"
);
const charitableDonationsError = document.getElementById(
  "charitable-donations-error"
);
const mortgageInterestInput = document.getElementById("mortgage-interest");
const mortgageInterestError = document.getElementById(
  "mortgage-interest-error"
);
const pensionInput = document.getElementById("pension");
const pensionError = document.getElementById("pension-error");
const dependentsInput = document.getElementById("dependents");
const dependentsError = document.getElementById("dependents-error");

// NIC Validation checks
nidInput.addEventListener("input", () => {
  if (nidInput.value.length !== 14) {
    nidLengthError.classList.remove("hidden");
    nidError.classList.add("hidden");
  } else if (!nidInput.checkValidity()) {
    nidError.classList.remove("hidden");
    nidLengthError.classList.add("hidden");
  } else {
    nidError.classList.add("hidden");
    nidLengthError.classList.add("hidden");
  }
});

// Email Validation checks
emailError.textContent = "Invalid email format. Please enter a valid email.";
emailError.classList.add("text-red-500", "text-sm", "hidden");
emailInput.insertAdjacentElement("afterend", emailError);

emailInput.addEventListener("input", () => {
  if (emailInput.validity.typeMismatch || emailInput.value.trim() === "") {
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }
});

// Salary Validation checks
salaryInput.addEventListener("input", () => {
  if (parseFloat(salaryInput.value) < 0 || isNaN(salaryInput.value)) {
    salaryError.classList.remove("hidden");
  } else {
    salaryError.classList.add("hidden");
  }
});

// Add Income Validation checks
additionalIncomeConInput.addEventListener("input", (e) => {
  if (e.target && e.target.name === "income-amount" && e.target.value < 0) {
    const errorElement = e.target.closest("div").querySelector(".income-error");
    errorElement.classList.remove("hidden");
  }
});

// Charitable Donations Validation checks
charitableDonationsInput.addEventListener("input", () => {
  if (
    parseFloat(charitableDonationsInput.value) < 0 ||
    parseFloat(charitableDonationsInput.value) > 50000 ||
    isNaN(charitableDonationsInput.value)
  ) {
    charitableDonationsError.classList.remove("hidden");
  } else {
    charitableDonationsError.classList.add("hidden");
  }
});

// Mortgage Interest Validation checks
mortgageInterestInput.addEventListener("input", () => {
  if (
    parseFloat(mortgageInterestInput.value) < 0 ||
    isNaN(mortgageInterestInput.value)
  ) {
    mortgageInterestError.classList.remove("hidden");
  } else {
    mortgageInterestError.classList.add("hidden");
  }
});

// Pension Scheme Validation checks
pensionInput.addEventListener("input", () => {
  if (parseFloat(pensionInput.value) < 0 || isNaN(pensionInput.value)) {
    pensionError.classList.remove("hidden");
  } else {
    pensionError.classList.add("hidden");
  }
});

// Dependents Validation checks
dependentsInput.addEventListener("input", () => {
  if (parseFloat(dependentsInput.value) < 0 || isNaN(dependentsInput.value)) {
    dependentsError.classList.remove("hidden");
  } else {
    dependentsError.classList.add("hidden");
  }
});

// Validation on Submit
form.addEventListener("submit", function (event) {
  let isValid = true;

  const requiredFields = [
    {
      id: "full-name",
      errorClass: "full-name-error",
      message: "Full Name is required.",
    },
    {
      id: "nid",
      errorClass: "nid-required-error",
      message: "NID is required and must follow the correct format.",
    },
    {
      id: "email",
      errorClass: "email-required-error",
      message: "Email Address is required.",
    },
    {
      id: "annual-salary",
      errorClass: "annual-salary-required-error",
      message: "Annual Salary is required.",
    },
    {
      id: "dependents",
      errorClass: "dependents-required-error",
      message: "Number of Dependents is required.",
    },
  ];

  // Loop through required fields to check for errors
  requiredFields.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorElement = document.querySelector(`.${field.errorClass}`);

    // Check if field is empty or invalid
    if (!input.value.trim() || (input.type === "number" && input.value < 0)) {
      isValid = false;
      input.classList.add("border-red-500");
      errorElement.textContent = field.message;
      errorElement.classList.remove("hidden");
    } else {
      input.classList.remove("border-red-500");
      errorElement.classList.add("hidden");
    }
  });

  // Additional field validations
  if (nidInput.value.length !== 14 || !nidInput.checkValidity()) {
    isValid = false;
  } else {
    nidInput.classList.remove("border-red-500");
    nidError.classList.add("hidden");
  }

  if (emailInput.validity.typeMismatch || emailInput.value.trim() === "") {
    isValid = false;
  } else {
    emailInput.classList.remove("border-red-500");
    emailError.classList.add("hidden");
  }

  if (parseFloat(salaryInput.value) < 0 || isNaN(salaryInput.value)) {
    isValid = false;
  } else {
    salaryInput.classList.remove("border-red-500");
    salaryError.classList.add("hidden");
  }

  if (
    parseFloat(charitableDonationsInput.value) < 0 ||
    parseFloat(charitableDonationsInput.value) > 50000 ||
    isNaN(charitableDonationsInput.value)
  ) {
    isValid = false;
  } else {
    charitableDonationsInput.classList.remove("border-red-500");
    charitableDonationsError.classList.add("hidden");
  }

  if (
    parseFloat(mortgageInterestInput.value) < 0 ||
    isNaN(mortgageInterestInput.value)
  ) {
    isValid = false;
  } else {
    mortgageInterestInput.classList.remove("border-red-500");
    mortgageInterestError.classList.add("hidden");
  }

  if (parseFloat(pensionInput.value) < 0 || isNaN(pensionInput.value)) {
    isValid = false;
  } else {
    pensionInput.classList.remove("border-red-500");
    pensionError.classList.add("hidden");
  }

  if (parseFloat(dependentsInput.value) < 0 || isNaN(dependentsInput.value)) {
    isValid = false;
  } else {
    dependentsInput.classList.remove("border-red-500");
    dependentsError.classList.add("hidden");
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
    alert("Please fill the form correctly before submitting.");
  } else {
    // Reset the form after successful validation
    form.reset();

    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.classList.add("hidden");
    });
    document.querySelectorAll("[data-accordion='toggle']").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      const line = toggle.querySelector(".line");
      if (line) {
        line.classList.remove("hidden");
      }
    });
    alert("Form successfully submitted!");
  }
});
