import Button from "../../shared/Button";
import ModeDropdown from "./components/ModeDropdown";
import SquareMatrix from "./components/SquareMatrix";
import useModes from "../../api/useModes";
import { useState } from "react";

import "./styles.css";
const Game = () => {
  const modes = useModes();
  const [selectedMode, setSelectedMode] = useState("");
  const [matrixSize, setMatrixSize] = useState(0);

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };

  const handleStartButtonClick = () => {
    const selectedModeObject = modes.find((mode) => mode.name === selectedMode);
    if (selectedModeObject) {
      setMatrixSize(selectedModeObject.field);
    }
  };
  return (
    <>
      <div className="menu">
        <Button
          text={"start"}
          onClick={handleStartButtonClick}
          cName={"start-btn"}
        />
        <ModeDropdown
          modes={modes}
          onChange={handleModeChange}
          selectedMode={selectedMode}
          cName={"mode-select"}
        />
      </div>
      <SquareMatrix
        size={matrixSize}
        cellColor={"blue"}
        defaultColor={"white"}
      />
    </>
  );
};

export default Game;
