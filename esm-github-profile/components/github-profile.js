import React from 'https://unsafe-production.jspm.io/react';
import Router from 'https://unsafe-production.jspm.io/react-router-dom';

export default function GithubProfile() {
    const [profile, setProfile] = React.useState({});

    async function httpWrapper() {
        const data = await ( await fetch('https://api.github.com/users/grandemayta') ).json();
        setProfile(data);
    }

    React.useEffect(() => {
        httpWrapper();
    }, []);

    return (
        React.createElement('div', null, 
            React.createElement('h1', null, 'Profile Page'),
            React.createElement('h2', null, profile.name),
            React.createElement('p', null, profile.bio),
            React.createElement(Router.Link, { to: '/projects'}, 'Projects')
        )
    )
}