import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/userAction";
const User = ({ userData, fetchUsers }) => {
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");
  //   const [users, setUsers] = useState([]);
  useEffect(() => {
    // try {
    //   let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //   let data = res.data;
    //   setUsers(data);
    //   setLoading(false);
    // } catch (err) {
    //   setError(err.message);
    //   setLoading(false);
    // }
    fetchUsers();
  }, []);

  return (
    <>
      {userData.loading ? (
        <h1>Loading...</h1>
      ) : userData.error != "" ? (
        <h1>{userData.error}</h1>
      ) : (
        <ul>
          {userData.users.length > 0 &&
            userData.users.map(user => <li>{user.name}</li>)}
        </ul>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
