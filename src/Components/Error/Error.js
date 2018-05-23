import React from 'react';
import * as classes from './Error.scss';

const error = props => (
    <div className={classes.Error_Container}>
        <div className={classes.Error_Modal}>
            <div className={classes.Header}><i className="far fa-times-circle"></i></div>
            <div className={classes.Body}>
                <h1>Oh, snap!</h1>
                <h2>Something goes wrong :(</h2>
                <button onClick={props.close} type='button' className={classes.Close}>Close <i className="fas fa-times"></i></button>
            </div>
        </div>
    </div>
);

export default error;