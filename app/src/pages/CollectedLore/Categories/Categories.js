import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Categories.css'

function Categories({}) {
    let nav = useNavigate();
    const [option, setOption] = useState();

    useEffect(() => {
        
    }, []);

    const back = ()=>{
        nav('/loadingScreen');
    }

    return (
        <div id='categories'>
             <button onClick={back}>Back</button>
             <div>
                <div>Menu</div>
                <div>Lore Snippets</div>
             </div>
        </div>
    );
}

export default Categories;