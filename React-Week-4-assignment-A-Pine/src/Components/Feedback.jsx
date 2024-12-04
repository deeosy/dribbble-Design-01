import seemlessPatten from '../images/lines seamless pattern_png.png'
import yellowStar from '../images/Yellow star-svgrepo-com.svg'
import headShot from '../images/headShot-YellowBG.jpg'

export function Feedback() {
  return(
    <>
      <img src={seemlessPatten} alt="pattern" class="absolute h-[180px] w-[140px] rounded-l-2xl ml-[12%] mt-[70px]" />
      <div class="grid grid-cols-2 grid-rows-2 gap-3 relative ml-[70px]">                
        <div class="bg-white rounded-md w-[170px] h-[140px]  py-3 px-2 -mt-[10px] ">
          <div class="flex ">
              <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
              <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
              <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
              <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
              <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
          </div>                  
          <p class="leading-4 text-[9px] mb-[10px]">Lorem ipsum has been the industry's standard dummy text even since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <hr class="border border-gray-200 w-[100%] my-[2px]" />
          <div class="flex mt-2">
              <img src={headShot} alt="profile pic" class="h-[30px] w-[30px] mr-[5%] rounded-full place-self-center" />                        
              <div class="flex flex-col">
                <p class="text-[12px] text-center font-bold">Guy Hawkins</p>
                <p class="text-[8px] ">Slack</p>
              </div>                     
          </div>                                               
        </div>
        <div class="bg-white rounded-md w-[170px] h-[180px] py-3 px-2 -mt-[10px] ">
          <div class="flex">
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
          </div>                  
          <p class="leading-4 text-[9px] mb-[10px]">Lorem ipsum has been the industry's standard dummy text even since the 1500s, 
              when an unknown printer took a galley of type and scrambled.
          </p>
          <hr class="border border-gray-200 w-[100%] my-[2px]" />
          <div class="flex mt-2">
            <img src={headShot} alt="profile pic" class="h-[30px] w-[30px] mr-[5%] rounded-full place-self-center " />                        
            <div class="flex flex-col">
              <p class="text-[12px] text-center font-bold">Dianne Russell</p>
              <p class="text-[8px] ">Discord</p>
            </div>                     
          </div>                                               
        </div>
        <div class="bg-white rounded-md w-[170px] h-[180px]  py-3 px-2 -mt-[40px] ">
          <div class="flex">
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
          </div>                  
          <p class="leading-4 text-[9px] mb-[10px]">Lorem ipsum has been the industry's standard dummy text even since the 1500s, 
              when an unknown printer took a galley of type and scrambled.
          </p>
          <hr class="border border-gray-200 w-[100%] my-[2px]" />
          <div class="flex mt-2">
              <img src={headShot} alt="profile pic" class="h-[30px] w-[30px] mr-[5%] rounded-full place-self-center " />                        
              <div class="flex flex-col">
                <p class="text-[12px] text-center font-bold">Marvin Kinney</p>
                <p class="text-[8px] ">Trello</p>
              </div>                     
          </div>                                               
        </div>
        <div class="bg-white rounded-md w-[170px] h-[180px]  py-3 px-2 ">
          <div class="flex">
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
            <img src={yellowStar} alt="star icon" class="h-[12px] my-3 mr-1" />
          </div>                  
          <p class="leading-4 text-[9px] mb-[10px]">Lorem ipsum has been the industry's standard dummy text even since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <hr class="border border-gray-200 w-[100%] my-[2px]" />
          <div class="flex mt-2">
            <img src={headShot} alt="profile pic" class="h-[30px] w-[30px] mr-[5%] rounded-full place-self-center " />                        
            <div class="flex flex-col">
              <p class="text-[12px] text-center font-bold">Theresa Webb</p>
              <p class="text-[8px] ">Mailchimp</p>
            </div>                     
          </div>                                               
        </div>
    </div>
    </>
  )
}