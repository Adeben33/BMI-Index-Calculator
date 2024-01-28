import imageManEating from "../assets/images/image-man-eating.webp";
import "./result.css";

function Result() {
  return (
    <div className="result-container">
      <div className="result-img">
        <img src={imageManEating} alt="" srcset="" />
      </div>
      <div className="result-text">
        <p className="heading-large">What your BMI result means</p>
        <p className="text">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
}

export default Result;
