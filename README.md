# React Gallery

### Requirements

- Node.js
- NPM

### Installation

Replace the value in the following line in App.jsx with the Unsplash API key.
```
const API_KEY = "INSERT_API_KEY_HERE";
```

Clone the repo and run the following commands:

```
npm i && npm run dev
```

Alternative:
```
npm install
npm run dev
```

### Description

Simple react gallery utilising the Unsplash images API. Currently the app uses the demo version so it's limited to 50 requests/hour.

### Features

- Fully mobile responsive
- Render images from Unsplash API based on user search
- Ability to enlarge and scroll between images
- Ability to like/unlike images locally, initially the Unsplash API likes are displayed

### Libraries used

- Axios
- Styled Components
- React Icons