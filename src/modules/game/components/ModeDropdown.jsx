const ModeDropdown = ({ modes, selectedMode, onChange, cName }) => {
  return (
    <select value={selectedMode} onChange={onChange} className={cName}>
      <option value="">Select a mode</option>
      {modes?.map((mode) => (
        <option key={mode.id} value={mode.name}>
          {mode.name}
        </option>
      ))}
    </select>
  );
};

export default ModeDropdown;
