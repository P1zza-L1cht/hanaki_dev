import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './user/Main.js';
import About from './user/About.js';
import Contact from './user/Contact.js';
import Error from './user/Error.js';
import SignIn from './admin/SignIn.js';
import Setting from './admin/Setting.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
