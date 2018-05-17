import React from 'react';
import * as classes from './Search.scss';

const search = props => (
    <div className={classes.Search_cont}>
        <input className={classes.Search_bar} placeholder='Input city here...' type='text' />
        <button className={classes.Add_button} type='button'><i className="fas fa-plus"></i></button>
    </div>
);

export default search;