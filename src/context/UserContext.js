import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { contextFactory } from "./helpers/contextFactory";
import { useURLParams } from "../hooks";
import spotify from "../services/spotify";
import { withAsync } from "../helpers";

//console.log({ spotify });
const [useUserContext, UserContext] = contextFactory();
const [useUserActionsContext, UserActionsContext] = contextFactory();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const history = useHistory();
  const urlParams = useURLParams();

  const getDetailsFromStorage = () => {
    const data = window.localStorage.getItem("user-details");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getDetailsFromURL = () => {
    const id = urlParams.get("id");
    const access_token = urlParams.get("access_token");
    const refresh_token = urlParams.get("refresh_token");
    const timestamp = Date.now();
    if (id && access_token && refresh_token) {
      return {
        id,
        access_token,
        refresh_token,
        timestamp,
      };
    }
    return null;
  };

  const scheduleTokenRefresh = (user, timeout) => {
    setTimeout(() => {
      refreshToken(user);
    }, timeout);
  };

  const handleTokenRefresh = async (data) => {
    // Check if the token needs to be refreshed immediately
    // if not, schedule a token refresh
    const now = Date.now();
    // Get the time difference since now and the last token update
    let timeElapsed = now - data.timestamp;
    // Get the time in seconds
    timeElapsed /= 1000;
    // The token is valid for 60 minutes only
    const tokenExpiryMinutes = 60;
    // We want to fresh the token every 55 minutes
    const tokenRefreshMinutes = 55;
    // Check how many minutes are left until we need to
    // refresh the token
    const minutesSinceRefresh = timeElapsed / tokenExpiryMinutes;

    // If more than tokenRefreshMinutes passed, refresh the token immediately
    if (minutesSinceRefresh >= tokenRefreshMinutes) {
      await refreshToken(data);
    } else {
      // Schedule the token refresh
      const timeout = (tokenRefreshMinutes - minutesSinceRefresh) * 60 * 1000;
      scheduleTokenRefresh(data, timeout);
    }
  };

  /**
   * After the login, send an API request
   * The endpoint should check if the user already exists
   * If it doesn't exist, create one
   * Sync spotify data
   * Put data in the databse
   */

  const createSyncUser = async ({ id, access_token }) => {
    //console.log("create user", id);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/users`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: id,
          }),
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      let data = null;
      const detailsFromStorage = getDetailsFromStorage();

      if (detailsFromStorage) {
        data = detailsFromStorage;
      } else {
        data = getDetailsFromURL();
      }

      if (data) {
        // Set new access token on the spotify service
        // Update user in the state and local storage
        spotify.setAccessToken(data.access_token);
        setUser(data);
        window.localStorage.setItem("user-details", JSON.stringify(data));
        history.push("/dashboard/search-playlists");

        await Promise.all([handleTokenRefresh(data), createSyncUser(data)]);
      } else {
        // User is not logged in, go to the landing page
        history.push("/");
      }

      setInitialized(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = (redirect = false) => {
    setUser(null);
    spotify.setAccessToken(null);
    window.localStorage.removeItem("user-details");
    redirect && history.push("/");
  };

  const refreshToken = async (data) => {
    /**
     * If we have user data passed via an argument then use it
     * Otherwise, fallback to the user object from the state
     * We need to do it this way, because of stale data due to useEffect closure
     */
    const userData = data || user;
    const { refresh_token } = userData;
    // Refresh the token
    // TODO - need error here?
    //const { response, error } = await withAsync(() =>
    const { response } = await withAsync(() =>
      fetch(
        `${process.env.REACT_APP_BASE_URL}/refresh_token?refresh_token=${refresh_token}`
      )
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        })
    );

    const { access_token } = response || {};
    // If we have the token, then update the state, storage, and schedule another refresh
    if (access_token) {
      spotify.setAccessToken(access_token);
      const updatedUser = {
        ...userData,
        access_token,
      };
      setUser(updatedUser);
      window.localStorage.setItem("user-details", JSON.stringify(updatedUser));
      scheduleTokenRefresh(updatedUser, 1000 * 60 * 55);
      return true;
    }
    // Refresh failed
    logout(true);
    return false;
  };

  const values = useMemo(() => {
    return {
      user,
      isAuthenticated: !!user,
    };
  }, [user]);

  const actions = useMemo(() => {
    return {
      setUser,
      logout,
      refreshToken,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserContext.Provider value={values}>
      <UserActionsContext.Provider value={actions}>
        {initialized ? props.children : null}
      </UserActionsContext.Provider>
    </UserContext.Provider>
  );
};

export { useUserContext, useUserActionsContext };
export default UserContextProvider;
