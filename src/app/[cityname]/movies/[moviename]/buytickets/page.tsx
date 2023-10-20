"use client"
import React from 'react'
import DatePicker from "react-horizontal-datepicker";
import './BuyTicketsPage.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const page = () => {
  
  const movie = {
    moviename: 'Jawan',
    //screen: '4Dx',
    date: new Date(),
    language: 'Hindi',
    type: 'Action/Thriller',
    screens:[
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      },
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      },
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      }
    ]
  }

  return (
    <div className='buytickets'>
      <div className="s1">

      </div>
      <div className="screens">
        <div className="head">
          <h1>{movie.moviename}-{movie.language}</h1>
          <h3>{movie.type}</h3>
        </div>
        
      </div>
    </div>
  )
}

export default page