import React from 'react'

export const ButtonMedium = ({ text, bg, textColor, borderColor, hoverColor, rounded, py, px, h, font, wid,  }) => {
  return (
    <button className={`px-${px} py-${py} ml-5 bg-${bg} text-${textColor} w-[34%] rounded-${rounded} text-[14px] border border-${borderColor} hover:text-${hoverColor} hover:shadow-xl hover:border-blue-500 hover:bg-blue-500  active:opacity-70 h-[${h}] w-${wid} font-${font} `}>{text}</button>
  )
}
