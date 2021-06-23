import './App.css';
import PaletteCard from './components/PaletteCard';
import { data } from './data';

function App() {
  let dataList = data.map(({ id, title, userName, dateCreated, imageUrl, numViews, numVotes }) => {
    return (
      <PaletteCard key={id} title={title} author={userName} timestamp={dateCreated} imageUrl={imageUrl} numViews={numViews} numVotes={numVotes} />
    )
  })

  let now = new Date(Date.now())
  let now_string = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="App">
      <header className="App-header flex flex-row flex-wrap overflow-auto justify-center items-center">
        <div className="w-3/4 flex flex-col justify-start my-12 md:justify-between md:flex-row">
          <h1 className="text-4xl md:text-6xl">
            <span className="font-light">ColourLovers. </span>
            <span className="font-bold">Live.</span>
          </h1>
          <p>Last updated {now_string}</p>
        </div>
      </header>

      <div className="App-body flex justify-center overflow-auto pb-12">
        <div className="data-grid">
          {dataList}
        </div>
      </div>
    </div>
  );
}

export default App;
