import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Category from "./components/Category";
import NotFound from './pages/NotFound'
function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/category/:name" element={<Category />} />
          <Route element={<NotFound/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
