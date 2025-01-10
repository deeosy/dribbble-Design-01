import React from 'react'
import { ServiceCard } from '../Components/ServiceCard'
import { Link } from 'react-router-dom'
import { services } from '../Components/servicesList'

export const Services = () => {


  return (
    <div className='md:w-[66%] md:h-[90vh] h-max place-self-center px-8 py-5 '>
      <h2 className='text-center text-2xl mb-6 text-white ' >Our Services</h2>
      <div className="md:grid md:w-[100%] md:h-[400px] flex flex-col gap-3  grid-cols-3 grid-rows-4 ">
        {services.map((service)=> {
          
          return <Link to={`/services/${service.id}`} key={service.id} className={`${service.style} `}>
            <ServiceCard service={service}  />

          </Link>
        })}



        {/* <div className="overflow-hidden h-[100%]  row-span-2 ">
          <ServiceCard services={services} name='Beautiful Website Design ' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='Increase efficiency and get noticed online with a modern responsive website.'  />
        </div> */}
        
        {/* <div className=" overflow-hidden h-[100%] ">
          <ServiceCard services={services} name='Domain Services' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div>
        <div className=" h-[100%] row-span-2">
          <ServiceCard services={services} name='Tech Support' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='Dont spend time fighting with technology, with us as your Virtual IT department, just contact us.' />
        </div>
        <div className=" h-[100%]">
          <ServiceCard services={services} name='Digital Marketing' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div>
        <div className=" h-[100px]">
          <ServiceCard services={services} name='Cybersecurity' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div>
        <div className=" h-[100px]">
          <ServiceCard services={services} name='IT Consultancy' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div>
        <div className=" h-[100%] row-span-2 ">
          <ServiceCard services={services} name='Managed IT & Cloud Services' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='Microsoft 365 Business & Google Workspace. We support your managed services. ' />
        </div>
        <div className=" h-[100px]">
          <ServiceCard services={services} name='Website Hosting + Care Plans' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div>
        <div className=" h-[100px]">
          <ServiceCard services={services} name='IP Telephony' bgImage='https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg' description='' />
        </div> */}

      </div>
    </div>
  )
}
