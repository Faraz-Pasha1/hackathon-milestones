// Get References to new form and display area //

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Control the submission of form //

form.addEventListener('submit' , (event: Event) => {
    event.preventDefault();     // Prevent page refresh

    // collect all field or input values from the form //

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    // generate the resume content dynamically //
    const resumeHTML = `
    <h2><b>My Ediable Resume Result</b><h2>
    <h3>Personal Information</h3>
    <p><b<Name: </b><span contenteditable="true">${name}</spam></p>
    <p><b<Email ID: </b><span contenteditable="true">${email}</span></p>
    <p><b<Contact #: </b><span contenteditable="true">${phone}</span></p>

    <h3>Education Details</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience Details</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    `;

    // Show The Final or Generated Resume//

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML= resumeHTML;
    } else {
        console.error('Form is emply ! , Kindly Fill the form First and then click on Generate')

    }

})