import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function Create() {
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    http
      .post("users", inputs)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={ handleSubmit } className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
