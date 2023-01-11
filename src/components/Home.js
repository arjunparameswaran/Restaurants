import React, { useState, useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'
import RestaurantCard from './RestaurantCard'

function Home() {

    const dispatch = useDispatch();

    const restaurantData = useSelector(state => state. restaurantReducer)

    const { restaurant } = restaurantData

    // const [hotels, setHotels] = useState([])

    // const fetchData = async() => {
    //     await fetch('/restaurants.json')
    //     .then((res) => res.json())
    //     .then((data) => setHotels(data.restaurants))
    // }

    useEffect(() => {
      dispatch(listRestaurants())    
    }, [])
    
    console.log("my data is",restaurant)

  return (
    <div>
          <Row>
              {restaurant.map((item) => (
                  <Col sm={12} md={8} lg={6} xl={3}>
                       <RestaurantCard item={item} />
                  </Col>
              ))}
          </Row>
    </div>
  )
}

export default Home

// lifecycle methods of a component
//  1. mounting     2. updating     3. unmounting
// class Based - componentDidMount (), componentDidUpdate (), componentWillUnmount()
// useEffect hook - is used to implement lifecycle methods inside a functional component , useEffect is used to provide side effect to a component.
