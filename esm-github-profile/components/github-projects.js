import React from 'https://unsafe-production.jspm.io/react';

export default function GithubProjects() {
    const [projects, setProjects] = React.useState([]);

    async function httpWrapper() {
        const data = await ( await fetch('https://api.github.com/users/grandemayta/repos') ).json();
        setProjects(data);
    }

    React.useEffect(() => {
        httpWrapper()
    }, []);

    return (
        React.createElement('div', null, 
            React.createElement('h1', null, 'Projects'),
            projects.map(project => (
                React.createElement('h2', null, project.name)
            ))
        )
    )
}