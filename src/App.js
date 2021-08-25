import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchfield, requestRobots } from './actions';

import MainPage from './components/MainPage'


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        // isPending: true,
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
      render() {
        return <MainPage {...this.props}/>
        
        // return isPending ?
        //     <h1>Goofing around</h1> : (
        //         <div className="tc">
        //             <Header/>
        //             <SearchBox searchChange={onSearchChange} />
        //             <Scroll>
        //                 <CardList robots={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
