import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} exact />
          <Route path='/:id' element={<UserPage />} exact />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
