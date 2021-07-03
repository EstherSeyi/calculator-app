import { useTheme } from "../context/theme";

const HeaderSection = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="flex justify-between text-misc-header">
      <p className="self-center">calc</p>
      <div className="flex text-xs">
        <span className="uppercase self-end mr-4">theme</span>
        <div>
          <div className="flex justify-between px-1">
            <span
              className="cursor-pointer"
              onClick={() => handleThemeToggle("theme1")}
            >
              1
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleThemeToggle("theme2")}
            >
              2
            </span>
            <span
              className="cursor-pointer"
              onClick={() => handleThemeToggle("theme3")}
            >
              3
            </span>
          </div>
          <div className="bg-bg-element w-16 h-6 rounded-full relative">
            <span
              className={`pr-3 p-1.5 pt-3 rounded-full bg-key-element absolute top-3px ${
                theme === "theme2"
                  ? "left-1/3"
                  : theme === "theme3"
                  ? "right-0"
                  : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
