/* =====================================================
   AI Career Mentor
   Resume Builder
   resume.js
===================================================== */

"use strict";

/* =====================================================
   Global Object
===================================================== */

const ResumeBuilder = {

    elements: {},

    init() {

        console.log("✅ Resume Builder Started");

        this.cacheElements();

        this.bindEvents();
        this.loadDraft();

    },

    cacheElements() {

        this.elements = {

            educationContainer: document.getElementById("educationContainer"),
            addEducationBtn: document.getElementById("addEducationBtn"),

            skillsContainer: document.getElementById("skillsContainer"),
            addSkillBtn: document.getElementById("addSkillBtn"),

            experienceContainer: document.getElementById("experienceContainer"),
            addExperienceBtn: document.getElementById("addExperienceBtn"),

              
            projectsContainer: document.getElementById("projectsContainer"),
            addProjectBtn: document.getElementById("addProjectBtn"),

            certificationContainer: document.getElementById("certificationContainer"),
            addCertificationBtn: document.getElementById("addCertificationBtn"),

            languageContainer: document.getElementById("languageContainer"),
            addLanguageBtn: document.getElementById("addLanguageBtn"),

            previewResumeBtn: document.getElementById("previewResumeBtn"),
            saveDraftBtn: document.getElementById("saveDraftBtn"),
            clearDraftBtn: document.getElementById("clearDraftBtn"),
            downloadPdfBtn: document.getElementById("downloadPdfBtn"),
            resumeUpload: document.getElementById("resumeUpload"),
            uploadResumeBtn: document.getElementById("uploadResumeBtn"),
            printResumeBtn: document.getElementById("printResumeBtn"),
             aiImproveBtn: document.getElementById("aiImproveBtn"),
            resumeTemplate: document.getElementById("resumeTemplate")

        };

    },

    bindEvents() {

        if (this.elements.addEducationBtn) {
            this.elements.addEducationBtn.addEventListener(
                "click",
                () => this.addEducation()
            );
        }

        if (this.elements.addSkillBtn) {
            this.elements.addSkillBtn.addEventListener(
                "click",
                () => this.addSkill()
            );
        }

        if (this.elements.addExperienceBtn) {
            this.elements.addExperienceBtn.addEventListener(
                "click",
                () => this.addExperience()
            );
        }

        if (this.elements.addProjectBtn) {
            this.elements.addProjectBtn.addEventListener(
                "click",
                () => this.addProject()
            );
        }

        if (this.elements.addCertificationBtn) {
            this.elements.addCertificationBtn.addEventListener(
                "click",
                () => this.addCertification()
            );
        }

        if (this.elements.addLanguageBtn) {
            this.elements.addLanguageBtn.addEventListener(
                "click",
                () => this.addLanguage()
            );
        }

        if (this.elements.previewResumeBtn) {
            this.elements.previewResumeBtn.addEventListener(
                "click",
                () => this.previewResume()
            );
        }

        if (this.elements.saveDraftBtn) {
            this.elements.saveDraftBtn.addEventListener(
                "click",
                () => this.saveDraft()
            );
        }
if (this.elements.clearDraftBtn) {
    this.elements.clearDraftBtn.addEventListener(
        "click",
        () => this.clearDraft()
    );
}
if (this.elements.uploadResumeBtn) {
    this.elements.uploadResumeBtn.addEventListener(
        "click",
        () => this.uploadResume()
    );
}
        if (this.elements.downloadPdfBtn) {
            this.elements.downloadPdfBtn.addEventListener(
                "click",
                () => this.downloadPDF()
            );
        }

        if (this.elements.printResumeBtn) {
            this.elements.printResumeBtn.addEventListener(
                "click",
                () => window.print()
            );
        }

        if (this.elements.aiImproveBtn) {
            this.elements.aiImproveBtn.addEventListener(
                "click",
                () => this.aiImproveResume()
            );
        }
// ===============================
// Live Resume Preview
// ===============================
const previewFields = [
    "fullName",
    "email",
    "phone",
    "city",
    "professionalSummary",
    "careerObjective",
    "targetRole"
];
previewFields.forEach(id => {

    const input = document.getElementById(id);

    if (input) {
        input.addEventListener("input", () => this.updateLivePreview());
    }
// Live Education Preview
document.addEventListener("input", (e) => {

    if (
        e.target.closest(".education-item")
    ) {

        this.updateEducationPreview();

    }

});
document.addEventListener("input", (e) => {

    if (
        e.target.closest(".skill-item")
    ) {

        this.updateSkillsPreview();

    }

});
document.addEventListener("input", (e) => {

    if (e.target.closest(".experience-item")) {

        this.updateExperiencePreview();

    }

});
document.addEventListener("input", (e) => {

    if (e.target.closest(".project-item")) {

        this.updateProjectsPreview();

    }

});
document.addEventListener("input", (e) => {

    if (e.target.closest(".certification-item")) {

        this.updateCertificationsPreview();

    }

});
document.addEventListener("input",(e)=>{

    if(e.target.closest(".language-item")){

        this.updateLanguagesPreview();

    }

});
});
    },
updateLivePreview() {

    document.getElementById("previewName").textContent =
        document.getElementById("fullName").value || "Your Name";

    document.getElementById("previewEmail").textContent =
        document.getElementById("email").value || "your@email.com";

    document.getElementById("previewPhone").textContent =
        document.getElementById("phone").value || "+91 9876543210";

    document.getElementById("previewCity").textContent =
        document.getElementById("city").value || "Lucknow";

    document.getElementById("previewSummary").textContent =
        document.getElementById("professionalSummary").value ||
        "Your professional summary will appear here...";

        document.getElementById("previewObjective").textContent =
    document.getElementById("careerObjective").value ||
    "Your career objective will appear here...";

document.getElementById("previewRole").textContent =
    document.getElementById("targetRole").value ||
    "Frontend Developer";

    this.updateEducationPreview();
    this.updateSkillsPreview();
    this.updateExperiencePreview();
    this.updateProjectsPreview();
    this.updateCertificationsPreview();
    this.updateLanguagesPreview();

},
updateEducationPreview() 
{

    const preview = document.getElementById("previewEducation");

    if (!preview) return;

    const educationItems = document.querySelectorAll(".education-item");

    if (educationItems.length === 0) {

        preview.innerHTML = "<p>No education added.</p>";

        return;

    }

    let html = "";

    educationItems.forEach(item => {

        const qualification = item.querySelector(".qualificationLevel")?.value || "";
        const degree = item.querySelector(".degreeName")?.value || "";
        const specialization = item.querySelector(".specialization")?.value || "";
        const college = item.querySelector(".collegeName")?.value || "";
        const university = item.querySelector(".university")?.value || "";
        const year = item.querySelector(".passingYear")?.value || "";
        const grade = item.querySelector(".grade")?.value || "";

        html += `
        <div class="preview-education-item">

            <strong>${degree || qualification}</strong>

            ${specialization ? `<br>${specialization}` : ""}
            ${college ? `<br>${college}` : ""}
            ${university ? `<br>${university}` : ""}
            ${year ? `<br>${year}` : ""}
            ${grade ? `<br>Grade: ${grade}` : ""}
            <hr>

        </div>
        `;

    });

    preview.innerHTML = html;
   
},
updateSkillsPreview() {

    const preview = document.getElementById("previewSkills");

    if (!preview) return;

    const skills = document.querySelectorAll(".skill-item");

    if (skills.length === 0) {
        preview.innerHTML = "<p>No skills added.</p>";
        return;
    }

    let html = "<ul>";

    skills.forEach(skill => {

        const skillName = skill.querySelector(".skillName")?.value || "";

        if (skillName.trim() !== "") {
            html += `<li>${skillName}</li>`;
        }

    });

    html += "</ul>";

    preview.innerHTML = html;
    this.updateSkillNumbers();

},
updateExperiencePreview() {

    const preview = document.getElementById("previewExperience");

    if (!preview) return;

    const experiences = document.querySelectorAll(".experience-item");

    if (experiences.length === 0) {

        preview.innerHTML = "<p>No experience added.</p>";

        return;

    }

    let html = "";

    experiences.forEach(exp => {

        const jobTitle = exp.querySelector(".jobTitle")?.value || "";
        const company = exp.querySelector(".companyName")?.value || "";
        const startDate = exp.querySelector(".startDate")?.value || "";
        const endDate = exp.querySelector(".endDate")?.value || "";
        const description = exp.querySelector(".jobDescription")?.value || "";

        if (
            jobTitle.trim() === "" &&
            company.trim() === "" &&
            description.trim() === ""
        ) {
            return;
        }

        html += `
            <div class="preview-experience-item">

                <strong>${jobTitle}</strong>

                ${company ? `<br>${company}` : ""}

                ${(startDate || endDate)
                    ? `<br><small>${startDate} - ${endDate || "Present"}</small>`
                    : ""}

                ${description
                    ? `<br>${description}`
                    : ""}

                <hr>

            </div>
        `;

    });

    preview.innerHTML = html || "<p>No experience added.</p>";

},
updateProjectsPreview() {

    const preview = document.getElementById("previewProjects");

    if (!preview) return;

    const projects = document.querySelectorAll(".project-item");

    if (projects.length === 0) {

        preview.innerHTML = "<p>No projects added.</p>";

        return;

    }

    let html = "";

    projects.forEach(project => {

        const projectName = project.querySelector(".projectName")?.value || "";
        const projectType = project.querySelector(".projectType")?.value || "";
        const projectRole = project.querySelector(".projectRole")?.value || "";
        const projectTech = project.querySelector(".projectTech")?.value || "";
        const description = project.querySelector(".projectDescription")?.value || "";

        if (
            projectName.trim() === "" &&
            description.trim() === ""
        ) {
            return;
        }

        html += `
            <div class="preview-project-item">

                <strong>${projectName}</strong>

                ${projectType ? `<br><em>${projectType}</em>` : ""}

                ${projectRole ? `<br>Role: ${projectRole}` : ""}

                ${projectTech ? `<br>Tech: ${projectTech}` : ""}

                ${description ? `<br>${description}` : ""}

                <hr>

            </div>
        `;

    });

    preview.innerHTML = html || "<p>No projects added.</p>";

},
updateCertificationsPreview() {

    const preview = document.getElementById("previewCertifications");

    if (!preview) return;

    const certifications = document.querySelectorAll(".certification-item");

    if (certifications.length === 0) {

        preview.innerHTML = "<p>No certifications added.</p>";

        return;

    }

    let html = "";

    certifications.forEach(cert => {

        const certificationName = cert.querySelector(".certificationName")?.value || "";
        const issuedBy = cert.querySelector(".issuedBy")?.value || "";
        const issueDate = cert.querySelector(".issueDate")?.value || "";
        const expiryDate = cert.querySelector(".expiryDate")?.value || "";

        if (
            certificationName.trim() === "" &&
            issuedBy.trim() === ""
        ) {
            return;
        }

        html += `
            <div class="preview-certification-item">

                <strong>${certificationName}</strong>

                ${issuedBy ? `<br>Issued By: ${issuedBy}` : ""}

                ${(issueDate || expiryDate)
                    ? `<br><small>${issueDate} ${expiryDate ? `- ${expiryDate}` : ""}</small>`
                    : ""}

                <hr>

            </div>
        `;

    });

    preview.innerHTML = html || "<p>No certifications added.</p>";

},
updateLanguagesPreview() {

    const preview = document.getElementById("previewLanguages");

    if (!preview) return;

    const languages = document.querySelectorAll(".language-item");

    if (languages.length === 0) {

        preview.innerHTML = "<p>No languages added.</p>";

        return;

    }

    let html = "<ul>";

    languages.forEach(lang => {

        const language = lang.querySelector(".languageName")?.value || "";
        const level = lang.querySelector(".languageLevel")?.value || "";

        if (language.trim() !== "") {

            html += `<li><strong>${language}</strong> (${level})</li>`;

        }

    });

    html += "</ul>";

    preview.innerHTML = html || "<p>No languages added.</p>";

},
removeItem(button, itemClass, titleClass, titlePrefix, previewFunction) {

    const item = button.closest(itemClass);

    if (!item) return;

    item.remove();

    document.querySelectorAll(itemClass).forEach((element, index) => {

        const title = element.querySelector(titleClass);

        if (title) {
            title.textContent = `${titlePrefix} #${index + 1}`;
        }

    });

    if (typeof previewFunction === "function") {
        previewFunction.call(this);
    }

},
    /* ======================================
       Temporary Functions
    ====================================== */
addEducation() {

    const container = this.elements.educationContainer;

    if (!container) return;

    const educationHTML = `

    <div class="education-item">

        <button
            type="button"
            class="remove-btn">

            ✖ Remove

        </button>

        <div class="grid-2">

            <div class="form-group">

                <label>Qualification Level</label>

                <select class="qualificationLevel">

                    <option>10th</option>

                    <option>12th</option>

                    <option>ITI</option>

                    <option>Diploma</option>

                    <option>Bachelor's Degree</option>

                    <option>Master's Degree</option>

                    <option>Doctorate (PhD)</option>

                </select>

            </div>

            <div class="form-group">

                <label>Course / Degree</label>

                <input
                    type="text"
                    class="degreeName"
                    placeholder="Example: B.Tech">

            </div>

            <div class="form-group">

                <label>Institute</label>

                <input
                    type="text"
                    class="collegeName"
                    placeholder="Institute Name">

            </div>

            <div class="form-group">

                <label>Passing Year</label>

                <input
                    type="number"
                    class="passingYear"
                    placeholder="2026">

            </div>

        </div>

    </div>

    `;

    container.insertAdjacentHTML("beforeend", educationHTML);
this.updateEducationNumbers();
    const removeButtons =
        container.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {

      button.onclick = () => {

    this.removeItem(
        button,
        ".education-item",
        ".education-title",
        "Education",
        this.updateEducationPreview
    );

};

    });
ResumeBuilder.updateEducationPreview();
},
updateEducationNumbers() {

    const cards = this.elements.educationContainer.querySelectorAll(".education-item");

    cards.forEach((card, index) => {

        let title = card.querySelector(".education-title");

        if (!title) {

            title = document.createElement("h3");
            title.className = "education-title";
            card.prepend(title);

        }

        title.textContent = `Qualification #${index + 1}`;

    });
this.updateEducationPreview();
},addSkill() {

    const container = this.elements.skillsContainer;

    if (!container) return;

    const skillHTML = `

    <div class="skill-item">

        <button
            type="button"
            class="remove-btn">
            ✖ Remove
        </button>

        <div class="grid-2">

            <div class="form-group">
                <label>Skill</label>
                <input
                    type="text"
                    class="skillName"
                    placeholder="Example: JavaScript">
            </div>

            <div class="form-group">
                <label>Category</label>
                <select class="skillCategory">
                    <option>Technical</option>
                    <option>Soft Skill</option>
                    <option>Language</option>
                    <option>Management</option>
                    <option>Other</option>
                </select>
            </div>

            <div class="form-group">
                <label>Proficiency</label>
                <select class="skillLevel">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                </select>
            </div>

            <div class="form-group">
                <label>Experience</label>
                <input
                    type="text"
                    class="skillExperience"
                    placeholder="Example: 2 Years">
            </div>

        </div>

    </div>

    `;

    container.insertAdjacentHTML("beforeend", skillHTML);

    container.querySelectorAll(".remove-btn").forEach(button => {
button.onclick = function () {

    this.closest(".skill-item").remove();

    ResumeBuilder.updateSkillNumbers();

    ResumeBuilder.updateSkillsPreview();

};

    });

    this.updateSkillNumbers();

},
updateSkillNumbers() {

    const cards = this.elements.skillsContainer.querySelectorAll(".skill-item");

    cards.forEach((card, index) => {

        let title = card.querySelector(".skill-title");

        if (!title) {

            title = document.createElement("h3");

            title.className = "skill-title";

            card.prepend(title);

        }

        title.textContent = `Skill #${index + 1}`;

    });

},addExperience() {},

    addProject() {

        console.log("Project Button Clicked");

    },

    addCertification() {

        console.log("Certification Button Clicked");

    },

   addLanguage() {

    const container = this.elements.languageContainer;

    if (!container) return;

    const html = `

    <div class="language-item">

        <button
            type="button"
            class="remove-btn">

            ✖ Remove

        </button>

        <div class="grid-2">

            <div class="form-group">

                <label>Language</label>

                <input
                    type="text"
                    class="languageName"
                    placeholder="English">

            </div>

            <div class="form-group">

                <label>Proficiency</label>

                <select class="languageLevel">

                    <option>Basic</option>
                    <option>Intermediate</option>
                    <option>Fluent</option>
                    <option>Native</option>

                </select>

            </div>

        </div>

    </div>

    `;

    container.insertAdjacentHTML("beforeend", html);

    container.querySelectorAll(".remove-btn").forEach(button => {

        button.onclick = function () {

            this.closest(".language-item").remove();

            ResumeBuilder.updateLanguagesPreview();

        };

    });

    this.updateLanguagesPreview();

},

   previewResume() {},
