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
        className={`py-2 micro:py-4 px-4 micro:px-6 rounded-md uppercase text-sm micro:text-base ${
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
