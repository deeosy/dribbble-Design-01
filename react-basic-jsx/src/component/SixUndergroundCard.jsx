import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SixUndergroundCard() {
  return (
    <Card className="mt-6 w-96 bg-gray-600 group flex flex-col justify-between ">
      <CardHeader color="blue-gray" className="relative h-94 transition-all duration-300 group-hover:translate-y-[-10px] ">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4tDcgVkgqle-vlubHofJ5hnMPmPj3jbWM8C5xVI26lj93ytTP"
          alt="card-image" className="h-[450px] w-[360px] object-cover "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-2">
        6 Underground
        </Typography>
        <Typography color="black">
        It follows a group of people who fake their deaths and decide to form a vigilante team in order to stage a coup d'état against a ruthless dictator.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-gray-500 ">Read More</Button>
      </CardFooter>
    </Card>
  );
}