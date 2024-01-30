import { useEffect, useState } from "react";
import "./form.css";
import Imperial from "./imperial";
import Metric from "./metric";

function Form() {
  const [isMetric, setIsMetric] = useState(true);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [heightFt, setHeightFt] = useState(0);
  const [heightIn, setHeightIn] = useState(0);
  const [weightSt, setWeightSt] = useState(0);
  const [weightLb, setWeightLb] = useState(0);
  const [bmi, setBmi] = useState(null);

  const handlerinputHeight = (e) => {
    setHeight(e.target.value);
  };

  const handlerinputWeight = (e) => {
    setWeight(e.target.value);
  };

  const handlerinputHeightFt = (e) => {
    setHeightFt(e.target.value);
  };

  const handlerinputHeightIn = (e) => {
    setHeightIn(e.target.value);
  };

  const handlerinputWeightSt = (e) => {
    setWeightSt(e.target.value);
  };
  const handlerinputWeightIbs = (e) => {
    setWeightLb(e.target.value);
  };

  const handleRadioChange = () => {
    // Toggle the value of isMetric when the radio button is clicked
    setIsMetric(!isMetric);
  };

  useEffect(() => {
    if (isMetric) {
      setBmi(null);
      if (height && weight) {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);

        setBmi(bmiValue.toFixed(2)); // Round to two decimal places
      } else {
        setBmi(null);
      }
    } else if (!isMetric) {
      setBmi(null);
      if (heightFt && heightIn && weightSt && weightLb) {
        const heightCm = heightFt * 30.48 + heightIn * 2.54;

        const weightKg = weightSt * 6.35029 + weightLb * 0.453592;

        const bmiValue = weightKg / Math.pow(heightCm / 100, 2);

        setBmi(bmiValue.toFixed(2));
      } else {
        setBmi(null);
      }
    }
  }, [height, weight, heightFt, heightIn, weightSt, weightLb, isMetric]);

  console.log(bmi);
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
            onInputHeight={handlerinputHeightFt}
            onInputWeightSt={handlerinputWeightSt}
            onInputHeightIn={handlerinputHeightIn}
            onInputWeightIbs={handlerinputWeightIbs}
          />
        )}
        {!bmi ? (
          <div className="welcome-text">
            <p className="heading-large">Welcome!</p>
            <p>
              Enter you height and weight and you'll see your BMI result here
            </p>
          </div>
        ) : (
          <div className="BMI display-flex-bmi">
            <p className="heading-large">
              Your BMI is...
              <span className="bmi-span">{bmi}</span>
            </p>
            <p className="bmi-text">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between 63.3kgs - 85.2kgs.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
