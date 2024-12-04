import headShot from '../images/headShot-YellowBG.jpg'
import circle from '../images/add-circle-svgrepo-com.svg'
import seemlessPatten from '../images/lines seamless pattern_png.png'
import smilingPerson from '../images/person-smiling.png'
import dollar from '../images/dollar-svgrepo-com.svg'
import graph1 from '../images/graph1.png'
import star from '../images/star-svgrepo-com.svg'
import checkBox from '../images/check-box-svgrepo-com.svg'

export function UserProfile() {
  return(
    <>
      <div className="flex h-[250px] w-[80%] mx-[10%] relative">
          <div className="h-[150px] flex flex-col w-[24%] bg-white rounded-lg relative top-[32%] z-30">
              <img src={headShot} alt="profile pic" className="h-[30px] w-[30px] mt-[10%] rounded-full place-self-center " />
              <p className="text-[12px] text-center my-[5%] font-bold">Cody Fisher</p>
              <hr className="border-[3px] border-gray-200 w-[80%] mx-[10%] mb-[5%] h-[2%] rounded-full" />
              <hr className="border-[3px] border-gray-200 w-[60%] mx-[20%] mb-[5%] rounded-full" />
              <p className="flex text-[12px] place-self-center mt-[5%] items-center bg-yellow-200 py-1 px-2 rounded-md font-semibold">
                    <img src={circle} alt="add icon" className="h-[20px] mr-1" /> 
                  Add to project
              </p>            
          </div>
          <div className="flex h-[200px] items-baseline w-[30%] relative -left-[10%]">
              <img src={seemlessPatten} alt="pattern" className="h-[200px] w-[270px] z-10 rounded-l-xl relative left-[2%]" />
              <img src={smilingPerson} alt="person smiling" className="h-[250px] z-20 relative -left-[85%]" />
              
          </div>
          <div className="relative top-[21%] -left-[6%] w-[33%]">
              <div className="flex items-center">
                  <img src={seemlessPatten} alt="pattern" className=" h-[55%] w-[100%] z-10" />
                  <div className="h-[200px] flex flex-col w-[150px] bg-white rounded-lg relative right-[90%] top-[7%] z-40 p-2">
                      <p className="text-[12px] font-bold mb-[5%]">Payment Plans</p>
                      <hr className="border-[3px] border-gray-200 w-[120px] mb-[5%] h-[2%] rounded-full" />
                      <hr className="border-[3px] border-gray-200 w-[50px] mb-[5%] rounded-full" />
                      <div className="w-[100%] flex items-center text-[12px] h-[40px] mt-[5%] bg-yellow-200 py-1 px-2 rounded-md font-semibold">
                          <img src={dollar} alt="add icon" className="h-[20px] mr-1 p-1 bg-white" /> 
                          <div className="flex flex-col w-[75%]">
                              <hr className="border-[3px] border-black w-[90%] mb-[5%] h-[2%] rounded-full" />
                              <hr className="border-[3px] border-black w-[50%] mb-[5%] rounded-full" />
                          </div>
                                                    
                      </div>
                      <img src={graph1} alt="graph" className="mt-[20px] h-[70px] " /> 
                  </div>        
              </div>
          </div>
          <div className="h-[150px] w-[40%] bg-slate-50 rounded-lg py-3 relative top-[28%] -left-[3%]">
              <img src={star} alt="star icon" className="h-[20px] mr-1 p-[4px] bg-yellow-200" />
              <p className="leading-6 text-[12px] mt-2">Pine is constantly improving to move forward through dashboards, statistics, data and verify
                  and superior human resources.
              </p>
          </div>
      </div>
      <div className="flex w-[68%] mx-[16%] my-[1%] items-center">
          <img src={checkBox} alt="checkbox" className="h-[15px] mr-2" />
          <p className="text-[10px] font-semibold">Pine is constantly improving</p>
      </div>
    </>
  )
}