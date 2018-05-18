import React from 'react';
import * as classes from './Widget.scss';

const widget = props => (
    <div className={classes.Container}>
        <div className={classes.Header}>
            <div className={[classes.Item, classes.Sun].join(' ')}><i className="far fa-sun"></i></div>
            <div className={[classes.Item, classes.Cityname].join(' ')}>{props.header}</div>
            <div className={[classes.Item, classes.Refresh].join(' ')}><i className="fas fa-sync"></i></div>
            <div className={[classes.Item, classes.Trash].join(' ')}><i className="fas fa-trash-alt"></i></div>
        </div>
        <div className={classes.Data}>Temp. {props.temperature}°C</div>
        <div className={classes.Data}>Cloud perc. {props.cloudPercentage}%</div>
        <div className={classes.Data}>Rain am. {props.rainAmount}</div>
    </div >
);

export default widget;