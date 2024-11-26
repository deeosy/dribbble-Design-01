export function Navbar() {
  return (
    <>
    <div className="flex justify-around  text-[18px] bg-slate-300 h-[50px] items-center ">
      <h3 >Brand Name</h3>
      <div className="flex gap-4 ">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Pages</p>
      </div>
      <div className="flex gap-4 ">
        <button className="border px-3 py-1 rounded-md text-slate-400 bg-white "  >Login</button>
        <button className="border px-2 py-1 rounded-md text-slate-400 bg-white ">Sign Up</button>
      </div>
    </div>
    </>    
  )
}