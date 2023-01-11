import React from 'react'
import {Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestaurantCard({ item }) {
    console.log(item)
  return (
    <Link style={{textDecoration:'none' }} to={`restaurantdetails/${item.id}`}>
        <Card className="my-3 p-3 rounded cards shadow">
            <Card.Img variant="top" src= {item.photograph} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    <p>Cuisine:  {item.cuisine_type}</p>
                </Card.Text>
                <Card.Text>
                    <p>{item.neighborhood}</p> 
                </Card.Text>
        </Card.Body>
        </Card>
    </Link>
  )
}

export default RestaurantCard