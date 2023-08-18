import MainNavigation from './shared/components/navigation/MainNavigation';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RenderProjects from './pages/rendered/RenderProjects';
import SingleProject from './DisplayProject/projectpage/SingleProject';
import NewProject from './pages/NewProject/NewProject';
import UpdateProject from './pages/NewProject/UpdateProject';



function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation/>
        <main>
          <Routes>
            <Route path='/' exact element={<RenderProjects/>}></Route>
            <Route path='/:userId/project' exact element={<SingleProject/>}></Route>
            <Route path='/newproject' exact element = {<NewProject/>}></Route>
            <Route path='/editProject/:ProjectId' exact element = {<UpdateProject/>}></Route>
          </Routes>
        </main>
      </Router>
      
     
    </div>
  );
}

export default App;
