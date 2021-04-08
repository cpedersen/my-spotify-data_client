import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { contextFactory } from "./helpers/contextFactory";
import { useURLParams } from "../hooks";
import spotify from "../services/spotify";
console.log({ spotify });
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

    if (id && access_token && refresh_token) {
      return {
        id,
        access_token,
        refresh_token,
      };
    }
    return null;
  };

  useEffect(() => {
    let data = null;
    const detailsFromStorage = getDetailsFromStorage();

    if (detailsFromStorage) {
      data = detailsFromStorage;
    } else {
      data = getDetailsFromURL();
    }

    if (!data) {
      history.push("/");
    } else {
      console.log(`Setting access token: ${data.access_token}`);
      spotify.setAccessToken(data.access_token);
      setUser(data);
      window.localStorage.setItem("user-details", JSON.stringify(data));
      history.push("/dashboard/search-playlists");
    }
    setInitialized(true);
  }, []);

  const logout = () => {
    setUser(null);
    spotify.setAccessToken(null);
    window.localStorage.removeItem("user-details");
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
    };
  }, []);

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
