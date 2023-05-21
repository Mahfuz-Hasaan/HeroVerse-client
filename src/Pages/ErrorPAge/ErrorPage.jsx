import React from 'react';
import error from '../../assets/error/error.jpeg'

const ErrorPage = () => {
    return (
        <div>
            <img className='h-screen w-screen' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;