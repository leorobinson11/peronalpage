import Hero from './components/hero';
import Header from './components/header';
import Profile from './components/profile';
import Portfolio from './components/portfolio';
import Contactform from './components/contactform';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <header className="App">
        <Header />
        <Hero />
        <Profile />
        <Portfolio />
        <Contactform />
        <Footer />
    </header>
  );
}

export default App;
