import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function NowhereCard() {
  return (
    <Card className="mt-6 w-96 bg-gray-600  group flex flex-col justify-between">
      <CardHeader color="blue-gray" className="relative h-94 group-hover:translate-y-[-10px] transition-all duration-300">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRw1hlcjGT5cssPhwm5UH9lpiaYGUzsGrcuFdoDZZZPyaUxi6-_"
          alt="card-image" className="h-[450px] w-[360px] object-cover   "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-2">
        NOWHERE
        </Typography>
        <Typography color="black">
        Taking place in a dystopian setting, the plot follows Mia (Castillo), separated from her husband after a totalitarian government takes over their home country.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-gray-500 ">Read More</Button>
      </CardFooter>
    </Card>
  );
}