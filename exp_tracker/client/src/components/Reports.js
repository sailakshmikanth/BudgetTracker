// Reports.js
import React from 'react';

export default function Reports({ isDark }) {
  return (
    <div className={`p-4 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-lg`}>
      {/* Report content */}
    </div>
  );
}
