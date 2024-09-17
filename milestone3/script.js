// Get References to new form and display area //
var form = document.getElementById('resume-form');
var resumeDisplayElemet = document.getElementById('resume-display');
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
    var resumeHTML = "\n    <h2><b>My Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b<Name: </b>".concat(name, "</p>\n    <p><b<Email ID: </b>").concat(email, "}</p>\n    <p><b<Contact #: </b>").concat(phone, "</p>\n\n    <h3>Education Details</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience Details</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    ");
    // Show The Final or Generated Resume//
    if (resumeDisplayElemet) {
        resumeDisplayElemet.innerHTML = resumeHTML;
    }
    else {
        console.error('Form is emply ! , Kindly Fill the form First and then click on Generate');
    }
});
