

export function UserCard({name, email, password}) {

 return(
  <div className=" border border-black rounded-md">
    <h3>Name: {name} </h3>
    <h3>Email: {email} </h3>
    <h3>Password: {password} </h3>
</div>
 )
}

