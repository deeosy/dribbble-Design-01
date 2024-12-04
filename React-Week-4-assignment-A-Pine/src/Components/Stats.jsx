import blackAndWhitePattern from '../images/3881952.jpg'

export function Statistics() {
  return(
    <>
      <div className="relative my-[50px]">
        <div className="absolute flex w-[90%] mx-[5%] mb-[50px]"> 
            <img src={blackAndWhitePattern} alt="background" className="w-[10%] h-[70px] rounded-l-xl" />
            <div className="bg-black h-[70px] w-[80%] flex justify-between">
                <div className="flex flex-col p-2 w-[33%] justify-center items-center m-2">
                    <p className=" text-gray-400 text-[12px] text-center">FEATURES</p>
                    <p className=" text-white text-[30px] font-semibold text-center leading-8">+824K</p>
                </div>
                <div className="flex flex-col p-2 w-[33%] justify-center items-center m-2 border-gray-400 border-x-2 ">
                    <p className=" text-gray-400 text-[12px] text-center">CLIENTS</p>
                    <p className=" text-white text-[30px] font-semibold text-center leading-8">+102K</p>
                </div>
                <div className="flex flex-col p-2 w-[33%] justify-center items-center m-2">
                    <p className=" text-gray-400 text-[12px] text-center">STATS</p>
                    <p className=" text-white text-[30px] font-semibold text-center leading-8 ">+86K</p>
                </div>
            </div>
            <img src={blackAndWhitePattern} alt="background" className="w-[10%] h-[70px] rounded-r-xl" />
        </div>
      </div>
    </>
  )
}