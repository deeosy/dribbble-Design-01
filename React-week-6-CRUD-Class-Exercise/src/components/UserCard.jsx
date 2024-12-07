export function UserCard(props) {
  // console.log(props);
  
  return( 
    <div className="border border-black w-[300px] mx-[10px] my-[6px]" >
      <h1 className=''>Name: {props.userInfo.name} </h1>
      <h1>eMail: {props.userInfo.email} </h1>
      <h1>Gen: {props.userInfo.gen} </h1>
    </div>
  )
} 