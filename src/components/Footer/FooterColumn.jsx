import React from "react";

import FooterLink from "./FooterLink";

import { BrowserRouter } from "react-router-dom";

const FooterColumn = ({column}) => {
    return (
        <ul key={column.key} className = "ul ul-footer">
            <h2 className = "title title_footer">{column.footerTitle}</h2>
            <BrowserRouter>
                {column.footerLinks.map((link) => <FooterLink link={link} />)}
            </BrowserRouter>
        </ul>
    )
}

export default FooterColumn;