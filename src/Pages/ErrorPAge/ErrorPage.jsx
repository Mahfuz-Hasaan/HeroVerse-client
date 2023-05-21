import React from 'react';
import error from '../../assets/error/error.jpeg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div>
                <Link to="/">
                <button className='bg-yellow-300 p-3 rounded-lg font-bold'>Back to Homepage</button>
                </Link>
            </div>
            <img className='h-screen w-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;