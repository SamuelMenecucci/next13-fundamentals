with next I can create dynamic routes to receive parameters.
so that I can use parameterized routes in next, I just need to create a directory in which the page is in square brackets.

for example: if I have a route that refers to a product, I need to get the id of that product per parameter. so that I can do this in the route app, I just need to place the page.tsx referring to the product, inside a directory between square brackets. In this case, here I do [id]. The name I put inside the brackets is whatever I choose.

To access this route, I pass catalog/produt/"id" (in this case, any id that refers to the product). If I pass 1 for example, next will understand that 1 is the id that I created as a directory. that is, every time I put a bracket, it means I will receive a parameter.

How do I access a parameter within my component?
These parameters are sent by property. Inside the component referring to the page I can pass "props" as a parameter and give a console.log and I will get the following.

```tsx
export default function Product(props: any) {
  console.log(props);

  return <h1>Product</h1>;
}
```

```js
{ params: { id: '1' }, searchParams: {} }
```

the name I give to the directory that refers to the parameter is the name that will appear inside params.
ps: all the properties that I pass through params will be of the string type. I can type the parameters that I receive

```tsx
interface ProductProps {
  params: {
    id: string;
  };
}

export default function Product({ params }: ProductProps) {
  console.log(params);

  return <h1>Product</h1>;
}
```

```js
{
  id: "1";
}
```

If I have a route that receives multiple parameters, so that I can access them within my component, instead of creating the directory with [id], I pass [...id] (I can pass another name, like [ ...data]).

to access within the component it is the same way, but instead of just bringing me a string, it will return an array with all the parameters, each parameter being a position in the array. for example:

```js

{ params: { data: [ '2', 'red', 'test' ] }, searchParams: {} }
```
