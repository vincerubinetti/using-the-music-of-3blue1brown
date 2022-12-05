import "./Grid.css";

// basic grid
const Grid = ({ cols = 3, children }) => (
  <div className="grid" data-cols={cols}>
    {children}
  </div>
);

export default Grid;
