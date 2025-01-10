import React, { useState } from 'react'
import { Footer } from '../Components/Footer'
import patternImage1 from '../images/Calendly-pattern-img1.webp'
import laptopImage from '../images/pngfind.com-laptop-png-603306.png'
import laptopScreen from '../images/laptop-screen-image.webp'
import dog from '../images/dog-img.jpg'
import compass from '../images/compass-logo-vector.svg'
import dropbox from '../images/dropbox-158-svgrepo-com.svg'
import ebay from '../images/ebay-svgrepo-com.svg'
import lazboy from '../images/La-Z-Boy-Incorporated_idYCZu6PAh_1.svg'
import twilio from '../images/twilio-svgrepo-com.svg'
import { Purpose } from '../Components/Purpose'


export const Home = () => {
  const [email, setEmail] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  


  return (
    <>
      <div className="flex w-[70%] mx-[15%] mt-[2%]">
        <div className="w-[30%] flex flex-col">
          <h2 className="text-[60px] font-bold">Easy scheduling <span className="text-clifford">ahead</span></h2>       
          <p className="text-[16px]">Calendly is your hub for scheduling professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.</p>
          <form onSubmit={handleSubmit} className="flex justify-between">
            <div className="mt-10 mb-2 rounded-2xl border flex shadow-sm focus:border-clifford ">
              <input value={email} onChange={handleEmail} type="email" placeholder="Enter your email" className="border-0 rounded-l-2xl outline-none h-[40px] px-5 hover:bg-clifford focus:bg-clifford text-white focus:-mr-[12px] hover:-mr-[12px] "/>
              <input type="button" name="eMail" id="email" value="Sign Up" className="text-[14px] bg-black text-white border-0 outline-none h-[40px] px-5 rounded-2xl z-10 active:opacity-70"/>   
            </div>
          </form>
          <p className="text-[12px] ml-2">Create your free account. No credit card required.</p>
        </div>
        <div className="relative w-[70%] px-[10%] mt-[3%]">
          <img src={patternImage1} alt="pattern" className="-z-10 absolute -top-[50px] -left-[20px]"/>
          <div>
            <img src={laptopImage} alt="laptop" className="relative z-20"/>
            <img src={laptopScreen} alt="" className="absolute left-[220px] top-[25px] h-[250px] w-[400px] z-10"/>
            <img src={dog} alt="laptop" className="relative h-[80px] w-[80px] z-30 rounded-full -top-[110px] left-[460px]"/>
          </div>
        </div>
      </div>

      <div class="bg-slate-50 w-[100%] h-[15%] my-[50px]">
        <div class="flex justify-center">
          <p class="w-[32%] text-[30px] text-center font-semibold mt-[20px]">Simplified scheduling for more than <span class="text-clifford text-[32px] font-bold">10,000,000 </span>users worldwide</p>
        </div>
        <div class="flex justify-center items-center ">
          <img src={compass} alt="compass logo" class="h-[150px]"/>
          <img src={dropbox} alt="compass logo" class="h-[40px] mx-[100px]"/>
          <img src={ebay} alt="compass logo" class="h-[80px] mr-[100px]"/>
          <img src={lazboy} alt="compass logo" class="h-[30px] mr-[100px]"/>
          <img src={twilio} alt="compass logo" class="h-[100px] mr-[100px]"/>
        </div>
      </div>
      <section id="purpose" class="flex justify-center">
        <div class="flex justify-center my-[50px] mx-[20%]">
          <Purpose number='1' title='Create simple rules' description="Let Calendly know your availability, preferences and it'll do the work for you." />
          <Purpose number='2' title='Share your link' description="Send guest your Calendly link or embed it on your website." />
          <Purpose number='3' title='Get booked' description="They pick a time and the event is added to your calendar." />
        </div>   
      </section>      
      <Footer />
    </>
  )
}
