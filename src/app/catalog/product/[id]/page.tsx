//By default, Next.js uses Server Components. This allows you to automatically implement server rendering with no additional configuration, and you can opt into using Client Components when needed, see Client Components.
//Doc  https://nextjs.org/docs/app/building-your-application/rendering/server-components
//Introducing Zero-Bundle-Size React Server Components https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components
//To use Client Components, you can add the React "use client" directive at the top of a file, above your imports.
//"use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
//DOC: https://react.dev/reference/rsc/use-client
//I need to use the client side if the application requires any user iteration, where javascript will be used (to trigger a function when clicking a button, for example)
// "use client";

import { AddToCartButton } from "./add-to-cart-button";

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product(props: ProductProps) {
  const response = await fetch("https://api.github.com/users/samuelmenecucci");

  const user = await response.json();

  console.log(props);

  // function handleAdd() {
  //   console.log("Added");
  // }

  return (
    <>
      <h1>Product: {props.params.id}</h1>
      {/* <button onClick={handleAdd}>Adicionar ao carrinho</button> */}
      {/* As I cannot use an asynchronous component when it is a client component, I can separate what is a client from what is a server. A server component can use a component that is a server component. Since my entire component here only needs to be a client component because of the button, I can separate the components that are client components from those that are server components. that is, I can leave the part that is a server component from that which is client component, this way I only load the javascript that is necessary.
       */}
      <AddToCartButton />
    </>
  );
}
