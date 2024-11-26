
export function Footer({year, companyName}) {
  return(
    <>
      <div className="bg-red-400 flex justify-center px-8 h-[30px] text-white ">
            <h3 className="text-[18px] text-center ">© {year} <a href="">{companyName}</a>, All Rights Reserved</h3>
      </div>
    </>
  )
}
