import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../../Components/Search';

class Main extends Component {
    state = {
        suggestions: []
    }
    onKeyupHandler = event => {
        const propositions = this.props.cities.filter(x => x.name.startsWith(event.target.value));
        this.setState({ suggestions: [...propositions.name] });
    }

    render() {
        return (
            <Search onKeyup={event => this.onKeyupHandler(event)} suggestions={this.state.suggestions} />
        );
    }
}

const mapStateToProps = state => ({
    cities: state.cities
});

export default connect(mapStateToProps)(Main);