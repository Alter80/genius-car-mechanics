import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.gif';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "80%" }} src={notFound} alt="" srcset="" />
            <br />
            <Link to='/'> <button>Go Back</button> </Link>
        </div>
    );
};

export default NotFound;