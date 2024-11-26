import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault({image1, image2, image3}) {
  return (
    <div className="h-[80vh]   ">
      <Carousel className="rounded-b-xl   ">
        <img
          src={image1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={image3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}