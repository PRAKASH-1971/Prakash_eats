import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
