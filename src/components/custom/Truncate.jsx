import _ from "lodash";
import { useState } from "react";

function Truncate({length = 100, children}) {
  const [open, setOpen] = useState(false);

  function truncate(text) {
    if(open) return text;
    return _.truncate(text, {length});
  }

  if (typeof children !== "string") {
    return children
  }

  return (
    <p>
      {truncate(children)}
      <span className="text-primary underline cursor-pointer flex" onClick={()=>setOpen((open)=>!open)}>
        {open?"Show less...":"Show more..."}
      </span>
    </p>
  )
}

export default Truncate;