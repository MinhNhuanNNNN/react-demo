import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/index.js'
import Sum from './components/sum/index.js'
import Gioquocte from './components/gioquocte/index.js'

function App() {
  return (
    <div className="App">
        {/* <Clock />
        <Sum /> */}
        <Gioquocte tenThanhpho={'Ha Noi'} muiGio = {7} />
    </div>
  );
}

export default App;
