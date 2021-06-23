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
      <header className="App-header h-48 flex flex-row justify-start items-center">
        <h1 className="text-6xl ml-48">
          <span className="font-thin">ColourLovers. </span>
          <span>Live.</span>
        </h1>
      </header>

      <div className="App-body flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-3/4">
          {dataList}
        </div>
      </div>
    </div>
  );
}

export default App;
