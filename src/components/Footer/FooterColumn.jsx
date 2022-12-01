import React from "react";

import FooterLink from "./FooterLink";
const FooterColumn = ({props}) => {
    return (
        <ul key={props.key} className = "ul ul-footer">
            <h2 className = "title footer_title">{props.title}</h2>
            {props.links.map(link => <FooterLink key={link.text} link={link} />)}
        </ul>
    )
}

export default FooterColumn;