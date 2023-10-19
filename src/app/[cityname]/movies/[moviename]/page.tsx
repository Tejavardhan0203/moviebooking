"use client"
import React from 'react'
import { BsFillStarFill, BsShare } from 'react-icons/bs'
import './MoviePage.css'
import { MovieCarousel } from '@/components/MovieCarousel/MovieCarousel'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard'


const MoviePage = () => {

    const movie = {
        wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg",
        portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
        title: "Jawan",
        rating: 8.5,
        halls:[
            "2D",
            "3D"
        ],
        languages:[
            "English",
            "Hindi",
            "Telugu"
        ],
        duration: "2h15mins",
        type: "action/thriller",
        releasedate: "sep3, 2023",

        cast:[
            {
                _id: "1",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            },
            {
                _id: "1",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            },
            {
                _id: "1",
                name: "Shah Rukh Khan",
                role: "Actor",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            }
        ],
        crew:[
            {
                _id: "1",
                name: "Atlee",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            },
            {
                _id: "1",
                name: "Atlee",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            },
            {
                _id: "1",
                name: "Atlee",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg"
            }
        ],
        about:"Skanda is a movie starring Ram Pothineni and Sreeleela in prominent roles. It is directed by Boyapati Sreenu and produced by Srinivasaa Chitturi."

    }

  return (
    <div className='moviepage'>
        <div className='c1' style={{
            backgroundImage: `url(${movie.wideposter})`
        }}>
            <div className="c11">
                <div className="left">
                    <div className="movieposter" style={{
                            backgroundImage: `url(${movie.portraitposter})`
                        }}>
                        <p>In cinemas</p>
                    </div>
                    <div className="moviedetails">
                        <p className="title">
                            {movie.title}
                        </p>
                        <p className='rating'>
                            <BsFillStarFill className='star' />&nbsp;&nbsp;
                            {movie.rating}/10
                        </p>
                        <div className="halls_languages">
                            <p className="halls">
                                {
                                    movie.halls.map((hall,index) => {
                                        return (
                                            <span key={index}>
                                                {movie.halls}
                                            </span>
                                        )
                                    })
                                }
                            </p>
                            <p className="languages">
                                {
                                    movie.halls.map((language,index) => {
                                        return (
                                            <span key={index}>
                                                {movie.languages}
                                            </span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                        <p className='duration_type_releasedat'>
                                <span className='duration'>
                                    {movie.duration}
                                </span>
                                <span>•</span>
                                <span className='type'>
                                    {movie.type}
                                </span>
                                <span>•</span>
                                <span className='releasedat'>
                                    {movie.releasedate}
                                </span> 
                        </p>
                        <button className='bookbtn'>Book Tickets</button>
                    </div>
                </div>
                <div className='right'>
                    <button className='sharebtn'><BsShare className='shareicon' />Share</button>
                </div>
            </div>
            
        </div>
        <div className='c2'>
            <h1>About the Movie</h1>
            <p>{movie.about}</p>
            <div className="line"></div>
            <h1>Cast</h1>
            <div className="circlecardslider">
            <Swiper
                                    slidesPerView={1}
                                    spaceBetween={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 1,
                                            spaceBetween: 2,
                                        },
                                        '@0.75': {
                                            slidesPerView: 2,
                                            spaceBetween: 2,
                                        },
                                        '@1.00': {
                                            slidesPerView: 3,
                                            spaceBetween: 2,
                                        },
                                        '@1.50': {
                                            slidesPerView: 6,
                                            spaceBetween: 2,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        movie.cast.map((cast,index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <CelebCard  {...cast} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
            </Swiper>
            </div>
            <div className="line"></div>
            <h1>Crew</h1>
            <div className="circlecardslider">
            <Swiper
                                    slidesPerView={1}
                                    spaceBetween={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        '@0.00': {
                                            slidesPerView: 1,
                                            spaceBetween: 2,
                                        },
                                        '@0.75': {
                                            slidesPerView: 2,
                                            spaceBetween: 2,
                                        },
                                        '@1.00': {
                                            slidesPerView: 3,
                                            spaceBetween: 2,
                                        },
                                        '@1.50': {
                                            slidesPerView: 6,
                                            spaceBetween: 2,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        movie.crew.map((crew,index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <CelebCard  {...crew} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
            </Swiper>
            </div>
            <div className="line"></div>
            <h1>You might also like</h1>
            <MovieCarousel/>
        </div>
    </div>
  )
}

export default MoviePage