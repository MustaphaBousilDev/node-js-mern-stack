/*
#01:create folder backend and create file inside this folder name server.js
#02:cmd(outside folder backend)(npm init) <- for modifie somthing in file package.json and created 
#03:create file outside folder backend name .gitignore and set inside home 
(
    node_modules
    .env
)
#04::cmd(outside folder backend)(npm i express dotenv mongoose colors)
#05::cmd(outside folder backend)(npm i -D nodemon)
#06::go to package.json modifie
-->(
    "scripts": {
        "start": "node backend/server.js",
        "server":"nodemon backend/server.js"
    },
)
#07::cmd(outside backend folder)(npm run server)
#-->result (
    show any output inside file server.js in console terminal
)

*/