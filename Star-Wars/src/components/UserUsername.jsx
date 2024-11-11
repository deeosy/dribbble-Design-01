export function UserUsername (props) {
  // console.log(props);
  return (
    <div>
      <b>Username: </b>
      <span>{props.username}</span>
      <br />
      <b>Last Name: </b>
      <span>{props.lastname}</span>
    </div>
  )
}