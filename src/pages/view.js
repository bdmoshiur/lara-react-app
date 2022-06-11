import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function View(props) {
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

 
  return (
    <div>
      <h2>View User</h2>
      <div>
        <p>Name: {inputs.name}</p>
        
        <p>Email: {inputs.email}</p>

      </div>
    </div>
  );
}
