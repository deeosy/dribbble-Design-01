
export function Nav({companyName, home, about, types }) {
  return(
    <>
      <div className="bg-red-400 flex justify-between px-8 h-[30px] items-center text-white ">
        <div className="">
          <a href="" className="hover:cursor-pointer  ">
            <h3 className="text-[22px] font-semibold ">{companyName}</h3>
          </a>
        </div>
        <div className="w-[24%]">
          <ul className="flex text-[18px] justify-between ">
            <a href="" className="hover:text-blue-400">
                <li>{home}</li>
            </a>
            <a href="" className="hover:text-blue-400">
              <li>{about}</li>
            </a>
            <a href="" className="hover:text-blue-400">
              <li>{types}</li>
            </a>              
          </ul>
        </div>
      </div>
    </>
  )
}
