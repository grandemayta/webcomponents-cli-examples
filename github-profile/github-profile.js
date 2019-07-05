class GithubProfile extends HTMLElement {
    static get observedAttributes() {
        return ['nickname'];
    }
    get nickname() {
        return this.getAttribute('nickname');
    }

    attributeChangedCallback() {
        this.render();
    }

    async render() {
        const data = await ( await fetch(`https://api.github.com/users/${this.nickname}`) ).json();
        this.innerHTML = `
            <img src=${data.avatar_url}>
            <h1>${data.name}</h1>
            <h2>${data.bio}</h2>
        `;
    }
}

customElements.define('github-profile', GithubProfile);