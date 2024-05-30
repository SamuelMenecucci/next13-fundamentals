//Now, if I create another loading file within the specific directory that also fetches data, the loading.tsx will be the directory, not the root.
//The loading.tsx file works differently than layout.tsx. while layout.tsx works in a chained manner (if I create another layout within a directory, the root and directory layout will be displayed), loading will always look for the loading.tsx of the closest parent.
export default function CatalogLoading() {
  return <p>Loading catalog...</p>;
}
