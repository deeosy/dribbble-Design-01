const express = require("express")

const server = express()

const handleLogin = (req, res) => (res.send("<h2>This is the Login page!</h2>"))

 server.get("/login", handleLogin )

server.listen(4000, "127.0.0.1", () => console.log("Server is ready for action"))