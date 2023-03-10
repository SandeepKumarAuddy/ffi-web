import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing.page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/ffi-web' element={<Landing />} />
    </Routes>
  );
}

export default App;