saveDraft() {

    const data = {};

    document.querySelectorAll("input, textarea, select").forEach((field) => {

        const key = field.id || field.className;

        if (key) {
            data[key] = field.value;
        }

    });

    localStorage.setItem(
        "resumeDraft",
        JSON.stringify(data)
    );

    alert("Resume Draft Saved Successfully!");

},
clearDraft() {

    localStorage.removeItem("resumeDraft");

    alert("Resume Draft Cleared Successfully!");

    location.reload();

},
loadDraft() {

    const savedData = localStorage.getItem("resumeDraft");

    if (!savedData) return;

    const data = JSON.parse(savedData);

    document.querySelectorAll("input, textarea, select").forEach((field) => {

        const key = field.id || field.className;

        if (data[key] !== undefined) {
            field.value = data[key];
        }

    });

    this.updateLivePreview();

},
async downloadPDF() {

    const resume = document.querySelector(".live-resume-paper");

    if (!resume) {
        alert("Resume Preview not found.");
        return;
    }

    const canvas = await html2canvas(resume, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
    );

    const name =
        document.getElementById("fullName").value.trim() ||
        "Resume";

    pdf.save(`${name}_Resume.pdf`);

},

    aiImproveResume() {

    console.log("AI Improve Resume");

},

async uploadResume() {

    const file = this.elements.resumeUpload.files[0];

    if (!file) {

        alert("Please select your resume first.");

        return;

    }

    const formData = new FormData();

    formData.append("resume", file);

    const token = localStorage.getItem("token");

    try {

        const response = await fetch("http://localhost:5000/api/resume/upload", {

            method: "POST",

            headers: {

                Authorization: `Bearer ${token}`

            },

            body: formData

        });

        const data = await response.json();

        console.log(data);

        if (data.success) {

    document.getElementById("atsResultCard").style.display = "block";

    document.getElementById("atsScore").innerText = data.atsScore + "%";

    document.getElementById("foundSkillsList").innerHTML =
        data.foundSkills.map(skill => `<li>${skill}</li>`).join("");

    document.getElementById("missingSkillsList").innerHTML =
        data.missingSkills.map(skill => `<li>${skill}</li>`).join("");

    alert("Resume Uploaded Successfully!");

} else {

    alert(data.message);

}

    } catch (error) {

        console.error(error);

        alert("Something went wrong.");

    }

}

};
/* =====================================================
   Start Application
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    ResumeBuilder.init();

});