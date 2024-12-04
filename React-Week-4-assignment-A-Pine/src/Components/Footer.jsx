import yellowPineLogo from '../images/Yellow crown-svgrepo-com.svg'
import facebookLogo from '../images/facebook-svgrepo-com.svg'
import twitterLogo from '../images/twitter-154-svgrepo-com.svg'
import instagramLogo from '../images/instagram-svgrepo-com.svg'
import blackAndWhitePattern from '../images/3881952.jpg'

export function Footer() {
  return(
    <>
      <div class="mt-[15%] flex  ml-[1%]">
        <div class="bg-black w-[70%] pt-[8%] pl-[15%] flex">
          <div class="w-[60%]">
            <div class="flex items-center">
                <img src={yellowPineLogo} alt="Pine logo" class="h-[10px] mr-1" />
                <p class="text-[12px] text-white">Pine</p>
            </div>
            <p class="text-[7px] my-[10px] text-slate-50">Lorem Ipsum is simply a dummy text of the printing and Ipsum is industry.</p>
            <div class="flex  w-[50%] gap-1 mt-[20px]">
              <img src={facebookLogo} alt="" class="h-[18px] p-[2px] bg-yellow-200 rounded-sm" />
              <img src={instagramLogo} alt="" class="h-[18px] p-[2px] bg-yellow-200 rounded-sm" />
              <img src={twitterLogo} alt="" class="h-[18px] p-[2px] bg-yellow-200 rounded-sm" />
            </div>
          </div>
          <div class="flex flex-col items-center w-[40%]">
            <button class="box-border border border-gray-200 py-1 px-[9px] text-[8px] mb-[5px] text-gray-200 font-bold rounded-sm">Home</button>
            <button class="box-border border border-gray-200 py-1 px-[5px] text-[8px] mb-[5px] text-gray-200 font-bold rounded-sm">Features</button>
            <button class="box-border border border-gray-200 py-1 px-[8px] text-[8px] mb-[5px] text-gray-200 font-bold rounded-sm">Pricing</button>
            <button class="box-border border border-gray-200 py-1 px-[7px] text-[8px] text-gray-200 font-bold rounded-sm">Contact</button>
          </div>
        </div>
        <div class="w-[30%]"> 
            <img src={blackAndWhitePattern} alt="background" class="h-[165px]" />                
        </div>
      </div>
      <div class="bg-yellow-200 h-[2%] ml-[1%] flex items-center">                
        <p class="text-[7px] font-semibold ml-[60px]">Copyright @ Pine Theme- Powered by Flowbase</p>
      </div> 
    
    </>
  )
}