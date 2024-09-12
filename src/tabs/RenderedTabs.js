import React, { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import Tabs from "./Tabs";
const url = "https://www.course-api.com/react-tabs-project";

const RenderedTabs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'>loading</div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      <Tabs jobs={jobs} />
      <JobInfo jobs={jobs} />
    </section>
  );
};

export default RenderedTabs;
