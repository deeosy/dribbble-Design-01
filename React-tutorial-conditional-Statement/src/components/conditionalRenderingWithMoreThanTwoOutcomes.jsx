import verifiedLogo from '../assets/verified.svg'
import notVerifiedLogo from '../assets/notVerified.svg'
import disabledAccountLogo from '../assets/disabledAccount.svg'
import { NotVerified } from './NotVerified'
import { Verified } from './Verified'
import { AccountDisabled } from './AccountDisabled'


export function MoreThan2Outcomes () {

  // Not_Verified | Verified | Account_Disabled

  const userStatus = "null"
 
  if (userStatus === "Not_Verified") {
    return (
      <NotVerified />
    )
  } else if (userStatus === "Verified") {
    return(
      <Verified />
    )
  } else if (userStatus === "Account_Disabled") { 
    return(
      <AccountDisabled />
    )
  } return(
  <div className="m-4 text-[20px] text-white text-center font-semibold bg-black border border-black rounded-md px-4 py-2 w-[400px]">
    <h2>
      Please contact Admin
    </h2>
  </div>
  )
}