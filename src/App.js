import React,{ Component } from "react";
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css';
  
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots:users}));
        
       
    }
    onsearchChange = (event) => {
        this.setState({ searchfield : event.target.value})
        
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
            <h1 className='f2'>Robo Profile</h1>
            <Searchbox searchChange={this.onsearchChange}/>
            <Scroll>
             <CardList robots={filteredRobots}/>
             </Scroll>
            </div>
    
    );
        }
    }
     
export default App;