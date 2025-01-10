import React from 'react'
import { Footer } from '../Components/Footer'
import { FooterLinks } from '../Components/FooterLinks'
import { IndividualContent } from '../Components/IndividualContent'
import ladyOnPhone from '../images/Calendly-individual-img2.webp'
import ladySmiling from '../images/Calendly-individual-img3.webp'
import individualBG from '../images/Calendly-price-bG.webp'
import ladyOnLaptop from '../images/Calendly-individual-img1.webp'

export const Individuals = () => {
  return (
    <div className="">
          <section id="genius">
        <div className="flex w-[70%] mx-[15%] mt-[2%]">
            <div className="w-[35%] flex flex-col my-[20px]">
                <h2 className="text-[50px] font-bold leading-[60px]">The genius way to work <span className="text-clifford">better</span></h2>       
                <p className="text-[16px] my-[20px] leading-9">Calendly makes it easy to work smarter when you're working solo. Meetings, sessions and appointments 
                    become more efficient ways to achieve success and accomplish goals.
                </p>
                <button className="px-4 py-1 bg-black text-white w-[34%] rounded-full text-[14px] hover:shadow-xl hover:bg-clifford active:opacity-70">Sign up for free</button>
            </div>
            <div className="relative w-[60%] px-[10%] mt-[2%]">
                <img src={ladyOnLaptop} alt="lady holding a laptop" className=""/>               
            </div>
        </div>
    </section>
    <section id="efficient">
      <IndividualContent subtitle='A curated calendar' title='Book up efficiently' description='When invitees select a meeting slot from your schedule, they only see the times you are available, and only the lenght and type of meetings you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.' image={ladyOnPhone} alt='lady typing on her phone' />
    </section>
    <section id="personalAssitant">
      <IndividualContent subtitle='Automated notifications and follow-ups' title='Work like you have personal assitant' description='Because Calendly automates administrative task like sending reminder, emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.' image={ladySmiling} alt='lady smiling' postion='flex-row-reverse' />
    </section>
    <section id="pricePlan" >
        <div className="relative my-[50px] mb-[150px]">
            <img src={individualBG} alt="" className="h-[400px] w-[100%] object-cover absolute"/>
            <p className="relative top-[65px] text-white text-[50px] left-[100px] w-[30%] flex flex-col">
                Find just-right plans for individuals and small teams
                <button className="px-4 py-1 bg-white text-black w-[34%] rounded-full text-[16px] my-[15px] relative hover:shadow-xl hover:text-white hover:bg-clifford active:opacity-80">See our plans</button>
            </p>            
        </div>
    </section>
      <FooterLinks />
      <Footer />
    </div>
  )
}
