import React from 'react';
import { Link } from "react-router-dom";
import './css/Footer.css';

const Footer = () => {
	return (
		<div id="footer">
			<div id="left">
        <a href="mailto:wildcircus2.0@gmail.com">wildcircus2.0@gmail.com</a>
        <p><Link to="/download">Liens téléchargeables</Link></p>
			</div>
			<div id="right">
        <p> Suivez nous sur les réseaux sociaux </p>
        
			</div>
		</div>
	);
}

export default Footer;