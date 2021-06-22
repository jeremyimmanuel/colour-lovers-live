import React from 'react';

const ColorCard = (props) => {
    return (
        <div className="flex flex-row justify-between w-1/2">
            <div className="flex flex-col items-start">
                <h2>{props.title}</h2>
                <caption>by {props.author} at {props.timestamp}</caption>
                <div className="bg-black bg-opacity-50 text-white text-sm p-2 rounded-sm">3 views 1 vote</div>
            </div>
            <img className="rounded-md" src="http://www.colourlovers.com/paletteImg/9F1F63/D61B5B/F6DC32/F69C1F/67B7A8/Tequila_Sunrise.png" alt="palette"></img>
        </div>
    )
}

export default ColorCard