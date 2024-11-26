export function ConditionalRendering () {
  let isAuthenticated = false;
  isAuthenticated =true;


  //  using turnary Operators to write conditional rendering below. with only two outcomes possible. true or false outcomes
  return ( isAuthenticated ? (
    <div className="">
      <h1 className="text-[100px] ">Welcome, User! </h1>
    </div>
    ) : (
    <div className="">
      <h1 className="text-[70px] text-right " >You are not logged in</h1>
    </div>
    )
  )

  // // if else statement and how to use them in conditional rendering
  // if(isAuthenticated) {
  //   return(
  //     <div className="">
  //       <h1 className="text-[100px] ">Welcome, User! </h1>
  //     </div>
  //   )
  // } 
  // return(
  //   <div className="">
  //     <h1 className="text-[100px] " >You are not logged in</h1>
  //   </div>
  // )
}