//import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav(props) {
  return (
    <>
      <nav className={styles.navContainer} role="navigation">
        <div className="login">Log in</div>
        <div className={styles.about}>About</div>
      </nav>
    </>
  );
}

export default Nav;
