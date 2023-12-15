const express = require('express');
const postRoutes = require("./routes/posts.js")
const postDetailsRoutes = require("./routes/postDetails.js")
const cors = require('cors');



const app = express();
app.use(cors());
const port = 8800

app.use(express.json())
app.use("/api/posts/",postRoutes)
app.use("/", postDetailsRoutes);



app.listen(port, () => {
  console.log("Connected !")  
})


