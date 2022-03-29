import logo from './logo.svg';
import './App.css';
import CardGroup from './Components/cardgroup/CardGroup';

function App() {
  return (
    <div className="App">
        <button type="button" className="btn btn-outline-primary">Primary</button>
        <button type="button" className="btn btn-outline-secondary">Secondary</button>
        <button type="button" className="btn btn-outline-success">Success</button>
        <button type="button" className="btn btn-outline-danger">Danger</button>
        <button type="button" className="btn btn-outline-warning">Warning</button>
        <button type="button" className="btn btn-outline-info">Info</button>
        <button type="button" className="btn btn-outline-light">Light</button>
        <button type="button" className="btn btn-outline-dark">Dark</button>
      <CardGroup></CardGroup>
    </div>
  );
}

export default App;
