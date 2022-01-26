import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
        {/* className="App-header" */}
          <Navbar />
          <ItemListContainer />
        </header>
      </div>
    );
  }
  
}

export default App;
