const dbConnect = require("./dbConnect");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 1111;

dbConnect();

app.use(cors());
app.use(express.json());

app.use("/api/admin", require("./apis/admin"));
app.use("/api/auth", require("./apis/user"));
app.use("/api/notes", require("./apis/notes"));

app.use("/app", express.static(path.join(__dirname, 'build')))
app.get('/app/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
