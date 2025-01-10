import React from 'react'

export const IndividualContent = ({subtitle, title, description, image, alt, postion }) => {
  return (
    <div className={`flex w-[70%] mx-[15%] mt-[2%] ${postion}`}>
    <div className="relative w-[60%] px-[10%] mt-[2%]">
        <img src={image} alt={alt} className=""/>               
    </div>
    <div className="w-[35%] flex flex-col my-[20px]">
        <p className="uppercase text-[14px] text-textCSec">{subtitle}</p>
        <h2 className="text-[30px] font-bold ">{title}</h2>       
        <p className="text-[16px] my-[20px] leading-9">{description}
        </p>
    </div>        
</div>
  )
}
