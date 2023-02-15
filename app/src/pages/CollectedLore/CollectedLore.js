import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CollectedLore.css'
import Snippets from "./Snippets/Snippets";

let snippetListMap = {
    'Prism City 4': {
        'Wanderlust Cafe': { img: 'tulip.png', excerpt: 'Tea Master Raze\'s abode. Hub of gossip, and refuge for the elderly and neutral civilians.' },
        'Factory outskirts': { img: 'tulip.png', excerpt: 'Former networking hub used to communicate with the other Prism City\'s. Lumi\'s birthplace, currently abandoned and in decay. Used only for smuggling pathways and temporary hideouts nowadays.' },
    },
    'Lunar Lane 248': {
        'Railyard': { img: 'tulip.png', excerpt: 'Recently re-excavated just outside Prism City 4, or "Prisma" as the locals say. It\'s existence was discovered only 16 years ago, when whyld refugees arrived at it on a train from the Unknown Area. It was cordoned off as curse tech for a time, until scavengers realized that the relics contained rare smelting metals that were valuable for repairing Prima\'s space shield.' },
        'Valley of Gates': { img: 'tulip.png', excerpt: 'Large cavern within Astra that holds a single rail line that runs right up to a wall with ominous guardian statues. The name is ironic, considering there is only one rail line, and ostensibly one gate in the cavern. Wonder if there were plans to make more rail lines?' },
    }
}

let snippetCategoryButtons = [];
let index = 0;
for (let snippetCategory of Object.keys(snippetListMap)) {
    if (snippetCategory == Object.keys(snippetListMap)[0]) snippetCategoryButtons.push(
        <button id={snippetCategory} className='snippetCategoryButton' key={index++}>{snippetCategory}</button>
    );
    else snippetCategoryButtons.push(
        <button id={snippetCategory} className='snippetCategoryButton' key={index++}>{snippetCategory}</button>
    );
}

function CollectedLore({ }) {
    let nav = useNavigate();
    const [selectedSnippetCategory, setSelectedSnippetCategory] = useState('Prism City 4');
    const [selectedSnippet, setSelectedSnippet] = useState('');
    const [selectedSnippetTitle, setSelectedSnippetTitle] = useState('');

    useEffect(() => {
        document.querySelector('.snippetCategoryButton').disabled = true;
        for (const btn of document.querySelectorAll('.snippetCategoryButton')) {
            btn.onclick=handleClick;
        }
        setSelectedSnippet(Object.values(snippetListMap[Object.keys(snippetListMap)[0]])[0].excerpt);
        console.log(Object.keys(snippetListMap[Object.keys(snippetListMap)[0]])[0]);
        setSelectedSnippetTitle(Object.keys(snippetListMap[Object.keys(snippetListMap)[0]])[0]);
    }, []);

    const back = () => {
        nav('/loadingScreen');
    }

    const handleClick = (e) => {
        setSelectedSnippetCategory(e.target.id);
        setSelectedSnippet(Object.values(snippetListMap[e.target.id])[0].excerpt);
        setSelectedSnippetTitle(Object.keys(snippetListMap[e.target.id])[0]);
        for (const btn of document.querySelectorAll('.snippetCategoryButton')) {
            if (btn.id != e.target.id) btn.disabled = false;
        }
        e.target.disabled = true;
    }

    return (
        <div id='collectedLore'>
            <button onClick={back}>Back</button>
            <div id='loreDiv'>
                <div id='snippetCategoryButtonsDiv'>{snippetCategoryButtons}</div>
                <Snippets snippetListMap={snippetListMap} selectedSnippetCategory={selectedSnippetCategory} selectedSnippet={selectedSnippet} setSelectedSnippet={setSelectedSnippet} selectedSnippetTitle={selectedSnippetTitle} setSelectedSnippetTitle={setSelectedSnippetTitle}/>
            </div>
        </div>
    );
}

export default CollectedLore;