import "./App.css";

import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import ButtonSection from "./components/ButtonSection";

function App() {
  return (
    <div className="text-misc-white min-h-screen">
      <div className="w-11/12 max-w-lg mx-auto mt-32">
        <HeaderSection />
        <InputSection />
        <ButtonSection />
      </div>
    </div>
  );
}

export default App;
