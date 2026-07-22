"use strict";

ResumeBuilder.addExperience = function () {

    const container = this.elements.experienceContainer;

    if (!container) return;

    const experienceHTML = `

    <div class="experience-item">

        <button
            type="button"
            class="remove-btn">
            ✖ Remove
        </button>

        <div class="grid-2">

            <div class="form-group">
                <label>Job Title</label>
                <input
                    type="text"
                    class="jobTitle"
                    placeholder="Example: Web Developer">
            </div>

            <div class="form-group">
                <label>Employment Type</label>

                <select class="employmentType">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                    <option>Freelance</option>
                    <option>Contract</option>
                </select>

            </div>

            <div class="form-group">
                <label>Company</label>
                <input
                    type="text"
                    class="companyName"
                    placeholder="Company Name">
            </div>

            <div class="form-group">
                <label>Location</label>
                <input
                    type="text"
                    class="companyLocation"
                    placeholder="City, State">
            </div>

            <div class="form-group">
                <label>Start Date</label>
                <input
                    type="month"
                    class="startDate">
            </div>

            <div class="form-group">
                <label>End Date</label>
                <input
                    type="month"
                    class="endDate">
            </div>

        </div>

        <div class="form-group">

            <label>

                <input
                    type="checkbox"
                    class="currentJob">

                Currently Working Here

            </label>

        </div>

        <div class="form-group">

            <label>Responsibilities</label>

            <textarea
                rows="5"
                class="jobDescription"
                placeholder="Describe your responsibilities..."></textarea>

        </div>

    </div>

    `;

    container.insertAdjacentHTML("beforeend", experienceHTML);

    container.querySelectorAll(".remove-btn").forEach(button => {

        button.onclick = function () {

            this.closest(".experience-item").remove();

            ResumeBuilder.updateExperienceNumbers();

        };

    });

    this.updateExperienceNumbers();

};

ResumeBuilder.updateExperienceNumbers = function () {

    const cards = this.elements.experienceContainer.querySelectorAll(".experience-item");

    cards.forEach((card, index) => {

        let title = card.querySelector(".experience-title");

        if (!title) {

            title = document.createElement("h3");

            title.className = "experience-title";

            card.prepend(title);

        }

        title.textContent = `Experience #${index + 1}`;

    });

};