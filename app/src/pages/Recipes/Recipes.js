import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Recipes.css'

function Recipes({}) {
    let nav = useNavigate();

    useEffect(() => {
        
    }, []);

    const back = ()=>{
        nav('/loadingScreen');
    }
    return (
        <div id='recipes'>
            <button onClick={back}>Back</button>
        </div>
    );
}

export default Recipes;