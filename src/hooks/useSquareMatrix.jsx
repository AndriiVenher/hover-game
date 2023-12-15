import { useState, useEffect } from "react";

const useSquareMatrix = (size) => {
  const [hoveredCells, setHoveredCells] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHoveredCells([]);
    setHistory([]);
  }, [size]);

  const generateMatrix = () => {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push({ value: i * size + j + 1, color: "" });
      }
      matrix.push(row);
    }
    return matrix;
  };

  const updateHistory = (newHoveredCells) => {
    setHoveredCells(newHoveredCells);
    setHistory((prevHistory) => [
      ...prevHistory,
      newHoveredCells.length > 0
        ? newHoveredCells[newHoveredCells.length - 1]
        : "",
    ]);
  };

  return {
    squareMatrix: generateMatrix(),
    hoveredCells,
    history,
    updateHistory,
  };
};

export default useSquareMatrix;
