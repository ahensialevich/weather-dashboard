import React from 'react';
import * as classes from './Header.scss';
import * as logo from '../../assets/logo.png';

const header = props => (
    <header className={classes.Header}>
        <img onClick={props.moveToTop} src={logo} alt="logo" />
        <h1 onClick={props.moveToTop}>Weather.js</h1>
    </header>
);

export default header;