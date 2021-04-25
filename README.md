# My Spotify Data

## App Summary

The `My Spotify Data` application enables users to search their playlists, looking for songs. This is functionality not provided by the Spotify interface. In addition, the app enables a user to view their recent listening history and export their song data to a CSV file.

## Live App

https://my-spotify-data-client.vercel.app

## APIs & Database Used

- Spotify Developer APIs to GET the user's playlists, tracks, and current listening history.
- Heroku PostgreSQL 'spotify' database with spotify_users, playlists, and tracks tables.

## Landing Page

The landing page gives you an overview of the application and allows you to log in using either your own Spotify credentials or a test user's credentials. A link to About help is provided for additional information about the app.

![Alt text](./src/images/LandingPage.jpg?raw=true "LandingPage" {height=350 width=250px})

## Search My Playlists Screen

The Search My Playlists screen enables you to search your playlists to find where you have saved a particular song. Two filter options are provided: 1) text option, 2) Spotify URL option.

![Alt text](./src/images/SearchMyPlaylists.jpg?raw=true "SearchMyPlaylists"){:height="350px" width="200px"}

## View Listening History Screen

The View Listening History screen provides a display of the most recent songs you have listened to (up to a max of 50).

![Alt text](./src/images/ViewListeningHistory.jpg?raw=true "ViewListeningHistory"){:height="350px" width="200px"}

## Manage Data Screen

The Manage Data screen enables you to sync data after you are already logged into the app. It also enables you to export your song data to a csv file.

![Alt text](./src/images/ManageData.jpg?raw=true "ManageData"){:height="350px" width="200px"}

## Technology Used

- JavaScript
- React
- PostreSQL
- Node.js
- Express
- CSS/HTML
