import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props){
  console.log(props);
  props.callMe();
  return (
    <div className="">
      <h1>Hello World</h1>
      <UserUsername username="Derrode" lastname="Walter" />
      <b>Age: </b><span>{props.age}</span>
      <UserFavoriteFoods />
 
    </div>
  )
}