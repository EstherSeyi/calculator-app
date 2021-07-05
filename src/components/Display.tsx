import { useDisplay } from "../context/display";

const Display = () => {
  const { displayState } = useDisplay();
  return (
    <div className="mb-4 bg-bg-screen py-4 sm:py-5 px-3 rounded-md text-2xl sm:text-3xl md:text-4xl text-misc-header">
      <span className="ml-auto w-max block">
        {displayState.displayData === "" ? "0" : displayState.displayData}
      </span>
    </div>
  );
};

export default Display;
