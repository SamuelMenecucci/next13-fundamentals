//To use Client Components, you can add the React "use client" directive at the top of a file, above your imports.
//"use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
//DOC: https://react.dev/reference/rsc/use-client
//I need to use the client side if the application requires any user iteration, where javascript will be used (to trigger a function when clicking a button, for example)

//Any component that is declared within a client component will automatically be a client component as well. This way, if I want a component to be a server component, I cannot declare it inside the client component.
//This is called client boundaries.
//Client boundary is the name we give to the barriers that are created in the code that divides the layer from a server component to a client component. From the moment I used a client component, I created a client boundary. All components declared in the component that is client component will automatically be client component.
//The only way to use a server component within a client component is to pass the server component as children.
"use client";

import { ReactNode, useState } from "react";

//The smaller the components that use client the better. as it means I'm sending less javascript to the browser. the less javascript for the browser, the faster the application
export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    console.log("Added");
    setCount((state) => state + 1);
  }

  return (
    <>
      <button onClick={handleAdd}>Add to cart ({count})</button>
      {children}
    </>
  );
}
