import React from 'react';
import * as classes from './Spinner.scss';
import spin from '../../assets/spinner.gif';

const spinner = props => (
    <div className={classes.Container}>
        <img className={classes.Loading} src={spin} alt="loading" />
    </div>
);

export default spinner;