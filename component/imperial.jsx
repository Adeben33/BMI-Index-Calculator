import "./imperial.css";

function Imperial() {
  return (
    <div className="hwbox flex-direction-column ">
      <div className="display-flex">
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
              // onChange={handlerinputHeight}
            />
            <div className="cm">ft</div>
          </div>
        </label>
        <label For="height" className="box">
          <br />
          <div className="height-input">
            <input
              type="number"
              id="height"
              name="height"
              placeholder="0"
              min={0}
              className="weight__input"
              // onChange={handlerinputHeight}
            />
            <div className="cm">in</div>
          </div>
        </label>
      </div>
      <div className="display-flex">
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

              // onChange={handlerinputWeight}
            />
            {/* <p>cm</p> */}
            <div className="cm">st</div>
          </div>
        </label>
        <label htmlFor="weight" className="box">
          <br />
          <div className="height-input">
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="0"
              min={0}
              className="weight__input"
              // onChange={handlerinputWeight}
            />
            <div className="cm">Ibs</div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Imperial;
