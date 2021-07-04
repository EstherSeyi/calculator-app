import { useDisplay } from "../context/display";

const Display = () => {
  const { displayState } = useDisplay();
  return (
    <div className="mb-4 bg-bg-screen py-4 px-3 rounded-md text-2xl text-misc-header">
      <span className="ml-auto w-max block">{displayState.displayData}</span>
    </div>
  );
};

export default Display;
