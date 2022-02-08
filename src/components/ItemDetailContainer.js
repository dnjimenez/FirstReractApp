import {React, useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemDetail from "./ItemDetail"
import { Figure} from 'react-bootstrap';
import charmander from '../img/itemImages/charmander.png'
import bulbasaur from '../img/itemImages/bulbasaur.png'
import squirtle from '../img/itemImages/squirtle.png'
import pikachu from '../img/itemImages/pikachu.png'

const ItemDetailContainer = () => {

    function getItem(){
        return {
            id:"item4",
            name:"Pikachu",
            description:"Soy un Pikachu",
            largeDescription: "Los Pikachu acumulan ectricidad de forma natural. Los bosques donde habitan en grupos están en peligro constante de ser alcanzados por rayos.",
            stock:5,
            img: pikachu
        }
    }
    const promesa = new Promise((resolve) => {
        //code side
        setTimeout(() => {
            resolve(getItem())
        }, 2000)
    })
    

    const [stateItem, setStateItemItem] = useState({})
    useEffect(() => {
        promesa.then((response) => {
            setStateItemItem(response)
        })
    }, [])

    return (
		<div class='itemListContainer'>
            <ItemDetail data={stateItem}/>
		</div>
	);
    
};
export default ItemDetailContainer;