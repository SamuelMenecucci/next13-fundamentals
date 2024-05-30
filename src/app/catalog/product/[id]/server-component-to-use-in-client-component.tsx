export async function ServerComponentToUseInClientComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <h1>Server component to use in client component</h1>;
}
