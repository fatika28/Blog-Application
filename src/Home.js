//import React, { useEffect, useState } from "react";
import BlogList from "./bloglist";
import UseFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = UseFetch("http://localhost:8000/data");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </div>
  );
};

export default Home;
