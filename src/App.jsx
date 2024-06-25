import { Card } from "./components/cards/Card";
import { Navbar } from "./components/navbars/Navbar";
import { Slider } from "./components/sliders/Slider";
import { Tabs } from "./components/tabs/Tabs";

function App() {
  return (
    <div className="container-fluid mx-auto px-4">
      <Navbar />
      <Slider />
      <div className="container mx-auto mt-48 p-4">
        <Card />
      </div>
      <div className="container px-20">
        <Tabs />
      </div>
    </div>
  );
}

export default App;
