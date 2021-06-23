import './App.css';
import PaletteCard from './components/PaletteCard';
import { data } from './data';

function App() {
  let dataList = data.map(({ id, title, userName, dateCreated, imageUrl, numViews, numVotes }) => {
    return (
      <PaletteCard key={id} title={title} author={userName} timestamp={dateCreated} imageUrl={imageUrl} numViews={numViews} numVotes={numVotes} />
    )
  })

  return (
    <div className="App">
      <header className="App-header flex flex-row flex-wrap overflow-auto justify-center items-center">
        <div className="w-3/4 justify-start my-12">
          <h1 className="text-4xl md:text-6xl">
            <span className="font-thin">ColourLovers. </span>
            <span>Live.</span>
          </h1>
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
