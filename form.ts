console.log("Form loaded");

interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  phoneNumber: number;
  address: string;
  languages: string;
  education: string;
  experience: string;
  experienceDuration: string;
  projects: string;
  projectsArray: string[];
  skills: string;
  skillsArray: string[];
  hobbies: string;
  hobbiesArray: string[];
  image: string;
}

document
  .getElementById("resumeForm")
  ?.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const fullName = (
      document.getElementById("fullName") as HTMLInputElement
    ).value.trim();
    const jobTitle = (
      document.getElementById("jobTitle") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const phoneNumber = (
      document.getElementById("phoneNumber") as HTMLInputElement
    ).value.trim();
    const address = (
      document.getElementById("address") as HTMLInputElement
    ).value.trim();
    const languages = (
      document.getElementById("languages") as HTMLInputElement
    ).value.trim();
    const education = (
      document.getElementById("education") as HTMLInputElement
    ).value.trim();
    const experience = (
      document.getElementById("experience") as HTMLInputElement
    ).value.trim();
    const experienceDuration = (
      document.getElementById("experience-duration") as HTMLInputElement
    ).value.trim();
    const projects = (
      document.getElementById("projects") as HTMLInputElement
    ).value.trim();
    const skills = (
      document.getElementById("skills") as HTMLInputElement
    ).value.trim();
    const hobbies = (
      document.getElementById("hobbies") as HTMLInputElement
    ).value.trim();

    const skillsArray: string[] = skills
      .split(",")
      .map((skill) => skill.trim());
    const projectsArray = projects.split(",").map((project) => project.trim());
    const hobbiesArray: string[] = hobbies
      .split(",")
      .map((hobby) => hobby.trim());

    const imageInput = document.getElementById("image") as HTMLInputElement;
    const imageFile = imageInput.files?.[0];

    let image = "";
    if (imageFile) {
      const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedImageTypes.includes(imageFile.type)) {
        alert("Please upload a valid image file (JPEG, PNG).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = function () {
        image = reader.result as string;
        const resumeData: ResumeData = {
          fullName: fullName,
          jobTitle: jobTitle,
          email: email,
          phoneNumber: parseInt(phoneNumber),
          address: address,
          languages: languages,
          education: education,
          experience: experience,
          experienceDuration: experienceDuration,
          projects: projects,
          projectsArray: projectsArray,
          skills: skills,
          skillsArray: skillsArray,
          hobbies: hobbies,
          hobbiesArray: hobbiesArray,
          image: image,
        };

        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "/Resume/resume.html";
      };
      reader.readAsDataURL(imageFile);
    } else {
      const resumeData: ResumeData = {
        fullName: fullName,
        jobTitle: jobTitle,
        email: email,
        phoneNumber: parseInt(phoneNumber),
        address: address,
        languages: languages,
        education: education,
        experience: experience,
        experienceDuration: experienceDuration,
        projects: projects,
        projectsArray: projectsArray,
        skills: skills,
        skillsArray: skillsArray,
        hobbies: hobbies,
        hobbiesArray: hobbiesArray,
        image: "",
      };
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      window.location.href = "/Resume/resume.html";
    }
  });
