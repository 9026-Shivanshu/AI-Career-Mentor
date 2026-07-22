"use strict";

ResumeBuilder.addProject = function () {

    const container = this.elements.projectsContainer;

    if (!container) return;

    const projectHTML = `
    <div class="project-item">

        <button
            type="button"
            class="remove-btn">
            ✖ Remove
        </button>

        <h3 class="project-title"></h3>

        <div class="grid-2">

            <div class="form-group">
                <label>Project Title</label>
                <input type="text" class="projectName">
            </div>

            <div class="form-group">
                <label>Technologies Used</label>
                <input type="text" class="projectTech">
            </div>

        </div>

        <div class="form-group">
            <label>Project Description</label>
            <textarea rows="4" class="projectDescription"></textarea>
        </div>

    </div>
    `;

    container.insertAdjacentHTML("beforeend", projectHTML);

    container.querySelectorAll(".remove-btn").forEach(button => {

        button.onclick = function () {

            this.closest(".project-item").remove();

            ResumeBuilder.updateProjectNumbers();

        };

    });

    this.updateProjectNumbers();

};

ResumeBuilder.updateProjectNumbers = function () {

    const cards = this.elements.projectsContainer.querySelectorAll(".project-item");

    cards.forEach((card, index) => {

        card.querySelector(".project-title").textContent =
            `Project #${index + 1}`;

    });

};