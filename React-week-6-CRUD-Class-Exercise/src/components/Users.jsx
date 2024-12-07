import { UserCard } from "./UserCard";


export function Users(props) {
  console.log(props);
  

  return(
    <div >
      {props.users.map((user) => {
        return(
          <div key={user.id} className="">
            <UserCard  userInfo={user} />
          </div>
          
        )
      })}
    </div>
  )
}  