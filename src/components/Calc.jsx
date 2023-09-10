import React, {createRef, useState} from 'react';
import classes from './../style/Calc.module.css'
const Calc = () => {

    const [input, setInput] = useState('Введите что-нибудь');
    const [output, setOutput] = useState('Здесь будет ответ!');
    const [accuracy, setAccuracy] = useState('Введите точность(кол-во знаков после запятой)');
    // используем хук useState для изменения значений и двусторонней связки


    // функция isnumeric проверяет является ли строка числом(также меняет , на .)
    const isNumeric = n => {
        n = n.replace(',','.')
        if (n === '0'){
            return true
        }
        return !!Number(n);
    };


    // функция checkacc проверяет входит ли точность в промежуток от 0 до 100(ограничения языка)
    const checkAcc = n => {
        if (Number(n) >= 0 && Number(n) <=100) {
            return true
        }
        return false
    }

    // функция по счету квадратного корня
    let calcFunc = () => {
        // обработка ошибки
        try {
            // проверка на число в первом инпуте
            if (isNumeric(input)){
                // проверка на пустоту во втором инпуте
                if (accuracy == ''){
                    let answer = Math.sqrt(input.replace(',', '.'));
                    // считаем ответ с полной точностью и выводим
                    setOutput(`Ваш ответ : ${answer}`);
                    // проверка на число во втором инпуте
                } else if (isNumeric(accuracy)) {
                    if (checkAcc(accuracy)) {
                        // проверка на 0 во втором инпуте
                        if (accuracy != '0'){
                            // считаем ответ с указанной точностью и выводим
                            let answer = Math.sqrt(input.replace(',', '.')).toFixed(accuracy).replace(/0*$/, "");
                            setOutput(`Ваш ответ : ${answer}`);
                        } else {
                            // считаем ответ с указанной точностью в 0 и выводим
                            let answer = Math.sqrt(input.replace(',', '.')).toFixed(0);
                            setOutput(`Ваш ответ : ${answer}`);
                        }
                        // далее сообщения о неправильно введенных данных
                    } else {
                        setOutput('Точность от 0 до 100!');
                    }
                } else {
                    setOutput('Некорректное значение!');
                }
            } else {
                setOutput('Некорректное значение!');
            }

        } catch(e) {
            setOutput('Ошибка!');
        }
    }


    return (
        <div className={classes.calc}>
            {/*вывод ответа и ошибок*/}
            <h2 className={classes.answer}>{output}</h2>
            {/*два инпута для числа и точности*/}
            <input
                type="text"
                className={classes.input}
                value={input}
                onChange={event => setInput(event.target.value)}
            />
            <input
               type="text"
               className={classes.input}
               value={accuracy}
               onChange={event => setAccuracy(event.target.value)}
            />
            <button onClick={calcFunc}>Вычислить</button>
        </div>
    );
};

export default Calc;


// else if (!input.value || !accuracy.value){
//     if (!accuracy.value) {
//         console.log(accuracy.value)
//         let answer = Math.sqrt(input.replace(',','.'));
//         setOutput(`Ваш ответ : ${answer}`);
//     } else {
//         setOutput(`Введите значение!`);
//     }
// } else {
//     setOutput(`Вы ввели некорректное значение!`);
// }