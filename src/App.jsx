import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import User from './pages/User'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';
import { GithubProvider } from './contexts/github/githubContext';
import { AlertProvider } from './contexts/alert/AlertContext';
import Alert from './components/layout/Alert';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between min-h-screen bg-gray-600">
            <Navbar/>
            <main className=" container mx-auto px-3 pb-12 text-white">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User/>}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
