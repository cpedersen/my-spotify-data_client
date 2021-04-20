import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import {
  useUserContext,
  useUserActionsContext,
} from "../../context/UserContext";

function Nav(props) {
  const { isAuthenticated } = useUserContext();
  const { logout } = useUserActionsContext();
  return (
    <>
      <nav className={styles.navContainer} role="navigation">
        <div className="login">
          {isAuthenticated ? (
            <Link to="/" onClick={logout}>
              Log out
            </Link>
          ) : (
            <Link to="/"></Link>
          )}
        </div>
        <div className={styles.about}>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
