// src/components/Smart.js

import React from 'react';

const Smart = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-yellow-500 text-white rounded-lg shadow-lg">
      <div className="text-xl font-semibold mb-4">Smart Insights</div>
      <div className="space-y-2">
        <p>📊 Predicted next month expenses: ₹13,500</p>
        <p>💡 Tip: Your food expenses are 20% higher than last month</p>
        <p>🎯 You're on track to reach your savings goal!</p>
      </div>
    </div>
  );
};

export default Smart;