"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("resumeTitle").innerText = resumeData.title || "Your Job Title";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";
        document.getElementById("resumeLocation").innerText = resumeData.location || "Your Location";
        document.getElementById("resumeEducation").innerText = resumeData.education || "Your Education";
        document.getElementById("resumeExperience").innerText = resumeData.experience || "Your Experience";
        const skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skills.map((skill) => `<li>${skill}</li>`).join('');
        const linksContainer = document.getElementById("resumeLinks");
        linksContainer.innerHTML = resumeData.links.map((link) => `<a href="${link}" target="_blank">${link}</a>`).join('');
        const imageElement = document.getElementById("resumeImage");
        if (resumeData.image) {
            imageElement.src = resumeData.image;
        }
    }
    
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    const skillsSection = document.getElementById("resumeSkills");
    
    let skillsVisible = true;
    toggleSkillsBtn.addEventListener("click", () => {
        if (skillsVisible) {
            skillsSection.style.display = "none"; 
            toggleSkillsBtn.innerText = "Show Skills"; 
        }
        else {
            skillsSection.style.display = "block"; 
            toggleSkillsBtn.innerText = "Hide Skills"; 
        }
        skillsVisible = !skillsVisible; 
    });
});
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('id'); 
    if (resumeId) {
        const resumeData = JSON.parse(localStorage.getItem(resumeId) || "{}");
        if (resumeData) {
            document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
            document.getElementById("resumeTitle").innerText = resumeData.title || "Your Job Title";
            document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
            document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";
            document.getElementById("resumeLocation").innerText = resumeData.location || "Your Location";
            document.getElementById("resumeEducation").innerText = resumeData.education || "Your Education";
            document.getElementById("resumeExperience").innerText = resumeData.experience || "Your Experience";
            const skillsList = document.getElementById("resumeSkills");
            skillsList.innerHTML = resumeData.skills.map((skill) => `<li>${skill}</li>`).join('');
            const linksContainer = document.getElementById("resumeLinks");
            linksContainer.innerHTML = resumeData.links.map((link) => `<a href="${link}" target="_blank">${link}</a>`).join('');
            const imageElement = document.getElementById("resumeImage");
            if (resumeData.image) {
                imageElement.src = resumeData.image;
            }
        }
    }
});

