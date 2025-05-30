import React from "react";

function Dashboard() {
  return (
    <div className="ml-64 p-4"> {/* Add ml-64 to account for sidebar width */}
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        <p>Welcome to your dashboard! This content is protected and only visible after login.</p>
      </div>
    </div>
  );
}

export default Dashboard;
