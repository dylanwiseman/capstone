import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get("/api");
      setUserData(data);
    }
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div className="App">{JSON.stringify(userData)}</div>;
}

export default App;
