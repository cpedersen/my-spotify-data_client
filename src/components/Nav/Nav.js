import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import {
  useUserContext,
  useUserActionsContext,
} from "../../context/UserContext";

function Nav({ hideLogo = false }) {
  const { user, isAuthenticated } = useUserContext();
  const { logout } = useUserActionsContext();

  return (
    <>
      <header className={styles.header}>
        {isAuthenticated && (
          <nav className={styles.topNavContainer} role="navigation">
            Username: ${user.id}
          </nav>
        )}
        <nav className={styles.navContainer} role="navigation">
          {!hideLogo && <h1 className={styles.title}>My Spotify Data</h1>}
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
      </header>
    </>
  );
}

export default Nav;
