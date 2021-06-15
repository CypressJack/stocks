import './App.scss';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";


function App() {
  return (
      <div className='app'>
        <HomePage/>
        <NavBar/>
      </div>
  );
}

export default App;
