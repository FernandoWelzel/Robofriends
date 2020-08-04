import React from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import { robots } from '../robots.js'
import './app.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            Searchfield: '' 
        }
    }

    OnSearchChange = (event) => {
        this.setState({ Searchfield: event.target.value });
    }

    // componentDidMount() {
    //     fetch('http://jsonplaceholder.typicode.com/users').then(jsonFile => {
    //         return jsonFile.json();
    //     }).then(users => {
    //         this.setState({ robots: users })
    //     })
    // }

    render() {
        const filteredArray = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        
        return (
            <div className='tc'>
                <h1 height='10vh'>RoboFriends</h1>
                <SearchBox SearchChange={this.OnSearchChange}/>
                <Scroll>
                    <CardList robots={ filteredArray }></CardList>
                </Scroll>
            </div>
        );
    }
}

export default App;