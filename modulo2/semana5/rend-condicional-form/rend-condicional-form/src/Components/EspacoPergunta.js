import React from "react";

export default function InputPergunta(props) {
  return (
    <div>
      <input onChange={props.onChange} value={props.value} />
    </div>
  );
}




  
