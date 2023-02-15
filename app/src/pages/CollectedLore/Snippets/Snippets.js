import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Snippets.css'

function Snippets({ snippetListMap, selectedSnippetCategory, selectedSnippet, setSelectedSnippet, selectedSnippetTitle, setSelectedSnippetTitle }) {
    const [snippetButtons, setSnippetButtons] = useState([]);

    useEffect(() => {
        console.log(selectedSnippetCategory);
        createSnippetSelections(snippetListMap[selectedSnippetCategory]);
    }, [selectedSnippetCategory]);

    const createSnippetSelections = (snippets) => {
        if(snippets==null) return;
        let snippetSelections = [];
        let index = 0;
        for (const [snippetTitle, snippetData] of Object.entries(snippets)) {
            snippetSelections.push(
                <button key={index++} id={snippetTitle} className='snippetBtn' onClick={selectSnippet} style={{border: selectedSnippetTitle==snippetTitle? '1px solid black':'none'}}>
                    <img className='snippetImg' src={snippetData.img} alt={snippetTitle} />
                </button>
            )
        }
        setSnippetButtons(snippetSelections);
    }

    const selectSnippet = (e) => {
        setSelectedSnippet(<div>{snippetListMap[selectedSnippetCategory][e.target.id].excerpt}</div>);
        setSelectedSnippetTitle(e.target.id);
    }

    return (
        <div id='snippets'>
            <p>{selectedSnippetTitle}</p>
            {snippetButtons}
            <div>{selectedSnippet}</div>
        </div>
    );
}

export default Snippets;