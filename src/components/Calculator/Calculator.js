/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: Calculator.js
 * Description: This component will be our 'main' calculator component. It will be made of a series of calculator items.
 *
 *
 */
import React from 'react';
import Screen from './Items/Screen';
import Numberpad from './Items/Numberpad';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    };

    //Start of Calculator Events
    //I would redo all of this logic if I had to do it again, and make it way prettier.
    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear(); //If C is pressed, reset state.
        //else if (pressedButton===👽) this.setState("Why did you press the Alien?"); //Sadly you can't check equality on emojis.
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton; //If pressed button is 0 through 9 or decimal, add them to equation
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' '; //If pressed button is other, add to equation, add space between
        else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation); //Perform the actual math equation
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result});
            } catch (error) {
                alert('Error! You entered an invalid equation. Resetting.');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        this.setState({equation: equation});
    }
    clear() {
        this.setState({equation: '', result: 0});
    }

    //End of calculator events
    render() {
        return (
            <main className="calculator">
                <Screen equation={this.state.equation} result={this.state.result} /> {/* Screen will take on equation and result values*/}
                <Numberpad onButtonPress={this.onButtonPress} />
            </main>
        );
    }
}

export default Calculator;

