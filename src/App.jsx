import React, { useState } from "react";
import axios from "axios";
import UserData from "./UserData";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const token = "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";
  const url = `https://api.github.com/users/${username}`;
  const fetchData = async () => {
    try {
      setData({});
      setError(null);
      setShowErrorMessage(false);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      setData({});
      setShowErrorMessage(true);
      setError("Invalid GitHub username. Please check and try again.");
      console.error("Error fetching GitHub data:", error);
    }
  };
  return (
    <div>
      <div id="maindiv">
        <h1>Github User Data</h1>
        <div className="action">
          <input
            type="text"
            name="id"
            id="inputbox"
            value={username}
            placeholder="Enter Github Username"
            onChange={(e) => {
              setUsername(e.target.value.trim());
            }}
          />
          <button onClick={() => fetchData()}>Search</button>
          {error && <p className="error-message">{error}</p>}
          <UserData data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
