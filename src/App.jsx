import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import New from "./components/New";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Story from "./components/Story";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Featured />
      <Story />
      <Products />
      <Testimonial />
      <New />
      <Subscribe />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
