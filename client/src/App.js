import logo from './logo.svg';
import './App.css';
import Index from './Views/Index';
import AlterPet from './Views/AlterPet';
import ViewPet from './Views/ViewPet';
import {
  BrowserRouter,
  Switch, 
  Route, 
  Routes
} from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <div className="App container">
      <Routes>
          <Route exact path="/" element={< Index />} />
      </Routes>
      <Routes>
          <Route exact path="/pets/new" element={< AlterPet type="new" />} />
      </Routes>
      <Routes>
          <Route exact path="/pets/:id/edit" element={< AlterPet type="edit" />} />
      </Routes>
      <Routes>
          <Route exact path="/pets/:id" element={< ViewPet />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
