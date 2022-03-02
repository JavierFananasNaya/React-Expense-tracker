import React, { useState } from "react";

function HookExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>You clicked the button {count} times, well done!</span>
      {count > 10 && (
        <React.Fragment>
          <div>Amazing!!</div>
        </React.Fragment>
      )}

      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

export default HookExample;
