import React from 'react';

const Footer = () => {
    return (<footer className="footer text-center py-4 bg-gray-800 text-white md:py-4">
        © {new Date().getFullYear()} Omer Sharivker. All rights reserved.
    </footer>
)
   
};

export default Footer;