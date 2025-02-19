// creating server
const http = require('http')  //step 1

//creating our controller
const handleAllRequest = (req, res) => {
//   console.log("Hi, i just received a request."); 
//   res.write("This is your response")

  const url =req.url;  //step 5
  if(url === "/"){
    res.write("<h1>Welcome to the Home Page</h1>")
  }else if(url === "/about"){
    res.write("<h1>Welcome to the About Page</h1>")
  } else{
    res.write('<h1> Page not found </h1>')
  }

  res.end();
  
}  //step 4

const server = http.createServer(handleAllRequest) //step 2

server.listen(3000, "127.0.0.1", () => {
  console.log("Hi, i am your server!");
  
})  //step 3 

// server.listen(3000, localhost, () => {
//   console.log('Hi, i am your server');
  
// })