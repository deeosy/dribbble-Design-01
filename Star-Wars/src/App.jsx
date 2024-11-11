import { UserProfile } from "./components/UserProfile";


export default function App() {

const callMe = () => {
  console.log("Hello");
}

// function callMe(){
//   console.log("Hello")
// }

return (
  <div>
    <h1>Root Component</h1>
    <UserProfile age= {20}  callMe={callMe}/> {/* since we passing a numeric value we will be using the curly bracket instead of quotes to prepevent it from being a string */}
  </div>
  );
}
