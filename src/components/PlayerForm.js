import React from "react";

export default function(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Player Name</label>
      <input value={props.name} name="name" onChange={props.onChange} />
      <label>Player Number</label>
      <input value={props.number} name="number" onChange={props.onChange} />
      <input type="submit" />
    </form>
  );
}
