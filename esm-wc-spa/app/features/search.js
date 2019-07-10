import { router } from '../router.js';

export class Search extends HTMLElement {
    constructor() {
        super();
        this.nickname = '';
        this.innerHTML = `
            <h1>Search Page</h1>
            <input type="text" placeholder="Search a developer">
            <button>Show Profile</button>
        `;
    }

    handleClick(e) {
        const nickname = this.querySelector('input').value;
        router.navigate(`/profile/${nickname}`);
    }

    connectedCallback() {
        this.querySelector('button')
            .addEventListener('click', this.handleClick.bind(this));
    }
}