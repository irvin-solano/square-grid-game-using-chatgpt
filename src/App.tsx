import React, { useState } from "react";

const GridContainer = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      width: "156px",
      height: "156px",
      border: "1px solid black"
    }}
  >
    {children}
  </div>
);
const GridSquare = ({ highlighted }) => (
  <div
    style={{
      backgroundColor: highlighted,
      width: "50px",
      height: "50px",
      border: "1px solid black"
    }}
  />
);
const App = () => {
  const [blueSquare, setBlueSquare] = useState({ x: 0, y: 0 });

  const move = (dx, dy) => {
    setBlueSquare((prev) => ({
      x: (prev.x + dx + 3) % 3,
      y: (prev.y + dy + 3) % 3
    }));
  };

  const buttons = [
    { label: "Up", onClick: () => move(-1, 0) },
    { label: "Down", onClick: () => move(1, 0) },
    { label: "Left", onClick: () => move(0, -1) },
    { label: "Right", onClick: () => move(0, 1) }
  ];

  const arr = Array(9).fill("white");
  arr[blueSquare.x * 3 + blueSquare.y] = "blue";

  return (
    <div>
      <GridContainer>
        {arr.map((squareColor, index) => (
          <GridSquare key={index} highlighted={squareColor} />
        ))}
      </GridContainer>
      {buttons.map((button) => (
        <button key={button.label} onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default App;
