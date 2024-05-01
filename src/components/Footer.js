import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
        <center>
        <footer className="footer">
            <div className="container">
                <center>
                <div className="row">
                    <div className="col-md-6">
                        <h4>Contact Us</h4>
                        <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                        <ul className="contact-info">
                            <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Address: 123 Main St, City, Country</li>
                            <li>
                                <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </li>         
                            <li>
                                <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </center>
            </div>
        </footer>
        </center>
        </>
    );
}

export default Footer;
