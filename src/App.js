import React, {Component, useContext} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

//Views
import Home from './views/HomeView'
import ItemListView from './views/ItemListView'
import ItemListView2 from './views/ItemListView2'
import ItemListView3 from './views/ItemListView3'
import ItemListView4 from './views/ItemListView4'
import ItemDetailView from './views/ItemDetailView'
import LocationView from './views/LocationView';
import TazasView from './views/TazasView';
import CartView from './views/CartView';
import ErrorPageView from './views/ErrorPageView';

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
            <Route path='/Shop2' element={<ItemListView2/>} />
            <Route path='/Shop3' element={<ItemListView3/>} />
            <Route path='/Shop4' element={<ItemListView4/>} />
            <Route path='/detail/:id' element={<ItemDetailView/>}/>
            <Route path='/Locacion' element={<LocationView/>}/>
            <Route path='Tazas' element={<TazasView/>}/>
            <Route path='/Cart' element={<CartView/>}/>
            <Route path='*' element={<ErrorPageView/>}/>
          </Routes>
        </ItemsProvider>
      </Router>
    );
  }
  
}

export default App;
