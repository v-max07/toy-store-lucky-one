import './App.css';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';




function App() {
  return (
    <div className="App">
      <h1 className='storeName'>Welcome To <span>Toy</span>Store</h1>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
