import React,{useState,useEffect} from 'react';
import { icons } from 'react-icons';
import './header.css';
import {FaMoon} from 'react-icons/fa';

const Theme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
        };
        useEffect(() => {
            document.body.className = theme;
            }, [theme]);
  return (
    <div className={`Theme ${theme}`}>
    <FaMoon className='moon' onClick={toggleTheme} size="2.4rem" style={{padding:"7px"}} />
    
    </div>
  );
}

export default Theme;