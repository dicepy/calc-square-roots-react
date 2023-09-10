import React from 'react';
import classes from "../style/Main.module.css";
import Calc from "./Calc";
const Main = () => {
    return (
        <div className={classes.Main}>
            {/*внутрь основного обертки app кладем еще одну обертку main, в которой будет меняться контент(пока только калькулятор-calc)*/}
           <Calc />
        </div>
    );
};

export default Main;