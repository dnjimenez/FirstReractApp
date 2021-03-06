import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import './HomeItemContainer.css'
import HomeItem from "./HomeItem"

import Item from '../Item';

//Firebase
import { collection, query, where, getDocs, DocumentSnapshot } from "firebase/firestore"; //firestore connection
import { db } from '../../firebase/firebaseConfig'//firebase db

const HomeItemContainer = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async() => {
            const q = query(collection(db, "items"), where("size", "==", 3));
            const docs = [];
            const querySnapshot = await getDocs(q);
            // console.log("QueryData: ",querySnapshot)
            querySnapshot.forEach((doc) =>{
                // console.log("data:",doc.data(),"ID:", doc.id)
                docs.push({...doc.data(),id:doc.id})
            })
            // console.log(docs)

            setItems(docs.sort(sortFunction))//ordenamiento por numero de pokedex
        };
        getItems()
    }, [])

    const sortFunction = (a,b) =>{
        if (a.pokedexNumber > b.pokedexNumber) {
            return 1;
        }
        if (a.pokedexNumber < b.pokedexNumber) {
            return -1;
        }
        return 0;
    }

    return <div class='homeItemContainer'>
        {items.map((item) => {
                // console.log(item)
				return (
                    <Link className='centeredSubItemList noDecorationLink'to={`/detail/${item.id}`}>
						<Item data={item} key={item.id}/>
                    </Link>
					
				);
			})} 
        </div>
};
export default HomeItemContainer;