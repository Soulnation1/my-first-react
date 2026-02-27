import { useState } from "react";
import KalButtons from "./KalButtons";
import KalInput from "./KalInput";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleDisplay = (value) => {
    setDisplayValue((prev) => prev + value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#5f7ad0]">
      <div className="w-[350px] bg-[#000000] rounded-2xl p-6 ">
        <KalInput displayValue={displayValue} />
        <KalButtons
          setDisplayValue={setDisplayValue}
          handleDisplay={handleDisplay}
        />
      </div>
    </div>
  );
};

export default CalculatorApp;
