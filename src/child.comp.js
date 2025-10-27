// ChildComponent.js
import React from 'react';

// function ChildComponent({ message }) {
//   return <h3>{message}</h3>;
// }

function ChildComponent({ sendMessageToParent, message }) {
  console.log(sendMessageToParent, message)

  return <button onClick={() => { sendMessageToParent("eeleeeee") }}>Send Message</button>;
}

export default ChildComponent;