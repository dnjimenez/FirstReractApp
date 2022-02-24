import React, {Component, useContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

//Views
import Home from './views/HomeView'
import ItemListView from './views/ItemListView'
import ItemDetailView from './views/ItemDetailView'
import LocationView from './views/LocationView';
import TazasView from './views/TazasView';
import CartView from './views/CartView';

//Providers
import { ItemsProvider, ItemsContext } from './providers/ItemProvider'


const message = "Soy un ItemListContainer"

class App extends Component {

  // componentDidMount() {
  //   const addItem = useContext(ItemsContext);
  //   addItem()
  //   /* perform a side-effect at mount using the value of UserContext */
  // }

  render(){
    return (
      <Router>
        <ItemsProvider>
          <div className="App">
            <header>
            {/* className="App-header" */}
              <Navbar />
            </header>
          </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Shop' element={<ItemListView/>} />
            <Route path='/detail/:id' element={<ItemDetailView/>}/>
            <Route path='/Locacion' element={<LocationView/>}/>
            <Route path='Tazas' element={<TazasView/>}/>
            <Route path='/Cart' element={<CartView/>}/>
          </Routes>
        </ItemsProvider>
      </Router>
    );
  }
  
}

export default App;
