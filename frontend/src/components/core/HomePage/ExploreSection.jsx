import React, { useState } from "react";
import Card from "./Card"; // Ensure this path correctly leads to your Card component

const ExploreMore = () => {
  const [courses, setCourses] = useState([
    {
      heading: "Data Harvesting",
      description: "WebMine efficiently extracts relevant information from various online sources, enabling users to gather valuable insights and stay informed about market trends, competitor activities, and customer preferences.",
    },
    {
      heading: "Targeted Prospecting",
      description: "Utilizing advanced algorithms, WebMine helps users identify and target their ideal audience with precision, facilitating more effective lead generation and customer acquisition strategies.",
    },
    {
      heading: "Seamless Integration",
      description: "WebMine seamlessly integrates with existing sales and marketing tools, allowing for centralized data management and streamlined workflows. This ensures a cohesive approach to business operations and maximizes productivity across teams.",
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
