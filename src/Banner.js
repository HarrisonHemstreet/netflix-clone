import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
          );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center',
            }}
            >
            <div className='banner__contents'>
                {/* title */}
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{movie?.overview}</h1>
            </div>
            {/* background img for the header */}
            {/* title */}
            {/* div 2 buttons, play and my list */}
            {/* description */}
        </header>
    )
}

export default Banner