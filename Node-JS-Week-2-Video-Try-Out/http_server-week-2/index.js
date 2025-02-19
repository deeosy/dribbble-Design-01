const express = require('express') // to import the express package

const handleAllRequests = (requestObject, responseObject) => {
  console.log('I just received a request');

  const url = requestObject.url;

  responseObject.setHeader("content-type","text/html"); // this enables browser to identify html text and display them

    responseObject.write("<h1>Page not found </h1>") 

  responseObject.end();
  
}

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to the home page</h1>")
}
const handleLoginRequest = (req, res) => {
  res.send("<h1>Welcome to the log in page</h1>")
}
const handleSignupRequest = () => {
  res.send("<h2>Welcome to the sign up page</h2>")
}
const handleErrorPage = () => {
  res.send("<h1>Page not found </h1>")
}

const server = express();
server.use('/login', handleLoginRequest);
server.use('/signup', handleSignupRequest);
server.use("*", handleErrorPage);
server.use('/', handleHomeRequest);


server.use(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready to accept a request')) //ip address 127.0.0.1 has been globally agreed upon to be the local host for the pc calling it