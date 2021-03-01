import React from 'react';

const OverviewPage = ({ match }) => (
    <main>
        <h1>Overview Home Page</h1>
        <h2>{match.url}</h2>
    </main>
);

export default OverviewPage;