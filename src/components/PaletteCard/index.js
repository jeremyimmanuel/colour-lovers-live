import PropTypes from 'prop-types';
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
            <a className="palette-card-img cursor-pointer" href={props.url} target="#">
                <img className="rounded-md" src={props.imageUrl} alt="palette"></img>
            </a>
        </div>
    )
}

PaletteCard.propTypes = {
    title: PropTypes.string.isRequired,

    author: PropTypes.string.isRequired,

    /** Timestamp when palette was created */
    timestamp: PropTypes.string.isRequired,

    /** Url to palette's page */
    url: PropTypes.string.isRequired,

    imageUrl: PropTypes.string.isRequired
}

export default PaletteCard