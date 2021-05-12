import React, { useState, useEffect } from 'react'
import axios from './axios'
import './show.css';




const Row = ({ genre, fetchUrl, first, last }) => {
    const [shows, setShows] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setShows(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);

    // console.log(show)



    return (
        <div className={`show ${first && `first`}  ${last && `last`}`}>
            <h1>{genre}</h1>

            <div className="slides">
                {shows.map(show => (
                    <img
                        key={show.id}
                        className={`show_poster ${first && "show_posterLarge"} `}
                        src={'https://image.tmdb.org/t/p/original/' + show.poster_path}
                        alt={show.name} />
                ))}
            </div>

        </div>
    )
}

export default Row;
