import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const message = "Soy un ItemListContainer"

class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
        {/* className="App-header" */}
          <Navbar />
          {/* <ItemListContainer message= {message} /> */}
          <ItemDetailContainer message= {message} />
        </header>
      </div>
    );
  }
  
}

export default App;
