"use client"; // This is a client-side component

import React, { useState, useEffect } from "react";
import { ExpandableCardDemo } from "./ExpandableCard";

const ListBlog = () => {
  // Declare a state variable to store the fetched data with the correct type
  const [data, setData] = useState<any[] | null>(null);
  // Declare a state variable to store any error that occurs during the fetch
  const [error, setError] = useState<string | null>(null);

  // Use useEffect to fetch data when component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/articles?populate=*"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data); // Update the state with the fetched data
      } catch (error) {
        // Type assertion to Error
        const errorMessage =
          (error as Error).message || "An unknown error occurred";
        setError(errorMessage);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Render the component based on the state
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full py-20" id="home">
      <ExpandableCardDemo />
      <div>
        {/* Render the fetched data here */}
        {data.map((article: any) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
