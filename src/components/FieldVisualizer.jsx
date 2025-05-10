import React from "react";
import { motion } from "framer-motion";

const Field = () => (
  <div className="w-full aspect-square bg-green-800 relative rounded-2xl shadow-lg border-4 border-gray-300">
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-2">
      {[...Array(36)].map((_, i) => (
        <div key={i} className="bg-green-700 border border-green-600 rounded" />
      ))}
    </div>
  </div>
);

const Robot = ({ x = 3, y = 3, heading = 0 }) => (
  <motion.div
    className="absolute w-16 h-16 bg-red-600 rounded-full border-4 border-white shadow-lg"
    initial={false}
    animate={{
      left: `${x * 60}px`,
      top: `${y * 60}px`,
      rotate: heading,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    style={{ transformOrigin: "center" }}
  />
);

const FieldVisualizer = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">FTC Field Visualizer</h1>
      <div className="relative w-[360px] h-[360px] mx-auto">
        <Field />
        <Robot x={2} y={2} heading={45} />
      </div>
    </div>
  );
};

export default FieldVisualizer;
