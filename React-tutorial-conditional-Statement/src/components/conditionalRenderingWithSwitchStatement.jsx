import { AccountDisabled } from './AccountDisabled'
import { NotVerified } from './NotVerified'
import { Verified } from './Verified'

export function ConditionalRenderingWithSwitch() {
  const userStatus = "Not_Verified"

  switch (userStatus) {
    case "Not_Verified" : {
      return (
        <NotVerified />
      )
    } case "Verified" : {
      return (
        <Verified />
      )
    } case "Account_Disabled" : {
      return (
        <AccountDisabled />
      )
    } default : {
      <div className="m-4 text-[20px] text-white text-center font-semibold bg-black border border-black rounded-md px-4 py-2 w-[400px]">
        <h2>Please contact Admin</h2>
    </div>
    }
  }

}