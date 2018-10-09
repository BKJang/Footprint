const express = require('express');
const path = require('path');
const os = require("os");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));

// if you need api routes add them here
app.get("/api/getUsername", function(req, res, next){
res.send({ username: os.userInfo().username });
});

app.listen(PORT, () => {
console.log(`Check out the app at http://localhost:${PORT}`);
});