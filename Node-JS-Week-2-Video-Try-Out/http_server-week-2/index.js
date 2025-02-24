const express = require("express");

const server = express();
const port = 4000

const handleHomepage = (req, res) => res.send("<h1>Welcome to the Home Page!</h1>")

// POST is used to create
// GET is used to retrieve
// PUT is used to edit 
// DELETE is used to delete

const handleCreate = (req, res) => res.send("Data created successfully")
const handleRetrieve = (req, res) => res.send("Data is recieved")


server.post("/", handleCreate)
server.get("/about", handleRetrieve)
// server.put()
// server.delete()

server.get("/", handleHomepage )

server.listen(port, () => console.log(`Server is live on: http://localhost:${port}`))

