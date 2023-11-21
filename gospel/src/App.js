// Import necessary components and BrowserRouter from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './Components/Sidebarr';
import Home from './Components/Home';
import Documentary from './Components/Documentary';
import Quotes from './Components/Quotes';
import MorningEvolution from './Components/MorningEvolution';
import Profile from './Components/Profile';
// import Analytics from './Components/Analytics';
import Signup from './Components/Signup';
// import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container-fluid bg-white'>
          <div className='row'>
            <div className='col-3 vh-100'>
              <Sidebar />
            </div>
            <div className='col-9'>
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Documentary" element={<Documentary />} />
                <Route path="/Quotes" element={<Quotes />} />
                <Route path="/MorningEvolution" element={<MorningEvolution />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Signup" element={<Signup />} />
                {/* <Route path="/analytics" element={<Analytics />} /> */}
                {/* <Route path="/hero404" element={<NotFound />} />  */}
                {/* //* Add more routes as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
