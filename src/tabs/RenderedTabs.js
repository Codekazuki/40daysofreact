import React, { useEffect, useState } from "react";
const url = "https://www.course-api.com/react-tabs-project";

const RenderedTabs = () => {
  const [tabs, setTabs] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default RenderedTabs;
