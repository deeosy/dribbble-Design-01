import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { allPizza } from "./typesOfPizza";


 
export function PizzaTypes() {
  return (
    <div className="mx-10 m-6 ">
      <h2 className="text-[28px] text-center font-semibold ">Types Of Pizza</h2>
      <div className=" flex justify-around gap-3 my-6  ">
        {allPizza.map((pizza)=> (
          <Card className="max-w-[24rem] overflow-hidden w-[350px] " key={pizza.id} >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={pizza.image}
                alt="types of pizza" className="h-[250px] w-[350px] object-cover "
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                {pizza.title}
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 font-normal h-[250px] text-[16px]   ">
                {pizza.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
