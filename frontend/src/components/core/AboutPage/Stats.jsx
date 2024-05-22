import React from "react";

const Stats = [
  { count: "500+", label: "Active Flights" },
  { count: "2k+", label: "Faults Analysed" },
  { count: "50+", label: "Experts Available" },
];

const StatsComponent = () => {
  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex justify-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-60 max-w-maxContent mx-auto">
          {Stats.map((data, index) => (
            <div className="flex flex-col items-center py-10" key={index}>
              <h1 className="text-4xl font-bold">{data.count}</h1>
              <h2 className="font-semibold text-lg">{data.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;