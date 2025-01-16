# Income Tax Revenue Collection Form

This is a web-based Income Tax Revenue Collection Form that allows users to input and submit their tax-related information, including personal details, income details, and deductions. The form features collapsible accordion sections for easy navigation and uses real-time form validation to ensure that all required fields are properly filled out before submission.

You can view screenshot of the app and form from src folder>assets

## Features

- **Accordion Sections**: The form uses collapsible accordion-style sections, allowing users to easily navigate through different parts of the form, such as Personal Information, Income Details, Deductions, and Tax Calculation Summary.
- **Real-Time Form Validation**: Built-in validation ensures that required fields are filled out correctly. Invalid fields trigger error messages in real time to guide the user.
- **Dynamic Income Fields**: The form allows users to dynamically add additional income sources. This feature is useful for people who have multiple income streams, such as freelance work or investments.

- **Reset After Submission**: After submitting the form, all fields are cleared, and the form is reset to its original state for the next user.

- **Accessibility Enhancements**:

  - `aria-expanded` attributes are added to each accordion button for better accessibility, providing useful information to users with screen readers.
  - Labels are associated with form fields for improved screen reader support.

- **Responsive Design**: The form is designed to work on both desktop and mobile devices, using Tailwind CSS for styling, ensuring a great user experience across different screen sizes.

## Installation

### Prerequisites

To set up this project on your local machine, make sure you have the following installed:

- **VS Code** (to run the app with extension)
- **Live Server Extension** (to run the app with tailwindcss)
- **Tailwind CSS** (used for styling the form)

### Steps to Install:

1. **Clone the repository**:

   ```bash
   https://github.com/Ashfaaq-Poomun/tax-form.git
   cd tax-form
   ```

   Or

   Open with GitHub Desktop

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun
   ```

3. **Replace firebaseConfig for Firebse configure**:

   Replace this:

   ```bash
   const firebaseConfig = {
   apiKey: "API_KEY",
   authDomain: "AUTH_DOMAIN",
   projectId: "PROJECT_ID",
   storageBucket: "STORAGE_BUCKET",
   messagingSenderId: "MESSAGING_SENDER_ID",
   appId: "APP_ID",
   };
   ```

   With variables sent on these file:
   **googleAuth.js**
   **login.js**
   **lougout.js**
   **signup.js**

### Steps to Run:

1. **Replace firebaseConfig for Firebse configure**:

   run Live Server on VS code and open the app by navigating to http://localhost:xxxx/public/index.html

## Usage

## Overview of Form Sections:

1. **Personal Information**: Users will fill out personal details such as Full Name, National ID (NID), and Email Address. This section is required for processing the tax information.

2. **Income Details**:

   - **Annual Salary**: A numeric field to input the yearly salary.
   - **Investment Losses/Gains**: A field to input any investment-related income or loss.
   - **Additional Income Sources**: Users can add extra sources of income dynamically. This is useful for people who receive income from multiple channels, such as freelance work or investments.

3. **Deductions**:

   - **Charitable Donations**: A numeric field where users can input donations made to charities.
   - **Mortgage Interest**: A field for entering mortgage interest payments.
   - **Pension Scheme**: A field to input contributions to a pension scheme.

4. **Tax Calculation Summary**: This section gathers the number of dependents, which may affect the tax calculation.

5. **Submit Button**: After filling out the form, users can submit it for processing. The form will reset after submission for the next user.

## Form Validation:

- Each field has its own validation to ensure the user inputs valid data.
- If any field is missing or has incorrect data, an error message will appear under the field.
- The form cannot be submitted until all required fields or invalid data are filled out correctly.

## Accessibility:

- The aria-expanded attribute is used to make accordion sections accessible to screen readers, improving the experience for users with disabilities.
- Form fields are labeled correctly for compatibility with screen readers.

## After Submission:

Once the form is successfully submitted:

- All input fields are reset to their initial state.
- The accordion sections are collapsed.
- A success message is displayed to the user to confirm that the form was submitted.

## Customization

You can easily customize this form for your own needs:

- **Add or remove fields**: Modify the form to collect the information that is relevant to your specific tax collection process.
- **Styling**: Tailwind CSS is used for styling, so you can customize the appearance by modifying the output.css file or by adding new classes.
- **Backend Integration**: The form currently handles validation on the frontend. To connect it to a backend, replace the form submission logic with an AJAX call to send data to your server.

## Technologies Used:

- **HTML5**: Provides the structure for the form.
- **Tailwind CSS**: A utility-first CSS framework used for styling the form.
- **JavaScript (Vanilla)**: For form validation, dynamic field handling, and accordion functionality.
