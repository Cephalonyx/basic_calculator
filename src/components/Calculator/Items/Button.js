/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Button.js
 * Description: Individual buttons which make up the numberpad.
 */
import React from 'react';


const button = (props) => (

    <button className="button" onClick={props.onButtonPress}>

        {props.children}

    </button>
);

export default button;



//This code was attempting to allow a 'large' type button with specifier Button type="large"
/*
const button = (props) => {

    const classes = ['button'];
    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
        classes.push('button--' + props.type);
    return (
        <button className={classes.join(' ')}>
            {props.children}
        </button>
    );
}
*/


