import React from 'react'

export const FooterLinks = () => {
  return (
    <section id="aboutUs">
      <div className="w-[80%] mx-[10%] mt-[100px] mb-[50px] flex justify-between gap-5">
        <div className="w-[25%]">
          <h2 className="text-[30px] font-bold ">Easy <br/><span className="text-clifford">ahead</span></h2>
          <p className="text-[16px] my-[20px] leading-9 text-textCSec">We take the work out of connecting with others so you can accomplish more.</p>
          <div className="border px-5 py-1 rounded-md border-black w-[65%] flex items-center">                    
            <input list="languages" name="language" id="language" placeholder="English" className="font-semibold outline-none"/>
            <datalist id="languages">
              <option value="English"/>
              <option value="French"/>
              <option value="Spanish"/>                    
            </datalist>
          </div>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-[24px] font-bold mb-[10px]">About</h3>
          <p className="text-[16px] text-textCSec mb-[10px]">About Calendly</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Contact Sales</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Newsroom</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Careers</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Security</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold mb-[10px]">Solutions</h3>
          <p className="text-[16px] text-textCSec mb-[10px]">Customer Success</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Sales</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Recruiting</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Education</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Marketing</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[24px] font-bold mb-[10px]">Popular Features</h3>
          <p className="text-[16px] text-textCSec mb-[10px]">Embed Calendly</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Availability</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Sending Notification</p>
          <p className="text-[16px] text-textCSec mb-[10px]">Using Calendly Mobile</p>                
        </div>
      </div>
    </section>
  )
}
