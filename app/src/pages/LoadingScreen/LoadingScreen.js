import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

function LoadingScreen() {
    let nav = useNavigate();
    const [loadRecords, setLoadRecords] = useState([]);

    useEffect(() => {

    }, []);

    const newGame = () => {
        // initialize new loadRecord, and store in loadRecords
        nav('/game');
    }

    const revealLoadRecords = () => {

    }

    const collectedLore = () => {
        nav('/collectedLore');
    }

    const recipes = () => {
        // initialize new loadRecord, and store in loadRecords
        nav('/recipes');
    }

    const revealSettings = () => {

    }

    const logout = ()=>{
        nav('/');
    }

    return (
        <div id='loadingScreen'>
            <div id='loadingScreen__options'>
                <p id='loadingScreen__title'>Three Drops of Mint</p>
                <button className='loadingScreen__option' onClick={newGame}>New Game</button>
                <button className='loadingScreen__option' onClick={revealLoadRecords}>Load</button>
                <button className='loadingScreen__option' onClick={collectedLore}>Collected Lore</button>
                <button className='loadingScreen__option' onClick={recipes}>Recipes</button>
                <button className='loadingScreen__option' onClick={revealSettings}>Settings</button>
            </div>
            <button className='loadingScreen__logout' onClick={logout}>Log out</button>
        </div>
    );
}

export default LoadingScreen;