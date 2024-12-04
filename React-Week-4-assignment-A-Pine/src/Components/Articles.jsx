import { ArticleCard } from './ArticleCard'
import quillPen from '../images/quill-pen-fill-svgrepo-com.svg'
import storiesImage from '../images/people1.jpg'
import userExpImage from '../images/people2.jpg'
import dashboardImage from '../images/people3.jpg'

export function Articles() {
  return(
    <>
      <div class="my-[40px] flex flex-col items-center  w-[60%] mx-[20%]">
        <img src={quillPen} alt="quill icon" class="p-2 h-[40px] bg-yellow-200 rounded-full" />
        <h3 class="text-[24px] font-bold leading-8 text-center mt-4">Take a look at the latest articles from</h3>
      </div>
      <div class="flex justify-between translate-x-10 gap-4">
        <ArticleCard image={storiesImage} title="STORIES" description="The 3 Best Social Media Analytics Tools For Competitor Analysis" date="Octomber 05, 2021" readDuration="4 min read" />
        <ArticleCard image={userExpImage} title="USER EXPERIENCE" description="Beginning Javascript? Follow These Blogs" date="Octomber 05, 2021" readDuration="4 min read" />
        <ArticleCard image={dashboardImage} title="DASHBOARD" description="Those Your Email Messages Strategy Need A Reminder" date="Octomber 05, 2021" readDuration="4 min read" />
      </div>
      
    </>
  )
}