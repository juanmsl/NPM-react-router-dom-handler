import React from 'react';

const AboutPage = ({ match, history }) => {
    const [userId, setUserID] = React.useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setUserID(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/contact/user/${userId}`);
    };

    return (
        <main>
            <h1>About User Search Page</h1>
            <h2>{match.url}</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='userId' onChange={handleChange} value={userId} />
                <button type='submit'>Search</button>
            </form>
        </main>
    );
};

export default AboutPage;