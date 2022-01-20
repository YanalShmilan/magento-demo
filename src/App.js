import logo from './logo.svg';
import './App.css';
import './css/style.css';
import TopPanel from './components/header/TopPanel';
import HomeSlider from './components/Slider/HomeSlider';
import FashionistaSlider from './components/Slider/FashionistaSlider';
import ProductsTabs from './components/ProductsSliderWithTabs/ProductsTabs';
import Header from './components/header/Header';
import Tabs from './components/ProductsSliderWithTabs/Tabs';
function App() {
  return (
    <>
      <Header />
      <main id="pt-pageContent">
        <HomeSlider />
        <FashionistaSlider />
        <ProductsTabs categoryId={121} />
        <ProductsTabs categoryId={180} />
        <ProductsTabs categoryId={1205} />
        <Tabs
          items={['PAVI-PIU680I', 'PAWA-HIGHWAISTE', 'TRY-THERMALSET-WOMEN']}
        />
      </main>
    </>
  );
}

export default App;
