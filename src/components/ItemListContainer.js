import {React, useState, useEffect} from 'react';
import './ItemListContainer.css';
import Item from "./Item"
import charmander from '../img/itemImages/charmander.png'
import bulbasaur from '../img/itemImages/bulbasaur.png'
import squirtle from '../img/itemImages/squirtle.png'
import pikachu from '../img/itemImages/pikachu.png'

const ItemListContainer = () => {
    
    const listItems = [
        {
            id:"item1",
            name:"Charmander",
            description:"Soy un Charmander",
            stock:1,
            img: charmander
        },
        {
            id:"item2",
            name:"Bulbasaur",
            description:"Soy un Bulbasaur",
            stock:1,
            img: bulbasaur
        },
        {
            id:"item3",
            name:"Squirtle",
            description:"Soy un Squirtle",
            stock:1,
            img: squirtle
        },
        {
            id:"item4",
            name:"Pikachu",
            description:"Soy un Pikachu",
            stock:1,
            img: pikachu
        }
    ]

    return (
		<div class='itemListContainer'>
			{listItems.map((item) => {
                // console.log(item)
				return (
					<div key={item.id}>
						<Item data={item}/>
					</div>
				);
			})}
		</div>
	);
    
};
export default ItemListContainer;