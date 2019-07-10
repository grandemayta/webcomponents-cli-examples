import React from 'https://unsafe-production.jspm.io/react';
import Router from 'https://unsafe-production.jspm.io/react-router-dom';

export default function Routes() {
    return (
        React.createElement(Router.BrowserRouter, null,
            React.createElement(React.Suspense, { fallback: '<div>Loading...</div>' },
                React.createElement('div', null,
                    React.createElement(Router.Route, { 
                        path: '/',
                        exact: true,
                        component: React.lazy(() => import('./components/github-profile.js'))
                    }),
                    React.createElement(Router.Route, { 
                        path: '/projects',
                        component: React.lazy(() => import('./components/github-projects.js'))
                    })
                )
            )
        )
    )
}
