import Button from "./Button";

import keys from "../constants/keys";
import { useDisplay } from "../context/display";

const Keypad = () => {
  const { clear, type, reset, calculate, displayState } = useDisplay();

  const handleClick = (value: string) => {
    switch (value) {
      case "del":
        return clear();
      case "reset":
        return reset();
      case "=":
        return calculate(displayState.displayData);
      default:
        return type(value);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-3 micro:gap-4  bg-bg-element p-4 rounded">
      {keys.map(({ value, label }, index) => (
        <Button key={`${value}_${index}`} onClick={() => handleClick(value)}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
