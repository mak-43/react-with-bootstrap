
import { Button,Spinner } from 'react-bootstrap';
import './App.css';
import Cardgroup2 from './Components/CardGroup2/Cardgroup2';
//import CardGroup from './Components/cardgroup/CardGroup';

function App() {
  return (
    <div className="App">
      <h1>Using bootstrap</h1>
      <Button variant="warning">My button</Button> <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Cardgroup2></Cardgroup2>
      {/* <CardGroup></CardGroup> */}
    </div>
  );
}

export default App;
