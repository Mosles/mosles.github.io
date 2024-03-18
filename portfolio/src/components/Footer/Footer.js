import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Footer.css'; 

const Footer = () => {
return (
<footer className="footer bg-dark text-white pt-3 pb-3 mt-auto">
<div className="container">
<div className="footer-content text-center">
<ul className="footer-list list-unstyled d-flex justify-content-center mb-2">
<li className="mx-2">
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faGithub} size="lg" />
</a>
</li>
<li className="mx-2">
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
<FontAwesomeIcon icon={faLinkedin} size="lg" />
</a>
</li>
<li className="mx-2">
<a href="mailto:your-email@example.com">
<FontAwesomeIcon icon={faEnvelope} size="lg" />
</a>
</li>
</ul>
<p className="mb-0">© 2024 by Hamodi Jaafary. Website created with React and Bootstrap.</p>
</div>
</div>
</footer>
);
};

export default Footer;
