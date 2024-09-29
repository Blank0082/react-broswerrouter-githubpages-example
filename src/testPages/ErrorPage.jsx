import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {

    return (
        <main>
            <h1>Oops! Something went wrong.</h1>
            <p>Please check your URL and try again.</p>
            <Link to="/">Go back to home</Link>
        </main>
    );
}

export default ErrorPage;
