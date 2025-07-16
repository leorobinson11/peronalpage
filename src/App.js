import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from './components/hero';
import Header from './components/header';
import Profile from './components/profile';
import Portfolio from './components/portfolio';
import Contactform from './components/contactform';
import Footer from './components/footer';

import './App.css';

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
    <BrowserRouter basename="/personalpage">
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
