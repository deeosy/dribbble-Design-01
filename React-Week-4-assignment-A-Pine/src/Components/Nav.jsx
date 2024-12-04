import pineLogo from '../images/crown-svgrepo-com.svg'

export function Nav() {
  return(
    <>
      <div className="bg-yellow-200 h-[3%] border-4 border-slate-50 flex justify-center items-center">
          <img src={pineLogo} alt="crown logo" className="h-[18px] mr-[10px]"/>
          <p className="text-[10px]"><a href="#" className="underline">Click here</a> to experience our integrations with platforms more easily.</p>
      </div>
      <div className="flex justify-between items-center w-[90%] mx-[5%] my-[2%]">
          <div className="flex items-center">
              <img src={pineLogo} alt="Pine logo" className="h-[30px] mr-1" />
              <p className="text-12 font-bold">Pine</p>
          </div>
          <div className="flex items-center w-[55%]">
              <p className="text-[12px] rounded-sm mr-2 px-2 py-1 hover:bg-gray-200 hover:font-bold ">Home</p>
              <p className="text-[12px] rounded-sm mr-2 px-2 py-1 hover:bg-gray-200 hover:font-bold ">Company</p>
              <p className="text-[12px] rounded-sm mr-2 px-2 py-1 hover:bg-gray-200 hover:font-bold ">Pricing</p>
              <p className="text-[12px] rounded-sm mr-2 px-2 py-1 hover:bg-gray-200 hover:font-bold ">Product</p>
              <p className="text-[12px] rounded-sm mr-2 px-2 py-1 hover:bg-gray-200 hover:font-bold ">Contact</p>
          </div>
          <div className="flex items-center">
              <button className="text-[10px] font-bold mr-2 px-4 py-1 rounded-md hover:bg-gray-200">Login</button>
              <button className="text-[10px] font-bold mr-2 px-4 py-1 border border-black  rounded-md hover:bg-gray-200">Register</button>
          </div>                    
      </div>
      <div>
          <hr className="border border-gray-200 w-[98%] mx-[1%]" />
      </div>
    </>
  )
}