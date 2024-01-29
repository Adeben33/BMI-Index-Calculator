import "./metric.css";

function Metric({ onInputHeight, onInputWeight }) {
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
            onChange={onInputHeight}
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
            onChange={onInputWeight}
          />
          <div className="cm">kg</div>
        </div>
      </label>
    </div>
  );
}

export default Metric;
