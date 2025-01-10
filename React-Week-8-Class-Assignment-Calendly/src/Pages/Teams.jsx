import React from 'react'
import { FooterLinks } from '../Components/FooterLinks'
import { Footer } from '../Components/Footer'
import teamsImage1 from '../images/Calendly-teams-img1.webp'
import teamsImage2 from '../images/Calendly-teams-img2.webp'
import teamsSalesImage from '../images/Calendly-teams-sales-img.webp'
import teamsRecruitImage from '../images/recruiting-pano_13570.jpg'
import teamsCustomersImage from '../images/Calendly-teams-customers-img.webp'
import teamsEducationImage from '../images/Calendly-teams-education-img.webp'
import { SolutionsCard } from '../Components/SolutionsCard'
import { ButtonMedium } from '../Components/ButtonMedium'



export const Teams = () => {
  const solutions = [{
    id: 1,
    image: teamsSalesImage,
    title: 'Sales',
    description: 'Gets to the best less faster',
    link: '',
  },{
    id: 2,
    image: teamsRecruitImage,
    title: 'Recruiting',
    description: 'Less emailing, more closing',
    link: '',
  },{
    id: 3,
    image: teamsCustomersImage,
    title: 'Customer Success',
    description: 'Connect with customers when it matters',
    link: '',
  },{
    id: 4,
    image: teamsEducationImage,
    title: 'Education',
    description: 'Boost students success',
    link: '',
  }
]

  return (
    <>
      <section id="powerUp">
        <div className="flex w-[70%] mx-[15%] mt-[2%]">
          <div className="w-[35%] flex flex-col my-[20px]">
            <h2 className="text-[50px] font-bold leading-[60px] text-deepBlue"><span className="text-clifford">Power up </span> your teams</h2>       
            <p className="text-[16px] my-[20px] leading-8">
              Calendly gives you control over your team scheduling with a standardized , scalable process.
              It's secure, easy to manage, and integrates with your team's favorite tools, so you can get everyone working as efficiently and effectively as possible.
            </p>
            <div className="flex">
              <ButtonMedium text='Start for free' bg='clifford' textColor='white' borderColor='clifford' rounded='full' py={3} px={6} />
              <ButtonMedium text='Contact Sales' rounded='full' textColor='black' hoverColor='white' borderColor='black' py={3} px={6} />
            </div>
          </div>
          <div className="relative w-[60%] px-[10%] mt-[2%]">
            <img src={teamsImage1} alt="lady holding a laptop" className="" />               
          </div>
        </div>
      </section>
      <section id="streamline">
        <div className="flex justify-center">
          <p className="w-[38%] text-[40px] text-center font-semibold my-[50px] leading-[60px] text-deepBlue">Streamline tasks, extend team reach</p>
        </div>
        <div className="flex w-[70%] mx-[15%] mt-[2%]">
          <div className="relative w-[60%] px-[10%] mt-[2%]">
            <img src={teamsImage2} alt="lady typing on her phone" className="" />               
          </div>
          <div className="w-[35%] flex flex-col my-[20px]">
            <p className="uppercase text-[14px] text-clifford">Automated Assignment</p>
            <h2 className="text-[30px] font-bold text-deepBlue">Control how your team gets booked</h2>       
            <p className="text-[16px] my-[20px] leading-8">
              With Calendly, you can offer sessions that are a few minutes or a few hours, for one invitee or a group. Automated round-robin, first-available, or geography-based assignments let you easily divvy up meetings in any way that works for your team members.
            </p>
          </div>        
        </div>
      </section>
      <section id="solution">
        <div className="flex justify-center">
            <p className="w-[38%] text-[14px] uppercase text-center  mt-[50px] text-clifford">Solutions</p>
        </div>
        <div className="flex justify-center">
            <p className="w-[50%] text-[30px] text-center font-semibold my-[15px] leading-[60px] text-deepBlue">The right Calendly for the work you do</p>
        </div>
        <div className="flex justify-center h-[300px] mx-[8%] gap-4 my-[20px]">
          {solutions.map((solution)=>{
            return <div className="border shadow-xl rounded-2xl w-[20%] hover:transition-all hover:duration-500 hover:-translate-y-2" key={solution.id} >
                <SolutionsCard solution={solution} />
              </div>
          })}
        </div>
      </section>
      <FooterLinks />
      <Footer />
    </>
  )
}
