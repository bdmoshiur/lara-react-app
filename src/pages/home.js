import http from "../http";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FatchAllUsers();
  }, []);

  const FatchAllUsers = () => {
    http
      .get("users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <h1>All Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={{ pathname:"/edit/"+user.id }} className="btn btn-info" >Edit</Link>
                        <Link to={{  }} className="btn btn-danger">Delete</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
