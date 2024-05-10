import React, { useState } from 'react';

function Eg() {
  // State to manage the visibility of a component
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>

      {/* Conditionally render a component based on the visibility state */}
      {isVisible && <MyComponent />}
    </div>
  );
}

// Example component to be conditionally rendered
function MyComponent() {
  return <div>This component is now visible!</div>;
}

export default Eg;
