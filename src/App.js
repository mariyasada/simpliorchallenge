import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HeadingComponent } from './components/index';
import { MainPage } from './pages/main';
import { Toaster } from "react-hot-toast";
import LocationPage from './pages/LocationPage';
import DepartmentPage from './pages/DepartmentPage';
import PositionPage from './pages/PositionPage';
import LeavePage from './pages/Leave';


function App() {
  return (
    <div className="App">
      <Router>
        
        <HeadingComponent/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/location" element={<LocationPage/>}/>
          <Route path="/department" element={<DepartmentPage/>}/>
          <Route path="/position" element={<PositionPage/>}/>
          <Route path="/leave" element={<LeavePage/>}/>
        </Routes>   
      <Toaster
        position="top-right"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      />  
      </Router> 
    </div>
  );
}

export default App;
