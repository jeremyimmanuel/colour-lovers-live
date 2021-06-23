import './App.css';
import PaletteCard from './components/PaletteCard';
import MyHeader from './components/MyHeader';
import { data } from './data';

function App() {
  let dataList = data.map(({ id, title, userName, dateCreated, imageUrl, numViews, numVotes, url }) => {
    return (
      <PaletteCard key={id} title={title} author={userName} timestamp={dateCreated} imageUrl={imageUrl} numViews={numViews} numVotes={numVotes} url={url} />
    )
  })

  return (
    <div className="App">
      <MyHeader />

      <div className="App-body flex justify-center overflow-auto pb-12">
        <div className="data-grid">
          {dataList}
        </div>
      </div>
    </div>
  );
}

export default App;
