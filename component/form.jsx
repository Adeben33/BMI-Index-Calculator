import { useState } from "react";
import "./form.css";

function Form() {
  const [isMetric, setIsmetric] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handlerinputHeight = (e) => {
    setHeight(e.target.value);
  };

  const handlerinputWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleRadioChange = () => {
    // Toggle the value of isMetric when the radio button is clicked
    setIsMetric(!isMetric);
  };

  return (
    <div className="form">
      <p className="formHeading">Enter your details below</p>
      <form action="">
        <div className="weight">
          <label htmlFor="metricId" className="radio">
            <input
              type="radio"
              name="weightType"
              id="metricId"
              className="radio__input"
              checked={isMetric}
              onChange={handleRadioChange}
            />
            <div className="radio__radio"></div>
            Metric
          </label>
          <label For="ImperialId" className="radio">
            <input
              type="radio"
              name="weightType"
              id="ImperialId"
              className="radio__input"
              checked={!isMetric}
              onChange={handleRadioChange}
            />
            <div className="radio__radio"></div>
            Imperial
          </label>
        </div>
        <div className="hwbox">
          <label For="height" className="box">
            Height
            <br />
            <div className="height-input">
              <input
                type="number"
                id="height"
                name="height"
                placeholder="0"
                min={0}
                className="weight__input"
                onChange={handlerinputHeight}
              />
              {/* <p>cm</p> */}
            </div>
          </label>

          <label htmlFor="weight" className="box">
            Weight
            <br />
            <div className="height-input">
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="0"
                min={0}
                className="weight__input"
                onChange={handlerinputWeight}
              />
              {/* <p>cm</p> */}
            </div>
          </label>
        </div>
        <div className="welcome-text">
          <p className="heading-large">Welcome!</p>
          <p>Enter you height and weight and you'll see your BMI result here</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
