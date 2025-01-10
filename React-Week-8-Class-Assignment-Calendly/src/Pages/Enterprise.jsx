import React from 'react'
import { FooterLinks } from '../Components/FooterLinks'
import { Footer } from '../Components/Footer'
import { ButtonMedium } from '../Components/ButtonMedium'
import iceCubeBG from '../images/Calendly-enterprise-pattern-bG-img.webp'
import dropboxLogo from '../images/Dropbox_(service)-Logo.wine.svg'
import ebayLogo from '../images/white-ebay-svgrepo-com copy.svg'
import visaLogo from '../images/white-visa-svgrepo-com.svg'
import lyftLogo from '../images/lyft-svgrepo-com.svg'
import lOrealLogo from "../images/L'Oréal_id2K06KHh7_1.svg"
import { ServiceCard } from '../Components/ServiceCard'
import salesService from '../images/Calendly-enterprise-clipart-img1.png'
import customerService from '../images/Calendly-enterprise-clipart-img2.png'
import recruiting from '../images/Calendly-enterprise-clipart-img3.png'

export const Enterprise = () => {
  const services = [
    {title:'Sales', image:salesService, description: 'Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.'},
    {title:'Customer Success', image:customerService, description: 'Deliver better support interactions and customer consultations. Stay connected with automated reminders and follow-ups.'},
    {title:'Recruiting', image:recruiting, description: 'Fill your candidate pipeline and book more interviews and recruiter screens with easy, standardized scheduling.'},
  ]

  return (
    <div className="">
      <section id="wayMore">
        <div class="flex flex-col items-center w-[100%]">
            <p class="w-[20%] text-[40px] text-center font-bold mt-[150px] leading-[60px]"><span class="text-clifford">Way more</span> than a scheduling link</p>
            <p class="w-[30%] text-[24px] text-center mt-[50px] ">Standardized on the #1 scheduling platform and deliver the power of Calendly across your
                 entire organization.
            </p>
            <div className="my-[20px]">
              <ButtonMedium text='Contact Sales' px={2} py={3} rounded='full' bg='black' textColor='white' font='semibold' wid='32' /> 
            </div>
        </div>        
    </section>
    <section id="customerSuccess">
        <div class="relative my-[50px] h-[400px] saturate-50">
            <img src={iceCubeBG} alt="pattern image" class="h-[350px] w-[100%] object-none absolute"/>
            <div class="flex flex-col items-center justify-center relative h-[100%]">
                <p class="w-[32%] text-[30px] text-white text-center font-semibold">Trusted by more than 50,000 of the world's leading organizations</p>
                <div class="flex justify-center items-center">
                    <img src={dropboxLogo} alt="dropbox logo" class="h-[150px]"/>
                    <img src={ebayLogo} alt="ebay logo" class="h-[120px] mx-[100px]"/>
                    <img src={visaLogo} alt="visa logo" class="h-[80px] mr-[100px]"/>
                    <img src={lyftLogo} alt="lyft logo" class="h-[60px] mr-[100px]"/>
                    <img src={lOrealLogo} alt="L'Oreal logo" class="h-[30px] mr-[100px] w- "/>
                </div>
            </div>                     
        </div>
    </section>
    <section id="solution">
        <div class="flex justify-between h-[400px] mx-[15%] gap-[5%] ">
          {services.map((service)=>(<ServiceCard title={service.title} description={service.description} image={service.image} />))}
        </div>
        <div class="flex justify-center mt-[40px] ">
          <ButtonMedium text='Learn More' px={7} py={3} bg='black' textColor='white' wid='fit' rounded='full' font='semibold'  />
        </div>  
    </section>
      <FooterLinks />
      <Footer />
    </div>
  )
}
