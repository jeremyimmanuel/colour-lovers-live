import './App.css';
import ColorCard from './components/ColorCard';
import { data } from './data';

function App() {
  let dataList = data.slice(0, 10).map(({ title, userName, dateCreated, imageUrl, numViews, numVotes }) => {
    return (
      <ColorCard title={title} author={userName} timestamp={dateCreated} imageUrl={imageUrl} numViews={numViews} numVotes={numVotes} />
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
