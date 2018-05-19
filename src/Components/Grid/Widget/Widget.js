import React from 'react';
import * as classes from './Widget.scss';

const widget = props => {
    const icon = Number(props.cloudPercentage) >= 50 ? <div className={[classes.Item, classes.Cloud].join(' ')}><i className="fas fa-cloud"></i></div> :
        <div className={[classes.Item, classes.Sun].join(' ')}><i className="far fa-sun"></i></div>;
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                {icon}
                <div className={classes.Item}>{props.header}</div>
                <div onClick={() => props.onRefreshWeather(props.cityId)} className={[classes.Item, classes.Refresh].join(' ')}><i className="fas fa-sync"></i></div>
                <div onClick={() => props.onDeleteWidget(props.cityId)} className={[classes.Item, classes.Trash].join(' ')}><i className="fas fa-trash-alt"></i></div>
            </div>
            <div className={classes.Data}>Temp. {props.temperature}°C</div>
            <div className={classes.Data}>Cloud perc. {props.cloudPercentage}%</div>
            <div className={classes.Data}>Rain am. {props.rainAmount}</div>
        </div >
    )
};

export default widget;