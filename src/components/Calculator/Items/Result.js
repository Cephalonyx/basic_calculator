/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Result.js
 * Description: This component will display the results of the calculator.
 *
 *
 */

import React from 'react';

const resultScreen = (props) => (
    <div className="result">
        {props.children}
    </div>
);
export default resultScreen;