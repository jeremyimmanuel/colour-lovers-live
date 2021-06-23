import React, { useMemo } from 'react';

const ColorCard = (props) => {
    const timestamp = props.timestamp
    const timestampSimplified = useMemo(() => {
        const d = new Date(timestamp)
        d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
        return timestamp.slice(0, 10)
    }, [timestamp])

    return (
        <div className="palette-card flex flex-row justify-between text-white">
            <div className="flex flex-col items-start">
                <h2 className="text-xl">{props.title}</h2>
                <caption className="text-sm">by {props.author} at {timestampSimplified}</caption>
                <div className="bg-black bg-opacity-50 text-white text-sm p-2 rounded-sm mt-4">{props.numViews} views {props.numVotes} vote</div>
            </div>
            <img className="rounded-md h-36 w-48" src={props.imageUrl} alt="palette"></img>
        </div>
    )
}

export default ColorCard