import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Products from './components/Products';
import SideBanner from './components/SideBanner';


function App() {
 
  return (
    <div className="Web">
      <div className="Header">
        <Banner image="image3.jpg"></Banner>
        <div className="SiderBannerCotainer">
          <SideBanner image="image1.jpg" ></SideBanner>
          <SideBanner image="image2.jpg"></SideBanner>
        </div>
      </div>
      <div className="Body">
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
