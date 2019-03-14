/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Button.js
 * Description: Row component for the numberpad.
 */

import React from 'react';
const numberrow = (props) => (
    <div className="numberrow">
        {props.children}
    </div>
);
export default numberrow;