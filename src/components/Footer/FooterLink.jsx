import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({link}) => {
    return (
        <li className = "ul-footer__item">
            <Link to={link.href} target="_blank">{link.text}</Link>
        </li>
    )
}

export default FooterLink;