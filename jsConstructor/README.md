# Custom Website Constructor in JavaScript
## project tutorial from ->  Vladilen Minin
https://www.youtube.com/watch?v=0ViiJ8qTCFM&t=2692s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

## environment prepearing instalation

!!! check if you in correct direction

1) npm init -> create packaje.json

2) before start project istall parcel !!! 
https://parceljs.org/getting_started.html

npm install parcel-bundler --save-dev

3) edit packaje.json scripts (create our tasks)

  "scripts": {
    "serve": "parcel ./src/index.html -p 4200 --open --no-source-maps",
    "build": "parcel build ./src/index.html --no-source-maps"
  },

4) run builder -> npm run serve

## solutions

1) if you dont see your image -> check path - and move assets if it needs

2) MODULES -> without parcel (your server you cant import/export components)