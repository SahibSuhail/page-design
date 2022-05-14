import './App.css';
import Page from './Components/Page';
import Navbar from './Components/Navbar';
import PageLeft from './Components/PageLeft';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <PageLeft/>
     <Page/> 
    </div>
  );
}

export default App;
