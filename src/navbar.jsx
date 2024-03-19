import React from 'react'
import {Link} from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px 100px",
        backgroundColor: "Highlight"
    }}>
    <Link to="/destination">
        <p style={{cursor: "pointer",}}>Destinations</p>
    </Link>
    <Link to="/hotels">
        <p style={{cursor: "pointer",}}>Hotels</p>
    </Link>
    <Link to="Flights">
        <p style={{cursor: "pointer",}}>Flights</p>
    </Link>
    <Link to="bookings">
        <p style={{cursor: "pointer",}}>Bookings</p>
    </Link>
    </div>
  )
}

export default NavbarComponent