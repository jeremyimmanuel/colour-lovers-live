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
      <header className="App-header h-48 flex flex-row justify-center items-center">
        <div className="w-3/4 justify-start">
          <h1 className="text-6xl">
            <span className="font-thin">ColourLovers. </span>
            <span>Live.</span>
          </h1>
        </div>
      </header>

      <div className="App-body flex justify-center">
        <div className="data-grid">
          {dataList}
        </div>
      </div>
    </div>
  );
}

export default App;
