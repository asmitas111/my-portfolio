
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/HomePage/Homepage';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <Header></Header>
      
      <Homepage />
    </div>
  );
}

export default App;
