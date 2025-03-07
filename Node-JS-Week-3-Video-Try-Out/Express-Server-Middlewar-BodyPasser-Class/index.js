const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const server = express()
const port = 4000

// const handleHome = (req, res) => {
//   res.send("<h1>Home Page</h1>")
// }

// serving static files

// const handleFiles = (req, res) => {
//   // locate your files
//    const homepage = path.join(__dirname, 'Public', 'login.html' )
//    // 
//    res.sendFile(homepage)
// }

// express.static(path.join(__dirname, 'Public'))

const handleLogin = (req, res) => {
    // let body= ''
    // req.on('data', (chunk) => {
    //   body += chunk
    // });
    // req.on('end', () => {
    //   console.log(body);
      
    // })

    console.log(req.body);
    

    res.send('Done')
}

// // middleware function
// const handleMiddleware = (req, res, next) => {
  //   console.log('this is middleware');
  //   next()
  // }
  
  server.use(express.static(path.join(__dirname,"Public")))

// server.use(handleMiddleware)  // general middleware 
// server.get('/', handleMiddleware, handleHome) // specific middleware
server.use(bodyParser.urlencoded({extended:false}))
 server.post('/login', handleLogin)
// server.get('/', handleFiles)    

server.listen(port, "localhost", console.log(`Server is live on http://localhost:${port}`)
)