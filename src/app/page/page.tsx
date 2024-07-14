import { Suspense } from "react";
import styles from ".././page.module.css";
import test from "./test"
export default function Home() {
  const movies = Trending();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Suspense fallback={<p>Loading feed...</p>}>
        <h1>This is page {test()}</h1>
        {Trending()}
        </Suspense>
      </div>
      <div>
        <h1>TEST</h1>
      </div>
    </main>
  );
}



async function Trending() {
  let { results } = await getMovies();
  return (
    <div>
      <h3>Movies</h3>
      {results &&
        results.map((index) => {
          return <li>{index.title}</li>;
        })}
    </div>
  );
}

async function getMovies() {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}
