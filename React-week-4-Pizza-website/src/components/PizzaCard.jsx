const PizzaCard = ({ image, title, content }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="h-60 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default PizzaCard;