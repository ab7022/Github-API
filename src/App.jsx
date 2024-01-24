import axios from 'axios';
import UserData from './UserData'; 
import { useState } from 'react';
import './App.css';

export default function App() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const token = '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';
  const url = `https://api.github.com/users/${username}`;
  console.log(url)
  const fetchData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      setData(response.data);
      setError(null); 
      setShowErrorMessage(false)  
    } catch (error) {
      setData({})
      setShowErrorMessage(true);

      setError('Invalid GitHub username. Please check and try again.');
      console.error('Error fetching GitHub data:', error);
    }
  };

  return (
    <div>
      <div id='maindiv'>
      <h1>Github User Data</h1>
      <form action='/' method='post' onSubmit={fetchData}>
         <input
        type="text"
        name="githubid"
        id="inputbox"
        value={username}
        placeholder='Enter Github Username'
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button type='submit'>Search</button>
      </form>
     
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserData data={data} />
      
    </div>
    </div>
    
  );
}