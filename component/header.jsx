import Form from "./form";
import "./header.css";
import Heading from "./heading";

function Header() {
  return (
    <div>
      <div className="header">
        <Heading />
        <Form />
      </div>
    </div>
  );
}

export default Header;
