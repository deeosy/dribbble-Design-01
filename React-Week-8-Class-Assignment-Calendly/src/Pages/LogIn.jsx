import React, { useState } from 'react'
import blueBG from '../images/blue-background.png'
import cubes from '../images/cubes-svgrepo-com.svg'
import signInPackage from '../images/Calendly-singin-package-img.webp.png'
import checkCircle from '../images/check-circle-svgrepo-com.svg'
import polkaPattern from '../images/blue-polka-dot-pattern-login-img.jpg'

export const LogIn = () => {
  const [email, setEmail] = useState('')
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
  }

  return (
    <>
      <div className="flex justify-center items-center w-[80%] mx-[10%] h-[86vh] pt-[2%]">
        <div className="absolute self-start place-self-start w-[80%] h-[70%]">
          <img src={blueBG} alt="blue blue background" className="h-[300px] absolute"/>
        </div>
        <div className="w-[80%] flex items-center border h-[70%] rounded-2xl relative z-10 bg-white shadow-2xl ">
          <div className="w-[60%] py-5 px-6 z-10">
            <div className=" w-[100%] my-[30%] ">
              <div className="flex items-center">
                <img src={cubes} alt="logo" className="h-[40px] mr-[10px]"/>
                <h3 className="font-semibold text-[35px] text-clifford">Calendly</h3>	
              </div>	
              <div className="flex flex-col items-center my-[10%]">
                <h4 className=" text-[35px] text-black ">Log In</h4>
                <form onSubmit={handleSubmit} className="flex flex-col items-center mt-[5%] w-[80%]">
                  <input  onChange={handleEmail} value={email} type="email" name="emailAddress" required  placeholder="name@company.com" className="w-[100%] px-[20px] py-[5px] rounded-md border outline-none"/>
                  <input  type="submit" value="Log In" className="mt-[5%] cursor-pointer hover:bg-blue-500 bg-clifford w-[100%] text-white px-[20px] py-[5px] rounded-md "/>
                  <button></button>
                </form>
                <div className="flex w-[90%] ml-[10%] justify-between">
                  <a href="#" className=" flex mx-[] mt-[2%] ">
                    <h5 className=" text-[14px] text-clifford">Forgot Password?</h5>
                  </a>
                  <p className=" text-[14px] text-textCSec mx-[10%] mt-[2%]">
                    Don't have an account? 
                    <a href="" className="text-[14px] text-clifford "> Sign-Up</a>
                  </p>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[100%] flex flex-col items-center justify-center bg-[#f6f8f9] rounded-2xl">
            <img src={signInPackage} alt="" className="h-[150px] w-[180px] mb-4"/>
            <h4 className=" text-[22px] text-textCSec mb-4">Your plan includes</h4>
            <div className="flex text-checkBox items-center mb-3 ">
              <img src={checkCircle} alt="checkbox icon" className="h-[20px] mr-[10px]"/>
              <h5 className=" text-[18px] text-textCSec">Unlimited task and projects</h5>
            </div>
            <div className="flex text-checkBox items-center mb-2">
              <img src={checkCircle} alt="checkbox icon" className="h-[20px] mr-[10px]"/>
              <h5 className=" text-[18px] text-textCSec">Awesome time management</h5>
            </div>
            <div className="flex text-checkBox items-center mb-2">
              <img src={checkCircle} alt="checkbox icon" className="h-[20px] mr-[10px]"/>
              <h5 className=" text-[18px] text-textCSec">Expand Clientele</h5>
            </div>
            <div className="flex text-checkBox items-center mb-2">
              <img src={checkCircle} alt="checkbox icon" className="h-[20px] mr-[10px] hidden"/>
              <h5 className=" text-[18px] text-textCSec">Plus much more...</h5>
            </div>	
          </div>	
        </div>
        <div className="absolute flex w-[80%] place-content-end h-[70%]">
          <img src={polkaPattern} alt="" className="h-[300px] absolute self-end place-self-end"/>
        </div>
      </div>
    </>
  )
}
