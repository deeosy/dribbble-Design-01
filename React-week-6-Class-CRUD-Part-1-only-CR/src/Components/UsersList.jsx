import { UserCard } from "./UserCard"



export function UsersList(props){
  return(
    <>
      <div className="flex flex-wrap gap-4">
        {props.users.map((user) => {
          return (
            <UserCard name={user.name} email={user.email} password={user.password} key={user.id} />
          )
        }
        )}
      </div>
    </>
  )
}