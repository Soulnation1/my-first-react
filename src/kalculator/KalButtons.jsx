import CalculatorButtons from "./calculatorButtons";

const KalButtons = ({handleDisplay }) => {
  return (
    <div className=" mt-4 mb-2 grid grid-cols-4 gap-2">
      {CalculatorButtons.map((CalculatorButton) => {
        return (
          <button
            key={CalculatorButton.id}
            onClick={() => handleDisplay(CalculatorButton.label)}
            className="text-[#c8c8c9] px-4 py-2 bg-[#26272a] font-bold  rounded-full hover:bg-[#3a3b3e]  transition "
          >
            {CalculatorButton.label}
          </button>
        );
      })}
    </div>
    
   
  );
};

export default KalButtons;
