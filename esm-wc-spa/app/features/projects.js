export class Projects extends HTMLElement {
    get nickname() {
        return this.getAttribute('nickname');
    }

    async getProjects() {
        const data = await fetch(`https://api.github.com/users/${this.nickname}/repos`);
        return data.json();
    }
    
    async connectedCallback() {
        const projects = await this.getProjects();
        this.innerHTML = `
            <h1>Projects Page</h1>
            <ul>
                ${projects.map(project => `
                    <li>${project.name}</li>
                `)}
            </ul>
        `;
    }
}