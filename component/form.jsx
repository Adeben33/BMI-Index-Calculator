import "./form.css";

function Form() {
  return (
    <div className="form">
      <p className="formHeading">Enter your details below</p>
      <form action="">
        {/* <input type="radio" name="metric" id="metric" />
        <label for="metric">Metric</label>
        <input type="radio" name="metric" id="metric" />
        <label for="metric">Imperial</label> */}
        <label For="weightId" className="radio">
          <input
            type="radio"
            name="weightType"
            id="weightId"
            className="radio__input"
          />
          <div className="radio_radio"></div>
          Metric
        </label>

        <br />
        <label For="height">Height</label>
        <input
          type="number"
          id="height"
          name="height"
          placeholder="cm"
          min={0}
        />
        <label For="weight">weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="cm"
          min={0}
        />
      </form>
    </div>
  );
}

export default Form;
