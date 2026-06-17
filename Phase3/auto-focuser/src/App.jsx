import {useState, useRef, useEffect} from "react";

const ChatInput=()=>{
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(1);

  useEffect(()=>{
    renderCount.current=renderCount.current+1;
  });

  return(
   <div>
      <h1>Chat Input</h1>
      <input ref={inputRef} type="text" placeholder="Type your message..." value={text} onChange={(e)=>setText(e.target.value)}/>
      <p>Component has rendered {renderCount.current} times</p>
      <button onClick={()=>inputRef.current.focus()}>Focus Input</button>
   </div>
  );
}

export default ChatInput;