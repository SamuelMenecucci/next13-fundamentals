//By default, next, when we are using server components, it waits for all requests to be completed to display the content, it waits for everything to finish before displaying anything. Regardless of whether any was returned long before or whether there is content that does not depend on the request (some static content). For example: I have the Home component that has text (which does not depend on any response), I have the GithubProfile component, which takes 2s to return the data, and I have the LongWaitComponent, which takes 5s. As I already have the GithubProfile data before LongWaitComponent, or as I already have static content that does not depend on waiting for other components, I can use a react API.
//So that I can display the data as I receive it, I can use react's Suspense API. Suspense is a component that is used around components that take a long time to return.
//With the suspense api I can create loading sessions (by adding spinner or skeleton) that are not global. For example, the loading.tsx component is global. it is a load for the entire page, so if I want to wait for a specific component and not the entire page, I use the suspense API

import { Suspense } from "react";

import { GithubProfile } from "./components/github-profile";
import { LongWaitComponent } from "./components/long-wait-component";

export default async function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sequi
        vel totam eligendi dolorum obcaecati temporibus, harum quaerat vero,
        corporis tenetur eaque delectus culpa quasi laudantium veritatis ipsum
        quibusdam amet.
      </p>
      <Suspense
        //o fallbak significa o que eu quero mostrar enquanto esse componente ainda não foi carregado
        fallback={<p>Carregando LongWaitComponent...</p>}
      >
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
