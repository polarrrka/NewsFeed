import Link from "next/link";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/home.module.css";

export default function IndexPage() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Latest articles</h3>
      </div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
