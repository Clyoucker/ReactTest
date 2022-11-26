import React, { useState } from "react";

import FooterColumn from "./FooterColumn";

const Footer = ()=>{

    const footerNavs = useState([
        {key:"footerLegal",title:"Legal information",links:[
            {href:"html",text:"License Agreement"},
            {href:"html",text:"Privacy Policy"},
            {href:"html",text:"Terms"},
            {href:"html",text:"API"},
        ]},
        {key:"footerDifferent",title:"different",links:[
            {href:"html",text:"About"},
            {href:"html",text:"Pricing"},
            {href:"html",text:"Docs"},
            {href:"html",text:"Status"},
        ]},
        {key:"footerContacts",title:"Contacts",links:[
            {href:"html",text:"Clyoucker@gmail.com"},
            {href:"html",text:"ThunderLite@gmail.com"},
            {href:"html",text:"Anthros@gmail.com"},
            {href:"html",text:"LiterTeams@gmail.com"},
        ]},
    ])


    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="container footer_container">
                    <div className="footer-body-desktop">
                        <div className="footer-text">
                            <p>Внимание!</p>
                            <p>Сайт создавался как эксперементальный проект, из-за чего тут нет какой-либо рекламы, благодаря которой, сайт могбы окупать хостинг, а потому,вся надежда на создателей и тех, кто оформляет покупку LSC.</p>
                            <p>На деле, Сайт является смесью Vk, Deviant Art, MangaLib, Coub и GitHub.</p>
                            <p>Чтобы не встревать в неприятный ситуации, прошу вас прочитать лицензионное соглашение, в котором описаны все правила поведения на сайте, разрешённый контент, конденфициальность и данные ваших действий на сайте, которые мы собираем.</p>
                            <p>В случае каких-либо чрезвучайных проблем, обращайтесь на эту почту: LiteTeams@gmail.com</p>
                        </div>
                        <div className="footer-navigation">
                        {footerNavs.map(footerNav => <FooterColumn column={footerNav} />)}
                        </div>
                        <div className="footer-developers">
                            <div className="mini-developers">
                            </div>
                            <div className="icons">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer