//To use Client Components, you can add the React "use client" directive at the top of a file, above your imports.
//"use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
//DOC: https://react.dev/reference/rsc/use-client
//I need to use the client side if the application requires any user iteration, where javascript will be used (to trigger a function when clicking a button, for example)
"use client";

import { useState } from "react";

//The smaller the components that use client the better. as it means I'm sending less javascript to the browser. the less javascript for the browser, the faster the application
export function AddToCartButton() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    console.log("Added");
    setCount((state) => state++);
  }

  return <button onClick={handleAdd}>Adicionar ao carrinho ({count})</button>;
}
