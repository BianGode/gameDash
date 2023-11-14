import { useState } from "react";
import "../styles/pixelart.css";

export default function PixelArtMaker() {
  // What still todo here
  
  // important
  // create a custom way to save all the tiles and the name
  // represent a mini version of the saved art project   

  // add an effect when reset squares
  // go from up to down for each row of boxxes with animation
  const [artName, setArtName] = useState('') 
  const [currentColor, setCurrentColor] = useState("#000000");

  const testFun = (e) => {
    console.log(e.target);
  };

  function setCurrentColorPop(e) {
    const color = e.target;
    const cssObject = window.getComputedStyle(color, null);
    const computedBackground = cssObject.getPropertyValue("background-color");
    setCurrentColor(computedBackground);
  }

  function tileFill(e) {
    e.target.style.backgroundColor = currentColor;
  }

  const removeLines = () => {
    document.querySelector(".pixelBoard").classList.toggle("border");
  };

  const reset = () => {
    const colors = document.querySelectorAll(".square");
    for (let index = 0; index < colors.length; index++) {
      const color = colors[index];
      color.style.backgroundColor = "white";
    }
  };

  return (
    <div className="pixelWrapper">
      <div className="pixelBoardWrapper">
        <input className="artName" type="text" onChange={(e) => setArtName(e.target.value)}></input>
        <div className="pixelBoard border">
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
          <div className="square" onClick={(e) => tileFill(e)}></div>
        </div>
      </div>
      <div className="controls">
        <input
          type="color"
          onChange={(e) => setCurrentColor(e.target.value)}
          id="colorPick"
        />
        <div className="popColorsWrap">
          <p>popular colors</p>
          <div className="popularColors">
            {/* here comes a list of colors to quick pick from */}
            <div
              className="popColor red"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor green"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor blue"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor black"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor yellow"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor purple"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor white"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
            <div
              className="popColor brown"
              onClick={(e) => setCurrentColorPop(e)}
            ></div>
          </div>
        </div>
        <p className="rmvLines" onClick={removeLines}>remove lines</p>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
}
