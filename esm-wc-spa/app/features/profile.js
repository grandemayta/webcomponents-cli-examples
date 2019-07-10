import { router } from '../router.js';

export class Profile extends HTMLElement {
    get nickname() {
        return this.getAttribute('nickname');
    }

    async getProfile() {
        const data = await fetch(`https://api.github.com/users/${this.nickname}`);
        return data.json();
    }

    handleClick() {
        router.navigate(`/projects/${this.nickname}`);
    }
    
    async connectedCallback() {
        const profile = await this.getProfile();
        this.innerHTML = `
            <h1>Profile Page</h1>
            <h2>${profile.name}</2>
            <p>${profile.bio}</p>
            <button>Show Projects (${profile.public_repos})</button>
        `;
        this.querySelector('button')
            .addEventListener('click', this.handleClick.bind(this));
    }
}