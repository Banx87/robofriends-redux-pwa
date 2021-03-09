import React, { Component } from 'react'
import CardList from './Card/CardList'
import SearchBox from './Card/SearchBox'
import Scroll from './UI/Scroll.js'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header/Header'

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const {onSearchChange, robots, isPending} = this.props;
       
        return (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? <h1>Loading</h1> : 
                    <ErrorBoundary>
                        <CardList robots={this.filterRobots()} />
                    </ErrorBoundary>
                    }
                </Scroll>
            </div>
        )
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

export default MainPage;
