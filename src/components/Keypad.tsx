import Button from "./Button";

import keys from "../constants/keys";
import { useDisplay } from "../context/display";

const Keypad = () => {
  const { clear, type } = useDisplay();

  const handleType = (data: string) => {
    type(data);
  };

  const handleClear = () => {
    clear();
  };

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-3 micro:gap-4  bg-bg-element p-4 rounded">
      {keys.map(({ value, label }, index) => (
        <Button
          key={`${value}_${index}`}
          onClick={value === "del" ? handleClear : () => handleType(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
