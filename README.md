# Media Server GUI powered by Rclone
### ⚠️⚠️ Not in active development ⚠️⚠️

## Introduction

This is a simple GUI for Rclone. Currently it's very hard-coded and expects the user to have a specific folder structure along with a pre-configured rclone remote, alongside a TMDB API key.

The app is currently not being actively developed, it was made as a proof of concept and to learn more about Tauri, Rclone and JavaScript in general. In the future, I might come back to this project and actually make it properly configurable and user-friendly.

## Screenshots

<div float="left">
    <img src="https://files.catbox.moe/18ttdn.png" style="width: 33%"/>
    <img src="https://files.catbox.moe/8xzbax.png" style="width: 33%"/>
    <img src="https://files.catbox.moe/dqb3pj.png" style="width: 33%"/>
</div>

https://github.com/jairo-litman/media-server-rclone-gui/assets/130161309/1b0fb6b0-d469-44ba-b30a-90b70e08c6fb



## Features

- List files and folders in a remote
- Get metadata for movies and series from TMDB
- Multi-platform (Windows and Linux)
- Available in English, Portuguese and Spanish

The app is built using Tauri, a framework for building desktop apps with web technologies. The backend is written in Rust and the frontend is written in TypeScript using Svelte.

An Rclone instance is spawned as a child process and communicates with the app in order to get the list of files and folders in the remote.

With the list of files and folders, the app then queries the TMDB API to get the metadata for each movie and series, this includes the title, release date, poster and backdrop images, and the overview.

The app is available in English, Portuguese and Spanish, and the user can switch between the languages at any time, this also affects the metadata that is fetched from TMDB. The internationalization is done using the i18next library.

## Building

### Prerequisites

- Windows or Linux
- Node.js
- NPM (or your favorite package manager)
- Rclone config (windows and linux binaries are included already)
- TMDB API key
- Rust
- [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites/)

### Rclone

You need to have a pre-configured rclone remote. The app expects a encrypted remote with the name `piratinha-crypt`. However, an unencrypted remote with the same name should work as well.

It should have the following folder structure:

```
piratinha-crypt:/
├── Filmes/
│   ├── The first movie (year)/
│   ├── The second movie (2015)/
│   └── The nth movie (2034)/
├── Series/
│   ├── The first series (year optional)/
│   ├── The second series/
│   └── The nth series (2034)/
└── Jogos/
```

The `Jogos` folder is optional as it was never properly implemented.

The rclone.conf file should be placed in `src-tauri/assets`

### TMDB API key

You need to have a TMDB API key. You can get one following their guide [here](https://developer.themoviedb.org/docs/getting-started).

Once you have your API key, you should place it in a file called `.env` in the root of the project (next to this README.md file). The file should look like this:

```env
VITE_TMDB_API_KEY="your_api_key_here"
```

### Running the app

First, install the dependencies:

```bash
npm install
```

Then, run the app:

```bash
npm run 'tauri dev'
```

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 - see the LICENSE file for details
