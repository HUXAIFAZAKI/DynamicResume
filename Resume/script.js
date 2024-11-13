var hobbiesButton = document.querySelector(".btn-hobbies");
var hobbies = document.querySelector(".hobbies-container");
var languagesButton = document.querySelector(".btn-languages");
var languages = document.querySelector(".languages-container");
hobbiesButton.addEventListener("click", function () {
    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
    }
    else {
        hobbies.style.display = "none";
    }
});
languagesButton.addEventListener("click", function () {
    console.log(languages.style.display);
    if (languages.style.display === "none") {
        languages.style.display = "block";
    }
    else {
        languages.style.display = "none";
    }
});
window.addEventListener("DOMContentLoaded", function () {
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    console.log(resumeData);
    if (resumeData) {
        document.getElementById("name").innerText =
            resumeData.fullName || "Your Name";
        document.getElementById("jobTitle").innerText =
            resumeData.jobTitle || "Your Job Title";
        document.getElementById("address").innerText =
            resumeData.address || "Your Address";
        document.getElementById("phone").innerText =
            resumeData.phoneNumber || "Your Phone Number";
        document.getElementById("email").innerText =
            resumeData.email || "Your Email";
        document.getElementById("languages").innerText =
            resumeData.languages || "Your Languages";
        document.getElementById("education").innerText =
            resumeData.education || "Your Education";
        document.getElementById("experience").innerText =
            resumeData.experience || "Your Experience";
        document.getElementById("experience-duration").innerText =
            resumeData.experienceDuration || "Your Experience Duration";
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skillsArray
            .map(function (skill) { return "<li>".concat(skill, "</li>"); })
            .join("");
        var projectsList = document.getElementById("resumeProjects");
        projectsList.innerHTML = resumeData.projectsArray
            .map(function (project) { return "<li>".concat(project, "</li>"); })
            .join("");
        var hobbiesList = document.getElementById("resumeHobbies");
        hobbiesList.innerHTML = resumeData.hobbiesArray
            .map(function (hobby) { return "<li>".concat(hobby, "</li>"); })
            .join("");
        var imageElement = document.getElementById("resumeImage");
        if (resumeData.image) {
            imageElement.src = resumeData.image;
        }
    }
});
