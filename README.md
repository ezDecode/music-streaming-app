# Music Streaming App

A modern music streaming application that allows users to stream their favorite music, create playlists, and discover new tracks.

## Features

- **User Authentication**: Secure login and registration system.
- **Music Streaming**: Stream high-quality music from a vast library.
- **Playlists**: Create, edit, and share playlists.
- **Search**: Search for songs, albums, and artists.
- **Recommendations**: Get personalized music recommendations.
- **Offline Mode**: Download songs for offline listening.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for database)

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/music-streaming-app.git
    cd music-streaming-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/music-streaming-app
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the application**:
    ```sh
    npm start
    ```

5. **Access the application**:
    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Register**: Create a new account using the registration form.
2. **Login**: Log in with your credentials.
3. **Browse Music**: Explore the music library and play songs.
4. **Create Playlists**: Add your favorite songs to custom playlists.
5. **Search**: Use the search bar to find specific songs, albums, or artists.
6. **Recommendations**: Check out the recommended tracks based on your listening history.
7. **Offline Mode**: Download songs to listen offline.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
