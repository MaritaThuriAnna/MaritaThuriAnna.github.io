fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('project-list');
        projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-buttons">
                        <a href="${project.github}" target="_blank" class="btn">
                            <img src="images/github.png" alt="GitHub Icon" class="icon">
                        </a>
                        <a href="${project.live}" target="_blank" class="btn">
                            <img src="images/click.png" alt="Live Site Icon" class="icon">
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += projectCard;
        });
    })
    .catch(error => console.error('Error loading project data:', error));