import React, { useContext } from "react";
import { Global } from "./App";

export default function Check() {
  const val = useContext(Global);
  return (
    <div>
      <h1>{val.name}</h1>
      <h1>{val.lastName}</h1>
    </div>
  );
}
