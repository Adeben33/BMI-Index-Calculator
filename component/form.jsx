import "./form.css";

function Form() {
  return (
    <div>
      <p className="formHeading">Enter your details below</p>
      <form action="">
        <input type="radio" name="metric" id="metric" />
        <label for="metric">Metric</label>
        <input type="radio" name="metric" id="metric" />
        <label for="metric">Imperial</label>
        <br />
        <label For="height">Height</label>
        <input type="text" id="height" name="height" value="cm" />
        <label For="weight">weight</label>
        <input type="text" id="weight" name="weight" value="kg" />
      </form>
    </div>
  );
}

export default Form;
