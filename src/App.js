import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from './components/Card/CardList'
import SearchBox from './components/Card/SearchBox'
import Scroll from './components/UI/Scroll.js'
//import ErrorBoundary from './components/ErrorBoundary'

import { setSearchfield, requestRobots } from './actions';
import Header from './components/Header/Header'


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchfield(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending, error } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Goofing around</h1> : (
                <div className="tc">
                    <Header/>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
