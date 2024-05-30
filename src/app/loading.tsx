//When I have a server component that fetches data, like I have in page.tsx, I can create a loading.tsx file, at the same level as the page referring to the component, and it will be the component that will be displayed while promises are not resolved. This way, the user does not need to have a blank screen while requests are made and feedback to the user is instantaneous.
//

//When we create a loading.tsx file next to a page.tsx file that has some type of data loading, until this data loading is finished, next automatically displays the contents of loading.tsx in place of the file. This way, the user accessing the application is not waiting for this component to finish loading to get visual feedback. In this loading tsx file I can put a spinner or a skeleton. The most interesting thing about this loading.tsx file is that it inherits layout.tsx, so it is also displayed during loading.
//When I create the loading.tsx file in the root of my app directory, it becomes valid for all application routes. That is, if I have a component that fetches data from my catalog, for example, the contents of the root's loading.tsx will also be used by it.
//Now, if I create another loading file within the specific directory that also fetches data, the loading.tsx will be the directory, not the root.
//The loading.tsx file works differently than layout.tsx. while layout.tsx works in a chained manner (if I create another layout within a directory, the root and directory layout will be displayed), loading will always look for the loading.tsx of the closest parent.
export default function RootLoading() {
  return <p>Loading...</p>;
}
