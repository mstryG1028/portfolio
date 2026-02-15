
import {Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project'
import Contact from './pages/Contact';
import Skill from './pages/Skill'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
