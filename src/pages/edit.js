import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function Edit(props) {
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    FatchUser();
  }, []);

  const FatchUser = () => {
    http.get("users/"+ id +"/edit")
      .then((response) => {
        setInputs({
          name: response.data.name,
          email: response.data.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const updateSubmit = (event) => {
    event.preventDefault();
    http.post("users/" + id, inputs)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Edit User</h2>
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
        <button
          type="submit"
          onClick={updateSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
