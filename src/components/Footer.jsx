import React from 'react';
import classes from '../style/Footer.module.css'
import logoru from './../img/lang__ru.png'
import logoen from './../img/lang__en.png'
const Footer = () => {
    return (
        // компонент футера
        <div className={classes.footer}>
            {/*будет добавлена документация и языки*/}
            <a className={classes.item} href="">Документация</a>
            <div className={classes.item}>
                <img src={logoru} className={classes.langimage} alt="ru"/>
                <img src={logoen} className={classes.langimage} alt="en"/>
            </div>
        </div>
    );
};

export default Footer;