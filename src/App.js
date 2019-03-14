/**
 * @author Jacob Ramsaywak
 * @version March 14, 2019
 *
 * Filename: App.js
 * Description: Main React App file
 *
 *
 */

import React from 'react';
import './styles/styles.css';
import Calculator from './components/Calculator/Calculator';




const app = () => (
    <div className="app">
      <Calculator />
    </div>


);
export default app;