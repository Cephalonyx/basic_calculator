/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Equation.js
 * Description: This component will contain the math equation that is being computed.
 *
 *
 */

import React from 'react';
const equation = (props) => (
    <div className="equation">
        {props.children}
    </div>
);
export default equation;