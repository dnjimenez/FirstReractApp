import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import './ItemListContainer.css';
import Item from "./Item"
import { listItems } from '../constants/ItemConstants';

const ItemListContainer = () => {
    
    const promesa = new Promise((resolve) => {
        //code side
        setTimeout(() => {
            resolve(listItems)
        }, 2000)
    })
    

    const [items, setItems] = useState([])
    useEffect(() => {
        promesa.then((response) => {
            setItems(response)
        })
    }, [])

    

    return (
		<div class='itemListContainer'>
			{items.map((item) => {
                // console.log(item)
				return (
                    <Link className='centeredSubItemList noDecorationLink'to={`/detail/${item.id}`}>
						<Item data={item} key={item.id}/>
                    </Link>
					
				);
			})} 
		</div>
	);
    
};
export default ItemListContainer;