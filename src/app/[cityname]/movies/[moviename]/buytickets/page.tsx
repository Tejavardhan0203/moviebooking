"use client"
import React from 'react'

import './BuyTicketsPage.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const page = () => {
  const pathname = usePathname()
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
        <div className="head">
            <h1>{movie.moviename}-{movie.language}</h1>
            <h3>{movie.type}</h3>
        </div>
      </div>
      <div className="screens">
        {
          movie.screens.map((screen,index)=>{
            return(
              <div className="screen" key={index}>
                <div>
                  <h2>{screen.name}</h2>
                  <h3>{screen.location}</h3>
                </div>
                <Link
                        href={`${pathname}/${screen.name}`}
                        className='linkstylenone'
                        >
                        <button className='theme_btn1 linkstylenone'>Select</button>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page