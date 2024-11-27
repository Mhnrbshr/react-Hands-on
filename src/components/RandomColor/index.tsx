import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000"); //black

  const Randamizor = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const HandleGenerateRandomHex = () => {
    console.log("type", typeOfColor);
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Randamizor(hex.length)];
    }
    console.log("hexcolor", hexColor);
    setColor(hexColor);
  };

  const HandleGenerateRandomRgb = () => {
    const r = Randamizor(256);
    const g = Randamizor(256);
    const b = Randamizor(256);
    console.log("rgb", `${r} ${g} ${b}`);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      HandleGenerateRandomHex();
    } else {
      HandleGenerateRandomRgb();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? HandleGenerateRandomHex
            : HandleGenerateRandomRgb
        }
      >
        Generate Random Color
      </button>
      {typeOfColor === "hex" ? <h4>HEX Color</h4> : <h4>RGB Color</h4>}
      {typeOfColor === "hex" ? <h4>{color}</h4> : <h4>{color}</h4>}
    </div>
  );
};

export default RandomColor;
