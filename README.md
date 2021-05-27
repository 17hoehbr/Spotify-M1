# Spotify-M1

An ARM64 native Spotify desktop app for M1 Macs

Based on my [apple-music-electron](https://github.com/17hoehbr/apple-music-electron) project for Linux.

# Usage

As of latest commit it now compiles however Spotify web player blocks electron browsers for some reason. I tried changing the User Agent which can sometimes let me glitch my way into the web player but songs do not play. I think the issue has something to do with when the URL changes during login.

# Building from source
Requirements: YARN https://classic.yarnpkg.com/en/docs/install

1. Clone project

```$ git clone https://github.com/17hoehbr/Spotify-M1.git```

2. Navigate to folder 

```$ cd Spotify-M1```

3. Install dependencies

```$ yarn install```

4. Compile

```$ yarn dist```

Alternatively you can run the app directly from source using
```$ yarn start```


# Credits

Made with [Electron-Builder](https://www.electron.build/).

DRM support will be provided by a custom version of electron by [castlabs](https://github.com/castlabs/electron-releases/).
