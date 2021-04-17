import React, { useState, useEffect } from "react";
import { useJsonToCsv } from "react-json-csv";
import { useUserContext } from "../../context/UserContext";
import { apiStatus } from "../../constants";
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
        `${process.env.REACT_APP_API_BASE_URL}/api/users/export-data/${id}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer: ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log({ data });

      setSyncStatus(SUCCESS);
      saveAsCsv({
        data: data.rows,
        fields: ["track_name", "playlist_name"],
        filename: "Playlist tracks",
      });
    } catch (error) {
      console.error(error);
      setSyncStatus(ERROR);
    }
  };

  return (
    <>
      {syncStatus === ERROR
        ? "There was a problem while syncing. Please try again."
        : null}
      <button onClick={getData} disabled={syncStatus === PENDING}>
        {syncStatus === PENDING ? "Downloading..." : "Download data"}
      </button>
    </>
  );
};

export default ExportData;
