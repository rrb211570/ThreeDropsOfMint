import React, { useEffect, useState } from "react";
import './Load.css'

function Load({loadRecords}) {
    const [recordSelections, setRecordSelections] = useState([]);
    useEffect(() => {
        // fetch loadRecords from localStorage/server
    }, []);
    return (
        <div id='home'>
            <button>New Game</button>
            <button>Load</button>
            <button>Settings</button>
        </div>
    );
}

export default Load;