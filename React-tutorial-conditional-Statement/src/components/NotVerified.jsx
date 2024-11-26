import notVerifiedLogo from '../assets/notVerified.svg'

export function NotVerified() {
  return (
    <div className="m-4 text-[20px] text-white text-center font-semibold bg-black border border-black rounded-md px-4 py-2 w-[400px] flex items-center gap-2">
      <img src={notVerifiedLogo} alt="" className="h-[30px] w-[30px] " />
      <h2>Your Account is <span className="text-red-500" >Not Verified</span></h2>
  </div>
  )
}