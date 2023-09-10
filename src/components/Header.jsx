import React from 'react';
import classes from "../style/Header.module.css";
import logo from "./../img/squarelogo.png"
const Header = () => {
    return (
        // компонент хедера
        <div className={classes.header}>
            <img className={classes.logoimg} src={logo} alt=""/>
            <h1>Калькулятор квадратных корней</h1>
            <h1>v1.0</h1>
            {/*версия проекта*/}
        </div>
    );
};

export default Header;