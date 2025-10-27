import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Course from './components/Course';

function App() {
  return (
    <div>
      <Router>
        {/* <div> */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/course/fsd">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/course/at">Automation Testiong</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<Course />} />
        </Routes>
        {/* </div> */}
      </Router>
    </div>

  );
}

export default App;