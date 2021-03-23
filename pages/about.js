import styles from "../styles/about.module.css";
import { Toolbar } from "../components/toolbar";

export default function AboutPage({ employee }) {
  console.log(employee);
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>About Page</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const res = await fetch(
    "https://my-json-server.typicode.com/polarrrka/NewsFeed/employeeofTheMonth"
  );

  const employee = await res.json();

  return {
    props: {
      employee
    }
  };
};
