import React, { useState } from "react";
import Card from "./Card"; // Ensure this path correctly leads to your Card component

const ExploreMore = () => {
  const [courses, setCourses] = useState([
    {
      heading: "Wire Routing",
      description: "Boost your airline's safety and efficiency with cutting-edge wire routing solutions and expert tips. Discover how our advanced platform can streamline your maintenance and enhance operational reliability.",
    },
    {
      heading: "Recommendation",
      description: "Our platform provides tailored recommendations based on precise wire damage analysis. Receive optimal repair routing solutions to ensure efficient maintenance, reduced downtime, and enhanced aircraft safety.",
    },
    {
      heading: "Damage Analyse",
      description: "Our platform offers advanced damage analysis, accurately identifying and assessing wire damage in your aircraft. Using state-of-the-art technology, we determine the extent and precise location of the damage, enabling targeted and efficient repair recommendations to minimize downtime and enhance safety.",
    }
  ]);

  const [currentCard, setCurrentCard] = useState("Course 1");

  return (
    <div>
      {/* Responsive Cards Group */}
      <div className="flex flex-wrap justify-center gap-10 sm:flex-row lg:justify-start">
        {courses.map((course, index) => (
          <Card
            key={index}
            cardData={course}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;