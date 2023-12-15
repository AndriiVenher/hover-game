import React, { useState, useEffect } from "react";
import useSquareMatrix from "../../../hooks/useSquareMatrix";

const SquareMatrix = ({ size, cellColor, defaultColor }) => {
  const { squareMatrix, hoveredCells, updateHistory } = useSquareMatrix(size);
  const [filteredHoveredCells, setFilteredHoveredCells] = useState([]);

  useEffect(() => {
    setFilteredHoveredCells([]);
  }, [size]);

  const handleCellHover = (rowIndex, colIndex) => {
    const cellIndex = hoveredCells.findIndex(
      (cell) => cell.rowIndex === rowIndex && cell.colIndex === colIndex
    );

    const updatedHoveredCells = [...hoveredCells];
    const currentColor = updatedHoveredCells[cellIndex]?.color;
    const newColor = currentColor === cellColor ? defaultColor : cellColor;

    if (cellIndex === -1) {
      updatedHoveredCells.push({ rowIndex, colIndex, color: cellColor });
    } else {
      updatedHoveredCells[cellIndex] = { rowIndex, colIndex, color: newColor };
    }
    updateHistory(updatedHoveredCells);

    setFilteredHoveredCells(
      updatedHoveredCells.filter((cell) => cell.color === cellColor)
    );
  };

  return (
    <div className="matrix-container">
      {squareMatrix.map((row, rowIndex) => (
        <div key={rowIndex} className="matrix-row">
          {row.map((cell, colIndex) => {
            const isHovered = hoveredCells.some(
              (hoveredCell) =>
                hoveredCell.rowIndex === rowIndex &&
                hoveredCell.colIndex === colIndex
            );

            return (
              <div
                key={colIndex}
                className="matrix-element"
                style={{
                  backgroundColor: isHovered
                    ? hoveredCells.find(
                        (cell) =>
                          cell.rowIndex === rowIndex &&
                          cell.colIndex === colIndex
                      )?.color
                    : cell.color,
                }}
                onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
              ></div>
            );
          })}
        </div>
      ))}
      {size ? (
        <div className="hovered">
          <h3 className="hovered-header">Hovered Cells</h3>
          {filteredHoveredCells.map((stepCell, index) => (
            <div className="hovered-cell" key={index}>
              {`row ${stepCell.colIndex + 1}  col ${stepCell.rowIndex + 1} `}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SquareMatrix;
