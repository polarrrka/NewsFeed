import { useRouter } from "next/router";
import styles from "../styles/toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/about")}>EOM</div>
      <div onClick={() => (window.location.href = "https://google.com")}>
        Twitter
      </div>
    </div>
  );
};
