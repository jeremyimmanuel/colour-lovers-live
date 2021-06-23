import './styles.css';

const PaletteCard = (props) => {
    const date = new Date(props.timestamp)
    const timestamp = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

    return (
        <div className="palette-card flex flex-row justify-between text-white">
            <div className="palette-card-info flex flex-col items-start">
                <h2 className="text-xl md:text-2xl">{props.title}</h2>
                <p className="text-xs md:text-sm">by {props.author} at {timestamp}</p>
                <div className="bg-black bg-opacity-50 text-sm p-2 rounded-sm mt-4">{props.numViews} views {props.numVotes} vote</div>
            </div>
            <img className="palette-card-img rounded-md" src={props.imageUrl} alt="palette"></img>
        </div>
    )
}

export default PaletteCard