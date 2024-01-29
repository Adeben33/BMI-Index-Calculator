import "./metric.css";

function Metric({ InputHeight, InputWeight }) {
  return (
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
            onChange={InputHeight}
          />
          <div className="cm">cm</div>
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
            onChange={InputWeight}
          />
          <div className="cm">kg</div>
        </div>
      </label>
    </div>
  );
}

export default Metric;
