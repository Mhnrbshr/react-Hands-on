import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Accordion from "./components/MultiSelection";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      {/* MultiSelection (selction of qstn and answer) */}
      {/* <Accordion /> */}

      {/* Generate random color */}
      {/* <RandomColor /> */}

      {/* Star Rating */}
      {/* <StarRating /> */}

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
