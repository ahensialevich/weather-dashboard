import React from 'react';
import * as classes from './Spinner.scss';
import loading from '../../assets/loading-gear.svg';

const spinner = props => (
    <div className={classes.Spinner_Container}>
        <div className={classes.Loading}>
            <img className={classes.Animation} src={loading} alt="loading" />
        </div>
    </div>
);

export default spinner;