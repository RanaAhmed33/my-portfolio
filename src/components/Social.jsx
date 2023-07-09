import React from 'react';
// import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => {
    return (
        <ul style={{ display: 'flex', gap: '50px' }} className="space-y-4">
            <li className="flex items-center space-x-2 mt-4 w-5 h-5">
                <a className='social' target="_blank" href="https://www.facebook.com/profile.php?id=100088229376861">
                    <FaFacebook className="social" style={{ fontSize: '30px' }} />
                </a>
            </li>
            <li className="flex items-center space-x-2 w-5 h-5">
                <a className='social' target="_blank" href="https://www.linkedin.com/in/rana-ahmed-988713282/">
                    <FaLinkedin className="" style={{ fontSize: '30px' }} />
                </a>
            </li>
            <li className="flex items-center space-x-2 w-5 h-5">
                <a className='social' target="_blank" href="https://github.com/RanaAhmed33">
                    <FaGithub className="" style={{ fontSize: '30px' }} />
                </a>
            </li>
        </ul>
    );
};

export default Social;