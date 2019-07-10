import { Search } from './features/search.js';
import { Profile } from './features/profile.js';
import { Projects } from './features/projects.js';
import { router } from './router.js';

const appMain = document.getElementById('root');

customElements.define('app-search', Search);
customElements.define('app-profile', Profile);
customElements.define('app-projects', Projects);

router
  .on('/', () => {
      appMain.innerHTML = '<app-search></app-search>';
  })
  .on('/profile/:id', params => {
      appMain.innerHTML = `<app-profile nickname=${params.id}></app-profile>`;
  })
  .on('/projects/:id', params => {
    appMain.innerHTML = `<app-projects nickname=${params.id}></app-projects>`;
  })
  .resolve();