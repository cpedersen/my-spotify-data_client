import React, { useState } from "react";
import { useJsonToCsv } from "react-json-csv";
import { useUserContext } from "../../context/UserContext";
import { apiStatus } from "../../constants";
import styles from "./exportData.module.css";
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus;

// Export song data to csv file
const ExportData = () => {
  const [syncStatus, setSyncStatus] = useState(IDLE);
  const { user } = useUserContext();
  const { saveAsCsv } = useJsonToCsv();
  const { id, access_token } = user;
  //console.log({ access_token, id });
  const getData = async () => {
    try {
      setSyncStatus(PENDING);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/users/export-data/${id}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer: ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      //console.log("data: ", data);

      setSyncStatus(SUCCESS);

      saveAsCsv({
        data: data.rows.map(({ track_name, playlist_name }) => ({
          track_name: `"${track_name}"`,
          playlist_name,
        })),
        fields: { track_name: "track_name", playlist_name: "playlist_name" },
        filename: "Playlist tracks",
      });
    } catch (error) {
      console.error(error);
      setSyncStatus(ERROR);
    }
  };

  return (
    <>
      <div className={styles.errorContainer}>
        {syncStatus === ERROR
          ? "There was a problem while downloading. Please try again."
          : null}
      </div>

      <button
        className={styles.button}
        onClick={getData}
        disabled={syncStatus === PENDING}
      >
        {syncStatus === PENDING ? "Downloading..." : "Download data"}
      </button>
    </>
  );
};

export default ExportData;
