import disabledAccountLogo from '../assets/disabledAccount.svg'

export function AccountDisabled() {
  return(
    <div className="m-4 text-[20px] text-white text-center font-semibold bg-black border border-black rounded-md px-4 py-2 w-[400px] flex items-center gap-2">
      <img src={disabledAccountLogo} alt="" className="h-[30px] w-[30px] " />
      <h2>
        Your account has been <span className="text-gray-400" >Disabled</span>
      </h2>
  </div>
  )
}