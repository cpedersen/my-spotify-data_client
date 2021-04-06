import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav(props) {
  return (
    <>
      <nav className={styles.navContainer} role="navigation">
        <div className="login">
          <Link to="/">Log in</Link>
        </div>
        <div className={styles.about}>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
