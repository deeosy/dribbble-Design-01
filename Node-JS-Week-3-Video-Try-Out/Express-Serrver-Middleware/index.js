const express = require('express')
const path = require('path') // Step 1 finding the file path

const server = express();
const port = 4000;
console.log(express());


server.use(express.static(path.join(__dirname, 'Public')))

// const handleHome =(req, res) => {
//   const homepageFile = path.join(__dirname, 'Public', 'index.html') // Step 2 finding the file path
//   res.sendFile(homepageFile);
// }
// const handleContact =(req, res) => res.send('<h1>Contact Page</h1>')
// const handleLogin = (req, res) => res.send("<h1>Login Page</h1>")

// const middleware =(req, res, next) => {
//     console.log('hello this is the general middleware');
//     next()
// }

// const routeSpecificMiddleware = (req, res, next) => {
//   console.log('login route middleware excuted');
//     next();
// }




// server.use(middleware ) // .use to define General Middlewares

// server.get()
// server.get('/login', routeSpecificMiddleware, handleLogin) // this handles the route specific middleware
// server.post('/contact',handleContact )
// server.get('/',handleHome )

server.listen(port, 'localhost', console.log(`http://localhost:${port}`))