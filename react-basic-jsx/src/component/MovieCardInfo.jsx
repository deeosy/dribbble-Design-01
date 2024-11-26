import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


export function MovieCardInfo({cardInfo}) {
  return (
    // <Card className="mt-6 w-96 bg-gray-600 group flex flex-col justify-between ">
    //   <CardHeader color="blue-gray" className="relative h-94 transition-all duration-300 group-hover:translate-y-[-10px] ">
    //     <img
    //       src={`${props.image}`}
    //       alt="card-image" className="h-[450px] w-[360px] object-cover "
    //     />
    //   </CardHeader>
    //   <CardBody>
    //     <Typography variant="h5" color="black" className="mb-2">
    //     {cardInfo[0].title}
    //     </Typography>
    //     <Typography color="black">
    //     {props.description}
    //     </Typography>
    //   </CardBody>
    //   <CardFooter className="pt-0">
    //     <Button className="bg-gray-500 ">Read More</Button>
    //   </CardFooter>
    // </Card>

    <div className="flex flex-col md:flex-row gap-2 justify-between p-[34px]">
      {cardInfo.map((nnn)=>{
        return(
          <div className="" key={nnn.id}>
             <Card className="mt-6 w-96 bg-gray-600 group flex flex-col justify-between ">
              <CardHeader color="blue-gray" className="relative h-94 transition-all duration-300 group-hover:translate-y-[-10px] ">
                <img
                  src={nnn.image}
                  alt="card-image" className="h-[450px] w-[360px] object-cover "
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="black" className="mb-2">
                {nnn.title}
                </Typography>
                <Typography color="black">
                {nnn.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="bg-gray-500 ">Read More</Button>
              </CardFooter>
            </Card>

          </div>
        )
      })}
    </div>
  );
}