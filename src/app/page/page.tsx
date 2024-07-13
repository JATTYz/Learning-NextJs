import styles from ".././page.module.css";
import test from "./test"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>This is page {test()}</h1>
      </div>
    </main>
  );
}