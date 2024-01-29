import { useState } from "react";
import "./form.css";
import Imperial from "./imperial";
import Metric from "./metric";

function Form() {
  const [isMetric, setIsMetric] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [heightIn, setHeightIn] = useState("");
  const [weightSt, setWeightIbs] = useState("");

  const handlerinputHeight = (e) => {
    setHeight(e.target.value);
  };

  console.log(weight);

  const handlerinputWeight = (e) => {
    setWeight(e.target.value);
  };

  const handlerinputHeightIn = (e) => {
    setHeightIn(e.target.value);
  };

  const handlerinputWeightIbs = (e) => {
    setWeightIbs(e.target.value);
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
        {isMetric ? (
          <Metric
            onInputHeight={handlerinputHeight}
            onInputWeight={handlerinputWeight}
          />
        ) : (
          <Imperial
            setHeight={setHeight}
            setWeight={setWeight}
            setHeightIn={setHeightIn}
            setWeightIbs={setWeightIbs}
            onInputHeight={handlerinputHeight}
            onInputWeight={handlerinputWeight}
          />
        )}
        <div className="welcome-text">
          <p className="heading-large">Welcome!</p>
          <p>Enter you height and weight and you'll see your BMI result here</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
