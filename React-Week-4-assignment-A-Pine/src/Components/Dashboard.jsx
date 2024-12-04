import seemlessPatten from '../images/lines seamless pattern_png.png'
import menu from '../images/menu-svgrepo-com (1).svg'
import yellowDollar from '../images/Yellow dollar-svgrepo-com .svg'
import dropDown from '../images/drop-down-svgrepo-com.svg'
import graph2 from '../images/graph2.png'

export function Dashboard() {
  return(
    <>
      <div className="relative flex mt-[170px] w-[80%] mx-[10%]">
        <div className="w-[30%]">
            <h3 className="text-[30px] font-semibold leading-9">World class dashboard</h3>
            <p className="leading-6 text-[11px] mt-6 mb-[5px]">Lorem Ipsum is simply a dummy text of the printing and typesetting industry.</p>
            <button className="border border-black py-1 px-3 mt-3 text-[8px] font-bold rounded-sm">View All Features</button>
        </div>
        <div className=" p-2 flex">                        
          <img src={seemlessPatten} alt="pattern" className="absolute h-[210px] w-[290px] rounded-l-2xl ml-[100px]" />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 relative ml-[70px]">
            <div className="bg-white rounded-lg w-[170px] h-[90px] -mt-[20px] p-3">
              <div className="flex justify-between">
                  <p className="text-[12px] font-bold mb-[1%]">Total Revenue</p>                                    
                  <img src={menu} alt=".menu icon" className="h-[15px]" />                       
              </div>
              <hr className="border border-gray-200 w-[90%] mx-[5%] my-2px" />
              <div className="w-[90%] flex items-center text-[12px] mt-[5%]  py-1 rounded-md font-semibold">
                  <img src={yellowDollar} alt="add icon" className="h-[30px] rounded-full mr-1 p-2 bg-yellow-200" /> 
                  <p className=" text-[22px] font-semibold text-center leading-8 mb-[5%]">+86K</p>                            
              </div>                                
            </div>
            <div className="bg-white rounded-lg w-[170px] p-3 mt-[35px]">
              <div className="flex justify-between items-center">
                <p className="text-[12px] font-bold">Income & Expenses </p>                                    
                <img src={dropDown} alt=".menu icon" className="h-[10px]" />                       
              </div>
              <img src={graph2} alt="graph" className="h-[100px]" />
            </div>
            <div className="bg-white rounded-lg w-[170px] p-3 -mt-[100px] h-[150px]">
              <div className="flex justify-between items-center mb-[8%]">
                <p className="text-[12px] font-bold ">Balance</p>                                    
                <button className="bg-black text-white py-1 px-4 text-[10px] rounded-sm">Reserved</button>                      
              </div>
              <hr className="border border-gray-200 w-[100%] my-2px" />
              <div className="w-[90%] flex items-center text-[12px] mt-[3%] py-1 rounded-md font-semibold">
                <p className=" text-[15px] font-semibold text-center mb-[3%]">$60,124.00</p>                            
              </div>
              <hr className="border-[3px] border-gray-200 w-[50px] mb-[5%] rounded-full" />
              <div className="w-[100%] flex items-center text-[12px] mt-[13%] bg-yellow-200 py-1 px-2 rounded-sm font-semibold">
                <div className="h-[5px] w-[5px] rounded-full bg-black mr-[5px]">                                        
                </div>                                    
                <div className="flex justify-between items-center w-[100%] ">
                  <p className="text-[8px]">Pine</p>
                  <hr className="border-[3px] border-black w-[20%] h-[2%] rounded-full" />                                        
                </div>                             
              </div>
            </div>
          </div>           
        </div>
      </div>
    </>
  )
} 