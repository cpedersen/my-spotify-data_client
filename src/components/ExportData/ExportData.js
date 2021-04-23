import React, { useState } from "react";
import { useJsonToCsv } from "react-json-csv";
import { useUserContext } from "../../context/UserContext";
import { apiStatus } from "../../constants";
import styles from "./exportData.module.css";
const { IDLE, PENDING, SUCCESS, ERROR } = apiStatus;

const ExportData = () => {
  const [syncStatus, setSyncStatus] = useState(IDLE);
  const { user } = useUserContext();
  const { saveAsCsv } = useJsonToCsv();
  const { id, access_token } = user;
  console.log({ access_token, id });
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
      console.log("data: ", data);

      setSyncStatus(SUCCESS);

      const numRows = data.rows.length;
      console.log("numRows: ", numRows);

      const typeObj = typeof data.rows;
      console.log("typeof: ", typeObj);

      const firstRow = data.rows[0];
      console.log({ firstRow });

      saveAsCsv({
        data: data.rows,
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

      <button onClick={getData} disabled={syncStatus === PENDING}>
        {syncStatus === PENDING ? "Downloading..." : "Download data"}
      </button>
    </>
  );
};

export default ExportData;
