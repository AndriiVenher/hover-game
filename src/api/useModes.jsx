import { useState, useEffect } from "react";

const useModes = () => {
  const [modes, setModes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://60816d9073292b0017cdd833.mockapi.io/modes"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setModes(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return modes;
};

export default useModes;
