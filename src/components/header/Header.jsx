"use client";
import { useState } from "react";
import Styles from "./Styles.module.css";
// components
import Navigation from "../navigation/Navigation";
// icons
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    return (
        <header className={Styles.header} >
            <h1 className={Styles.title}>MF</h1>
            <Navigation />
            { isDarkMode ?
                <IoMdSunny className="text-[6vh] text-[var(--text)] hover:text-[var(--text-color-primary)] animate-pulse transition-colors cursor-pointer"
                    onClick={() => {
                        setIsDarkMode(!isDarkMode); document.body.classList.toggle("dark-mode")}
                    }
                /> : 
                <BsMoonStarsFill className="text-[4.5vh] text-[var(--text)] hover:text-[var(--text-color-primary)] animate-pulse transition-colors cursor-pointer" 
                    onClick={() => {
                        setIsDarkMode(!isDarkMode); document.body.classList.toggle("dark-mode")}
                    }
                />
            }
        </header>
    );
};  

export default Header;