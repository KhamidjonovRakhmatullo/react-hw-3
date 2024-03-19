import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarComponent from './navbar'
import DestinationComponent from './navbar-items/destination'
import FlightsComponent from './navbar-items/flights'
import HotelsComponent from './navbar-items/hotels'
import BookingsComponent from './navbar-items/bookings'


const RouterComponent = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
        <Route path="/destination" element={<DestinationComponent/>}/>
        <Route path='/flights' element={<FlightsComponent/>}/>
        <Route path='/hotels' element={<HotelsComponent/>}/>
        <Route path='/bookings' element={<BookingsComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent