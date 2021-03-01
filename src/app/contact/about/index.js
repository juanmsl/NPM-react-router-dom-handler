import React from 'react';

const AboutPage = ({ match }) => (
    <main>
        <h1>About Contact Page</h1>
        <h2>{match.url}</h2>
    </main>
);

export default AboutPage;