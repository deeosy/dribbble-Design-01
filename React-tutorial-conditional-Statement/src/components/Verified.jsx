import verifiedLogo from '../assets/verified.svg'

export function Verified() {
  return(
    <div className="m-4 text-[20px] text-white text-center font-semibold bg-black border border-black rounded-md px-4 py-2 w-[400px] flex items-center gap-2">
      <img src={verifiedLogo} alt="" className="h-[30px] w-[30px] " />
      <h2>Your Account has been <span className="text-green-500" >Verified</span></h2>
  </div>
  )
}