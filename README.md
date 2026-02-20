# Welcome to my Clone app at my second assignment in mobile development class 
1. How can clone it ?
-Just copy the link github then go to VSCode and open 'terminal' then type 'git clone' and past the link that you copied
2. How can run it?
-Make sure that you install nodeJs first, then cd to the folder 'spotify-clone'.
-Type
        ```npm install```
- Finally, type in the terminal
        ```npx expo start```

3. Here is the tree of assignment
```
───app
│   │   _layout.tsx
│   │
│   ├───(auth)
│   │       login.tsx
│   │
│   └───(tabs)
│       │   library.tsx
│       │   premium.tsx
│       │   search.tsx
│       │   settings.tsx
│       │   _layout.tsx
│       │
│       └───homepage
│           │   index.tsx
│           │   _layout.tsx
│           │
│           └───songs
│                   [id].tsx
│
├───assets
│   └───images
│       └───spotifyImages
│           ├───albums
│           │       BadBunny.jpg
│           │       SabrinaCarpenter.jpg
│           │       TheWeeknd.jpg
│           │
│           ├───artists
│           │       BrunoMars.jpg
│           │       MarshMello.jpg
│           │       ShawnMendes.jpg
│           │       TaylorSwift.jpg
│           │       TheWeeknd.jpg
│           │
│           ├───others
│           │       downloadIcon.png
│           │       LikedSongs.jpg
│           │       myPlaylist.jpg
│           │       spotifyWhite.png
│           │
│           ├───radios
│           │       Drake.jpg
│           │       Hozier.jpg
│           │       NickleBack.jpg
│           │
│           └───songs
│                   BeautyAndABeat.jpg
│                   FlashingLights.jpg
│                   MothToAFlame.jpg
│
├───components
│       AppCard.tsx
│       AuthContext.tsx
│       ThemeContext.tsx
│
└───styles
        theme.tsx
```
