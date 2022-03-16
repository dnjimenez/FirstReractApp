import { useContext, useEffect, useRef, useState } from 'react';

import './ItemSlider.css'
import Item from "../Item"

import { Link } from 'react-router-dom';

//Firebase
import { collection, query, where, getDocs, DocumentSnapshot } from "firebase/firestore"; //firestore connection
import { db } from '../../firebase/firebaseConfig'//firebase db

const ItemSlider = () => {
    const itemsRef = useRef([]);
    // you can access the elements with itemsRef.current[n]

    //TEST ITEMS
    const [items, setItems] = useState([])

    const sortFunction = (a,b) =>{
        if (a.pokedexNumber > b.pokedexNumber) {
            return 1;
        }
        if (a.pokedexNumber < b.pokedexNumber) {
            return -1;
        }
        return 0;
    }
    //TEST ITEMS

    useEffect(() => {
        //TEST ITEMS
        const getItems = async() => {
            const q = query(collection(db, "items"));
            // const q = query(collection(db, "items"), where("name", "==", "Charmander"));
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
        //TEST ITEMS

        itemsRef.current = itemsRef.current.slice(0, items.length);
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    //Elements Ref
    const slideRightRef = useRef(null)
    const slideLeftRef = useRef(null)
    const sliderRef = useRef(null)
    const containerRef = useRef(null)

    const [sliderWidthState, setSliderWidth] = useState(0)

    //window size State
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    //valuesRef
    var currentPosition = useRef(0);
    var currentMargin = useRef(0);
    var slidesPerPage = useRef(4);
    
    //Slider Functions
    
    const setMargin = () =>{
        slidesPerPage.current = windowSize.width <= 1100 ? windowSize.width <= 900 ? windowSize.width <= 550 ? 1 : 2 : 3 : 4;
        currentMargin.current = - currentPosition.current * (100 / slidesPerPage.current);
        sliderRef.current.style.marginLeft = currentMargin.current + '%';
    }

    const slideRight = () => {
        setMargin()

        var slidesCount=items.length-slidesPerPage.current
        if (currentPosition.current != 0) {
            sliderRef.current.style.marginLeft = currentMargin.current + (100 / slidesPerPage.current) + '%';
            currentMargin.current += (100 / slidesPerPage.current);
            currentPosition.current--;
        };
        if (currentPosition.current === 0) {
            slideLeftRef.current.classList.add('inactive');
        }
        if (currentPosition.current < slidesCount) {
            slideRightRef.current.classList.remove('inactive');
        }
    };
    
    const slideLeft = () => {
        setMargin()

        var slidesCount=items.length-slidesPerPage.current
        // console.log(currentPosition.current)
        console.log("slidesCount:", slidesCount)
        if (currentPosition.current != slidesCount) {
            sliderRef.current.style.marginLeft = currentMargin.current - (100 / slidesPerPage.current) + '%';
            currentMargin.current -= (100 / slidesPerPage.current);
            currentPosition.current++;
        };
        if (currentPosition.current == slidesCount) {
            slideRightRef.current.classList.add('inactive');
        }
        if (currentPosition.current > 0) {
            slideLeftRef.current.classList.remove('inactive');
        }
    };
    

    return <div id="container">
        <div id="slider-container">
            <span onClick={slideRight} class="btn" ref={slideLeftRef}></span>
            <div id="slider" ref={sliderRef}>
                {/* {items.map((item, i) => (
            <div 
                key={i} 
                ref={el => itemsRef.current[i] = el} 
                class="slide">
                <span>{item}</span>
            </div>
            ))
            } */}
            {items.map((item) => {
                // console.log(item)
				return (
                    <Link className='centeredSubItemList noDecorationLink slide'to={`/detail/${item.id}`}>
						<Item data={item} key={item.id}/>
                    </Link>
					
				);
			})} 
            </div>
            <span onClick={slideLeft} ref={slideRightRef} class="btn"></span>
        </div>
    </div>
    };
export default ItemSlider;