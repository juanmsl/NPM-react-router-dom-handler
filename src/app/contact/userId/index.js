import React from 'react';

const AboutPage = ({ match }) => (
    <main>
        <h1>About User Page</h1>
        <h2>{match.url}</h2>
        <p>Hello {match.params.userId}</p>
    </main>
);

export default AboutPage;