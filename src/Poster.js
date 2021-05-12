import React, { useState, useEffect } from 'react'
import axios from './axios'
import list from './list'
import './poster.css'

function Poster() {
    const [show, setshow] = useState([]);


    useEffect(() => {
        async function fetchshow() {
            const request = await axios.get(list.Trending);
            // console.log(request);
            setshow(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchshow();
    }, []);



    const short = (str) => {
        return str?.length > 250 ? str.substr(0, 249) + "..." : str;
    }



    return (
        <div className="poster"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${show?.backdrop_path}")`,
                backgroundSize: "cover",
                bachgroundPosition: "center center",
            }}
        >
            <div className="poster_contents">

                <h1 className="poster_title">
                    {show?.name || show?.title || show?.original_name}
                </h1>

                <div>
                    <button className="poster_button">Play</button>
                    <button className="poster_button">My List</button>
                </div>

                <h1 className="poster_summary">
                    {short(show?.overview)}
                </h1>

            </div>

            <div className="poster_fadeBottom" />
        </div>
    )
}

export default Poster
