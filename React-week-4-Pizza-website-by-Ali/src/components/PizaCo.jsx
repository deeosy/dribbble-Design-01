const PizaCo = () => {
  return (
    <div className="carousel w-full h-[400px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=400"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
export default PizaCo;