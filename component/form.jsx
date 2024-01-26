import "./form.css";

function Form() {
  return (
    <div className="form">
      <p className="formHeading">Enter your details below</p>
      <form action="">
        <div className="weight">
          <label For="metricId" className="radio">
            <input
              type="radio"
              name="weightType"
              id="metricId"
              className="radio__input"
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
              />
              {/* <p>cm</p> */}
            </div>
          </label>

          <label For="weight" className="box">
            Weight
            <br />
            <div className="height-input">
              <input
                type="number"
                id="height"
                name="height"
                placeholder="0"
                min={0}
                className="weight__input"
              />
              {/* <p>cm</p> */}
            </div>
          </label>
        </div>
        {/* <label For="weight" className="">
          weight
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          // placeholder="cm"
          min={0}
        /> */}
      </form>
    </div>
  );
}

export default Form;
