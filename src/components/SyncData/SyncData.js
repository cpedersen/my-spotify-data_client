import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { apiStatus } from "../../constants";
import styles from "./syncData.module.css";
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus;

// Sync data is used when a user is already logged in and wants to
// pull their most recent data from Spotify
const SyncData = () => {
  const [syncStatus, setSyncStatus] = useState(IDLE);
  const { user } = useUserContext();
  const { id, access_token } = user;
  //console.log({ access_token, id });
  const syncData = async () => {
    try {
      setSyncStatus(PENDING);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/tracks/sync`,
        {
          method: "post",
          body: JSON.stringify({
            userId: id,
          }),
          headers: {
            Authorization: `Bearer: ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.debug({ response });
      setSyncStatus(SUCCESS);
    } catch (error) {
      console.error(error);
      setSyncStatus(ERROR);
    }
  };

  return (
    <>
      <div role="textbox" className={styles.errorContainer}>
        {syncStatus === ERROR
          ? "There was a problem while syncing. Please try again."
          : null}
      </div>
      <button
        className={styles.button}
        onClick={syncData}
        disabled={syncStatus === PENDING}
      >
        {syncStatus === PENDING ? "Syncing..." : "Sync data"}
      </button>
    </>
  );
};

export default SyncData;
