import { useDisplay } from "../context/display";

const accentBtn = ["reset", "del"];
const largerBtn = ["reset", "="];

const Button = ({ children, onClick }: { children: string; onClick: any }) => {
  const { displayState } = useDisplay();
  return (
    <>
      <button
        disabled={
          !accentBtn.includes(children)
            ? displayState?.displayData.length > 15
            : false
        }
        onClick={onClick}
        className={`py-2 micro:py-3 px-4 micro:px-4  rounded-md uppercase text-sm micro:text-xl  md:text-2xl ${
          accentBtn.includes(children)
            ? "bg-key-bg text-misc-white shadow-accent"
            : children === "="
            ? "bg-key-element text-misc-accent shadow-equals"
            : "bg-key-bg2 text-misc-primary shadow-reg"
        } ${largerBtn.includes(children) ? "col-span-2" : ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
