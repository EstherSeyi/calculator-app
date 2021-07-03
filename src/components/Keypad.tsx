import keys from "../constants/keys";

import Button from "./Button";

const Keypad = () => {
  return (
    <div className="grid grid-cols-4 gap-2 micro:gap-4  bg-bg-element p-4 rounded">
      {keys.map((key, index) => (
        <Button key={`${key.value}_${index}`}>{key.label}</Button>
      ))}
    </div>
  );
};

export default Keypad;
