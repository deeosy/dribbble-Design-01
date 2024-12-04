

export function ArticleCard ({image, title, description, date, readDuration}) {
  return(
    <div class="w-[35%]">
      <img src={image} alt="people learning" class="rounded-md" />                    
      <button class="text-[8px] font-bold bg-yellow-200 py-[2px] px-2 rounded-sm my-[10px]">{title}</button>
      <p class="text-[9px] font-bold">{description}</p>
      <hr class="border border-gray-200 w-[100%] my-[5px]" />
      <div class="flex">
        <p class="text-[6px] font-semibold mr-[8px]">{date}</p>
        <p class="text-[6px] font-semibold mr-[8px]">{readDuration}</p>
      </div>                    
    </div>
  )
}