import './App.css';
import ColorCard from './components/ColorCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span>ColourLovers. </span>
          <span>Live.</span>
        </h1>
        <ColorCard title="Anna Frozen Forever" author="romantic_love" timestamp="3:22 PM" />
      </header>
    </div>
  );
}

export default App;
