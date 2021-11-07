import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import backgroundVertical from './components/images/background-vertical.jpg';
import backgroundHorizontal from './components/images/background-horizontal.jpg';
import Landing from './components/Landing';
import Main from './components/Main';
import Dev from './components/Dev';
import './App.css';

function App() {
  const [background, setBackground] = useState(window.innerWidth > window.innerHeight ? backgroundHorizontal : backgroundVertical);

  window.addEventListener('resize', () => {
    if (window.innerWidth > window.innerHeight && background === backgroundVertical) setBackground(backgroundHorizontal);
    else if (window.innerWidth < window.innerHeight && background === backgroundHorizontal) setBackground(backgroundVertical);
  });

  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="App" style={style}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/people" element={<Main />} />
          <Route exact path="/dev" element={<Dev />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
