import { HashRouter, Routes, Route } from "react-router-dom";

import Hero from './components/hero';
import Header from './components/header';
import Profile from './components/profile';
import Portfolio from './components/portfolio';
import Contactform from './components/contactform';
import Footer from './components/footer';

import './App.css';
import Project from "./components/project";



const Home = () => {
  return (
    <header className="App">
        <Header />
        <Hero />
        <Profile />
        <Portfolio />
        <Contactform />
        <Footer />
    </header>
  )
}

function App() {

  return (
    <HashRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="projects/:index" element={<Project />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
