import React, { Component } from 'react';
import Search from '../../Components/Search/Search';
import Avx from '../../hoc/Avx';
import Grid from '../../Components/Grid/Grid';

class Main extends Component {
    render() {
        return (
            <Avx>
                <Search />
                <Grid />
            </Avx>
        );
    }
}

export default Main;