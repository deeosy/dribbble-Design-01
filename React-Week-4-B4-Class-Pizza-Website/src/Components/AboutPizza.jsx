export function AboutPizza() {
  return (
    <div className="m-6 p-2 w-[80%] mx-auto ">
      <h2 className="text-[28px] text-center font-semibold  ">About Pizza</h2>
      <div className="flex justify-center items-center gap-3 my-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/500px-Pizza-3007395.jpg" alt="" className="h-[290px] w-[400px] object-cover" />
        <div className="">
          <p className="text-[18px] " >
            <b className="text-[20px] ">Pizza is Awesome! </b> Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.
          </p>
          <p className="text-[18px] ">
            The term pizza was first recorded in the year 997 AD, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania. Raffaele Esposito is often credited for creating the modern pizza in Naples. In 2009, Neapolitan pizza was registered with the European Union as a traditional speciality guaranteed dish. In 2017, the art of making Neapolitan pizza was included on UNESCO's list of intangible cultural heritage.
          </p>

        </div>

        
      </div>
    </div>
  )
}