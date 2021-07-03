import "./App.css";

import Header from "./components/Header";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  return (
    <div className="text-misc-white">
      <div className="w-11/12 max-w-lg mx-auto mt-32">
        <Header />
        <Display data="399,981" />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
