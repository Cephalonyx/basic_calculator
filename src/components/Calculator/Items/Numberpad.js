/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Button.js
 * Description: Whole numberpad which will hold numberrow and button components
 */
import React from 'react';
import Numberrow from './Numberrow';
import Button from './Button';
const numberpad = (props) => (
    <section className="numberpad">

        {/* row 1 of keypad */}
        <Numberrow >
            <Button onButtonPress={props.onButtonPress}>C</Button>
            <Button onButtonPress={props.onButtonPress}>&lArr;</Button>
            <Button onButtonPress={props.onButtonPress}>%</Button>
            <Button onButtonPress={props.onButtonPress}>/</Button>
        </Numberrow>

        {/* row 2 of keypad */}
        <Numberrow >
            <Button onButtonPress={props.onButtonPress}>7</Button>
            <Button onButtonPress={props.onButtonPress}>8</Button>
            <Button onButtonPress={props.onButtonPress}>9</Button>
            <Button onButtonPress={props.onButtonPress}>*</Button>
        </Numberrow>

        {/* row 3 of keypad */}
        <Numberrow >
            <Button onButtonPress={props.onButtonPress}>4</Button>
            <Button onButtonPress={props.onButtonPress}>5</Button>
            <Button onButtonPress={props.onButtonPress}>6</Button>
            <Button onButtonPress={props.onButtonPress}>-</Button>
        </Numberrow>

        {/* row 4 of keypad */}
        <Numberrow >
            <Button onButtonPress={props.onButtonPress}>1</Button>
            <Button onButtonPress={props.onButtonPress}>2</Button>
            <Button onButtonPress={props.onButtonPress}>3</Button>
            <Button onButtonPress={props.onButtonPress}>+</Button>
        </Numberrow>

        {/* row 5 of keypad */}
        <Numberrow >
            <Button /*onButtonPress={props.onButtonPress}*/><span role="img" aria-label="Pineapple">🍍</span></Button>
            <Button onButtonPress={props.onButtonPress}>0</Button>
            <Button onButtonPress={props.onButtonPress}>.</Button>
            <Button onButtonPress={props.onButtonPress}>=</Button>
        </Numberrow>
    </section>
);
export default numberpad;