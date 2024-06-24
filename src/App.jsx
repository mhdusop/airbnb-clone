import { Card } from "./components/card/Card";
import { Navbar } from "./components/navbar/Navbar";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <div className="container-fluid mx-auto px-4">
      <Navbar />
      <Slider />
      <div className="container mx-auto mt-48 p-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
