import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HeartofStone() {
  return (
    <Card className="mt-6 w-96 bg-gray-600 group flex flex-col justify-between">
      <CardHeader color="blue-gray" className="relative h-94 transition-all duration-300 group-hover:translate-y-[-10px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWg5R2hxpsNpNieQuFoPUWV2Rzd6UW5Dnrm6wHJkCkw80loCr" className="h-[450px] w-[360px] object-cover "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-2">
        Heart of Stone
        </Typography>
        <Typography color="black">
        Heart of Stone is a 2023 American spy action thriller film where an intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="bg-gray-500">Read More</Button>
      </CardFooter>
    </Card>
  );
}