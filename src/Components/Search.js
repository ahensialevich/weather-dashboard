import React from 'react';
import * as classes from './Search.scss';
import Autosuggest from 'react-autosuggest';


const search = props => (
    <div className={classes.Search_cont}>
        <input onKeyUp={props.onKeyup} className={classes.Search_bar} placeholder='Input city here...' type='text' />
        <Autosuggest suggestions={props.suggestions} />
        <button className={classes.Add_button} type='button'><i className="fas fa-plus"></i></button>
    </div>
);

export default search;