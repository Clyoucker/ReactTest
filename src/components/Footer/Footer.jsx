import React, { useState } from "react";

import FooterColumn from "./FooterColumn";

const Footer = ()=>{

    const footerNavs = useState([
        {key:"footerLegal",key2:"footer-column-info",title:"Legal Information",links:[
            {href:"/License-Agreement",text:"License Agreement"},
            {href:"/Privacy-Policy",text:"Privacy Policy"},
            {href:"/Terms",text:"Terms"},
            {href:"/API",text:"API"},
        ]},
        {key:"footerDifferent",key2:"footer-column-different",title:"Different",links:[
            {href:"/About",text:"About"},
            {href:"/Pricing",text:"Pricing"},
            {href:"/Docs",text:"Docs"},
            {href:"/Status",text:"Status"},
        ]},
        {key:"footerContacts",key2:"footer-column-contacts",title:"Contacts",links:[
            {href:"html",text:"Clyoucker@gmail.com"},
            {href:"html",text:"ThunderLite@gmail.com"},
            {href:"html",text:"Anthros@gmail.com"},
            {href:"html",text:"LiterTeams@gmail.com"},
        ]},
    ])


    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="content content_row">
                    <div className="footer-description">
                        <p>Внимание!</p>
                        <p>Сайт LiterTeams-Anime предоставляет бесплытный просмотр аниме сериалов. Если какой-то похожий на нас сайт требует от вас денежных вложений, то это мошенники!</p>
                        <p>В аниме может быть реклама, но это зависит уже не от нас, а от тех, кто выкладвывает их</p>
                        <p>Для поддержания сервиса, можете отправить</p>
                    </div>
                    <div className="footer-navigation">
                        {footerNavs[0].map(footerNav => <FooterColumn key={footerNav.key2} props={footerNav} />)}
                    </div>
                    <div className="footer-developers">
                        <div className="mini-developers">
                        </div>
                        <div className="icons">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer