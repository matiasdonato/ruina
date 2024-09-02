import "./css/app.css";
import 'animate.css';

import About from "./components/About";
import HomePresentation from "./components/HomePresentation";

function App() {
  
  return (
    <div className="appContainer">
      <HomePresentation/>
      <About/>
    </div>
  );
}

export default App;