// Get References to new form and display area //
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Control the submission of form //
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    // collect all field or input values from the form //
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically //
    var resumeHTML = "\n    <h2><b>My Ediable Resume Result</b><h2>\n    <h3>Personal Information</h3>\n    <p><b<Name: </b><span contenteditable=\"true\">".concat(name, "</spam></p>\n    <p><b<Email ID: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b<Contact #: </b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education Details</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience Details</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    // Show The Final or Generated Resume//
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Form is emply ! , Kindly Fill the form First and then click on Generate');
    }
});
