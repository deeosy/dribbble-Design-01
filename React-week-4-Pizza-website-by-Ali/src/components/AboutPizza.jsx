const AboutPizza = () => {
  return (
    <div className="flex justify-center gap-10 p-20">
      <div className="">
        <img
          src="https://images.pexels.com/photos/2323183/pexels-photo-2323183.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="h-[300px] w-[400px] "
        />
      </div>
      <div className="">
        <h1>About Pizza</h1>
        <p className="max-w-xl">
          Pizza is a beloved dish with origins in Italy, though it has become a
          global favorite with countless variations. At its core, a pizza
          consists of a round, flat dough base topped with a combination of
          sauce, cheese, and various ingredients such as meats, vegetables, and
          herbs.{" "}
        </p>
      </div>
    </div>
  );
};
export default AboutPizza;