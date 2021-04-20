import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { apiStatus } from "../../constants";
import styles from "./syncData.module.css";
import config from "../../config";
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus;

const SyncData = () => {
  const [syncStatus, setSyncStatus] = useState(IDLE);
  const { user } = useUserContext();
  const { id, access_token } = user;
  console.log({ access_token, id });
  const syncData = async () => {
    try {
      setSyncStatus(PENDING);
      const response = await fetch(
        `${config.REACT_APP_BASE_URL}/api/tracks/sync`,
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
      console.log({ response });
      setSyncStatus(SUCCESS);
    } catch (error) {
      console.error(error);
      setSyncStatus(ERROR);
    }
  };

  return (
    <>
      <div className={styles.errorContainer}>
        {syncStatus === ERROR
          ? "There was a problem while syncing. Please try again."
          : null}
      </div>
      <button onClick={syncData} disabled={syncStatus === PENDING}>
        {syncStatus === PENDING ? "Syncing..." : "Sync data"}
      </button>
    </>
  );
};

export default SyncData;
