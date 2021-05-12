import React, { useState, useEffect } from 'react'
import './header.css'

function Header() {
    const [transparent, setTransparent] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                setTransparent(false);
            } else setTransparent(true);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (
        <div className={`head ${!transparent && "head__black"}`}>
            <img className="head__logo" alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"></img>
            <h1 className="creator">--- By Maneesh ---</h1>
        </div>
    )
}

export default Header
