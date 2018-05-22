import React from 'react';
import * as classes from './Widget.scss';
import trash from '../../../assets/trash.ico';
import refresh from '../../../assets/refresh.ico';
import cloud from '../../../assets/cloud.ico';
import sun from '../../../assets/sun.png';

const widget = props => {
    const icon = <img className={classes.WeatherIcon} src={Number(props.cloudPercentage) >= 50 ? cloud : sun} alt='weather_icon' />
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                {icon}
                <div className={classes.CityName}>{props.header}</div>
                <img className={[classes.Refresh, classes.Selectable].join(' ')} onClick={() => props.onRefreshWeather(props.cityId)} src={refresh} alt='refresh' />
                <img className={classes.Selectable} onClick={() => props.onDeleteWidget(props.cityId)} src={trash} alt='delete' />
            </div>
            <div className={classes.Data}>Temperature: {props.temperature}°C</div>
            <div className={classes.Data}>Cloud percentage: {props.cloudPercentage}%</div>
            <div className={classes.Data}>Rain amount: {props.rainAmount}</div>
        </div >
    )
};

export default widget;