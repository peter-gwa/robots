import React, { Component } from 'react';
import CardList from './CardList';
//import { robots } from './robots';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';



class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()).then(users => this.setState({robots: users}));
  }


  render(){
    const filteredRobots = this.state.robots.filter(
      r => {
        return (
          r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        )
      }
    )
    return (
      <div className='tc'>
        <div className='bg-gray'>
          <NavBar />
          <h1>Robofriends</h1>
    
          <SearchBox SearchChange = { this.OnSearchChange }/>
        </div>
  
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
 
}

export default App;