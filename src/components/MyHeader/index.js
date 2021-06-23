import './styles.css';

function Header() {
    let now = new Date(Date.now())
    let now_string = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

    return (
        <header className="my-header flex flex-row flex-wrap overflow-auto justify-center items-center">
            <div className="my-header-container w-3/4 my-12">
                <h1 className="text-4xl md:text-6xl">
                    <span className="font-light">ColourLovers. </span>
                    <span className="font-bold">Live.</span>
                </h1>
                <p>Last updated {now_string}</p>
            </div>
        </header>
    )
}

export default Header