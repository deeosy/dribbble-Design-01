import { useState } from "react"

export function Login() {
  
  const [userName, setUserName ] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  }

  const [userPassword, setUserPassword] = useState("")
  const inputPassword = (event) => {
    setUserPassword(event.target.value);
  }

  const clickSubmit = () => {
    event.preventDefault();
  }

  return(
    <div className="h-[93vh] w-[100vw] flex justify-center  ">
      <div className="h-[300px] w-[460px] bg-slate-300 place-self-center self-center rounded-md   ">
        <form onSubmit={clickSubmit} action="" className="flex flex-col gap-8 items-center justify-center h-[100%]  ">
          <input onChange={inputUserName} value={userName} type="text" className="border px-4 py-2 rounded-md text-[22px] outline-none "  placeholder="User Name"   />
          <input onChange={inputPassword} value={userPassword} type="password" className="border px-4 py-2 rounded-md text-[22px] outline-none "  placeholder="Password"  />
          <input type="submit" className="text-slate-400 px-4 py-2 bg-white rounded-md mt-[-10px] cursor-pointer "  />
        </form>
      </div>
    </div>
  )
}