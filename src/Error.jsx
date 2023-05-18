import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <h1>ERROR 404</h1>
        <h1>ERROR 404</h1>

        <button>
          <Link to="/SignUp">Back</Link>
        </button>
    </>
  );
}

export default Error;