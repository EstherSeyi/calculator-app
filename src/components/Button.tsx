const accentBtn = ["reset", "del"];
const largerBtn = ["reset", "="];

const Button = ({ children }: { children: string }) => {
  return (
    <>
      <button
        className={`py-4 px-6 rounded-md uppercase ${
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