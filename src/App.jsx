import { Card } from "./components/cards/Card";
import { Footer } from "./components/footers/Footer";
import { Navbar } from "./components/navbars/Navbar";
import { Slider } from "./components/sliders/Slider";
import { Tabs } from "./components/tabs/Tabs";

function App() {
  return (
    <>
      <div className="container-fluid mx-auto px-4">
        <Navbar />
        <Slider />
        <div className="container mx-auto mt-48 p-4">
          <Card />
        </div>
      </div>
      <div
        className="px-20 py-10 w-full border-b-2 border-grey-500"
        style={{ background: "#f7f7f7" }}
      >
        <Tabs />
      </div>
      <Footer />
    </>
  );
}

export default App;
