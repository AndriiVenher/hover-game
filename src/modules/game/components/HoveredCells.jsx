const HoveredCells = (cell) => {
  console.log(cell);
  return (
    <div className="hovered">
      <h3 className="hovered-header">Hovered Cells</h3>
      {cell.map((stepCell, index) => (
        <div className="hovered-cell" key={index}>
          {`row ${stepCell.colIndex + 1}  col ${stepCell.rowIndex + 1} `}
        </div>
      ))}
    </div>
  );
};

export default HoveredCells;
