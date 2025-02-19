const http = require('http')

const handleAllRequests = (requestObject, responseObject) => {
  console.log('I just received a request');
  // console.log(requestObject);
  
  responseObject.write('This is your response. \n'); // first response Object \n is used to write on a new line
  responseObject.write('Another part of your response.'); // second response Object
  responseObject.write('<h1>this is my heading</h1>. \n \n \n '); // you can write html here as well
    
  const url = requestObject.url;

  if(url === '/'){
    responseObject.write("<h1>Welcome to the home page</h1>")
  }else if(url === '/login'){
    responseObject.write("<h1>Welcome to the log in page</h1>")
  }else if(url === '/signup'){
    responseObject.write("<h1>Welcome to the sign up page</h1>")
  }else {
    responseObject.write("<h1>Page not found</h1>")
  }

  responseObject.end();
  
}
const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready to accept a request')) //ip address 127.0.0.1 has been globally agreed upon to be the local host for the pc calling it