/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Screen.js
 * Description: The main 'screen' component which will hold Result and Buttons.
 *
 *
 */

import React from 'react';
import Result from './Result';
import Buttons from './Equation';
const screen = (props) => (
    <section className="screen">
        <Result>{props.result}</Result>
        <Buttons>{props.equation}</Buttons>
    </section>
);
export default screen;