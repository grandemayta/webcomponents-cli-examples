import { TOKEN, BASE_URL } from './constants.js';

class FootballTeam extends HTMLElement {
    static get observedAttributes() {
        return ['team'];
    }

    get team() {
        return this.getAttribute('team');
    }

    async getTeam() {
        const data = await fetch(`${BASE_URL}/teams/${this.team}`, {
            headers: {
                'X-Auth-Token': TOKEN
            }
        });
        return data.json();
    }

    attributeChangedCallback() {
        this.render();
    }

    teamTemplate(team) {
        return `
            <li>
                <h3>${team.name}</h3>
                <p>${team.position || ''}</p>
            </li>
        `;
    }

    async render() {
        const team = await this.getTeam();
        
        this.innerHTML = `
            <h1>${team.name}</h1>
            <img src=${team.crestUrl} style="width: 124px;">
            <ul>
                ${team.squad.reduce((acc, team) => `${acc} ${this.teamTemplate(team)}`, '')}
            </ul>
        `;
    }
}

customElements.define('football-team', FootballTeam);