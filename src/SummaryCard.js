import React from "react";

export default function Cards(props) {
    return(
        <div className="summary-card">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
    )
}