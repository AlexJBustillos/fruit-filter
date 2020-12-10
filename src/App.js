import FruitContainer from './components/FruitContainer';
import './App.css';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'grapefruit', 'grape', 'mango', 'crabapple', 'pear', 'pomegranate', 'lemon', 'lime'];
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
